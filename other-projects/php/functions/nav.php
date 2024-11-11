<?PHP
// v.1.0.0


function nav($fuNavArr, $fuNavCurrentPage, $ext){

$fuNavMenu = "";
foreach($fuNavArr as $v => $key){

if (count(explode($fuNavCurrentPage, $v)) >= 2){
//$GLOBALS['hashTag'] = $v2;
$fuNavMenu .= <<<EOF
<a class="countMenuItem active2 inlineBlock padding itemLinkAniActive" href="$v">$key</a>

EOF;
} else {
$fuNavMenu .= <<<EOF
<a class="countMenuItem inlineBlock padding brand itemLinkAni" href="$v">$key</a>

EOF;
}

}

return $fuNavMenu;
}

?>
