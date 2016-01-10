<?php

require_once './include/db.php';

if (filter_input(INPUT_SERVER, "REQUEST_METHOD") == "GET") {
    $db = new Database();
    $response = array();
    $table_name = trim(stripslashes(htmlspecialchars(filter_input(INPUT_GET, "table_name"))));
    $linker = trim(stripslashes(htmlspecialchars(filter_input(INPUT_GET, "linker"))));
    $link = trim(stripslashes(htmlspecialchars(filter_input(INPUT_GET, "link"))));
    $query = "SELECT * FROM $table_name WHERE $linker = '$link'";
    $result = mysql_query($query);
    if (mysql_num_rows($result) > 1) {
        while ($row = mysql_fetch_assoc($result)) {
            array_push($response, $row);
        }
    } else if (mysql_num_rows($result) == 1) {
        $response = mysql_fetch_object($result);
    }
    echo json_encode($response);
}