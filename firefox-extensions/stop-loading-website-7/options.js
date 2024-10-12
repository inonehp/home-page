// v.1.1.0



// https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/Implement_a_settings_page


//store local
//https://news.ycombinator.com/item?id=25218240

function saveOptions(e) {
//e.preventDefault();
//browser.storage.sync.set({
browser.storage.local.set({
//dataUrlBlockWebsiteList: document.querySelector("#q").value
dataUrlStopLoadWebsiteList: document.getElementById("q").value

  });
//document.querySelector("#msg").innerHTML = 'status: '+document.querySelector("#q").value;
}

function setCurrentChoice(result) {
// document.querySelector("#q").value = result.rUrl || "https://example.com";
//document.querySelector("#q").value = result.dataUrlBlockWebsiteList || "";
document.getElementById("q").value = result.dataUrlStopLoadWebsiteList || "";
}

function onError(error) {
    console.log(`Error: ${error}`);
}

//let getting = browser.storage.sync.get("rUrl");
let getting = browser.storage.local.get("dataUrlStopLoadWebsiteList");
getting.then(setCurrentChoice, onError);


//document.addEventListener("DOMContentLoaded", restoreOptions);
//document.addEventListener("load", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);


