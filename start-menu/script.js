// Start menu v.1.0.2


var geturl = location.href;
var url = new URL(geturl);
var q = url.searchParams.get("q");
var q2 = url.searchParams.get("q2");

// fix error
if (typeof fuMHideFileNameExt != 'function'){
function fuMHideFileNameExt(text){ return text; };
}

// mini redirect
if (q != null&&q != ''){

if (q2 != null&&q2 != ''){ q += ' ' + q2; }
let qTmpNoPlus = q.replaceAll('%23', '+', ' ');
var strArray = qTmpNoPlus.split(" ");
var qCom = strArray[strArray.length - 1] + "#";
var q3 = q + "#";

switch (qCom) {

case 'l#':
case 'll#':
q = q3.replace(qCom, '');
q = q.trim();
//q = encodeURIComponent(q);
q2 = "l";
break;

qEncoded = encodeURIComponent(q);
}
}
// end mini redirect




if (q != null&&q != ""){
document.getElementById("q").value = q;
startMenu("result", data, q);
}





//https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event
//input.addEventListener("input", updateValue);
document.addEventListener("input", updateValue);

function updateValue(e) {
//log.textContent = e.target.value;
q2 = "";
q = e.target.value;
startMenu("result", data, q);
}





function startMenu(printId, data, q){


if (document.getElementById("pagesList") != null){
if (q != ''&&q != null){
document.getElementById("pagesList").style.display = "none";
} else {
document.getElementById("pagesList").style.display = "block";
}
}



let confSymbolForSplit = "SYMBOLFORSPLIT";
let resultLimit = 30;
let i = 0;
let printPost = "";

/*
//https://stackoverflow.com/questions/43996959/json-sorting-by-alphabetical-order
// JSON sorting
data = data.sort((a,b)=> {
var a1 = a.text.toLowerCase();
var b1 = b.text.toLowerCase();
return a1<b1 ?-1:a1> b1? 1 :0;
})*/

// s2 Search 2, word

if (q != ''){


//qSearch = String(q.toLowerCase()).replaceAll(/ /g, "|"); //if ((qData).search(qSearch) != -1){}
//qSearch = decodeURIComponent(q);
qSearch = (q);
qSearch = String(qSearch).toLowerCase();

data.forEach((item, key) => {

postId = '';
postText = '';
postText2 = '';
postText3 = '';
postTag = '';
postUrl = '';
postTime = '';
rightFooter = '';

if (item['id'] != null){ postId = item['id']; }
if (item['text'] != null){ postText = item['text']; }
if (item['text2'] != null){ postText2 = item['text2']; }
if (item['text3'] != null){ postText3 = item['text3']; }
if (item['tag'] != null){ postTag = item['tag']; }
if (item['url'] != null){ postUrl = item['url']; }
if (item['time'] != null){ postTime = item['time']; }
if (item['rightFooter'] != null){ rightFooter = item['rightFooter']; }

qData = String(postText + ' ' + postText2 + ' ' + postText3 + ' ' + postTag + ' ' + postUrl).toLowerCase();

// query
if (qData.indexOf(qSearch) != -1){

// Luck
if (q2 == 'l'){
//if (postUrl == ''&&postId != ''){ window.location.href = scriptDir + '?id=' + postId; }
if (postUrl != ''&&String('' + window.location + '').indexOf("#StopRedirect") == -1){
//comMessagePrint = `Luck search, redirect to URL: ` + sTimeRedir[2] / 1000+` sec.`;
window.location.href = '/projects/redirects-25/?rUrl=' + postUrl;
//window.location.href = postUrl;
window.location.href = window.location.href + '#StopRedirect'; 
//setTimeout(function(){ window.locatiocomMessn.href = postUrl; }, sTimeRedir[2]);
} else {
window.location.href = window.location.href + '#StopRedirect';
}
//console.log(postUrl);
}
// end Luck search


if (i <= resultLimit){
postUrl = fuMHideFileNameExt(postUrl);
//printPost += fuPrintPost(postId, '', postText, postTag, postTime, rightFooter, rightFooter);
printPost += `<div class="bgList border3List borderRadius2 padding3">${postText}<br>
<a class="brand" href="${postUrl}">${postUrl}</a></div>`;
}
i++;

qData = '';
qCom = "found";
}




});

if (i == 0){ qCom = "not found"; }


if (qCom != "found"){

//https://stackoverflow.com/questions/9206013/javascript-list-js-implement-a-fuzzy-search
function fuzzySearch(text, q){

String.prototype.fuzzy = function (s) {
    var hay = this.toLowerCase(), i = 0, n = -1, l;
    s = s.toLowerCase();
    for (; l = s[i++] ;) if (!~(n = hay.indexOf(l, n + 1))) return false;
    return true;
};

return (text).fuzzy(q); 
}

data.forEach((item, key) => {

postId = '';
postText = '';
postText2 = '';
postText3 = '';
postTag = '';
postUrl = '';
postTime = '';
rightFooter = '';

if (item['id'] != null){ postId = item['id']; }
if (item['text'] != null){ postText = item['text']; }
if (item['text2'] != null){ postText2 = item['text2']; }
if (item['text3'] != null){ postText3 = item['text3']; }
if (item['tag'] != null){ postTag = item['tag']; }
if (item['url'] != null){ postUrl = item['url']; }
if (item['time'] != null){ postTime = item['time']; }
if (item['rightFooter'] != null){ rightFooter = item['rightFooter']; }

qData = String(postText + ' ' + postText2 + ' ' + postText3 + ' ' + postTag + ' ' + postUrl).toLowerCase();



qData = (qData + ' ').split(' ');
qData.forEach(function(item336) {

// query
if (fuzzySearch(item336, qSearch) == true){

// Luck
if (q2 == 'l'){
//if (postUrl == ''&&postId != ''){ window.location.href = scriptDir + '?id=' + postId; }
if (postUrl != ''&&String('' + window.location + '').indexOf("#StopRedirect") == -1){
//comMessagePrint = `Luck search, redirect to URL: ` + sTimeRedir[2] / 1000+` sec.`;
window.location.href = '/projects/redirects-25/?rUrl=' + postUrl;
//window.location.href = postUrl;
window.location.href = window.location.href + '#StopRedirect'; 
//setTimeout(function(){ window.locatiocomMessn.href = postUrl; }, sTimeRedir[2]);
} else {
window.location.href = window.location.href + '#StopRedirect';
}
//console.log(postUrl);
}
// end Luck search


if (i <= resultLimit){
//printPost += fuPrintPost(postId, '', postText, postTag, postTime, rightFooter, rightFooter);
printPost += `<div class="bgList border3List borderRadius2 padding3">${postText}<br>
<a class="brand" href="${postUrl}">${postUrl}</a></div>`;

}
i++;

qData = '';
qCom = "found";


}
});


});
}


}



if (qCom != 'found') { printPost = `<div class="bgList border3List borderRadius2 padding3">Probably not found</div>`; }
// end s2 Search 2

if (i >= 1){
printPost += `<div class="small op gray bgList border3List borderRadius2 padding3">Result limit: ${resultLimit}</div>`;
}

document.getElementById(printId).innerHTML = printPost;

}
