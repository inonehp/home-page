// v.1.0.1
//https://github.com/mdn/webextensions-examples/tree/main/theme-switcher


var autoThemeSwitcherArr = [];


function autoThemeSwitcherSettings(confThemeNameLight, confThemeNameDark){

if (document.getElementById('theme-list-light') != null&&document.getElementById('theme-list-dark') != null){

let themeListLight = document.getElementById('theme-list-light');
let themeListDark = document.getElementById('theme-list-dark');


if (typeof arr === 'undefined'){
var arr = ["test", "test2"];
}


browser.management.getAll().then((extensions) => {


  for (let extension of extensions) {
    if (extension.type !== 'theme') {
      continue;
    }
    let option = document.createElement('option');
    option.textContent = extension.name;
    option.value = extension.id;
//if (extension.enabled) {
    if (option.value == confThemeNameLight) {
option.textContent = extension.name + " (selected)";
option.selected = true;
    }
themeListLight.appendChild(option);
  }


  for (let extension of extensions) {
    if (extension.type !== 'theme') {
      continue;
    }
console.table(extension);
    let option = document.createElement('option');
    option.textContent = extension.name;
    option.value = extension.id;
//if (extension.enabled) {
    if (option.value == confThemeNameDark) {
option.textContent = extension.name + " (selected)";
option.selected = true;
    }
themeListDark.appendChild(option);
  }


});


themeListLight.addEventListener('change', saveThemeLight);
themeListDark.addEventListener('change', saveThemeDark);


function saveThemeLight(e) {
//localStorage.setItem("confThemeNameLight", e.target.value);
browser.storage.local.set({
confAutoThemeSwitcher: JSON.stringify([e.target.value, confThemeNameDark])
});

enableTheme(autoThemeSwitcherArr[0]);
e.preventDefault();
//window.close();
window.location.reload();
//browser.management.setEnabled(e.target.value, true);
//e.preventDefault();
//window.close();
}

function saveThemeDark(e) {
//localStorage.setItem("confThemeNameDark", e.target.value);
autoThemeSwitcherArr[1] = e.target.value;
browser.storage.local.set({
confAutoThemeSwitcher: JSON.stringify([confThemeNameLight, e.target.value])
});
enableTheme(autoThemeSwitcherArr[1]);
e.preventDefault();
//window.close();
window.location.reload();
//browser.management.setEnabled(e.target.value, true);
//e.preventDefault();
//window.close();
}


}
}

//autoThemeSwitcherSettings();








function enableTheme(themeName) {
//console.log(themeName);
if (themeName != undefined){
//browser.management.setEnabled(themeName, true);
var sending = browser.runtime.sendMessage({    greeting: themeName  });

sending.then(handleResponse, handleError);

function handleResponse(message) {
//console.log(`Message from the background script: ${message.response}`);
//console.log(`Message from the background script`);
}

function handleError(error) {
//console.log(`Error: ${error}`);
}


}
}










//console.log(window.matchMedia("(prefers-color-scheme: light)").matches);




function setCurrentChoice(result){
// document.querySelector("#q").value = result.rUrl || "https://example.com";

if (result.confAutoThemeSwitcher != undefined){
var result2 = JSON.parse(result.confAutoThemeSwitcher);
//var result2 = result.confAutoThemeSwitcher;

if (window.matchMedia('(prefers-color-scheme: light)').matches == true){
enableTheme(result2[0]);
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches == true){
enableTheme(result2[1]);
}

autoThemeSwitcherSettings(result2[0], result2[1]);
} else {
autoThemeSwitcherSettings("test", "test");
}

}


function onError(error) {
console.log(`Error: ${error}`);
}


function restoreOptions(){
//let getting = browser.storage.sync.get("rUrl");

let getting = browser.storage.local.get("confAutoThemeSwitcher");
getting.then(setCurrentChoice, onError);

}

//browser.storage.local.remove("confAutoThemeSwitcher")



window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
const newColorScheme = event.matches ? "dark" : "light";
if (newColorScheme == "dark"||newColorScheme == "light"){ restoreOptions(); }
});

//clearInterval(timerID); // The setInterval it cleared and doesn't run anymore.


//console.log(window.matchMedia("(prefers-color-scheme: light)").matches);
/*
//https://discourse.mozilla.org/t/how-to-stop-a-background-script-from-going-idle-in-mv3/128327
browser.alarms.create("keep-loaded-alarm-0", {
  periodInMinutes: 1
});

browser.alarms.onAlarm.addListener(() => {
  console.log("keeping extension alive - log for debug");
restoreOptions();
});*/

//console.log('test');
//"id": "auto-theme-switcher@example.com",

restoreOptions();
