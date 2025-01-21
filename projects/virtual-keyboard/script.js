// v.1.0.1
//inspired:
//Free Virtual Keyboard - Free download and install on Windows | Microsoft Store https://apps.microsoft.com/detail/9nblggh35mpc
//Try Google Input Tools online – Google Input Tools https://www.google.com/inputtools/try/ 
//Touch typing - Wikipedia https://en.wikipedia.org/wiki/Touch_typing
//fixme: shift in input and kbr.



let upperCaseStatus = [];
let shiftStatus = [];
upperCaseStatus[0] = "off";
shiftStatus[0] = 0;
let taskKeyVKbr = "";
let keyEmpty = "";

function virtualKeyborad(inputId, printId, upperCaseStatus, taskKeyVKbr){

upperCaseStatus[0] = upperCaseStatus;

let headerStyle = "";


//console.log(window.innerWidth);
if (window.innerWidth >= 550/*||conf["confDevice"] != "mobile"*/){

var keysRow1 = [
{"text":"`", "text2":"green"},
{"text":"1", "text2":"green"},
{"text":"2", "text2":"orange"},
{"text":"3", "text2":"green"},
{"text":"4", "text2":"orange"},
{"text":"5", "text2":"orange"},
{"text":"6", "text2":"green"},
{"text":"7", "text2":"green"},
{"text":"8", "text2":"orange"},
{"text":"9", "text2":"green"},
{"text":"0", "text2":"orange"},
{"text":"-", "text2":"orange"},
{"text":"=", "text2":"orange"},
{"text":"⌫", "text2":"orange"},
{"text":"⌫", "text2":"orange"},
];
var keysRow2 = [
{"text":"↹", "text2":"grey"},
{"text":"q", "text2":"green"},
{"text":"w", "text2":"orange"},
{"text":"e", "text2":"green"},
{"text":"r", "text2":"orange"},
{"text":"t", "text2":"orange"},
{"text":"y", "text2":"green"},
{"text":"u", "text2":"green"},
{"text":"i", "text2":"orange"},
{"text":"o", "text2":"green"},
{"text":"p", "text2":"orange"},
{"text":"[", "text2":"orange"},
{"text":"]", "text2":"orange"},
{"text":"!backslash", "text2":"orange"},
];
var keysRow3 = [
{"text":"⇪", "text2":"grey"},
{"text":"a", "text2":"green"},
{"text":"s", "text2":"orange"},
{"text":"d", "text2":"green"},
{"text":"f", "text2":"orange"},
{"text":"g", "text2":"orange"},
{"text":"h", "text2":"green"},
{"text":"j", "text2":"green"},
{"text":"k", "text2":"orange"},
{"text":"l", "text2":"green"},
{"text":";", "text2":"orange"},
{"text":"!singlequote", "text2":"orange"},
{"text":"↵", "text2":"orange"},
];
var keysRow4 = [
{"text":"⇧", "text2":"green"},
{"text":"z", "text2":"green"},
{"text":"x", "text2":"orange"},
{"text":"c", "text2":"green"},
{"text":"v", "text2":"orange"},
{"text":"b", "text2":"orange"},
{"text":"n", "text2":"green"},
{"text":"m", "text2":"green"},
{"text":",", "text2":"orange"},
{"text":".", "text2":"green"},
{"text":"/", "text2":"orange"},
{"text":"⇧", "text2":"orange"},
];
var keysRow5 = [
{"text":"Ctrl", "text2":"grey"},
{"text":"Alt", "text2":"grey"},
{"text":"␣", "text2":"orange"},
{"text":"Alt", "text2":"grey"},
{"text":"Ctrl", "text2":"grey"},
];


} else {


var keysRow1 = [
{"text":"1", "text2":"d2"},
{"text":"2", "text2":"d2"},
{"text":"3", "text2":"d2"},
{"text":"4", "text2":"d2"},
{"text":"5", "text2":"d2"},
{"text":"6", "text2":"d2"},
{"text":"7", "text2":"d2"},
{"text":"8", "text2":"d2"},
{"text":"9", "text2":"d2"},
{"text":"0", "text2":"d2"},
];
var keysRow2 = [
{"text":"q", "text2":"d2"},
{"text":"w", "text2":"d2"},
{"text":"e", "text2":"d2"},
{"text":"r", "text2":"d2"},
{"text":"t", "text2":"d2"},
{"text":"y", "text2":"d2"},
{"text":"u", "text2":"d2"},
{"text":"i", "text2":"d2"},
{"text":"o", "text2":"d2"},
{"text":"p", "text2":"d2"},
];
var keysRow3 = [
{"text":"a", "text2":"d2"},
{"text":"s", "text2":"d2"},
{"text":"d", "text2":"d2"},
{"text":"f", "text2":"d2"},
{"text":"g", "text2":"d2"},
{"text":"h", "text2":"d2"},
{"text":"j", "text2":"d2"},
{"text":"k", "text2":"d2"},
{"text":"l", "text2":"d2"},
];
var keysRow4 = [
{"text":"⇧", "text2":"d2"},
{"text":"z", "text2":"d2"},
{"text":"x", "text2":"d2"},
{"text":"c", "text2":"d2"},
{"text":"v", "text2":"d2"},
{"text":"b", "text2":"d2"},
{"text":"n", "text2":"d2"},
{"text":"m", "text2":"d2"},
{"text":"⌫", "text2":"d2"},
];
var keysRow5 = [
{"text":"↵", "text2":"d2"},
{"text":",", "text2":"d2"},
{"text":"␣", "text2":"d2"},
{"text":".", "text2":"d2"},
{"text":"↵", "text2":"d2"},
];

}


let printAllKeys = "";

let vKeyLastKey = [];

keysRow1.forEach((val, index) => {
if (upperCaseStatus == "on"){
val["text"] = val["text"].toUpperCase();
}
printAllKeys += `<div id="vKeyId${val["text"]}" class="vKey" onclick="vKeyClicked('${inputId}', '${val["text"]}');return false;" style="border-bottom: 4px solid var(--${val["text2"]});">${val["text"]}</div>`;
});
printAllKeys += `<br>`;

keysRow2.forEach((val, index) => {
if (upperCaseStatus == "on"){
val["text"] = val["text"].toUpperCase();
}
if (val["text"].toLowerCase() == "!backslash"){
printAllKeys += `<div id="vKeyId${val["text"]}" class="vKey" onclick="vKeyClicked('${inputId}', '${val["text"]}');return false;" style="border-bottom: 4px solid var(--${val["text2"]});">\\</div>`;
} else {
printAllKeys += `<div id="vKeyId${val["text"]}" class="vKey" onclick="vKeyClicked('${inputId}', '${val["text"]}');return false;" style="border-bottom: 4px solid var(--${val["text2"]});">${val["text"]}</div>`;
}
});
printAllKeys += `<br>`;

keysRow3.forEach((val, index) => {
if (upperCaseStatus == "on"){
val["text"] = val["text"].toUpperCase();
}
if (val["text"].toLowerCase() == "!singlequote"){
printAllKeys += `<div id="vKeyId${val["text"]}" class="vKey" onclick="vKeyClicked('${inputId}', '${val["text"]}');return false;" style="border-bottom: 4px solid var(--${val["text2"]});">'</div>`;
} else {
printAllKeys += `<div id="vKeyId${val["text"]}" class="vKey" onclick="vKeyClicked('${inputId}', '${val["text"]}');return false;" style="border-bottom: 4px solid var(--${val["text2"]});">${val["text"]}</div>`;
}
});
printAllKeys += `<br>`;

keysRow4.forEach((val, index) => {
if (upperCaseStatus == "on"){
val["text"] = val["text"].toUpperCase();
}
printAllKeys += `<div id="vKeyId${val["text"]}" class="vKey" onclick="vKeyClicked('${inputId}', '${val["text"]}');return false;" style="border-bottom: 4px solid var(--${val["text2"]});">${val["text"]}</div>`;
});
printAllKeys += `<br>`;


printAllKeys += `<div class="vKeyRow5">`;
keysRow5.forEach((val, index) => {
printAllKeys += `<div id="vKeyId${val["text"]}" class="vKey" onclick="vKeyClicked('${inputId}', '${val["text"]}');return false;" style="border-bottom: 4px solid var(--${val["text2"]});">${val["text"]}</div>`;
});
printAllKeys += `</div>`;

printAllKeys = `<div class="vKeyboard">${printAllKeys}</div>`;

headerStyle = `

<style>
.vKeyboard {
background-color: var(--bg);

margin: 5px 0;
padding: 7px;
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);


justify-content: center;
align-items: center;
text-align: center;
overflow-wrap: anywhere;

border-radius: 5px; 
}

.vKey {
display: inline-flex;
padding: var(--padding);
margin: 1px;

background-color: var(--l2);
border: 1px solid var(--d3);

display: inline-flex;
justify-content: center;
align-items: center;
text-align: center;
width: auto;
min-width: 28px;
max-width: 100%;
overflow-wrap: anywhere;
white-space: normal;
word-break: break-word;
cursor: pointer;

border-radius: 5px;

font-size: small;
}

.vKey:hover {
background-color: var(--l3);
}

.vKeyRow5 {
display: grid;
grid-template-columns: auto auto 1fr auto auto;
grid-gap: 2px;
}

@media(max-width: 550px){
.vKey {
min-width: 28px;
}
}

@media(max-width: 350px){
.vKey {
min-width: 24px;
}
}

@media(max-width: 300px){
.vKey {
min-width: auto;
font-size: x-small;
}
}



/* Define the keyframes for the blink animation */
@keyframes blink {
0% {
color: var(--orange);
background-color: var(--l4);
}
  50% {
color: var(--red);
background-color: var(--l4);
  }
  100% {
color: var(--orange);
background-color: transparent;
  }
}

.vKeyPressedAni {
animation: blink .35s;
}

</style>


`;

document.head.insertAdjacentHTML("beforeend", headerStyle);

document.getElementById(printId).innerHTML = printAllKeys;

//if (taskKeyVKbr != undefined&&taskKeyVKbr != ""){ keyPressedMakeAni(taskKeyVKbr); }


}



