// Local main index script v.1.0.2





// Random color generator v.1.0.3
//if(document.getElementById("siteName") != null){}


//document.getElementById("footer").onload = function() {}


let mRandColorsPrint = "";
const mColors = [
"var(--brand)",
"var(--red)", "var(--orange)", "var(--yellow)", "var(--green)", "var(--blue)", "var(--indigo)", "var(--violet)"];
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let mRandColor = getRandomInt(mColors.length);
mRandColor = mColors[mRandColor];

let mRandColor2 = getRandomInt(mColors.length);
mRandColor2 = mColors[mRandColor2];

//console.log(mRandColor + '=' + mRandColor2);
if(mRandColor == mRandColor2){
let n = 0;
while (n < 100) {
if(mRandColor == mRandColor2){
mRandColor2 = getRandomInt(mColors.length);
mRandColor2 = mColors[mRandColor2];
}else{
break;
}
n++;
}
}
//element.classList.add(lRancColor);

let mRandTone = fuMRandom(0, 100);
let mRandTone2 = fuMRandom(0, 100);


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


const extraSheet = new CSSStyleSheet();
extraSheet.replaceSync(mRandColorsPrint);
// Combine the existing sheets and new one
document.adoptedStyleSheets = [...document.adoptedStyleSheets, extraSheet];

//alert(document.getElementsByTagName("footer")[0].style.backgroundColor);
// // Random color




// fix main nav "up" v.1.1.0

//if(document.getElementById("mNavUp") != null){
if(document.getElementsByClassName("mClassNavUp")[0] != null){
let mNavUpCheck = new String(window.location.pathname);

var allMClassNavUp = document.querySelectorAll(".mClassNavUp");
allMClassNavUp.forEach((item, index) => {


if(mNavUpCheck != "/"){

if(mNavUpCheck.indexOf('/lists') == -1&&mNavUpCheck.indexOf('./main-list') == -1){
//document.getElementsByClassName("mClassNavUp").href = "/main-list.html";
document.getElementsByClassName("mClassNavUp")[index].href = "./main-list.html";


if(mNavUpCheck.indexOf('/main-list') != -1||mNavUpCheck.indexOf('projects') != -1){
//document.getElementsByClassName("mClassNavUp").href = "../";
document.getElementsByClassName("mClassNavUp")[index].href = "./lists.html";
}

}

if(mNavUpCheck.indexOf('/pages') != -1||mNavUpCheck.indexOf('/lists') != -1){
document.getElementsByClassName("mClassNavUp")[index].href = "/";
}


}else if(mNavUpCheck == "/"){
document.getElementsByClassName("mClassNavUp")[index].href = "./pages.html";
}


});

fuMHideFileNameExt2();

}


