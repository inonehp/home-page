// v.1.0.0


// Search redirects v.1.12.1
// Mini google
// The script redirects the search query + command to another location.

// conf
var com = "on"; // on, off redirection
var sTimeRedirect = 1000;
// conf

var geturl = location.href;
var url = new URL(geturl);
var q = url.searchParams.get("q");

var qr = url.searchParams.get("qr");
var rq = url.searchParams.get("rq");
if (rq != null){ qr = qr + rq; }
if (qr != null){
/*qr = qr.replaceAll(/%/g, "%25");
q = q.replaceAll('+', ' ');
qr = decodeURIComponent(qr);*/
qr = qr.trim();

q = qr;

if (com == "on"&&String(location.href).indexOf("#!StopRedirect") == -1){

location.href = fuMHideFileNameExt(qr);
location.href = location.href + '#!StopRedirect';

//location.href.replace(fuMHideFileNameExt(qr),);
//location.href.replace(location.href + '#!StopRedirect',);

}
} else { qr = ''; }

/*var rUrlGet = url.searchParams.get("rUrl");
//fuMHideFileNameExt(); //rmme
rUrlGet = fuMHideFileNameExt(rUrlGet);*/

rUrlGet = String(location.href);
rUrlGet = (rUrlGet).split("rUrl=");
rUrlGet = rUrlGet[1];
rUrlGet = fuMHideFileNameExt(rUrlGet);
var rUrlGetPrint = '';

var random = '';
var urlList = [];

var sRedirectUrl = '';

var tmp = '';


let sUrlText = String(url);

const myArray = sUrlText.split("q=");
sUrlText = myArray[0];


if (q == ''&&q != 'null'){ q = 'q'; }



var rColor = 'yellow';