document.addEventListener('keydown', function(event) {
//document.getElementById(inputId).addEventListener('keydown', function(event) {
//console.log(`Key pressed: ${event.key}`);
//console.log(event.target.nodeName);




let keyPressed = event.key;
if (keyPressed == "Enter"){ keyPressed = "↵"; }
if (keyPressed == "Backspace"){ keyPressed = "⌫"; }
if (keyPressed == "Tab"){ keyPressed = "↹"; }
if (keyPressed == "Shift"){
keyPressed = "⇧";
shiftStatus[0]++;
//upperCaseStatus[0] = "on";
virtualKeyborad(inputId, printId, "on");
}
if (keyPressed == "\\"){ keyPressed = "!backslash"; }
if (keyPressed == "'"){ keyPressed = "!singlequote"; }
if (keyPressed == "CapsLock"&&upperCaseStatus[0] == "on"){
keyPressed = "⇪";
upperCaseStatus[0] = "off";
}
if (keyPressed == "CapsLock"&&upperCaseStatus[0] == "off"){
keyPressed = "⇪";
upperCaseStatus[0] = "on";
}
if (keyPressed == "Control"){ keyPressed = "Ctrl"; }
if (keyPressed == "AltGraph"){ keyPressed = "Alt"; }
if (keyPressed == "Alt"){ keyPressed = "Alt"; }
if (keyPressed == " "){ keyPressed = "␣"; }


//console.log(document.getElementById("vKeyId" + event.key).classList.contains('vKeyPressedAni'));




//https://stackoverflow.com/questions/348792/how-do-you-tell-if-caps-lock-is-on-using-javascript
var caps = event.getModifierState && event.getModifierState( 'CapsLock' );
//console.log( caps ); // true when you press the keyboard CapsLock key
switch (caps) {
case true:
virtualKeyborad(inputId, printId, "on");
upperCaseStatus[0] = "on";
break;

default:
virtualKeyborad(inputId, printId, "off");
upperCaseStatus[0] = "off";
}


if (event.target.nodeName == 'INPUT'||event.target.nodeName == 'TEXTAREA'){
} else {
vKeyClicked(inputId, String(event.key), upperCaseStatus[0], keyEmpty);
}

keyPressedMakeAni(keyPressed);

});




