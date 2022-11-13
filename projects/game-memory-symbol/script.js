// v.2.3.10

const limitMaintl = 10;

var i = 0;
var i2 = 0;
var tl = 0;
var print = '';
var result = '';
var resultStart = '';
var resultTmp = '';

var arrTask = [];
var arrResultFinal = [];
var arrLastTwo = [];

var error = '';


const counts =[];

var symbolList = '';

/*var symbolList += 
"∾∿Ææ𝔄𝔞ℵ∧∠⦤∟⊾⦝∢⍼𝔸𝕒≊𝒜∳⊽⦰ℬΒβℶ≬𝔅𝔟◯⋃⨀⨁⨂⨆★▽△⨄⋁⋀⧫▪▴◂▸␣▒░▓█=⌐𝔹𝕓⊥⋈⧉╗╔┌═─╦┴⊟⊠╝╚└║│╬¦\⧅⟈•⪮≏≎⋒∩∰⦲✓○≗↺↻⊛⊚⊝⊙®Ⓢ⊖⊕⧃⧂∲♣∷:≔@∘≅≡∯∮∐©℗↵⨯✗⋯⤸⤵⋞⋟⤽⋓≍⊍⤼¤↶↷⋎⋏‡†ℸ↡↓⊣⇊⦱⥥⇃⋄♦ϝ⋲÷⋇Ђ⌞$◌≑∔⊡⌆⇓⇐⇔⟸⟺⟹⇒⊨⇑⇕∥⤓⇵▿▾⥯Џџ⟿≕⪚⪕∅⋕½⅓¼⅕⅙⅛⅔⅖¾⅗⅜⅘⅚⅝⅞⊹⤥⤦⇿↩↪⨌∭⊷∈∬∫⋂⨗♂✠⤅↧↤↥▮∡℧∓μ∇⇖↖⤧⊗¶‰‱☎ϖ⊞⌓≾⊰Ψ⟫↠";*/

symbolList += 
"😀 😃 😄 😁 😆 😅 😂 🤣 🥲 ☺️ 😊 😇 🙂 🙃 😉 😌 😍 🥰 😘 😗 😙 😚 😋 😛 😝 😜 🤪 🤨 🧐 🤓 😎 🥸 🤩 🥳 😏 😒 😞 😔 😟 😕 🙁 ☹️ 😣 😖 😫 😩 🥺 😢 😭 😤 😠 😡 🤬 🤯 😳 🥵 🥶 😱 😨 😰 😥 😓 🤗 🤔 🤭 🤫 🤥 😶 😐 😑 😬 🙄 😯 😦 😧 😮 😲 🥱 😴 🤤 😪 😵 🤐 🥴 🤢 🤮 🤧 😷 🤒 🤕 🤑 🤠 😈 👿 👹 👺 🤡 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾";

symbolList += 
"👋 🤚 🖐 ✋ 🖖 👌 🤌 🤏 ✌️ 🤞 🤟 🤘 🤙 👈 👉 👆 🖕 👇 ☝️ 👍 👎 ✊ 👊 🤛 🤜 👏 🙌 👐 🤲 🤝 🙏 ✍️ 💅 🤳 💪 🦾 🦵 🦿 🦶 👣 👂 🦻 👃 🫀 🫁 🧠 🦷 🦴 👀👁👅 👄 💋 🩸";

symbolList += 
"👋🍏 🍎 🍐 🍊 🍋 🍌 🍉 🍇 🍓 🫐 🍈 🍒 🍑 🥭 🍍 🥥 🥝 🍅 🍆 🥑 🥦 🥬 🥒🌶🫑 🌽 🥕 🫒 🧄 🧅 🥔 🍠 🥐 🥯 🍞 🥖 🥨 🧀 🥚 🍳 🧈 🥞 🧇 🥓 🥩 🍗 🍖 🦴 🌭 🍔 🍟 🍕 🫓 🥪 🥙 🧆 🌮 🌯 🫔 🥗 🥘 🫕 🥫 🍝 🍜 🍲 🍛 🍣 🍱 🥟 🦪 🍤 🍙 🍚 🍘 🍥 🥠 🥮 🍢 🍡 🍧 🍨 🍦 🥧 🧁 🍰 🎂 🍮 🍭 🍬 🍫 🍿 🍩 🍪 🌰 🥜🍯🥛 🍼 🫖 ☕️ 🍵 🧃 🥤 🧋 🍶 🍺 🍻 🥂 🍷 🥃 🍸 🍹 🧉 🍾 🧊 🥄 🍴🍽🥣 🥡 🥢 🧂 ";








