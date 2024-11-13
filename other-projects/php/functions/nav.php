<?PHP
// v.1.0.0

/*$navArr = array(
//"{$confLocalPatchOffline}pages-list.$ext" => "Pages",
"./pages/" => "Pages",
"./projcets/" => "Projects",
);
echo nav($navArr, "pages", "");*/

function nav($navArr, $navCurrentPage, $ext){

$navMenu = "";

$navCurrentPage2 = basename($_SERVER["SCRIPT_FILENAME"], '.php');
if ($navCurrentPage2 == "index"){
if (php_uname('s') == 'Windows NT'){
$dirname = explode("\\", getcwd());
$dirname = $dirname[count(explode('\\', getcwd()))-1];
//$d = $_SERVER["DOCUMENT_ROOT"].'/';
} else {
$dirname = explode("/", getcwd());
$dirname = $dirname[count(explode("/", getcwd()))-1];
}
$navCurrentPage2 = $dirname;
}

//if (empty($navCurrentPage)){ $navCurrentPage = $navCurrentPage2; }

foreach ($navArr as $v => $key){
if (count(explode($navCurrentPage, $v)) >= 2||count(explode($navCurrentPage2, $v)) >= 2){
$navMenu .= <<<EOF
<a class="countMenuItem active2 inlineBlock padding itemLinkAniActive" href="$v">$key</a>

EOF;
} else {
$navMenu .= <<<EOF
<a class="countMenuItem inlineBlock padding brand itemLinkAni" href="$v">$key</a>

EOF;
}
//echo $v."<hr>";
}

return $navMenu;
}

?>
