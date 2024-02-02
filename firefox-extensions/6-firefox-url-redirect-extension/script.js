// v.1.0.5
// firefox


let countURLRedirectCancelStatus = ''; // if input cancel, not open URL


//https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/Implement_a_settings_page
function onError(error) {
console.log(`Error: ${error}`);

}


function onGot(result) {
// if not set key
let getData = [/*
{"URLFirst":"http://test.com/","URLSecond":"https://google.com/"},
{"URLFirst":"http://example.com/","URLSecond":"https://bing.com/"}*/
];

if(result.dataURLRedirectList) {

//https://stackoverflow.com/questions/23728626/localstorage-and-json-stringify-json-parse
getData =  JSON.parse(result.dataURLRedirectList);
}

URLRedirect(getData);


onhashchange = (event) => {
URLRedirect(getData);
};

}





function URLRedirect(getData){

var currentURL = location.href;
var rURL = '';
var rURLCom = '';
var count = 0;

// list URL from settings

for (var index = 0; index < getData.length; index++) {



if(rURLCom != 'redirect'){

let URLFirst = getData[index].URLFirst;
let URLSecond =  getData[index].URLSecond;

URLFirst = URLFirst.replaceAll('%CurrentURL', location.href);
URLSecond = URLSecond.replaceAll('%CurrentURL', location.href);

//console.log(URLFirst);
//console.log(location.href.slice(0, -1));

let URLFirstCheck = URLFirst.replaceAll('!replace', '');
URLFirstCheck = URLFirstCheck.replaceAll('*', '').trim();
let URLSecondCheck = URLSecond.replaceAll('!replace', '');
URLSecondCheck = URLSecond.replaceAll('*', '').trim();

if(URLFirst != ''&&URLSecondCheck != location.href&&URLFirst != URLSecond){

// 1 if strict ==
if(rURLCom != 'redirect'&&URLFirstCheck == location.href||rURLCom != 'redirect'&&location.href[location.href.length - 1] == '/'&&URLFirstCheck == location.href.slice(0, -1)){
rURL = URLSecond;
rURLCom = 'redirect';
}



// 2 if *
if(rURLCom != 'redirect'&&(URLFirst).indexOf('*') != -1){
let URLFirstSplit = URLFirst.split('*');
let URLRedirect2Check = true;
URLFirstSplit.forEach((item33, index33) => {
if((location.href).indexOf(item33) == -1){
URLRedirect2Check = false;
}
});

if(URLRedirect2Check == true){
rURL = URLSecond;
rURLCom = 'redirect';
}
}


// 3 replace
if(count == 0&&rURLCom != 'redirect'&&location.href != URLSecond&&(URLFirst).indexOf('!replace') != -1||location.href != URLSecond&&(URLSecond).indexOf('!replace') != -1){
rURL = ((location.href).replaceAll(`${URLFirstCheck}`, `${URLSecondCheck}`)).trim();
rURLCom = 'redirect';
count++;
}





}


}






}



/*console.log(window.location);
console.log(rURL);*/
if(countURLRedirectCancelStatus != 'cancel'&&rURL != ''&&location.href != rURL&&rURLCom == 'redirect'){
window.location.href = rURL;
countURLRedirectCancelStatus = 'cancel';
//console.log(countURLRedirectCancelStatus);
}


rURL = '';
rURLCom = '';
count = 0;


//console.log('test'.replaceAll(`test`, `testTest2`));
};




function redirectURLrunAll(rURLMode){
const getting = browser.storage.sync.get("dataURLRedirectList");
getting.then(onGot, onError);
}

redirectURLrunAll();


//https://stackoverflow.com/questions/34999976/detect-changes-on-the-url
// store url on load
let currentPage = location.href;
// listen for changes
setInterval(function(){
if(currentPage != location.href){
//console.log(currentPage+'||||||'+location.href);
currentPage = location.href;
redirectURLrunAll('check1');
}

}, 1000);








