<?php
// Install PWA page (test) v.1.3.2
// Run script only on localhost, not made for public.
// For an already-generated static site in a folder on localhost. The PWA will include all the files in the folder.
// Be careful! The script creates files: manifest.webmanifest, sw.js.



if(php_uname('s') == 'Windows NT'){
$dirname = explode("\\", getcwd());
$dirname = $dirname[count(explode('\\', getcwd()))-1];
$d = $_SERVER["DOCUMENT_ROOT"].'/';
}else{
$dirname = explode("/", getcwd());
$dirname = $dirname[count(explode("/", getcwd()))-1];
$d = $_SERVER["DOCUMENT_ROOT"].'/';
}


include './php-fuWebsiteToPWA.php';
//include $d.'/other-projects/PHP-fuWebsiteToPWA/PHP-fuWebsiteToPWA.php';

$PWAVersion = 'v.1.1.';

include_once $d.'top.php';
echo $install = fuWebsiteToPWA($confDirGitRepo, $AppName, $PWAVersion); // app name
include_once $d.'bottom.php';

?>
