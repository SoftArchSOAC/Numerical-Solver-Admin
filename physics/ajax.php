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
}
?>