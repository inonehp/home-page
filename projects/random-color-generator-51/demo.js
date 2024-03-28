// Radndom color demo v.1.2.2
// gen HTML result





// limit for demo result
var lLimit = 100;


var lPrint = [];


var geturl = window.location;
var url = new URL(geturl);
var q = url.searchParams.get("q");


/*try{ q = decodeURIComponent(q); }
catch(err){ }*/


if(q != null&&q != 'null'){

if(document.getElementById('lTextarea') != null){
document.getElementById('lTextarea').value = (q);
}

}else{
//https://en.wikipedia.org/wiki/Web_colors
q = "transparent,white,silver,gray,black,red,maroon,yellow,olive,lime,green,aqua,teal,blue,navy,fuchsia,purple,violet,pink,navy,rebeccapurple";
}

lDemo(q);



// for demo
function lDemo(q){

q = fuMClearText(q);

var print = `
result
`;


if(document.getElementById("result") != null){
document.getElementById("result").innerHTML = '';
}

var randColor = 'lime';
if(document.getElementById("result") != null){
//document.getElementById("result").innerHTML += `<div class="item borderRadius button small bg4 padding3 border"><h2>color name:</h2></div>`; 


let n = 0;
while (n <= lLimit) {
randColor = fuRandomColorGenerator(q);

print = `

<div class="item">
<div class="borderRadius2 light3 shadow ">
<div class="lTransparentBg">
<div style="width: 100%; height: 90px; background-color: ${randColor};"></div>
</div>
<div class="border padding2" style="background-color: var(--l3); color: ${randColor};">Text test <b>Text test</b></div>
<div class="border padding2" style="background-color: var(--d3); color: ${randColor};">Text test <b>Text test</b></div>
<div class="padding2 small" style="">${randColor}</div>
</div>
</div>

`;

lPrint.push(print);


//document.getElementById("result").innerHTML += print; 
n++;
}

//https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates
let lPrintUnique = [...new Set(lPrint)];
lNaturalSort(lPrintUnique);

//https://stackoverflow.com/questions/12132178/using-join-method-to-convert-array-to-string-without-commas
document.getElementById("result").innerHTML = lPrintUnique.join(""); 

lPrint = [];
}

}




// input listener and print result
if(document.getElementById('lTextarea') != null){
var inputA = document.getElementById('lTextarea');
inputA.addEventListener('input', updateValueInput);
}

function updateValueInput(e) {
lDemo(e.target.value);
}



//https://stackoverflow.com/questions/2802341/natural-sort-of-alphanumerical-strings-in-javascript
function lNaturalSort(arr){
var collator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'});

return arr.sort(collator.compare);
}















