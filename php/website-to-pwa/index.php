<?php
// Install PWA page (test) v.1.3.3
// Run script only on localhost, not made for public.
// For an already-generated static site in a folder on localhost. The PWA will include all the files in the folder.
// Be careful! The script creates files: manifest.webmanifest, sw.js.
// This is an example of an application installation page that should be converted to a static page (HTML)

include './websiteToPWA.php';
//include $d.'/other-projects/PHP-fuWebsiteToPWA/PHP-fuWebsiteToPWA.php';

$PWAVersion = 'v.1.1.';
/*$dirForScan = "";
$AppName = "";
*/

include_once $_SERVER["DOCUMENT_ROOT"].'/top.php';
echo $install = websiteToPWA($dirForScan, $AppName, $PWAVersion);
include_once $_SERVER["DOCUMENT_ROOT"].'/bottom.php';

?>