if (rUrlGet == null&&q != 'null'&&q != null&&q != ''&&sUrlText.indexOf("cache") == -1){

q = q.trim();
//q = q.replace(/%([^\d].)/, "%25$1");
/*q = q.replaceAll(/%/g, "%25");
q = decodeURIComponent(q);*/



if (q.slice(-2) == 'ls'||q.slice(-2) == 'rs'){
sTimeRedirect = 2000;
rColor = 'orange';
}

q = q.replaceAll('%23!StopRedirect', '');
q = q.replaceAll('#!StopRedirect', '');

// for the command at the end of the search query
let qTmpNoPlus = q.replaceAll('%23', '+', ' ');
var strArray = qTmpNoPlus.split(" ");
var qCom = strArray[strArray.length - 1] + "#";
var q3 = q + "#";



switch (qCom) {

case 'π#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"?q=" + q
];
if (q == ''){
urlList = [
'tec', 'sci', 'dev', 'n2', "spo",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = '?q=' + random;
sRedirectUrl = url;
break;

case 'l#':  case 'll#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.google.com/search?btnI=1&q=" + q,
//url = "https://you.com/search?q=!" + q;
//url = "https://duckduckgo.com/?q=! " + q;
];
if (q == ''){
urlList = [
"https://www.google.com/",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
sRedirectUrl = random;
break;

default:
q = encodeURIComponent(q);
urlList = [
"https://www.google.com/search?btnI=1&q=" + q,
//url = "https://you.com/search?q=!" + q;
//url = "https://duckduckgo.com/?q=! " + q;
];
if (q == ''){
urlList = [
"https://www.google.com/",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
sRedirectUrl = random;
}



if (sRedirectUrl != ''&&sRedirectUrl != undefined&&sRedirectUrl != null){
rUrlGet = fuMHideFileNameExt(sRedirectUrl);
if (com == "on"){
//location.href = "/projects/redirects-25/?rUrl="+sRedirectUrl;
//location.href.replace(/projects/redirects-25/?rUrl="+sRedirectUrl,);
}
}

}








// print
function runRedirect(rUrlGet){

var print = '';

if (rUrlGet != null&&rUrlGet != 'null'&&rUrlGet != ''&&rUrlGet != undefined){
if (rUrlGet[0] == "."){ rUrlGet = (rUrlGet).slice(1); }

// filter
let allowUrlList = [
"archive.org",
"blogspot.com",
"codepen.io",
"dailymotion.com",
"deezer.com",
"facebook.com",
"giphy.com",
"imgur.com",
"instagram.com",
"medium.com",
"pinterest.com",
"reddit.com",
"soundcloud.com",
"spotify.com",
"tunein.com",
"twitch.tv",
"twitter.com",
"vimeo.com",
"wordpress.com",
"x.com",
"youtube.com",
];

let allowUrlListStatus = "not found";

allowUrlList.forEach((val) => {
if (rUrlGet.indexOf(val) != -1){ allowUrlListStatus = "found"; }
});



// main redirect
var sTimeRedirectStatus = `<span class="small">Redirection (${com}): `+ sTimeRedirect / 1000 + ` sec.</span>`;

//window.location
if (com == "on"&&(String(location.href)).indexOf("#!StopRedirect") == -1){

let rUrlGetClean = rUrlGet.replaceAll('%23!StopRedirect', '');
rUrlGetClean = rUrlGetClean.replaceAll('#!StopRedirect', '');

if (rUrlGet == ''&&rUrlGetClean[0] == 'h'&&allowUrlListStatus == 'not found'){
rColor = "orange";
// disabled if http
sTimeRedirectStatus = `<span class="small">Redirection (${com}): force off</span>`;
} else {

setTimeout(function(){
location.href = rUrlGetClean;
location.href = location.href + '#!StopRedirect'; 
}, sTimeRedirect); 

}

} else {
sTimeRedirectStatus = `<span class="small">Redirection (${com}): re-redirection forse stopped</span>`;
}
// main redirect



//if ((rUrlGet).search("#!StopRedirect") != -1){

/*rUrlGetPrint = decodeURIComponent(rUrlGet);
rUrlGetPrint = fuMClearText(rUrlGetPrint);*/

//rUrlGetPrint = fuMClearText(decodeURIComponent(rUrlGet).replaceAll('#!StopRedirect', ''));
//rUrlGet = decodeURIComponent(rUrlGet);
rUrlGet = rUrlGet.replaceAll('#!StopRedirect', '');
rUrlGet = rUrlGet.replaceAll('%23!StopRedirect', '');

print = `

<div class="tCenter bg border borderRadius2">
<div class="margin padding3 bgList op">${sTimeRedirectStatus}</div>
<div class="margin padding3 bgList border brand borderRadius2"><a class="inlineBlock padding brand" href="${rUrlGet}"><span id="printTextUrl"</a></div>
</div>

`;

if (document.getElementById("result") != null){
document.getElementById("result").innerHTML = print;
}
if (document.getElementById("printTextUrl") != null){
document.getElementById("printTextUrl").textContent = decodeURIComponent(rUrlGet);
}

}




var a = [
"goo", "bin", "n", "x", "red, v, l"
];

var b = '';
a.forEach((item, index) => { 
b  += item+ ', ';
 });

if (document.getElementById('printComList') != null){
document.getElementById('printComList').innerHTML = '<div class="bg padding2 border2 light op pre small">Redirects commands list: ' + b + `

Example redirects (random): "Google n" - news about Google.

goo - Google, bin - Bing, n - News, x - X (Twitter), red - Reddit, v - video, l - lucky (first search result).
</div>`;
}



if (document.getElementById('input') != null&&q != null&&q != 'null'){
document.getElementById('input').value = q;
}

}

runRedirect(rUrlGet);



// Form input and STT v.1.0.1

let printInputSearch = `

<div style="display: grid; grid-template-columns: 1fr 45px; grid-gap: 2px;">
<input id="q" aria-labelledby="search" type="search" name="q" autofocus="autofocus" placeholder="" autocomplete="off" spellcheck="true">
<input class="op" type="button" value="&#128266;" title="Click to Speak" onclick="fuMSpeechToText('q')">
</div>
<div id="qText" class="op bg padding2 border none borderRadius"></div>

`;

let printInputSearch2 = `

<input id="q" aria-labelledby="search" type="search" name="q" autofocus="autofocus" placeholder="" autocomplete="off" spellcheck="true">

`;

if (document.getElementById("printInputSearch") != null){
if (conf['confDevice'] == 'pc'&&window.navigator.vendor == "Google Inc."){
document.getElementById("printInputSearch").innerHTML = printInputSearch;
} else {
document.getElementById("printInputSearch").innerHTML = printInputSearch2;
}
}



function fuMSpeechToText(divIdInput){
if (document.getElementById(divIdInput) != null){

if (document.getElementById("qText") != null){
document.getElementById("qText").style.display = "block";
}

//https://wicg.github.io/speech-api/
//https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/SpeechRecognition
//https://stackoverflow.com/questions/64181012/web-speech-api-speechrecognition-not-defined-when-using-react-js
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

//https://stackoverflow.com/questions/64181012/web-speech-api-speechrecognition-not-defined-when-using-react-js
if ('SpeechRecognition' in window||'webkitSpeechRecognition' in window) {

const recognition = new SpeechRecognition();
recognition.interimResults = true;
//recognition.lang = "en-US";
recognition.lang = window.navigator.language;

var final = "";
var interim = "";

recognition.onresult = function (event) {
final = "";
interim = "";

for (var i = 0; i < event.results.length; ++i) {
if (event.results[i].isFinal) {
final += event.results[i][0].transcript;
} else {
interim += event.results[i][0].transcript;
}
document.getElementById(divIdInput).value = final + interim;
if (document.getElementById("qText") != null) {
document.getElementById("qText").textContent = final + interim;
}


}

//if (event.results.length > 0) { document.getElementById(divIdInput).form.submit(); }

//document.getElementById(divIdInput).value = final;
}


recognition.addEventListener("audiostart", () => {
if (document.getElementById("qText") != null) {
document.getElementById("qText").textContent = "Audio capturing started";
}
})

recognition.onaudioend = () => {
if (document.getElementById("qText") != null) {
document.getElementById("qText").textContent = "Audio capturing ended";
}
if (document.getElementById(divIdInput).value != ""){
document.getElementById(divIdInput).form.submit();
}
}

recognition.error = function (event) {
//console.table(event);
if (document.getElementById("qText") != null) {
document.getElementById("qText").textContent = "error";
}
}

recognition.start();

} else {
if (document.getElementById("qText") != null) {
document.getElementById("qText").textContent = "SpeechRecognition not detected";
}
}

}
}
// Form input and STT
