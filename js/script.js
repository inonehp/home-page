// Local main index script v.1.0.2



fuMRandColor();

// Random color generator v.1.0.3
//if(document.getElementById("siteName") != null){}

function fuMRandColor(){


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
--randCAll: color-mix(in srgb, var(--${mRandColor}) ${mRandTone}%, var(--${mRandColor2}));
--randCAll2: color-mix(in srgb, var(--${mRandColor2}) ${mRandTone2}%, var(--${mRandColor}));
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

`;
/*
var styleElem = document.head.appendChild(document.createElement("style"));
styleElem.innerHTML = mRandColorsPrint;*/


const extraSheet = new CSSStyleSheet();
extraSheet.replaceSync(mRandColorsPrint);
// Combine the existing sheets and new one
document.adoptedStyleSheets = [...document.adoptedStyleSheets, extraSheet];

//alert(document.getElementsByTagName("footer")[0].style.backgroundColor);

}



