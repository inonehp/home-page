// v.1.1.0



// https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/Implement_a_settings_page


//store local
//https://news.ycombinator.com/item?id=25218240

function saveOptions(e) {
//e.preventDefault();
//browser.storage.sync.set({
browser.storage.local.set({
//dataStopLoadWebsiteList: document.querySelector("#q").value
dataStopLoadWebsiteList: document.getElementById("q").value

  });
//document.querySelector("#msg").innerHTML = 'status: '+document.querySelector("#q").value;
}

function setCurrentChoice(result) {
// document.querySelector("#q").value = result.dataStopLoadWebsiteList || "https://example.com";
//document.querySelector("#q").value = result.dataStopLoadWebsiteList || "";
document.getElementById("q").value = result.dataStopLoadWebsiteList || "";
}

function onError(error) {
    console.log(`Error: ${error}`);
}

//let getting = browser.storage.sync.get("dataStopLoadWebsiteList");
let getting = browser.storage.local.get("dataStopLoadWebsiteList");
getting.then(setCurrentChoice, onError);


//document.addEventListener("DOMContentLoaded", restoreOptions);
//document.addEventListener("load", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);


