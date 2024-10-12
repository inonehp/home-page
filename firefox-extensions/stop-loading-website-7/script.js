// Stop load website extension v.1.0.0

let extName = "Stop load website extension ";

//https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/Implement_a_settings_page
function onError(error) {
console.log(`Error: ${error}`);
}

function onGot(result) {
//let getData = ["https://example.com/", "https://example.com/"];
var getData = "https://example.com/";

if(result.dataUrlStopLoadWebsiteList) {
getData =  result.dataUrlStopLoadWebsiteList;
fuExtStopLoadCheck(getData);
} else {
//fuExtStopLoadCheck(getData);
}

}



function fuExtStopLoadCheck(filterList){

//https://stackoverflow.com/questions/767486/how-do-i-check-if-a-variable-is-an-array-in-javascript
if (filterList.constructor === Array){
filterList = filterList.join(',');
}

var delimiter = ["'", '"', "|", ",", " ", "\r\n", "\r", "\n"];
delimiter.forEach((value33) => {
filterList = filterList.replaceAll(value33, "SYMBOLFORSPLIT");
});

(filterList.split("SYMBOLFORSPLIT")).forEach((val, key) => {
//console.log(val);
val = val.trim();
if (val != ""){
if (String(location.href).indexOf(val) != -1){
fuExtStopLoad();
}
}
});


}

function fuExtStopLoad(){
/*stop();
window.stop();
window.addEventListener('load', function() {
//document.body.innerHTML = `${extName}`;
});*/
if(confirm(`${extName}: Stop load page?`) == true){
stop();
window.stop();
window.addEventListener('load', function() {
//document.body.innerHTML = `${extName}`;
}
)
};

}

//const getting = browser.storage.sync.get("dataUrlStopLoadWebsiteList");
const getting = browser.storage.local.get("dataUrlStopLoadWebsiteList");
getting.then(onGot, onError);



