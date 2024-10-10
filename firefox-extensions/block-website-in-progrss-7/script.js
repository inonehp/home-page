// Block website extension v.1.0.1

/*
function extBlockUrl(url){
var title = encodeURIComponent(document.title);
var url = encodeURIComponent(location.href);
//alert(title);

url = location.href.split("/")[2];

//https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/send
const xhr = new XMLHttpRequest();
xhr.open("POST", "http://localhost/1-keep/filter/ext.php", true);

// Send the proper header information along with the request
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");


xhr.onreadystatechange = () => {
console.log(xhr.readyState);
console.log(xhr.status);
// Call a function when the state changes.
//if (xhr.readyState == 4) {}
//if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
if (xhr.readyState === 4 && xhr.status === 200) {
    // Request finished. Do processing here.
console.log(xhr.responseText);
}

};
xhr.send("url=" + url);
// xhr.send(new Int8Array());
// xhr.send(document);



}

extBlockUrl();*/


//console.log(location.href);
//function fuCheckBlock(url33){}

filterJsonVar.forEach((val, key) => {

if (String(location.href).indexOf(val['url']) != -1){

//document.body.innerHTML = `Blocked`; 
let tag = val["tag"].replaceAll("#"," ");
location.href = "http://localhost/projects/blocked-65/?q=" + val["url"] + `&text=${tag}#`;
//location.href = "options.html";

}

});


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

//const getting = browser.storage.sync.get("dataUrlRedirectList");
const getting = browser.storage.local.get("dataUrlRedirectList");
getting.then(onGot, onError);
