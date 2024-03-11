// Sort v.1.0.1

var geturl = window.location;
var url = new URL(geturl);
var q = url.searchParams.get("q");
var com = url.searchParams.get("com");
var com2 = url.searchParams.get("com2");
let result = '';

/*try{ q = decodeURIComponent(q); }
catch(err){ }*/



if(com != null&&com != 'null'){
if(document.getElementById("com") != null){
document.getElementById('com').value = com;
}
}

if(com2 != null&&com2 != 'null'){
if(document.getElementById("form") != null){
document.forms["form"][com2].checked = true;
}
}

if(q != null&&q != 'null'){
if(document.getElementById("text") != null){
document.getElementById("text").value = q;
}
fuSortText("result", q, com, com2);
}
if(q == null){ q = ''; }

if(document.getElementById("com") != null&&document.getElementById("text") != null){
var e = document.getElementById("com");
var value = e.value;
com = e.options[e.selectedIndex].value;
q = document.getElementById("text").value;
fuSortText("result", q, com, com2);
}


// dynamic form
oninput = (event) => {

if(document.getElementById("com") != null&&document.getElementById("text") != null){
var e = document.getElementById("com");
var value = e.value;
com = e.options[e.selectedIndex].value;
q = document.getElementById("text").value;
}

//https://stackoverflow.com/questions/15839169/how-to-get-the-value-of-a-selected-radio-button
com2 = document.querySelector('input[name="com2"]:checked').value;


//fuSortText("result", event.target.value, com);
fuSortText("result", q, com, com2);

};
// // dynamic form



function fuSortText(printId, text, com, com2){

if(text != null&&text != 'null'){
var result = text;

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch

switch (com) {

case 'space':
result = result.replaceAll(' ', conf["confSymbolForSplit"]);
result = result.split(conf["confSymbolForSplit"]);
//result.sort();
lNaturalSort(result);
if(com2 == 'reverse'){ result.reverse(); }
result = result.join(` `);
break;

case 'comma':
result = result.replaceAll(',', conf["confSymbolForSplit"]);
result = result.split(conf["confSymbolForSplit"]);
//result.sort();
lNaturalSort(result);
if(com2 == 'reverse'){ result.reverse(); }
result = result.join(`,`);
break;

case '|':
result = result.replaceAll('|', conf["confSymbolForSplit"]);
result = result.split(conf["confSymbolForSplit"]);
//result.sort();
lNaturalSort(result);
if(com2 == 'reverse'){ result.reverse(); }
result = result.join(`|`);
break;

default:
result = result.replaceAll('\r\n', conf["confSymbolForSplit"]);
result = result.replaceAll('\r', conf["confSymbolForSplit"]);
result = result.replaceAll('\n', conf["confSymbolForSplit"]);
result = result.split(conf["confSymbolForSplit"]);
//result.sort();
lNaturalSort(result);
if(com2 == 'reverse'){ result.reverse(); }
result = result.join(`
`);

}


if(document.getElementById(printId) != null){
document.getElementById(printId).innerText = result; 
}

}
}

//https://stackoverflow.com/questions/2802341/natural-sort-of-alphanumerical-strings-in-javascript
function lNaturalSort(arr){
var collator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'});

return arr.sort(collator.compare);
}
