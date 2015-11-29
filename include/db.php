<?PHP

if (stripos($_SERVER["PHP_SELF"], "/db.php") > 0)
    die("Restricted access");

include_once dirname(__FILE__) . '/config.php';

function getRow($TABLE, $FIELDS, $SEARCH_COLUMN, $SEARCH_VALUE, $EXTRA_PARAM = "") {
    $db = new database();
    $db->table = $TABLE;
    $db->field_list = $FIELDS;
    $db->search_column = $SEARCH_COLUMN;
    $db->search = "$SEARCH_VALUE";
    $db->extra_param = $EXTRA_PARAM;
    $row = $db->DataArray();
    return $row;
}

function insertRecord($TABLE, $FIELDS, $VALUES) {
    $db = new database();
    $db->table = $TABLE;
    $db->db_key = $FIELDS;
    $db->data_key = $VALUES;
    $id = $db->insert_record();
    return $id;
}

function updateRecord($TABLE, $FIELDS, $VALUES, $WHERE) {
    $db = new database();
    $db->table = $TABLE;
    $db->db_key = $FIELDS;
    $db->data_key = $VALUES;
    $db->extra_param = $WHERE;
    $status = $db->update_record();
    return $status;
}

function deleteRecord($TABLE, $FIELDS, $PARAM) {
    $db = new database();
    $db->table = $TABLE;
    $db->search_column = $FIELDS;
    $db->search = $PARAM;
    $db->extra_param = ' ';
    $status = $db->delete_record();
    return $status;
}

function getColumn($TABLE, $FIELDS, $WHERE = "") {
    $db = new database();
    $db->table = $TABLE;
    $db->field_list = $FIELDS;
    $db->extra_param = $WHERE;
    $getColumn = $db->FetchData(1);
    return $getColumn;
}

function getOneColumnOnly($TABLE, $FIELDNAME, $VALUE, $WHERE = "") {
    $db = new database();
    $db->table = $TABLE;
    $db->search_column = $FIELDNAME;
    $db->search = "$VALUE";
    $db->extra_param = $WHERE;
    $data = $db->DataArray();
    return $data;
}

function getSingleRow($TABLE, $FIELDS, $WHERE = "") {
    $db = new database();
    $db->table = $TABLE;
    $db->field_list = $FIELDS;
    $db->extra_param = $WHERE;
    $getColumn = $db->FetchSingleRow();
    return $getColumn;
}

function countBlankValues($arr) {
    $countBlank = 0;
    foreach ($arr as $value) {
        if ($value == "") {
            $countBlank++;
        }
    }
    return $countBlank;
}

function cleanstring($string) {
    $string = str_replace(' ', '-', $string); // Replaces all spaces with hyphens.
    return preg_replace('/[^A-Za-z0-9\-]/', '', $string); // Removes special chars.
}


?>