function keyPressedMakeAni(keyPressed){
if (document.getElementById("vKeyId" + keyPressed) != null){
document.getElementById("vKeyId" + keyPressed).classList.add("vKeyPressedAni");

//Bing Copilot: delay
setTimeout(() => {
if (document.getElementById("vKeyId" + keyPressed) != null&&document.getElementById("vKeyId" + keyPressed).classList.contains('vKeyPressedAni')){
document.getElementById("vKeyId" + keyPressed).classList.remove('vKeyPressedAni');
}
}, 350); // 1000 milliseconds = 1 second
}
}


function vKeyClicked(inputId, val, upperCaseStatus2, keyEmpty){


if (upperCaseStatus2 != undefined){ upperCaseStatus[0] = upperCaseStatus2; }
if (upperCaseStatus[0] == "on"||upperCaseStatus2 == "on"){
virtualKeyborad(inputId, printId, "on");
val = val.toUpperCase();
}


if (shiftStatus[0] >= 1){
shiftStatus[0] = 0;
virtualKeyborad(inputId, printId, "off");
val = val.toUpperCase();
}


let textAll = document.getElementById(inputId).value;

keyPressedMakeAni(val);

if (val.toLowerCase() == "!backslash"||val == "\\"){ val = "\\"; }
if (val.toLowerCase() == "!singlequote"||val == "'"){ val = "'"; }
if (val == "↵"||val.toLowerCase() == "enter"){ val = `
`; }
if (val == "↹"||val == "Tab"){ val = "    "; }
if (val.toLowerCase() == "ctrl"||val.toLowerCase() == "control"){ val = ""; }
if (val.toLowerCase() == "alt"||val.toLowerCase() == "altgraph"){ val = ""; }
if (val.toLowerCase() == "␣"){ val = " "; }
if (val.toLowerCase() == "capslock"&&upperCaseStatus[0] == "off"||val == "⇪"&&upperCaseStatus[0] == "off"){
val = ""; upperCaseStatus[0] = "on"; virtualKeyborad(inputId, printId, "on");
}
if (val.toLowerCase() == "capslock"&&upperCaseStatus[0] == "on"||val == "⇪"&&upperCaseStatus[0] == "on"){
val = ""; upperCaseStatus[0] = "off"; virtualKeyborad(inputId, printId, "off");
}
if (val.toLowerCase() == "shift"&&shiftStatus[0] <= 0||val == "⇧"&&shiftStatus[0] <= 0){
val = ""; shiftStatus[0]++; virtualKeyborad(inputId, printId, "on");
}
if (val.toLowerCase() == "shift"&&shiftStatus[0] >= 1||val == "⇧"&&shiftStatus[0] >= 1){
val = ""; shiftStatus[0] = 0; virtualKeyborad(inputId, printId, "off");
}
//console.log(vKeyCapsLockStatus);

if (val == ("⌫")||val.toLowerCase() == "backspace"){
val = "";
//delme backup notworking
//document.getElementById(inputId).focus();
//document.dispatchEvent(new KeyboardEvent('keydown', {'key':'Backspace'} ));
//document.dispatchEvent(new KeyboardEvent( 'keyup' , {'key':'Backspace'} ));

//https://stackoverflow.com/questions/2897155/get-cursor-position-in-characters-within-a-text-input-field
let vKeyCursorPos = Number(document.getElementById(inputId).selectionStart);
//console.log(vKeyCursorPos);
//textAll = textAll.slice(0, vKeyCursorPos);

String.prototype.removeCharAt = function (i) {
    var tmp = this.split(''); // convert to an array
    tmp.splice(i - 1 , 1); // remove 1 element from the array (adjusting for non-zero-indexed counts)
    return tmp.join(''); // reconstruct the string
}
textAll = textAll.removeCharAt(vKeyCursorPos);


/*fixme
//https://developer.mozilla.org/en-US/docs/Web/API/Selection/setPosition
document.getElementById(inputId).focus();
const body = document.getElementById(inputId);
window.getSelection().setPosition(body[0], 0);
*/
}


if (upperCaseStatus[0] == "on"||shiftStatus[0] >= 1){
val = val.toUpperCase();
}

textAll += val;



document.getElementById(inputId).value = textAll;
}




// run
virtualKeyborad(inputId, printId, "", "");

//https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event
onresize = (event) => {
virtualKeyborad(inputId, printId, "", "");
};
