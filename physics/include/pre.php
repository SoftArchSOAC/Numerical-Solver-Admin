<?PHP 

if (stripos($_SERVER["PHP_SELF"], "/pre.php") > 0)
    die("Restricted access");

require_once 'include/config.php';

$chapters = $clsNsa->getChapters();

?>