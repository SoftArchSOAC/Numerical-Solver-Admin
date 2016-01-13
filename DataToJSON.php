<?php

require_once './include/db.php';

function getResponse($query) {
    $result = mysql_query($query);
    $response = array();

    if (mysql_num_rows($result) > 1) {
        while ($row = mysql_fetch_assoc($result)) {
            array_push($response, $row);
        }
    } else if (mysql_num_rows($result) == 1) {
        array_push($response, mysql_fetch_assoc($result));
    }

    return $response;
}

if (filter_input(INPUT_SERVER, "REQUEST_METHOD") == "GET") {
    $response = array();

    $table_name = trim(stripslashes(htmlspecialchars(filter_input(INPUT_GET, "table_name"))));
    $linker = trim(stripslashes(htmlspecialchars(filter_input(INPUT_GET, "linker"))));
    $link = trim(stripslashes(htmlspecialchars(filter_input(INPUT_GET, "link"))));

    if ($table_name == "ALL" && $linker == "app_id" && $link > 0) {
        $app_id = $link;

        $response['chapters'] = array();
        $response['chapters'] = getResponse(
                'select * from chapters where app_id = ' . $app_id
        );

        $response['topics'] = array();
        $response['topics'] = getResponse(
                'select * from topics where chapter_id IN (
                    select id from chapters where app_id = ' . $app_id . '
                )'
        );

        $response['numericals'] = array();
        $response['numericals'] = getResponse(
                'select * from numericals where topic_id IN (
                    select id from topics where chapter_id IN (
                        select id from chapters where app_id = ' . $app_id . '
                    )
                )'
        );

        $response['formulas'] = array();
        $response['formulas'] = getResponse(
                'select * from formulas where numerical_id IN (
                    select id from numericals where topic_id IN (
                        select id from topics where chapter_id IN (
                            select id from chapters where app_id = ' . $app_id . '
                        )
                    )
                )'
        );

        $response['parameters'] = array();
        $response['parameters'] = getResponse(
                'select * from parameters where chapter_id IN (
                    select id from chapters where app_id = ' . $app_id . '
                )'
        );

        $response['units'] = array();
        $response['units'] = getResponse(
                'select * from units where chapter_id IN (
                    select id from chapters where app_id = ' . $app_id . '
                )'
        );
    } else {
        $response = getResponse("SELECT * FROM $table_name WHERE $linker = '$link'");
    }
    echo json_encode($response);
}