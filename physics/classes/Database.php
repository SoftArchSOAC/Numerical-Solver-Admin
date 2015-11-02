<?php

class Database {

    private $db_connection;
    public $table; // Table name
    public $db_key = array(); // Table fields Array
    public $data_key = array(); // Data for table keys
    public $data_fetch = array(); // Data from table keys
    public $extra_param = ''; // Extra parameter
    public $return_field = NULL; // Return field
    public $search = NULL; // Search text
    public $search_column = NULL;
    public $field_list = "*";
    public $num_rows = 0;
    public $last_error = '';
//		public $feedback=NULL;
    public $insertid = NULL;
    public $filename = NULL;
    public $line_no = NULL;

    public function __construct() {
        $this->db_connection = mysql_connect(HOST, DBU, DBPASS) or die("Connection could not established...");
        mysql_select_db(DB, $this->db_connection) or die("Database Could Not be Opened!");
    }

    // Use this Set____ functions to set the class variables if the publiciables are not public
    public function SetTable($tablename) {
        $this->table = $tablename;
    }

    public function SetDbkey($dbkey) {
        $this->db_key = $dbkey;
    }

    public function SetDatakey($datakey) {
        $this->data_key = $datakey;
    }

    public function SetExtraparam($param) {
        $this->extra_param = $param;
    }

    public function SetReturnfield($returnfield) {
        $this->return_field = $returnfield;
    }

    public function SetSearchtext($searchtext) {
        $this->search = $searchtext;
    }

    private function PutCleanData() {
        $max = count($this->data_key);
        for ($i = 0; $i < $max; $i++) {
            $str = $this->data_key[$i];
            $this->data_key[$i] = '"' . addslashes($str) . '"';
        }
    }

    private function GetCleanData() {
        $max = count($this->data_fetch);
        $arr_key = array_keys($this->data_fetch);
        for ($i = 0; $i < $max; $i++) {
            $this->data_fetch[$arr_key[$i]] = stripslashes($this->data_fetch[$arr_key[$i]]);
        }
    }

    // General Function to insert record 
    public function insert_record() {//$table,$db_key,$datas
        $this->PutCleanData();
        $key_sql = ' (';
        $val_sql = ' VALUES(';
        $key_sql.= implode(",", $this->db_key);
        $val_sql.= implode(",", $this->data_key);

        $key_sql.=" )";
        $val_sql.=" )";
        $sql = " INSERT INTO " . $this->table . " $key_sql $val_sql ";
        //echo "<br>==INS>".$sql;
        //echo stripslashes($sql);
        //exit;
        $this->insertid = NULL;
        $this->RunSql($sql);
        $this->insertid = mysql_insert_id();
        return $this->insertid;
    }

    // General Function to update Database recored
    public function update_record() {//$table,$db_key,$datas,$param=''
        $this->PutCleanData();
        $max = count($this->db_key);
        $sql = "UPDATE " . $this->table . " SET ";
        for ($i = 0; $i < $max; $i++) {
            $sql.=$this->db_key[$i] . "=" . $this->data_key[$i];
            if ($i < $max - 1)
                $sql.=",";
        }
        $sql.=$this->extra_param;
//        echo "<br />==>" . $sql;
        //exit;
        $cnt = 0;
        $this->RunSql($sql);
        return 1;
    }

    //General function to delete record
    public function delete_record() {//$table,$param
        $sql = "DELETE FROM " . $this->table . " WHERE " . $this->search_column . "='" . $this->search . "' " . $this->extra_param;
//        echo "<br/>del_rec: " . $sql;
        $this->RunSql($sql);
        if ($this->num_rows > 0)
            return 1;
        else
            return 0;
    }

    // General function to find single recrod and single field  if found else return false
    public function SearchRecord() {//$table,$column,$val,$param='1',$rfield=""
        $sql = "SELECT $this->field_list FROM $this->table WHERE $this->search_column='$this->search' $this->extra_param";
        $tab = $this->RunSql($sql);
        if ($this->num_rows) {
            $rs = mysql_fetch_assoc($tab);
            if ($this->return_field) {
                $returnval = $rs[$this->return_field];
                mysql_free_result($tab);
                return $returnval;
            } else {
                mysql_free_result($tab);
                return true;
            }
        } else
            return false;
    }

    public function DataArray() {
        //$table,$column,$val,$param=1
        $sql = "SELECT $this->field_list FROM $this->table WHERE $this->search_column='$this->search' $this->extra_param ";
//        echo (" <br><br><br>==DA>$sql");
        $tab = $this->RunSql($sql);
        if ($this->num_rows) {
            $this->data_fetch = mysql_fetch_assoc($tab);
            $this->GetCleanData();
            return $this->data_fetch;
        }
        return false;
    }

