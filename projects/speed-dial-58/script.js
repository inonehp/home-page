// Speed dial v.1.1.1

//https://developer.mozilla.org/en-US/docs/Web/API/Storage

function fuLSpeedDial(idForPrint, text, url, com){

if (localStorage.getItem("confSpeedDialData")) {
var confSpeedDialDataArr = localStorage.getItem("confSpeedDialData");
} else {
var confSpeedDialDataArr = [];
confSpeedDialDataArr.push({"text":"Task", "url":"/projects/todo-list-task-31/"});
confSpeedDialDataArr.push({"text":"Idea", "url":"/projects/todo-list-idea-32/"});
confSpeedDialDataArr.push({"text":"Typing", "url":"/projects/typing-speed-14/"});
var confSpeedDialDataArr = JSON.stringify(confSpeedDialDataArr);
}



if(conf["confSpeedDialStatus"] == "random"){
var items = ['on', 'off'];
item = items[Math.floor(Math.random() * items.length)];
conf["confSpeedDialStatus"] = item;
}

if(conf["confSpeedDialStatus"] != "off"){



// pin button and status
let fPinButton = `<a title="Add page to speed dial" id="mPin" class="inlineBlock padding brand" href="javascript:fuLSpeedDial('', '${document.title}', '${location.href}', 'add');">Pin</a>`;
let confSpeedDialDataArrButton = JSON.parse(confSpeedDialDataArr);

confSpeedDialDataArrButton.forEach((item, index) => {

if(index != undefined&&index != "undefined"){
if((String(location.href)).indexOf(item.url) != -1){
fPinButton = `<a title="Speed dial setting" id="mPin" class="inlineBlock padding gray" href="/projects/speed-dial-58/index.html">Pined</a>`;
}

}
});

if(document.getElementById("fPinButton") != null){
document.getElementById("fPinButton").innerHTML = fPinButton; 
}
// // pin button and status






var submitForm = `

<div class="padding2"></div>

<form id="spedDialSubmit">

<label class="xSmall" for="speedDialText">Text:</label>
<input type="text" id="speedDialText" name="speedDialText" placeholder="Example">

<label class="xSmall" for="speedDialUrl">URL:</label>
<input type="text" id="speedDialUrl" name="speedDialUrl" placeholder="https://example.com/">

<a href="#spedDialSubmit" onclick="fuLSpeedDial('', '', '', 'add')"><div class="op xSmall tag2 submit">Add</div></a>

<a href="/projects/speed-dial-58/index.html"><div class="op xSmall tag2 submit">Edit all</div></a>

</form>

`;






switch (com){

case 'print':
let print = "";
let printArr = [];
confSpeedDialDataArr = JSON.parse(confSpeedDialDataArr);
confSpeedDialDataArr.forEach((item, index) => {
if(index != undefined&&index != "undefined"){
if(confSpeedDialDataArr[index].text == undefined){ confSpeedDialDataArr[index].text = 'undefined'; }
let speedDialItemText = (confSpeedDialDataArr[index].text).trim();
let speedDialItemUrl = confSpeedDialDataArr[index].url;
printArr.push(`
<!--${speedDialItemText}--> <a href="${speedDialItemUrl}"><div class="insertIcon tag2 light2 border borderRadius2 itemHeight capitalize op small">${speedDialItemText}</div></a>

`);
}
});

lNaturalSort(printArr);
print = printArr.join(``);

print = `

<!-- Speed dial -->

<span class="xSmall op block tLeft padding1PxList margin1PxList"><span class="bold green">✪</span> Speed dial:</span>

<div class="tagList left small margin2List">

${print}

</div>

<details class="block ">
<summary class="pointer green xSmall">+Add item<!--, <a href="/projects/speed-dial-58/index.html"><div class="op xSmall tag2 green">Edit all</div></a>--></summary>
${submitForm}
</details>

<div class="block padding2 margin2"></div>

<!-- // Speed dial -->

`;


if(document.getElementById(idForPrint) != null){
document.getElementById(idForPrint).innerHTML = print; 
}

break;

case 'add':

if(text == ""){
if(document.getElementById("speedDialText") != null){ text = document.getElementById("speedDialText").value; }
if(document.getElementById("speedDialText") != null){ url = document.getElementById("speedDialUrl").value; }
}

if(text != ""){
confSpeedDialDataArr = JSON.parse(confSpeedDialDataArr);
confSpeedDialDataArr.push({text:text, url:url});
//https://stackoverflow.com/questions/23728626/localstorage-and-json-stringify-json-parse
localStorage.setItem("confSpeedDialData", JSON.stringify(confSpeedDialDataArr));
}

fuLSpeedDial("speedDialPrint", "", "", "print");
break;



case 'setting':
// setting print all
let printSettings = "";
let printSettingsArr = [];
confSpeedDialDataArr = JSON.parse(confSpeedDialDataArr);
confSpeedDialDataArr.forEach((item, index) => {
if(index != undefined&&index != "undefined"){
if(confSpeedDialDataArr[index].text == undefined){ confSpeedDialDataArr[index].text = 'undefined'; }
let speedDialItemText = (confSpeedDialDataArr[index].text).trim();
let speedDialItemUrl = confSpeedDialDataArr[index].url;
printSettingsArr.push(`

<div class="padding2"><hr></div>

<label class="xSmall" for="speedDialText">Text:</label>
<input type="text" id="speedDialText" class="classSpeedDialText" name="speedDialText" value="${speedDialItemText}">

<label class="xSmall" for="speedDialUrl">URL:</label>
<input type="text" id="speedDialUrl" class="classSpeedDialUrl" name="speedDialUrl" value="${speedDialItemUrl}">

`);
}
});

lNaturalSort(printSettingsArr);
printSettings = printSettingsArr.join(``);

printSettings = `

<!-- settings -->
<span class="xSmall op block tLeft padding1PxList margin1PxList"><span class="bold red">✪</span> Edit all:</span>



<form id="spedDialSubmitSetting" method="GET">

${printSettings}

<a href="#spedDialSubmitSetting" onclick="fuLSpeedDial('', '', '', 'update')"><div class="op small tag2 submit">Update all</div></a>
</form>

<div id="spedDialSubmitReset" class="block padding2 margin2"></div>
<a href="#" onclick="fuLSpeedDial('', '', '', 'reset')"><div class="op small tag2 button submit red">Clear data (reset)</div></a>
<div id="spedDialSubmitReset" class="block padding2 margin2"></div>
<!-- // settings -->

`;

if(document.getElementById("speedDialSettingPrint") != null){
document.getElementById("speedDialSettingPrint").innerHTML = printSettings; 
}

fuLSpeedDial("speedDialPrint", "", "", "print");
break;



case 'update':
confSpeedDialDataArr = [];

if(document.querySelectorAll('.classSpeedDialText') != undefined){
let getData = document.querySelectorAll('.classSpeedDialText');
getData.forEach((item, index) => {
let text = document.getElementsByClassName("classSpeedDialText")[index].value;
let url = document.getElementsByClassName("classSpeedDialUrl")[index].value;
if(text == ""||url == ""){
}else{
confSpeedDialDataArr.push({text:text, url:url});
}
});

//https://stackoverflow.com/questions/23728626/localstorage-and-json-stringify-json-parse
localStorage.setItem("confSpeedDialData", JSON.stringify(confSpeedDialDataArr));
}

//fuLSpeedDial("speedDialPrint", "", "", "print");
fuMReload();
break;

case "clear":
case "reset":
localStorage.removeItem("confSpeedDialData");
fuMReload();
break;



default:
//
}

}



//https://stackoverflow.com/questions/2802341/natural-sort-of-alphanumerical-strings-in-javascript
function lNaturalSort(arr){
var collator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'});

return arr.sort(collator.compare);
}



}









