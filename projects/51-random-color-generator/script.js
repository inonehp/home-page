// Random color generator v.1.0.0


function fuRandomColorGenerator(colorListCommaSeparator){
let lColorList = colorListCommaSeparator.split(",");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let lRandColor = getRandomInt(lColorList.length);
lRandColor = lColorList[lRandColor];

let lRandColor2 = getRandomInt(lColorList.length);
lRandColor2 = lColorList[lRandColor2];

//console.log(mRandColor + '=' + mRandColor2);
if(lRandColor == lRandColor2){
let n = 0;
while (n < 100) {
if(lRandColor == lRandColor2){
lRandColor2 = getRandomInt(lColorList.length);
lRandColor2 = lColorList[lRandColor2];
}else{
break;
}
n++;
}
}
//element.classList.add(lRancColor);

let lRandTone = getRandomInt(100);
let lRandTone2 = getRandomInt(100);


return `color-mix(in srgb, ${lRandColor} ${lRandTone}%, ${lRandColor2})`;


}
console.log(fuRandomColorGenerator("lime,orange"));
// resutl: color-mix(in srgb, orange 67%, lime)
// how to use: body { color: color-mix(in srgb, orange 67%, lime); }
// gen HTML result













///// for demo
var print = `
result
`;

var lLimit = 5;

var randColor = 'lime';
if(document.getElementById("result") != null){
document.getElementById("result").innerHTML += `<div class="item borderRadius button small bg4 padding3 border"><h2>color name:</h2></div>`; 
let n = 0;
while (n <= lLimit) {
randColor = fuRandomColorGenerator("#000, #fff, red,orange,yellow,green,blue,indigo,violet,lime,black,white,transparent");
print = `

<div class="item borderRadius button small bg4 padding3 border" style="color: ${randColor};">${randColor}</div>

`;

document.getElementById("result").innerHTML += print; 
n++;
}

}

if(document.getElementById("result") != null){

document.getElementById("result").innerHTML += `<div class="item borderRadius button small bg4 padding3 border"><h2>color var:</h2></div>`; 

let n = 0;
while (n <= lLimit) {
randColor = fuRandomColorGenerator("var(--brand),var(--red),var(--orange),var(--yellow),var(--green),var(--blue),var(--indigo),var(--violet)");
print = `

<div class="item borderRadius button small bg4 padding3 border" style="color: ${randColor};">${randColor}</div>

`;

document.getElementById("result").innerHTML += print; 
n++;
}
}

if(document.getElementById("result") != null){

document.getElementById("result").innerHTML += `<div class="item borderRadius button small bg4 padding3 border"><h2>color mix:</h2></div>`; 

let n = 0;
while (n <= lLimit) {
randColor = fuRandomColorGenerator("#000, #fff, red,orange,yellow,green,blue,indigo,violet,lime,black,white,transparent,var(--brand),var(--red),var(--orange),var(--yellow),var(--green),var(--blue),var(--indigo),var(--violet)");
print = `

<div class="item borderRadius button small bg4 padding3 border" style="color: ${randColor};">${randColor}</div>

`;

document.getElementById("result").innerHTML += print; 
n++;
}


}




