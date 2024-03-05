// v.1.0.6
// firefox


let countUrlRedirectCancelStatus = ''; // if input cancel, not open URL


//https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/Implement_a_settings_page
function onError(error) {
console.log(`Error: ${error}`);

}


function onGot(result) {
// if not set key
let getData = [/*
{"UrlFirst":"http://test.com/","urlSecond":"https://google.com/"},
{"UrlFirst":"http://example.com/","urlSecond":"https://bing.com/"}*/
];

if(result.dataUrlRedirectList) {

//https://stackoverflow.com/questions/23728626/localstorage-and-json-stringify-json-parse
getData =  JSON.parse(result.dataUrlRedirectList);
}

urlRedirect(getData);


onhashchange = (event) => {
urlRedirect(getData);
};

}





function urlRedirect(getData){

var currentUrl = location.href;
var rUrl = '';
var rUrlCom = '';
var count = 0;

// list URL from settings

for (var index = 0; index < getData.length; index++) {



if(rUrlCom != 'redirect'){

let urlFirst = getData[index].urlFirst;
let urlSecond =  getData[index].urlSecond;

urlFirst = urlFirst.replaceAll('%CurrentUrl', location.href);
urlSecond = urlSecond.replaceAll('%CurrentUrl', location.href);

//console.log(urlFirst);
//console.log(location.href.slice(0, -1));

let urlFirstClean = urlFirst.replaceAll('!replaceAll', '');
urlFirstClean = urlFirstClean.replaceAll('!replace', '');
urlFirstClean = urlFirstClean.replaceAll('*', '').trim();
let urlSecondClean = urlSecond.replaceAll('!replaceAll', '');
urlSecondClean = urlSecondClean.replaceAll('!replace', '');
urlSecondClean = urlSecondClean.replaceAll('*', '').trim();

if(urlFirst != ''&&urlSecond != ''&&urlSecondClean != location.href&&urlFirst != urlSecond){


// 1 if strict by URL ==
// if http (URL)
if(urlFirstClean.slice(0, 4) == 'http'&&rUrlCom != 'redirect'&&urlFirstClean == location.href||urlFirstClean.slice(0, 4) == 'http'&&rUrlCom != 'redirect'&&location.href[location.href.length - 1] == '/'&&urlFirstClean == location.href.slice(0, -1)){
rUrl = urlSecond;
rUrlCom = 'redirect';
count++;
}


// 2.1 by word in URL replace, not strict
// if not http (word)
// ignore query
if(urlFirst.indexOf('!replaceAll') == -1&&urlSecond.indexOf('!replaceAll') == -1){
let urlNotQ = String(location.href).split("?");
urlNotQ = urlNotQ[0];
if(urlFirstClean.slice(0, 4) != 'http'&&count == 0&&rUrlCom != 'redirect'&&urlFirstClean != location.href&&location.href != urlSecond&&urlNotQ.indexOf(
urlFirstClean) != -1&&urlNotQ.indexOf(urlSecondClean) == -1){
rUrl = (String(location.href).replaceAll(`${urlFirstClean}`, `${urlSecondClean}`)).trim();
rUrlCom = 'redirect';
count++;
}
}

// 2.2 by word in URL replace, not strict
// if not http (word)
// with query
if(urlFirst.indexOf('!replaceAll') != -1||urlSecond.indexOf('!replaceAll') != -1){
if(urlFirstClean.slice(0, 4) != 'http'&&count == 0&&rUrlCom != 'redirect'&&urlFirstClean != location.href&&location.href != urlSecond&&String(location.href).indexOf(
urlFirstClean) != -1&&String(location.href).indexOf(urlSecondClean) == -1){
rUrl = (String(location.href).replaceAll(`${urlFirstClean}`, `${urlSecondClean}`)).trim();
rUrlCom = 'redirect';
count++;
}
}

}


}






}



/*console.log(window.location);
console.log(rUrl);*/
if(countUrlRedirectCancelStatus != 'cancel'&&rUrl != ''&&location.href != rUrl&&rUrlCom == 'redirect'){
window.location.href = rUrl;
countUrlRedirectCancelStatus = 'cancel';
//console.log(countUrlRedirectCancelStatus);
}


rUrl = '';
rUrlCom = '';
count = 0;


//console.log('test'.replaceAll(`test`, `testTest2`));
};




function redirectUrlRunAll(rUrlMode){
//const getting = browser.storage.sync.get("dataUrlRedirectList");
const getting = browser.storage.local.get("dataUrlRedirectList");
getting.then(onGot, onError);
}

redirectUrlRunAll();

/*
//https://stackoverflow.com/questions/34999976/detect-changes-on-the-url
// for change when return with history
// store url on load
let currentPage = location.href;
// listen for changes
setInterval(function(){
if(currentPage != location.href){
//console.log(currentPage+'||||||'+location.href);
currentPage = location.href;
redirectUrlRunAll();
}

}, 1000);*/








