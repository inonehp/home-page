// v.1.0.3



// https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/Implement_a_settings_page


//store set item
//https://news.ycombinator.com/item?id=25218240



function saveOptions(e) {
e.preventDefault();

let dataURLRedirectListArr = [];


if(document.querySelectorAll('.classURLFirst') != undefined){
let getData = document.querySelectorAll('.classURLFirst');
getData.forEach((item, index) => {
let URLFirst33 = document.getElementsByClassName("classURLFirst")[index].value;
let URLSecond33 = document.getElementsByClassName("classURLSecond")[index].value;
dataURLRedirectListArr.push({'URLFirst':URLFirst33, 'URLSecond':URLSecond33});
});

//https://stackoverflow.com/questions/23728626/localstorage-and-json-stringify-json-parse
//browser.storage.sync.set({
browser.storage.local.set({
    dataURLRedirectList: JSON.stringify(dataURLRedirectListArr)
  });
//document.querySelector("#msg").innerHTML = 'status: '+document.querySelector("#q").value;

}




}





function restoreOptions() {

function setCurrentChoice(result) {
//document.querySelector("#q").value = result.rUrl || "https://example.com";
//document.querySelector("#q").value = result.rUrl || "";

if(result.dataURLRedirectList){
var getData =  JSON.parse(result.dataURLRedirectList);


getData.forEach((item, index) => {
if(index != undefined&&index != "undefined"){
document.getElementsByClassName("classURLFirst")[index].value = getData[index].URLFirst;
document.getElementsByClassName("classURLSecond")[index].value =  getData[index].URLSecond;
}
});

}
}

function onError(error) {
console.log(`Error: ${error}`);
}

//let getting = browser.storage.sync.get("dataURLRedirectList");
let getting = browser.storage.local.get("dataURLRedirectList");
getting.then(setCurrentChoice, onError);

}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);


