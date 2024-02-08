// Local main index script v.1.0.1


//fix
// Nav up for main list page
//if(document.getElementById("mNavUp") != null){
if(document.getElementsByClassName("mClassNavUp")[0] != null){
let mNavUpCheck = new String(window.location.pathname);

var allMClassNavUp = document.querySelectorAll(".mClassNavUp");
allMClassNavUp.forEach((item, index) => {


if(mNavUpCheck != "/"){
//document.getElementsByClassName("mClassNavUp").href = "/main-list.html";
document.getElementsByClassName("mClassNavUp")[index].href = "/main-list.html";

if(mNavUpCheck.indexOf('/main-list') != -1){
//document.getElementsByClassName("mClassNavUp").href = "../";
document.getElementsByClassName("mClassNavUp")[index].href = "../";
}
}

});




}


// Random color generator v.1.0.3 in progress
//if(document.getElementById("siteName") != null){}


let mRandColorsPrint = "";
const mColors = ["brand", "red", "orange", "yellow", "green", "blue", "indigo", "violet"];
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
mRandColor2 = mColors[mRandColor2]
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
--randCAll: color-mix(in srgb, var(--${mRandColor}) ${mRandTone}%, var(--${mRandColor2}));
--randCAll2: color-mix(in srgb, var(--${mRandColor2}) ${mRandTone2}%, var(--${mRandColor}));
}

.randCAll { color: var(--randCAll); }
.randCAll2 { color: var(--randCAll2); }

`;


var styleElem = document.head.appendChild(document.createElement("style"));
styleElem.innerHTML = mRandColorsPrint;




