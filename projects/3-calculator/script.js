// v.1.1.0
// inspired by Bing Web Calculator, Google Web Calculator, Google Calculator App and other



var calcMode = [];
calcMode[0] = 'script';


if(localStorage.getItem("calculator-mode")){
calcMode[0] = localStorage.getItem("calculator-mode");
}else{
calcMode[0] = 'script';
}





function printCaclMode(mode){
/*
if(mode == 'script'){
document.getElementById('calculator-mode').innerHTML = 
`
<span class="tag op">mode:</span>

<a class="tag border light4" href="#" onclick="setMode('script');return false;">script</a>

`;
}


*/
}


const grid = `

<div class="block margin2 padding2"></div>

<div class="center2">


<div class="calculator shadow padding2 bg">

<form>
<input type="text" autofocus="autofocus">
<div id="calcResult" class="block padding2 bg border">result</div>
</form>



<div class="grid">

<!--https://stackoverflow.com/questions/1070760/javascript-href-vs-onclick-for-callback-function-on-hyperlink-->
<a class="button border light" href="#" onclick="clickInput('(');return false;">(</a>
<a class="button border light" href="#" onclick="clickInput(')');return false;">)</a>
<a class="button border light red" href="#" onclick="clickInput('C');return false;">C</a>
<a class="button border light red" href="#" onclick="clickInput('⇦');return false;">⇦</a>

<a class="button border light3" href="#" onclick="clickInput('7');return false;">7</a>
<a class="button border light3" href="#" onclick="clickInput('8');return false;">8</a>
<a class="button border light3" href="#" onclick="clickInput('9');return false;">9</a>
<a class="button border light" href="#" onclick="clickInput('/');return false;">/</a>

<a class="button border light3" href="#" onclick="clickInput('4');return false;">4</a>
<a class="button border light3" href="#" onclick="clickInput('5');return false;">5</a>
<a class="button border light3" href="#" onclick="clickInput('6');return false;">6</a>
<a class="button border light" href="#" onclick="clickInput('*');return false;">*</a>

<a class="button border light3" href="#" onclick="clickInput('1');return false;">1</a>
<a class="button border light3" href="#" onclick="clickInput('2');return false;">2</a>
<a class="button border light3" href="#" onclick="clickInput('3');return false;">3</a>
<a class="button border light" href="#" onclick="clickInput('-');return false;">-</a>

<a class="button border light3" href="#" onclick="clickInput('0');return false;">0</a>
<a class="button border light" href="#" onclick="clickInput('.');return false;">.</a>
<a class="button border light blue" href="#" onclick="clickInput('=');return false;">=</a>
<a class="button border light" href="#" onclick="clickInput('+');return false;">+</a>

</div>

<div class="block margin2 padding2"></div>
<a class="op tag light border borderRadius2" onclick="reload()" href="#">reload</a>
</div>


</div>




</div>
`;


document.getElementById('result').innerHTML = grid;




// input 1 (click)
function clickInput(value){
fuCalc(value, 'emptyCommand');
}

document.querySelectorAll('input')[0].addEventListener('input', updateValue);

// input 2 (form input)
function updateValue(e) {
fuCalc(String(e.target.value), 'clear');
}


var lInput = [];
lInput[0] = '';

function fuCalc(lInputGet, lOption){
if(lInputGet == undefined){ lInputGet = ''; }
if(lOption == 'clear'){ lInput[0] = ''; }

lInput[0] += lInputGet;
lInput[0] = lInput[0].replaceAll("'", '');
lInput[0] = lInput[0].replaceAll('"', '');
lInput[0] = lInput[0].replaceAll('<', '');
lInput[0] = lInput[0].replaceAll('>', '');



let result = '';

if(lInput[0][lInput[0].length - 1] == '⇦'){ lInput[0] = lInput[0].slice(0, -2); }
if(lInput[0][lInput[0].length - 1] == '='){ lInput[0] = lInput[0].slice(0, -1); }
if(lInput[0][lInput[0].length - 1] == 'C'){ lInput[0] = ''; }

// print input
document.querySelectorAll('input')[0].value = lInput[0];
if(conf["confDevice"] != 'mobile'){ document.querySelectorAll('input')[0].focus(); }



// bracket count
var bracket = 0;
var bracket2 = 0;
var arrayBParse = lInput[0].split("");
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
arrayBParse.forEach((element) => {
if(element == '('){ bracket++; }
if(element == ')'){ bracket2++; }
});
// end bracket count

if(bracket != bracket2){

result = lInput[0].replaceAll('(', '<span class="red bold">(</span>');
result = lInput[0].replaceAll(')', '<span class="red bold">)</span>');
}else{

result = lInput[0].replaceAll('1', Number(1));



}

result = result + ' <span class="xSmall">in progress</span> ';


//if(result == ''||result == undefined||/\d/.test(result) == false){ result = 'result'; }
document.getElementById('calcResult').innerHTML = result;


return result;
}

fuCalc();















