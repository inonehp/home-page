// Custom Home page v.1.0.2
//https://developer.mozilla.org/en-US/docs/Web/API/Storage


function fuLHomePage(idForPrint, url, com){

let locationHomePageUrl = String(location.href);
locationHomePageUrl = locationHomePageUrl.replaceAll("#mHomePage", "");
locationHomePageUrl = locationHomePageUrl.replaceAll("#mPin", "");

if (localStorage.getItem("confHomePageData")) {
var confHomePageData = localStorage.getItem("confHomePageData");
} else {
var confHomePageData = "/";
}


var fHomePageButton = "fHomePageButton";
if (conf["confHomePageStatus"] != "off"){

// Home page button and status
fHomePageButton = `<a title="Make this page your home page" id="mHomePage" class="inlineBlock padding brand" href="#mHomePage" onclick="fuLHomePage('', '', 'add2');">Make as home</a>`;

if (confHomePageData != undefined&&confHomePageData != "undefined"){
if (confHomePageData == locationHomePageUrl){
fHomePageButton = `<a title="Return to default home page" id="mHomePage" class="inlineBlock padding gray" href="#mHomePage" onclick="fuLHomePage('', '', 'del');">It's home</a>`;
}
}

if (document.getElementById("fHomePageButton") != null){
document.getElementById("fHomePageButton").innerHTML = fHomePageButton; 
}
// Home page button and status










switch (com){

case 'print':
let print = "";

print = `

<form id="spedDialSubmitSetting" method="GET" onsubmit="event.preventDefault();">

<label class="xSmall op" for="homePagUrl">URL<!-- (current site only)-->:</label>
<input type="text" id="homePageUrl" class="classHomePageUrl op" name="homePageUrl" value="${confHomePageData}">

<a href="#homePageAnchor" onclick="fuLHomePage('', '', 'update')"><div class="op small  submit shadow brand borderRadius3">Update</div></a>
</form>

<div class="block padding2 margin2"></div>

<div class="tRight">
<a href="#" onclick="fuLHomePage('', '', 'reset')"><div class="op small tag2 button bg  inputHeight red borderRadius border">Clear data (reset)</div></a>
</div>

<div class="block padding2 margin2"></div>

`;


if (document.getElementById(idForPrint) != null){
document.getElementById(idForPrint).innerHTML = print; 
}

break;

case 'add2':

//url = fuMClearText(locationHomePageUrl);

if (locationHomePageUrl != ""){
localStorage.setItem("confHomePageData", locationHomePageUrl);
fuLHomePage("homePagePrint", url, "print");
} else {
console.log("locationHomePageUrl empty url");
}
break;



case 'del':
if (locationHomePageUrl != ""){
//https://stackoverflow.com/questions/23728626/localstorage-and-json-stringify-json-parse
localStorage.setItem("confHomePageData", "");

fuLHomePage("homePagePrint", "", "print");
}
break;

case 'update':

url = document.getElementsByClassName("classHomePageUrl")[0].value;

/*if (url == ""){
} else {
url = fuMClearText(url);
}*/

localStorage.setItem("confHomePageData", url);
fuMReload();
break;

case "clear":
case "reset":
if (confirm(`Are you sure?`) == true){
localStorage.removeItem("confHomePageData");
fuMReload();
}

break;


default:
//
}

}

if (window.location.pathname == "/"&&confHomePageData != ""&&confHomePageData != "/"&&String(location.href).indexOf("?") == -1){
if (locationHomePageUrl != confHomePageData){
//if (window.location.hostname == new URL(confHomePageData).hostname){}
/*location.href = confHomePageData;
location.href = location.href + '#!StopRedirect';*/
}
}

}







