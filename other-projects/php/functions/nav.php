<?PHP
// v.1.0.0

/*
$navArr = array(
array("url" => "/pages/", "text" => "Pages", "title" => "title"),
array("url" => "/pages/#2", "text" => "Pages 2", "title" => "title 2"),
);
echo nav($navArr, "", "");
*/

function nav($navArr, $navCurrentPage, $ext){


$navMenu = "";

$navCurrentPage2 = " ";
/*if (empty($navCurrentPage)){
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
}*/

//if (empty($navCurrentPage)){ $navCurrentPage = $navCurrentPage2; }
foreach ($navArr as $v => $k){
$navUrl = "empty";
$navText = "empty";
$navTitle = "empty";

if (!empty($navArr[$v]["url"])){ $navUrl = $navArr[$v]["url"]; }
if (!empty($navArr[$v]["text"])){ $navText = $navArr[$v]["text"]; }
if (!empty($navArr[$v]["title"])){ $navTitle = $navArr[$v]["title"]; }

$vNew = $navUrl;
$vNew = implode(explode(".php", $vNew));
$vNew = implode(explode(".html", $vNew));
$vNew = implode(explode("../", $vNew));
$vNew = implode(explode("./", $vNew));

//fix explode
if (empty($navCurrentPage)){ $navCurrentPage = "kdsjfljdfkj"; } 
if (empty($vNew)){ $vNew = "kdsjfljdfkj"; } 

//echo $_SERVER['REQUEST_URI']."<hr>";
//if ($vNew == $_SERVER['REQUEST_URI']||$navUrl == $navCurrentPage){
if(count(explode($vNew, $_SERVER['REQUEST_URI'])) >= 2||count(explode($navCurrentPage, $navUrl)) >= 2){
//if (count(explode($navCurrentPage, $v)) >= 2||count(explode($navCurrentPage2, $v)) >= 2){
$navMenu .= <<<EOF
<a class="countMenuItem active2 inlineBlock padding itemLinkAniActive" href="$navUrl" title="$navTitle">$navText</a>

EOF;
} else {
$navMenu .= <<<EOF
<a class="countMenuItem inlineBlock padding brand itemLinkAni" href="$navUrl" title="$navTitle">$navText</a>

EOF;
}
//echo $v."<hr>";
}

return $navMenu;
}

?>
