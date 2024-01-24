// v.1.2.3
// not for large file

function hint(printId, hintJsonVar, hintLimit, inputId){

if(hintLimit == null||hintLimit == undefined||hintLimit == ''){ hintLimit = 35; }
if(inputId == null||inputId == undefined||inputId == ''){ inputId = ''; }
var com = '';



// input
if(document.querySelectorAll('textarea').length >= 1){
inputA = document.querySelectorAll('textarea')[0];
inputA.addEventListener('input', updateValueInput);
com = 'textarea';
}



if(document.querySelectorAll('input').length >= 2){
inputA = document.querySelectorAll('input')[0];
inputA.addEventListener('input', updateValueInput);
com = 'input';
}

if(inputId != ''){
if(document.getElementById(inputId) != null&&document.getElementById(inputId) != ''){ 
inputA = document.getElementById(inputId);
inputA.addEventListener('input', updateValueInput);
com = 'inputId';
}
}


var print = '';


function updateValueInput(e){
var qInput = (e.target.value);
//var qInput = e.target.value;
var q2 = (' '+qInput).split(' ');
var lastInputSymbol = q2[q2.length - 1];
if(lastInputSymbol.length >= 1){
var count = 0;




// search 1
for (let index = 0; index < hintJsonVar.length; index++) { 
const item = hintJsonVar[index];  
var item2 = item['text']; // from json  var


//if(item2.search(lastInputSymbol) != -1){
//if(item2.indexOf(lastInputSymbol) >= 0){
// search word (hint with first letter)
if(item2 != undefined&&item2.slice(0, lastInputSymbol.length).toLowerCase() == lastInputSymbol.toLowerCase()){



//console.log(lastInputSymbol);
//console.log(item2);

// https://stackoverflow.com/questions/15087497/escaping-single-quotes-in-javascript-string-for-javascript-evaluation
var item3 = item2.replace(/'/g, "\\'"); 
var qInput3 = qInput.replace(/'/g, "\\'"); 
item3 = item3.replace(/'/g, "\'"); 
qInput3 = qInput3.replace(/'/g, "\'"); 

print += `
<a class="tag light border" onclick="insertText('${qInput3}', '${item3}', '${com}', '${inputId}');" style="cursor:pointer;">${item2}</a>
`;
count++;
if(count >= hintLimit){
break;
}
}
//console.log(item['en']);
}






// search 2
if(print == ''){
for (let index = 0; index < hintJsonVar.length; index++) {  
const item = hintJsonVar[index];  
var item2 = item['text']; // from json  var


if(item2.search(lastInputSymbol) != -1){
//if(item2.indexOf(lastInputSymbol) >= 0){
// search word (hint with first letter)
//if(item2 != undefined&&item2.slice(0, lastInputSymbol.length).toLowerCase() == lastInputSymbol.toLowerCase()){
//console.log(lastInputSymbol);
//console.log(item2);

// https://stackoverflow.com/questions/15087497/escaping-single-quotes-in-javascript-string-for-javascript-evaluation
var item3 = item2.replace(/'/g, "\\'"); 
var qInput3 = qInput.replace(/'/g, "\\'"); 
item3 = item3.replace(/'/g, "\'"); 
qInput3 = qInput3.replace(/'/g, "\'"); 

print += `
<a class="tag light border2" onclick="insertText('${qInput3}', '${item3}', '${com}', '${inputId}');" style="cursor:pointer;">${item2}</a>
`;
count++;
if(count >= hintLimit){
break;
}
}
//console.log(item['en']);
}
}


// search 3
if(print == ''){
for (let index = 0; index < hintJsonVar.length; index++) {  
const item = hintJsonVar[index];  
var item2 = item['text']; // from json  var



//if(item2.search(lastInputSymbol) != -1){
if(levenshtein(item2, lastInputSymbol) <= 2){


//if(item2.indexOf(lastInputSymbol) >= 0){
// search word (hint with first letter)
//if(item2 != undefined&&item2.slice(0, lastInputSymbol.length).toLowerCase() == lastInputSymbol.toLowerCase()){
//console.log(lastInputSymbol);
//console.log(item2);

// https://stackoverflow.com/questions/15087497/escaping-single-quotes-in-javascript-string-for-javascript-evaluation
var item3 = item2.replace(/'/g, "\\'"); 
var qInput3 = qInput.replace(/'/g, "\\'"); 
item3 = item3.replace(/'/g, "\'"); 
qInput3 = qInput3.replace(/'/g, "\'"); 

print += `
<a class="tag light border2" onclick="insertText('${qInput3}', '${item3}', '${com}', '${inputId}');" style="cursor:pointer;">${item2}</a>
`;
count++;
if(count >= hintLimit){
break;
}
}
//console.log(item['en']);
}
}







print = `
<div class="tCenter">
<div class="tagList padding2 op tCenter" >
${print}
</div></div>
<!-- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist -->
`;

// print hint
document.getElementById(printId).innerHTML = print;
print = '';

}
}








}






function insertText(q, text, com, inputId){



q = q.split(' ');
q.pop();
q = q.join(" ");


if(com == 'textarea'){
document.querySelectorAll('textarea')[0].value = (q+' '+text).trim();
document.querySelectorAll('textarea')[0].focus();
}

if(com == 'input'){
document.querySelectorAll('input')[0].value = (q+' '+text).trim();
document.querySelectorAll('input')[0].focus();
}

if(com == 'inputId'){
document.getElementById(inputId).value = (q+' '+text).trim();
document.getElementById(inputId).focus();
}

}














//https://stackoverflow.com/questions/18516942/fastest-general-purpose-levenshtein-javascript-implementation
function levenshtein(s, t) {
    if (s === t) {
        return 0;
    }
    var n = s.length, m = t.length;
    if (n === 0 || m === 0) {
        return n + m;
    }
    var x = 0, y, a, b, c, d, g, h, k;
    var p = new Array(n);
    for (y = 0; y < n;) {
        p[y] = ++y;
    }

    for (; (x + 3) < m; x += 4) {
        var e1 = t.charCodeAt(x);
        var e2 = t.charCodeAt(x + 1);
        var e3 = t.charCodeAt(x + 2);
        var e4 = t.charCodeAt(x + 3);
        c = x;
        b = x + 1;
        d = x + 2;
        g = x + 3;
        h = x + 4;
        for (y = 0; y < n; y++) {
            k = s.charCodeAt(y);
            a = p[y];
            if (a < c || b < c) {
                c = (a > b ? b + 1 : a + 1);
            }
            else {
                if (e1 !== k) {
                    c++;
                }
            }

            if (c < b || d < b) {
                b = (c > d ? d + 1 : c + 1);
            }
            else {
                if (e2 !== k) {
                    b++;
                }
            }

            if (b < d || g < d) {
                d = (b > g ? g + 1 : b + 1);
            }
            else {
                if (e3 !== k) {
                    d++;
                }
            }

            if (d < g || h < g) {
                g = (d > h ? h + 1 : d + 1);
            }
            else {
                if (e4 !== k) {
                    g++;
                }
            }
            p[y] = h = g;
            g = d;
            d = b;
            b = c;
            c = a;
        }
    }

    for (; x < m;) {
        var e = t.charCodeAt(x);
        c = x;
        d = ++x;
        for (y = 0; y < n; y++) {
            a = p[y];
            if (a < c || d < c) {
                d = (a > d ? d + 1 : a + 1);
            }
            else {
                if (e !== s.charCodeAt(y)) {
                    d = c + 1;
                }
                else {
                    d = c;
                }
            }
            p[y] = d;
            c = a;
        }
        h = d;
    }

    return h;
}