// romove dublicate
symbolList = symbolList.replace(/\s/g, '');
symbolList = symbolList.replace(/\s+/g, '');
symbolList = symbolList.replace(/ /g, "");

symbolList = [...symbolList];

var symbolList2 = '';
var checkSymbol = '';
symbolList.forEach(function (x) {
counts[x] = (counts[x] || 0) + 1;
checkSymbol = x;
if(counts[x] >= 2){
//alert(x+' = '+counts[x]);
checkSymbol = '';
}
if(checkSymbol != ''){
symbolList2 += checkSymbol;
}
});

 symbolList = [...symbolList2];
 var symbol = [...symbolList2];









symbol =  [...symbolList];



function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
//console.log(arr);
}

shuffleArray(symbol);

//  remove dublicate

//console.log(counts);
//console.log(symbol.length);










var maingeturl = window.location;
var mainurl = new URL(maingeturl);
var maintl = mainurl.searchParams.get("tl");

if(maintl != null){ localStorage.setItem("tl", maintl); }else{
if(localStorage.getItem("tl")){ maintl = localStorage.getItem("tl"); }
}
if(maintl == null){ maintl = '4'; }

if(maintl >= limitMaintl){ maintl =limitMaintl; }


symbol = symbol.slice(0, maintl * maintl / 2);


symbol = symbol.join("");
symbol = symbol.repeat(2);
symbol = [...symbol]; 

shuffleArray(symbol);

arrTask = symbol;


//console.log(JSON.stringify(arrTask));

/*jsonArrTask = JSON.stringify(symbol);
console.log(jsonArrTask);
console.log(jsonArrTask[1]);
jsonArrTask = JSON.parse(jsonArrTask);
console.log(jsonArrTask[ jsonArrTask.length-1]['symbol']);
*/



print = '';
i = 2;
while (i < symbolList.length&&tl <= symbolList.length * 2) {
tl = i * i;
if(tl < symbolList.length * 2&&i <= limitMaintl){
//symetry
//if(i * i / 2 % i == 0){}
if(maintl == i){
print += '<span><a class="button light4 border2 op" style="padding: 0px 7px; " href="?tl='+i+'">'+i+'x'+i+'</a></span>';
}else{
print += '<span><a class="button light border2 op" style="padding: 0px 7px;" href="?tl='+i+'">'+i+'x'+i+'</a></span>';
}

//console.log(tl);
//arrSymbol.push({"row": i, "tl":tl}); 



} 
i++;
}

document.getElementById("tableLenght").innerHTML = print;






/*jsonArrInputHistory = JSON.stringify(arrInputHistory);
jsonArrInputHistory = JSON.parse(jsonArrInputHistory);
console.log(jsonArrInputHistory[ jsonArrInputHistory.length-1]['symbol']);*/






















// input
var com = 'start';
var stap = 1;

var arrInputHistory = [];


if(com == 'start') {

if(maintl * maintl / 2 % maintl == 0){
arrResultFinal = '*'.repeat(maintl * maintl);
}else{
arrResultFinal = '*'.repeat(maintl * maintl  - 1);
}

arrResultFinal = [...arrResultFinal];

drawResult(arrResultFinal, maintl, 'result');
drawResult(arrResultFinal, maintl, 'result2');
}







result = '';
//arrTask.forEach(main);










function drawResult(symbol, maintl, printPlace){
i2 = 1;
print = '';
symbol.forEach(myFunction11);
function myFunction11(item, index) {
if(item == '*') { item = '&nbsp;'; }
//console.log(item);
if(item == undefined){ print += ''; } else {
//print += '<button  id="'+index+'" class="light button border2  value="">'+index+item+'</button>';
print += '<button  id="'+index+'" class="light3 button border2">'+item+'</button>';
//document.getElementById(index).innerHTML =  item;
}

if(maintl <= 7){
if(i2 == maintl){ print += '<br />'; i2 = 0;   }
}

i2++;
}

if(printPlace == 'result2'){
i2 = 1;
print = '';
symbol.forEach(myFunction15);
function myFunction15(item, index) {
if(item == '*') { item = '&nbsp;'; }
if(item == undefined){ print += ''; } else {
//print += '<button class="light3 button border2">'+item+'</button>';
document.getElementById(index).innerHTML =  item;
}
if(maintl <= 7){
if(i2 == maintl){ print += '<br />'; i2 = 0;   }
}
i2++;
}
}

if(printPlace == 'inputHistory'){
print = '';
symbol.forEach(myFunction33);
function myFunction33(item, index) {
//if(item == undefined){ print += ''; } else {}
symbol = Object.values(item);
print += '<button  class="op light button border2">'+symbol[1]+'</button>';
}
}

if(printPlace != 'result2'){
document.getElementById(printPlace).innerHTML = print;
}
print = '';
}










