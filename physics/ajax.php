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
}
?>