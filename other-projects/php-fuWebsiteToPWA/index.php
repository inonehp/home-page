<?php
// v.1.3.1
// Run script only on localhost, not made for public.
// For an already-generated static site in a folder on localhost. The PWA will include all the files in the folder.
// Be careful! The script creates 3 files: install.html, manifest.webmanifest, sw.js.




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

include $d.'config.php';
include $d.'config2.php';
$PWAVersion = 'v.1.1.'.$CONF_VERSION;

include_once $d.'top.php';
echo $install = fuWebsiteToPWA($confDirGitRepo, $username, $PWAVersion); //username - app name
include_once $d.'bottom.php';

?>