    // Search table and return all Fields if found else return false  
    public function FetchSingleRow() {
        //$table,$column,$val,$param=1
        $sql = "SELECT $this->field_list FROM $this->table $this->extra_param ";
//        echo (" <br><br><br>==DA>$sql");
        $tab = $this->RunSql($sql);
        if ($this->num_rows) {
            $this->data_fetch = mysql_fetch_assoc($tab);
            $this->GetCleanData();
            return $this->data_fetch;
        }
        return false;
    }

    public function FetchData($type = 2) {
        $sql = "SELECT $this->field_list FROM $this->table $this->extra_param";
//        echo "<br>==FD>$sql";
        $data = array();
        $tab = $this->RunSql($sql);
        if ($this->num_rows) {
            $k = 0;
            while ($rw = @mysql_fetch_array($tab, $type)) {
                $data[] = $rw;
            }
            //print_r($this->);
        }
        return $data;
    }

    public function RunSql($sql_to_run) {
//			$sql_to_run=mysql_real_escape_string($sql_to_run);
        $this->last_error = NULL;
        if ($tab = mysql_query($sql_to_run) or $this->ErrorLog($sql_to_run)) {
            $this->num_rows = mysql_affected_rows();
            //echo "<br>";
            if ($this->num_rows > 0)
                return $tab;
            else {
                $this->num_rows = 0;
                return false;
            }
        } else
            $this->last_error = mysql_error();
    }

    public function dbcombo($default = '', $val = '', $text = '') {
        $sql = "SELECT " . $this->field_list . " FROM " . $this->table . $this->extra_param;
        $tab = $this->RunSql($sql);
        if (!$this->num_rows)
            return '';
        $cmbval = '';
        while ($rs = mysql_fetch_array($tab)) {
            $cmbval.="<option ";
            if ($rs[$val] == $default && $default != '')
                $cmbval.= " selected='selected' ";
            $cmbval.="value='" . $rs[$val] . "'>$rs[$text]";

            $cmbval.="</option>";
        }
        mysql_free_result($tab);
        //			echo "$cmbval";
        return $cmbval;
    }

    public function dbcombo2($default = '') {
        $sql = "SELECT " . $this->field_list . " FROM " . $this->table . $this->extra_param;
        $tab = $this->RunSql($sql);
        if (!$this->num_rows)
            return '';
        $cmbval = '';
        while ($rs = mysql_fetch_array($tab)) {
            $cmbval.="<option ";
            if ($rs[0] == $default && $default != '')
                $cmbval.= " selected ";
            $cmbval.="value=$rs[0]>$rs[0]";

            if (count($rs) > 2)
                $cmbval.=" $rs[2]";
            $cmbval.="</option>";
        }
        mysql_free_result($tab);
        //			echo "$cmbval";
        return $cmbval;
    }

    public function db_fetch_array($db_query) {
        return mysql_fetch_array($db_query, MYSQL_ASSOC);
    }

    public function ErrorLog($query) {
        $todey = date("d-m-y h:m:s");
        $file_msg = "
			Date : $todey
			File : " . $this->filename . "
			line_no : " . $this->line_no . "
			USER IP : " . $_SERVER['REMOTE_ADDR'] . "
			Error : " . mysql_error() . "
			Query : $query
			------------------------------------------------------------";
        $fp = fopen(ROOT . "mysql_error/error_doc.txt", "a");
        fwrite($fp, $file_msg);
        fclose($fp);
    }

//    public function getUserByNameAndPassword($username, $password) {
//
//        $result = mysql_query("SELECT * FROM users WHERE userName = '$username' AND userPassword = md5('$password')") or die(mysql_error());
//        $no_of_rows = mysql_num_rows($result);
//
//        if ($no_of_rows > 0) {
//
//            return true;
//        } else {
//            // user not found
//            return false;
//        }
//    }
//
//    public function changePassword($username, $oldPassword, $newPassword, $confirmPassword) {
//
//        $result = mysql_query("SELECT * FROM users WHERE userId=1 AND userName = '$username' AND userPassword = md5('$oldPassword')") or die(mysql_error());
//        $no_of_rows = mysql_num_rows($result);
//
//        if ($no_of_rows > 0) {
//            mysql_query("UPDATE users SET userPassword = md5('$newPassword') where userName='$username' AND userId=8 ");
//            return true;
//        } else {
//            // user not found
//            return false;
//        }
//    }
}

?>