<?php

if (php_uname('s') == 'Windows NT'){
$dirname = explode("\\", getcwd());
$dirname = $dirname[count(explode('\\', getcwd())) - 1];
$d = $_SERVER["DOCUMENT_ROOT"].'/';
} else {
$dirname = explode("/", getcwd());
$dirname = $dirname[count(explode("/", getcwd())) - 1];
$d = $_SERVER["DOCUMENT_ROOT"].'/';
}

include $_SERVER["DOCUMENT_ROOT"].'/top.php';

$title = htmlspecialchars($dirname);

echo <<<EOF

<!-- content -->
<main class="content">
<div class="wrapper">

<h1 class="tCenter op insertIcon">$title</h1>
<div class="tCenter padding2 small op red bold">in progress</div>

<div class="padding2 border bg pre">
<div id="result"></div>
</div>


EOF;

?>


<a class="inlineBlock padding red" href="generate.php">generate.php! (Before that, configure config.php)</a>




<?php

echo <<<EOF

</div>
</main>
<!-- // content -->

EOF;

$bottom .= <<<EOF

<script>
//fuMSetTheme('light');
</script>

<script src="script.js"></script>

EOF;

include $_SERVER["DOCUMENT_ROOT"].'/bottom.php';
?>
