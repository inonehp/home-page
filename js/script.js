// Local main index script v.1.1.5





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
//
}else{
mRandColor2 = getRandomInt(mColors.length);
mRandColor2 = mColors[mRandColor2];
break;
}
n++;
}
}
//element.classList.add(lRancColor);

let mRandTone = fuMRandom(5, 100);
let mRandTone2 = fuMRandom(0, 50);


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
if(document.getElementsByClassName("mClassNavUp")[0] != null){
let mNavUpCheck = new String(window.location.pathname);
let mNavUpCheckLevel = Number((mNavUpCheck.split("/")).length);
var allMClassNavUp = document.querySelectorAll(".mClassNavUp");
allMClassNavUp.forEach((item, index) => {


if(mNavUpCheckLevel == 2&&mNavUpCheck != "/"||String(window.location.href).indexOf("file://") != -1||String(window.location.href).indexOf("localhost/github") != -1){

if(mNavUpCheck.indexOf('/lists') == -1&&mNavUpCheck.indexOf('./main-list') == -1){
//document.getElementsByClassName("mClassNavUp").href = "/main-list.html";
document.getElementsByClassName("mClassNavUp")[index].href = fuMHideFileNameExt("./main-list.html");


if(mNavUpCheck.indexOf('/main-list') != -1||mNavUpCheck.indexOf('projects') != -1){
//document.getElementsByClassName("mClassNavUp").href = "../";
document.getElementsByClassName("mClassNavUp")[index].href = fuMHideFileNameExt("./lists.html");
}

}

if(mNavUpCheck.indexOf('/pages') != -1||mNavUpCheck.indexOf('/lists') != -1){
document.getElementsByClassName("mClassNavUp")[index].href = fuMHideFileNameExt("/");
}


}else if(mNavUpCheck == "/"){
document.getElementsByClassName("mClassNavUp")[index].href = fuMHideFileNameExt("./lists.html");
}


});

//fuMHideFileNameExt2(); test delme

}


