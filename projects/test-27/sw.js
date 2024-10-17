// v.1.0.0

console.log('test');

//https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background
if (typeof browser == "undefined") {
  // Chrome does not support the browser namespace yet.
  globalThis.browser = chrome;
}
browser.runtime.onInstalled.addListener(() => {
  browser.tabs.create({ url: "http://example.com/firstrun.html" });
});




async function findInAllTabs(allTabs) {
  for (const tab of allTabs) {
    const results = await browser.find.find("banana", { tabId: tab.id });
    console.log(`In page "${tab.url}": ${results.count} matches.`);
  }
}

browser.tabs.query({}).then(findInAllTabs);




// https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/message_event
// service-worker.js
addEventListener("message", (event) => {
  // event is an ExtendableMessageEvent object
  console.log(`The client sent me a message: ${event.data}`);

  event.source.postMessage("Hi client");
});



/*
var version = "1.0.0";


//https://github.com/mdn/pwa-examples
self.addEventListener('install', (e) => {

e.waitUntil(
caches.open(version).then((cache) => cache.addAll([

'/',
'/js/main.js',
'/js/ad.js',
'/data/adsJsonVar.js',
'/css/light.css',
'/css/dark.css',
'/css/style-main.css',

'index.html',
'style.css',
'script.js'

])),
  );
});
*/



