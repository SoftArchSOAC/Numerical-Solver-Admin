<?PHP

if (stripos($_SERVER["PHP_SELF"], "/config.php") > 0)
    die("Restricted access");

define("HOST", "localhost");
define("DBU", "root");
define("DBPASS", "");
define("DB", "nsadb");

$requestedFile = explode("/", $_SERVER['PHP_SELF']);
$reqFile = '/' . end($requestedFile);

$base = substr($_SERVER['PHP_SELF'], 0, -strlen($reqFile));
$fullbase = 'http://' . $_SERVER['HTTP_HOST'] . $base;

$root = $_SERVER['DOCUMENT_ROOT'] . $base . '/';
define('ROOT', $root);
define('BASE', $base);
define('FULLBASE', $fullbase . '/');
define('DEBUG', false);
define("CURRENT_PAGE", end($requestedFile));
$today = time();

$reqFileNoSlash = end($requestedFile);

include_once ROOT . 'classes/Database.php';
require_once ROOT . 'include/db.php';
include_once ROOT . 'classes/classNSA.php';

$db = new Database();
$clsNsa = new NSA();

if (!is_dir(ROOT . 'mysql_error/')) {
    mkdir(ROOT . 'mysql_error/', 0700);
}

$site = "../";
?>