symbol.forEach(main);
function main(item, index) {
document.getElementById(index).addEventListener("click", function() {

//function reply_click(clicked_id){
//index = clicked_id;
item = arrTask[index];
//arrInputHistory.push(item); 
arrInputHistory.push({"id":index, "symbol":item}); 



/*btn = document.getElementById(index);
btn.innerHTML = symbol[index];*/

//alert(arrInputHistory);


if(stap == 3){
stap = 1;
}
//console.log('stap: '+stap);
//console.log('index: '+index);






error = '';
/*console.log(arrInputHistory[arrInputHistory.length - 1]);
console.log(Object.values(arrInputHistory[arrInputHistory.length - 1]));*/

var currentInput = Object.values(arrInputHistory[arrInputHistory.length  - 1]);
var currentInputIndex = currentInput[0];
var currentInputSymbol = currentInput[1];
if(arrInputHistory.length >= 2){
var prevInput = Object.values(arrInputHistory[arrInputHistory.length  - 2]);
var prevInputIndex = prevInput[0];
var prevInputSymbol = prevInput[1];
}


if(currentInputIndex == prevInputIndex){com = 'error';}
if(arrResultFinal[currentInputIndex] != '*'){ com = 'error'; }

if(com != 'error'){
arrLastTwo = arrLastTwo.slice(-2);
if(currentInputIndex == arrLastTwo[0]||currentInputIndex == arrLastTwo[1]){ 
if(stap == 1){
com = 'error';
document.getElementById(arrLastTwo[0]).innerHTML =  arrTask[arrLastTwo[0]];
document.getElementById(arrLastTwo[1]).innerHTML =  arrTask[arrLastTwo[1]];
}
}else{
 drawResult(arrResultFinal, maintl, 'result2');
arrLastTwo.push(index);
}
}
//if(stap == 3||stap == 1){ drawResult(arrResultFinal, maintl, 'result2'); }






//if(stap == 1&&com != 'error'){ drawResult(arrResultFinal, maintl, 'result2'); }

if(com == 'error'){

//drawResult(arrResultFinal, maintl, 'result2'); 


stap--;
// if error
arrInputHistory.pop(); 
document.getElementById("alert").innerHTML = '<audio style="display:none" autoplay="false" src="/audio/error.mp3" id="bgAudio">';

//
com = '';
}


if(com != 'error'){

//document.getElementById("alert2").innerHTML = '<audio style="display:none" autoplay="false" src="/audio/click.mp3" id="bgAudio">';



document.getElementById(currentInputIndex).innerHTML =  currentInputSymbol;





if(stap == 2){
/*console.log('item: ,'+item);
console.log('currentInputSymbol: ,'+currentInputSymbol);
console.log('prevInputSymbol: ,'+prevInputSymbol);*/

if(item == currentInputSymbol&&item == prevInputSymbol){
// small win
arrResultFinal[index] = item;
arrResultFinal[prevInputIndex] = item;
drawResult(arrResultFinal, maintl, 'result2');
document.getElementById("alert").innerHTML = '<audio style="display:none" autoplay="false" src="/audio/ok.mp3" id="bgAudio">';
}else{

drawResult(arrResultFinal, maintl, 'result2');


document.getElementById(currentInputIndex).innerHTML =  currentInputSymbol;
document.getElementById(prevInputIndex).innerHTML =  prevInputSymbol;

}


}



}


if(JSON.stringify(arrResultFinal) === JSON.stringify(arrTask)){
document.getElementById("win").innerHTML = '<span class="orange">Win!!!</span>';
document.getElementById("alert").innerHTML = '<audio style="display:none" autoplay="false" src="/audio/win.mp3" id="bgAudio1">';
}


com = '';

arrInputHistory = arrInputHistory.slice(-10);
// drawResult(arrInputHistory, maintl, 'inputHistory'); // enable disable input history

/*console.log('arrTask'+arrTask);
console.log('arrResultFinal'+arrResultFinal);*/


stap++;


});


}













