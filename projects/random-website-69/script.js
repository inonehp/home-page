// v.1.0.5

let totalPost = randomwebsiteJsonVar.length;
let result = "empty";
var lRandomWebsiteCounter = 0;

function lRandomSiteMain(){
var lRandomWebsite = fuMRandom(0, totalPost -1);
var lRandomWebsiteText = randomwebsiteJsonVar[lRandomWebsite]["text"];
var lRandomWebsiteUrl = randomwebsiteJsonVar[lRandomWebsite]["url"];


var print = `

<div class="bg shadow2 borderRadius3 padding2">
<div class="padding2"></div>

<div class="tRight small">random: ${lRandomWebsite} | total: ${totalPost}</div>
<div class="margin2 padding2"></div>

<div class="large wrapperSmall" style="min-height: 100px;">
<b>${lRandomWebsiteText}</b><br>
<a class="brand" href="${lRandomWebsiteUrl}">${lRandomWebsiteUrl}</a>
</div>

<div class="margin2 padding2"></div>
<div class="tCenter op wrapperSmall">
<a class="brand tag2 border2 borderRadius3 light" href="#" onclick="fuMReload();">Again (reload)</a>
<a class="brand tag2 border2 borderRadius3 light" href="data-list.html">Data list</a>
</div>
<div class="padding2"></div>
</div>

<div class="margin2 padding2"></div>

<!--<div class="op small">


Notes:<br>
<div>- <a class="bold brand" href="data-list.html">List of collected data</a></div>

<div class="padding2"></div>

</div>-->

`;

if(document.getElementById("result") != null){
document.getElementById("result").innerHTML = print; 
}

lRandomWebsiteCounter++
//console.log(lRandomWebsiteCounter);
if (lRandomWebsiteCounter >= 15){ clearInterval(lRandomWebsiteTimer); }
}




var lRandomWebsiteTimer = setInterval( lRandomSiteMain, 150);


