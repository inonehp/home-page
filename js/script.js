// Local main index script v.1.1.10

// Random color generator
//if(document.getElementById("siteName") != null){}

//document.getElementById("footer").onload = function() {}

let mRandColorsPrint = "";

const mColors = [
"var(--c4)", "var(--brand)",
"var(--red)", "var(--orange)", "var(--yellow)", "var(--green)", "var(--blue)", "var(--indigo)", "var(--violet)",
//"var(--c4)", "var(--brand2)",
//"var(--red2)", "var(--orange2)", "var(--yellow2)", "var(--green2)", "var(--blue2)", "var(--indigo2)", "var(--violet2)"
];

let mRandColor = fuMRandom(0, mColors.length - 1);
mRandColor = mColors[mRandColor];

let mRandColor2 = fuMRandom(0, mColors.length - 1);
mRandColor2 = mColors[mRandColor2];

//console.log(mRandColor + '=' + mRandColor2);
if (mRandColor == mRandColor2){
let n = 0;
while (n < 100) {
if (mRandColor == mRandColor2){
//
} else {
mRandColor2 = fuMRandom(0, mColors.length - 1);
mRandColor2 = mColors[mRandColor2];
break;
}
n++;
}
}
//element.classList.add(lRancColor);

let mRandTone = fuMRandom(5, 100);
let mRandTone2 = fuMRandom(5, 100);


mRandColorsPrint += `

:root {
--randCAll: color-mix(in srgb, ${mRandColor} ${mRandTone}%, ${mRandColor2});
--randCAll2: color-mix(in srgb, ${mRandColor2} ${mRandTone2}%, ${mRandColor});
}

.randCAll { color: var(--randCAll); }
.randCAll2 { color: var(--randCAll2); }

:nth-child(2n+1 of .navTop a, .navTop button){
color: var(--randCAll);
}

:nth-child(2n+2 of .navTop a){
color: var(--randCAll2);
}

.navTop a:hover, .navTop button:hover {
color: var(--b2); 
}

.insertIcon svg *, .headerBannerImg svg *{
fill: var(--randCAll) !important;
stroke: var(--randCAll2) !important;
}
.headerBannerImg svg{
opacity: .7;
}

`;


/*
var styleElem = document.head.appendChild(document.createElement("style"));
styleElem.innerHTML = mRandColorsPrint;*/

//https://developer.mozilla.org/en-US/docs/Web/API/Document/adoptedStyleSheets
const extraSheet = new CSSStyleSheet();
extraSheet.replaceSync(mRandColorsPrint);
// Combine the existing sheets and new one
document.adoptedStyleSheets = [...document.adoptedStyleSheets, extraSheet];

//alert(document.getElementsByTagName("footer")[0].style.backgroundColor);
// // Random color




// fix main nav "up" v.1.2.1

//if(document.getElementById("mNavUp") != null){
if (document.getElementsByClassName("mClassNavUp")[0] != null){
let mNavUpCheck = new String(window.location.pathname);
let mNavUpCheckLevel = Number((mNavUpCheck.split("/")).length);
var allMClassNavUp = document.querySelectorAll(".mClassNavUp");
allMClassNavUp.forEach((item, index) => {

if (mNavUpCheckLevel == 2&&mNavUpCheck != "/"||String(window.location.href).indexOf("file://") != -1||String(window.location.href).indexOf("/github") != -1||String(window.location.href).indexOf("/main/") != -1){

if (mNavUpCheck == "/"||mNavUpCheck.indexOf("list") != -1|mNavUpCheck.indexOf("projects-page") != -1){
document.getElementsByClassName("mClassNavUp")[index].href = fuMHideFileNameExt("./archive.html");
}
if (mNavUpCheck.indexOf("/main/") != -1){
document.getElementsByClassName("mClassNavUp")[index].href = fuMHideFileNameExt("./");
}
} else if (mNavUpCheck == "/"){
document.getElementsByClassName("mClassNavUp")[index].href = fuMHideFileNameExt("./archive.html");
}

});
};


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

if(document.getElementById("printInputSearch") != null){
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


