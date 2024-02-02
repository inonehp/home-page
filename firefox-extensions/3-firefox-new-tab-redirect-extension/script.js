// v.1.1.0
// firefox




//https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/Implement_a_settings_page
function onError(error) {
  console.log(`Error: ${error}`);

}

function onGot(item) {
let rUrl = "options.html";

if(item.rUrl) {
    rUrl = item.rUrl; 
  }
newTabRedir(rUrl);
}





function newTabRedir(rUrl){

//if(String(window.location.href).indexOf('moz-extension://') >= 0&&String(window.location.href).indexOf('/new-tab-redirect.html') >= 0){ 


// stop infinite redirect current page
let stopRedirect = window.location.href.split('/');
stopRedirect = stopRedirect[stopRedirect.length - 1];
if(String(rUrl).indexOf(stopRedirect) >= 0){
console.log(`redirect stoped for ${rUrl}`);
rUrl = 'options.html';
}
/*
// first 1 redirect
window.open(rUrl, 'NewWindow').focus();
window.close();
*/


// second 2 redirect
//https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/Add_a_button_to_the_toolbar
browser.tabs.create({
url: rUrl
});
window.close();



//rUrl - redirect url
}


//const getting = browser.storage.sync.get("rUrl");
const getting = browser.storage.local.get("rUrl");
getting.then(onGot, onError);




