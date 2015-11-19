<?PHP

include_once 'include/config.php';

$action = $_POST['action'];

if ($action == "add_chapter") {
    $chapter_name = $_POST['name'];
    $FIELDS = array("name", "app_id");
    $VALUES = array($chapter_name, 3);
    $status = $clsNsa->addChapter($FIELDS, $VALUES);
    echo json_encode($status);
} else if ($action == "delete_chapter") {
    $chapter_id = $_POST['chapter_id'];
    $status = $clsNsa->deleteChapter($chapter_id);
    echo json_encode($status);
} else if ($action == "add_topic") {
    $topic_name = $_POST['name'];
    $chapter_id = $_POST['chapter_id'];
    $FIELDS = array("name", "chapter_id");
    $VALUES = array($topic_name, $chapter_id);
    $status = $clsNsa->addTopic($FIELDS, $VALUES);
    echo json_encode($status);
} else if ($action == "delete_topic") {
    $topic_id = $_POST['topic_id'];
    $status = $clsNsa->deleteTopic($topic_id);
    echo json_encode($status);
} else if ($action == "fetch_topics") {
    $chapter_id = $_POST['chapter_id'];
    $topics = $clsNsa->getTopicsOfChapter($chapter_id);
    echo json_encode($topics);
} else if ($action == "add_numerical") {
    $num_identifier = $_POST['identifier'];
    $topic_id = $_POST['topic_id'];
    $FIELDS = array("identifier", "topic_id");
    $VALUES = array($num_identifier, $topic_id);
    $status = $clsNsa->addNumerical($FIELDS, $VALUES);
    echo json_encode($status);
} else if ($action == "get_topic_env") {
    $topic_id = $_POST['topic_id'];
    $numericals = $clsNsa->getTopicEnv($topic_id);
    echo json_encode($numericals);
} else if ($action == "add_statement") {
    $numerical_statement = $_POST['num_statement'];
    $numerical_id = $_POST['numerical_id'];
    $status = $clsNsa->updateStatement(array('statement'), array($numerical_statement), $numerical_id);
    echo json_encode($status);
} else if ($action == "add_formula_string") {
    $formula_string = $_POST['formula_string'];
    $numerical_id = $_POST['numerical_id'];

    $formula_id = $clsNsa->checkFormulaExists($numerical_id);
    if ($formula_id == 0) {
        $status = $clsNsa->addFormulaString(array('string', 'numerical_id'), array($formula_string, $numerical_id));
    } else {
        $status = $clsNsa->updateFormulaString(array('string', 'numerical_id'), array($formula_string, $numerical_id), $formula_id);
    }
    echo json_encode($status);
} else if ($action == "add_param") {
    $param_name = $_POST['param_name'];
    $param_symbol = $_POST['param_symbol'];
    $param_value = $_POST['param_value'];
    $param_default_value = $_POST['param_default_value'];
    $chapter_id = $_POST['chapter_id'];
    $update_id = $_POST['update_id'];

    $FIELDS = array('name', 'symbol', 'value', 'default_value', 'chapter_id');
    $VALUES = array($param_name, $param_symbol, $param_value, $param_default_value, $chapter_id);

    if ($update_id <= 0) {
        $status = $clsNsa->addParam($FIELDS, $VALUES);
    } else {
        $status = $clsNsa->updateParam($FIELDS, $VALUES, $update_id);
    }
    echo json_encode($status);
} else if ($action == "fetch_params") {
    $chapter_id = $_POST['chapter_id'];
    $params = $clsNsa->getParams($chapter_id);
    echo json_encode($params);
} else if ($action == "delete_param") {
    $param_id = $_POST['param_id'];
    $status = $clsNsa->deleteParam($param_id);
    echo json_encode($status);
} else if ($action == "add_unit") {
    $unit_name = $_POST['unit_name'];
    $unit_symbol = $_POST['unit_symbol'];
    $unit_multiplier = $_POST['unit_multiplier'];

    $chapter_id = $_POST['chapter_id'];
    $update_id = $_POST['update_id'];

    $FIELDS = array('name', 'symbol', 'standard_multiplier', 'chapter_id');
    $VALUES = array($unit_name, $unit_symbol, $unit_multiplier, $chapter_id);

    if ($update_id <= 0) {
        $status = $clsNsa->addUnit($FIELDS, $VALUES);
    } else {
        $status = $clsNsa->updateUnit($FIELDS, $VALUES, $update_id);
    }

    echo json_encode($status);
} else if ($action == "delete_unit") {
    $unit_id = $_POST['unit_id'];
    $status = $clsNsa->deleteUnit($unit_id);
    echo json_encode($status);
} else if ($action == "fetch_units") {
    $chapter_id = $_POST['chapter_id'];
    $units = $clsNsa->getUnits($chapter_id);
    echo json_encode($units);
}
?>

















