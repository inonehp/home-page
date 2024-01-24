// v.1.0.1







// https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/message_event
// service-worker.js
addEventListener("message", (event) => {
  // event is an ExtendableMessageEvent object
  console.log(`The client sent me a message: ${event.data}`);

  event.source.postMessage("Hi client");
});


var version = "v.1.0.2";




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

'/audio/click.ogg',
'/audio/error.ogg',
'/audio/game-over.ogg',
'/audio/neutral.ogg',
'/audio/ok.ogg',
'/audio/win.ogg',

'index.html',
'style.css',
'script.js',
'/data/quoteJsonVar.js'

])),
  );
});




