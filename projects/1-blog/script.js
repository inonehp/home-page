// v.2.6.12
// inspired by X (Twitter), Fediverse
// not for large data files 
// This is a rewritten project from another language where I save web links. This is the JavaScript version and has everything but no option for saving or editing.



// JSON data in js varible pre-sorted by time in UNIX format
// main function 

/*
// config, copy paste in html
<script>
let blogConfig = {
"postLimit":"", // number
"embedStatus":"", // off
"multiEmbedStatus":"", // on
"tagListStatus":"", // off
"tagListLimit":"", // number
"targetOption":"", // blank
"bottomMsg":"", // text
"display":"", // grid (for img link), article (text - title, text2 - text)
"timeStatus":"", // off, disable post time (post id)
};
</script>*/

function blog(printId, jsonVar, postClass, scriptDir, blogConfig){

if(blogConfig == undefined||blogConfig == ''){
var blogConfig = [];
var postLimit = '';
var embedStatus = '';
var tagListStatus = '';
var multiEmbedStatus ='';
var tagListStatus = '';
var tagListLimit = '';
var targetOption = '';
var bottomMsg = '';
var display = '';
var blogTimeStatus = '';
}else{
var postLimit = blogConfig['postLimit'];
var embedStatus = blogConfig['embedStatus'];
var tagListStatus = blogConfig['tagListStatus'];
var multiEmbedStatus = blogConfig['multiEmbedStatus'];
var tagListStatus = blogConfig['tagListStatus'];
var tagListLimit = blogConfig['tagListLimit'];
var targetOption = blogConfig['targetOption'];
var bottomMsg = blogConfig['bottomMsg'];
var display = blogConfig['display'];
var postTimeStatus = blogConfig['timeStatus'];

}


var host = '';

/*
printId - div id where print blog
jsonVar - json in JavaSript variable
// other
postClass - CSS class name post
embedStatus - if off, not showing embed
tagListStatus - if off, not showing tags and navigation, only posts
postLimit - how many post showing on page
scriptDir - for tag location link, if run script on other location
multiEmbedStatus - if on, working multi embed, default single embed
tagListLimit - how many tag showing in taglist
targetOption - if "blank" open link in new tab
timeStatus - If off, without post time.  

(id - id post in JSON, p, p2 - page, array key)
*/

// default value
if(postLimit == undefined||postLimit == ''){ postLimit = 10; }
if(postClass == undefined||postClass == ''){ postClass = ' post '; }
if(scriptDir == undefined||scriptDir == ''){ scriptDir = './'; }
if(embedStatus == undefined||embedStatus == ''){ embedStatus = 'on'; }
if(multiEmbedStatus == undefined||multiEmbedStatus == ''){ multiEmbedStatus = 'off'; }
if(tagListStatus == undefined||tagListStatus == ''){ tagListStatus = 'on'; }
if(tagListLimit == undefined||tagListLimit == ''){ tagListLimit = '38'; }
if(targetOption == undefined){ targetOption = ''; } //blank
if(bottomMsg == undefined||bottomMsg == ''){ bottomMsg = ''; }
if(display == undefined||display == ''){ display = 'list'; }


if(jsonVar == ''){
var jsonVar = 


[
    {
        "id": 251,
        "text": "test2 text2",
        "url": "https:\/\/test2.com",
        "tag": "#test2 #tag",
        "time": 1671480576
    },
    {
        "id": 250,
        "text": "test text",
        "url": "https:\/\/test.com",
        "tag": "#test #tag",
        "time": 1668444918
    }
];

}

var w = '100%';
var h = '190px';
var embedServiceList = '';
var printPost = '';
var arrListForRandom = [];

var total = '';
var print2 = '';

var url = new URL(window.location);

var sTimeRedir = []; // for auto-random
sTimeRedir[0] = 10000;
sTimeRedir[2] = 1200; // lucky


var q = url.searchParams.get("q");

if(q != null){
q = q.replaceAll(/%/g, "%25");
q = decodeURIComponent(q);
q = q.trim();
}


var q2 = url.searchParams.get("q2");

if(q2 != null){
q2 = q2.replaceAll(/%/g, "%25");
q2 = decodeURIComponent(q2);
q2 = q2.trim();
}
if(q2 != null&&q2 != ''){ q += ' ' + q2; }

if(q != null){
q = q.replaceAll(/%/g, "%25");
q = decodeURIComponent(q);
q = q.trim();
}

var q2 = url.searchParams.get("q2");
if(q != null){
//q2 = q2.replaceAll(/%/g, "%25");
q2 = decodeURIComponent(q2);
q2 = q2.trim();
}



var mode = url.searchParams.get("mode");
if(mode != null){
mode = mode.replaceAll(/%/g, "%25");
mode = decodeURIComponent(mode);
mode = mode.trim();
}

// q random
if(q == 'l'||q == 'r'){ q = null; mode = 'randUrl'; }
if(q != null){
//alert(q[q.length - 1]);
if(q[q.length - 2] == ' '&&q[q.length - 1] == 'l'){ q = q.slice(0, -2); q2 = 'l'; }
if(q[q.length - 2] == ' '&&q[q.length - 1] == 'r'){ q = q.slice(0, -2); q2 = 'r'; }
}

var id = url.searchParams.get("id");
if(id != null){
id = id.replaceAll(/%/g, "%25");
id = decodeURIComponent(id);
mode = 'id';
}

var getP = url.searchParams.get("p");
if(getP != null){
getP = getP.replaceAll(/%/g, "%25");
getP = Number(decodeURIComponent(getP));

if(getP >= jsonVar.length - 1){ getP = jsonVar.length; }
if(getP < postLimit){ getP = 0; }
mode = 'list';
}

var getP2 = url.searchParams.get("p2"); // nav for id
if(getP2 != null){
getP2 = getP2.replaceAll(/%/g, "%25");
getP2 = getP2.trim();
getP2 = Number(decodeURIComponent(getP2));
mode = 'singleList';
}

if(getP == null){ getP = 0; }

var getP3 = url.searchParams.get("p3"); // nav for id
if(getP3 != null){
getP3 = getP3.replaceAll(/%/g, "%25");
getP3 = getP3.trim();
getP3 = Number(decodeURIComponent(getP3));
}

if(getP == null){ getP = 0; }


if(getP == jsonVar.length){ getP = getP - 1; }
if(getP2 == jsonVar.length){ getP2 = getP2 - 1; }
if(getP >= jsonVar.length){ getP = Number(Number(jsonVar.length) - Number(postLimit)); }
if(getP <= 0){ getP = 0; }
if(isNaN(getP)||isNaN(getP2)){ getP = 0; getP = 0; }

if(getP3 <= 0){ getP3 = 0; }

var postId = '';
var postText = '';
var postText2 = ''
var postText3 = '';
var postTag = '';
var postUrl = '';
var postTime = '';


var print = '';
var printTagList = '';
var getTag = '';

var comMessage = '';
var comMessagePrint = '';

postLimit = Number(postLimit);

var i3 = 0;


var lFoundQUrlList = [];




if(tagListStatus == 'on'){

let lQforR = '';
if(q != null){ lQforR = encodeURIComponent(q) + ' r'; } else { lQforR = 'r'; }

print += `

<nav>
<a class="small" href="?">main</a>
<a class="small" href="?mode=random" title="Random post">random</a>
<a class="small" href="?mode=auto-random" title="Random post with automatic redirection to next">auto-random</a>
<a class="small" href="?mode=randUrl" title="Random URL">randURL</a>
<a class="small" href="?q=${lQforR}" title="Random URL from search results">randURL (Search)</a>
<!--<a href="/rss.xml">rss</a>-->
</nav>

<span id="comMsg"></span>
<span id="postTotal"></span>

`;
}

//document.getElementById(printId).innerHTML += '<div id="playerxx">playerxx</div>';


function main(){



if(q != null){
mode = 'search';
//embedStatus = 'off';
//postLimit = 10;
postLimit = postLimit;
getP = getP3;
}

//if(q == ''&&q2 == 'l'||q == ' l'||q == 'l'){ mode = 'randUrl'; }// rmMe
if(q == ''&&q2 == 'l'||q == ' l'||q == 'l'){ q2 = 'r'; }

if(id != null||getP2 != null){
postLimit = 1;
}


if(/*id == 0||*/mode == 'random'){ mode = 'random'; getP2 = Math.floor(Math.random() * jsonVar.length); }
if(mode == 'auto-random'){ getP2 = Math.floor(Math.random() * jsonVar.length); }
if(mode == 'randUrl'){ getP2 = Math.floor(Math.random() * jsonVar.length); }


if(mode == 'list'&&tagListStatus == 'on'){
print += `
<!--<div class="block tCenter padding2">
com:${mode} id:${id} q:${q} p:${getP} p2:${getP2}
<a href="?id=">random</a>
</div>-->
`;
}











let i = 0;
jsonVar.forEach((item, key) => {

postId = '';
postText = '';
postText2 = '';
postText3 = '';
postTag = '';
postUrl = '';
postTime = '';

if(item['id'] != null){ postId = item['id']; }
if(item['text'] != null){ postText = item['text']; }
if(item['text2'] != null){ postText2 = item['text2']; }
if(item['text3'] != null){ postText3 = item['text3']; }
if(item['tag'] != null){ postTag = item['tag']; }
if(item['url'] != null){ postUrl = item['url']; }
if(item['time'] != null){ postTime = item['time']; }

postText = (postText+' '+postUrl).trim();








switch (mode){

// search 1
case 'search':
// search start 1
var subQListFound = [];

if(q != ''){

qSearch = decodeURIComponent(q);
qSearch = String(qSearch).toLowerCase();

// rm last symbol if " l".
if(q[q.length - 1] == 'l'&&q[q.length - 2] == ' '){ qSearch = qSearch.slice(0, -2); }
var qData = String(postText + ' ' + postText2 + ' ' + postText3 + ' ' + postTag + ' ' + postUrl).toLowerCase();


var qSearch23 = qSearch.replaceAll(' ', '_'); // q2 with "_"

// if tag



// query
if(qSearch[0] == '#'){
qData2 = qData.replaceAll(/,/g, ' ');
if((qData2+' ').indexOf((qSearch + ' ')) >= 0){
subQListFound.push(qSearch);
var subQforLight = qSearch + conf["confSymbolForSplit"];
subQforLight = subQforLight.replaceAll(' ',  conf["confSymbolForSplit"]);


// lucky search if last word " l".
if(q2 == 'l'){
if(postUrl == ''&&postId != ''){ postUrl = scriptDir+'?id='+postId; }
if(postUrl != ''){
sTimeRedir[2] = 1200;
comMessagePrint = `lucky search, redirect to URL: `+ sTimeRedir[2] / 1000 +` sec.`;
if((''+window.location+'').search("#stopRedir") == -1){ // if back Stop Redir
window.location.href = '/projects/25-redirects/?rUrl=' + postUrl;
//setTimeout(function(){ window.location.href = postUrl; }, sTimeRedir[2]);
}
window.location.href = window.location.href+'#stopRedir'; 
}
//console.log(postUrl);
}
// end lucky search

if(getP3 <= i){
if(i3 <= postLimit - 1){
printPost += fuPrintPost(postId, postText, postTag, postTime, subQforLight);
}
i3++;
}
i++;
total = i;
subQListFound = [...new Set(subQListFound)];
comMessagePrint = `<span class="bold">${q} (s1.1: ${subQListFound})</span> ${i}`;
comMessage = 'found';

// collect for random
if(postUrl == ''&&postId != ''){
lFoundQUrlList.push(scriptDir + '?id=' + postId);
}else{
lFoundQUrlList.push(postUrl);
}


}

// query
}else if(qData.indexOf(String(qSearch)) != -1||qData.indexOf(String(qSearch23)) != -1){
if(qData.indexOf(String(qSearch23)) != -1){ qSearch = qSearch23; }
subQListFound.push(qSearch);
var subQforLight = qSearch + conf["confSymbolForSplit"];
subQforLight = subQforLight.replaceAll(' ',  conf["confSymbolForSplit"]);

// lucky search if last word " l".
if(q2 == 'l'){
if(postUrl == ''&&postId != ''){ postUrl = scriptDir+'?id='+postId; }
if(postUrl != ''){
comMessagePrint = `lucky search, redirect to URL: ` + sTimeRedir[2] / 1000 +` sec.`;
if((''+window.location+'').search("#stopRedir") == -1){ // if back Stop Redir
window.location.href = '/projects/25-redirects/?rUrl='+postUrl;
//setTimeout(function(){ window.location.href = postUrl; }, sTimeRedir[2]);
}
window.location.href = window.location.href+'#stopRedir'; 
}
//console.log(postUrl);
}
// end lucky search

if(getP3 <= i){
if(i3 <= postLimit - 1){
printPost += fuPrintPost(postId, postText, postTag, postTime, subQforLight);
}
i3++;
}
i++;
total = i;
subQListFound = [...new Set(subQListFound)];
comMessagePrint = `<span class="bold">${q} (s1.2: ${subQListFound})</span> ${i}`;
comMessage = 'found';

// collect for random
if(postUrl == ''&&postId != ''){
lFoundQUrlList.push(scriptDir + '?id=' + postId);
}else{
lFoundQUrlList.push(postUrl);
}

}
}



if(comMessage != 'found') { comMessagePrint = `<b>${q}</b> <div class="bold red block padding2 h1">Probably not found</div>`; }
break;
// end search 1

case 'id':
case 'singleList':

if(postId == id||getP2 == key){
if(i <= postLimit -1){

var lArctile = '';
if(postText2 != ''){ postText2 = `

` + postText2; };
if(postText3 != ''){ postText3 = `

` + postText3; };
printPost += '<div class="">'+fuPrintPost(postId, postText + postText2 + postText3, postTag, postTime, '')+'</div>';
comMessagePrint = 'id: '+postId;
// post in title only when id
if(id != ''&&getP2 == null){
//document.getElementsByTagName('title')[0].innerHTML = postText.slice(0, 60);
document.getElementsByTagName('title')[0].innerHTML = (postText).slice(0, 260);
document.getElementsByTagName('title')[0].innerHTML += ' | '+domainNameToTitle;
}
if(getP2 != null){
comMessagePrint += ' p2: '+getP2;
}
i++;
getP = key;
}
}
if(comMessagePrint == '') { comMessagePrint = `<b>${q}</b> <div class="bold red block padding2 h3">Probably not found</div>`; }
break;


case 'randUrl':
case 'random':
postLimit = 1;
if(getP2 == key){
if(i <= postLimit -1){

// lucky search if last word " l".
if(mode == 'randUrl'){
//if(q[q.length - 1] == 'l'&&q[q.length - 2] == ' '){
if(postUrl == ''&&postId != ''){ postUrl = scriptDir+'?id='+postId; }
if(postUrl != ''){
comMessagePrint = `lucky search, redirect to URL: `+ sTimeRedir[2] / 1000+` sec.`;
if((''+window.location+'').search("#stopRedir") == -1){ // if back Stop Redir
window.location.href = '/projects/25-redirects/?rUrl=' + postUrl;
//setTimeout(function(){ window.location.href = postUrl; }, sTimeRedir[2]);
}
window.location.href = window.location.href+'#stopRedir'; 
}
//console.log(postUrl);
}
// end lucky search

printPost += '<div class="">'+fuPrintPost(postId, postText, postTag, postTime, '')+'</div>';
i++;
getP = key;
comMessagePrint = 'id: '+postId+', p2: '+getP2;
}
}
break;

case 'auto-random':
postLimit = 1;
var sTimeRedirStatus = `redir after: <span id="timerRedir">${sTimeRedir[0] / 1000}</span> sec.`;

if(getP2 == key){
if(i <= postLimit -1){
printPost += '<div class="">'+fuPrintPost(postId, postText, postTag, postTime)+'</div>';
i++;
getP = key;
comMessagePrint = 'id: '+postId+', p2: '+getP2+' | '+sTimeRedirStatus;

// fixed many redirect in this place
setTimeout(function(){
window.location.href = '?mode=auto-random';
}, sTimeRedir[0]); 

}
}
break;


/*case 'music':
case 'movie':
postLimit = 1;

if(q2 != ''){
//qSearch = String(q.toLowerCase()).replaceAll(/ /g, "|"); //if((qData).search(qSearch) != -1){}
qSearch = decodeURIComponent(q2);
qSearch = String(qSearch).toLowerCase();
}else{
qSearch = String('#music').toLowerCase();
}
qSearch = String(qSearch).toLowerCase();


// if tag
//if(qSearch[0] == '#'){}
qData = String(postText+' '+postTag).toLowerCase();
qData = qData.replaceAll(/,/g, ' ');
if((qData+' ').indexOf((qSearch+' ')) >= 0){
arrListForRandom.push(key);

i++;
total = i;
comMessagePrint = `${q} ${i}`;
comMessage = 'found';
}

if(arrListForRandom.length > 0){

getP2 = Math.floor(Math.random() * arrListForRandom.length);
getP2 = arrListForRandom[getP2];

print2 = '<div class="">'+fuPrintPost(jsonVar[getP2]['id'], jsonVar[getP2]['text'], jsonVar[getP2]['tag'], jsonVar[getP2]['time'])+'</div>';

getP = getP2;

comMessagePrint = `${q2} ${i}`+` ${mode}`+', '+'id: '+jsonVar[getP2]['id']+', p2: '+getP2;
}else{
comMessagePrint = '<span class="red">not found</span>';
}
break;
*/

default:
mode = 'list';
if(getP <= key){
if(i <= postLimit -1){
printPost += fuPrintPost(postId, postText, postTag, postTime);
i++;
}
}

}


// collect all tag
printTagList += postTag + conf["confSymbolForSplit"];

});






// Search 2, word
if(mode == 'search'&&comMessage != 'found'){
var subQListFound = [];

comMessagePrint = '';

if(q != ''){

//qSearch = String(q.toLowerCase()).replaceAll(/ /g, "|"); //if((qData).search(qSearch) != -1){}
qSearch = decodeURIComponent(q);
qSearch = String(qSearch).toLowerCase();

// rm last symbol if " l".
if(q[q.length - 1] == 'l'&&q[q.length - 2] == ' '){ qSearch = qSearch.slice(0, -2); }

qSearch = (qSearch+' ').split(' ');

// many words from space split

jsonVar.forEach((item, key) => {

postId = '';
postText = '';
postText2 = '';
postText3 = '';
postTag = '';
postUrl = '';
postTime = '';

if(item['id'] != null){ postId = item['id']; }
if(item['text'] != null){ postText = item['text']; }
if(item['text2'] != null){ postText2 = item['text2']; }
if(item['text3'] != null){ postText3 = item['text3']; }
if(item['tag'] != null){ postTag = item['tag']; }
if(item['url'] != null){ postUrl = item['url']; }
if(item['time'] != null){ postTime = item['time']; }


postText = (postText + ' ' + postUrl).trim();

qData = String(postText + ' ' + postText2 + ' ' + postText3 + ' ' + postTag).toLowerCase();


let checkFound = 0;


for (const item3344 of qSearch) {
    // ...use `element`...

// query
//if((qData.split(item)).length > 1&&item334 != ''){
if((qData.indexOf(item3344)) >= 0&&item3344 != ''){
subQListFound.push(item3344);
var subQforLight = item3344 + conf["confSymbolForSplit"];

// lucky search if last word " l".
if(q2 == 'l'){
if(postUrl == ''&&postId != ''){ postUrl = scriptDir+'?id='+postId; }
if(postUrl != ''){
comMessagePrint = `lucky search, redirect to URL: ` + sTimeRedir[2] / 1000+` sec.`;
if((''+window.location+'').search("#stopRedir") == -1){ // if back Stop Redir
window.location.href = '/projects/25-redirects/?rUrl='+postUrl;
//setTimeout(function(){ window.location.href = postUrl; }, sTimeRedir[2]);
}
window.location.href = window.location.href+'#stopRedir'; 
}
//console.log(postUrl);
}
// end lucky search

if(getP3 <= i){
if(i3 <= postLimit - 1){
printPost += fuPrintPost(postId, postText, postTag, postTime, subQforLight);
}
i3++;
}
i++;
total = i;
subQListFound = [...new Set(subQListFound)];
comMessagePrint = `<span class="bold">${q} (s2: ${subQListFound})</span> ${i}`;
qData = '';
checkFound = '';
comMessage = 'found';

// collect for random
if(postUrl == ''&&postId != ''){
lFoundQUrlList.push(scriptDir + '?id=' + postId);
}else{
lFoundQUrlList.push(postUrl);
}

}
};





});

}
}

if(mode == 'search'&&comMessage != 'found') { comMessagePrint = `<b>${q}</b> <div class="bold red block padding2 h3">Probably not found</div>`; }
// end Search 2





// search 3, similar
if(mode == 'search'&&comMessage != 'found'){
var subQ = [];
comMessagePrint = '';

if(q != ''){
//qSearch = String(q.toLowerCase()).replaceAll(/ /g, "|"); //if((qData).search(qSearch) != -1){}
qSearch = decodeURIComponent(q);
qSearch = String(qSearch).toLowerCase();
var qSearchList = (qSearch + ' ').split(' ');

// rm last symbol if " l".
if(q[q.length - 1] == 'l'&&q[q.length - 2] == ' '){ qSearch = qSearch.slice(0, -2); }

jsonVar.forEach((item, key) => {

postId = '';
postText = '';
postText2 = '';
postText3 = '';
postTag = '';
postUrl = '';
postTime = '';

if(item['id'] != null){ postId = item['id']; }
if(item['text'] != null){ postText = item['text']; }
if(item['text2'] != null){ postText2 = item['text2']; }
if(item['text3'] != null){ postText3 = item['text3']; }
if(item['tag'] != null){ postTag = item['tag']; }
if(item['url'] != null){ postUrl = item['url']; }
if(item['time'] != null){ postTime = item['time']; }

postText = (postText+' '+postUrl).trim();

let qData = String(postText + ' ' + postText2 + ' ' + postText3 + ' ' + postTag).toLowerCase();

// many words from space split

qData = (qData + ' ').split(' ');

var checkDublicateId = [];
qData.forEach(function(item336) { // foreach post word and quary for search
//if((qData.split(item336)).length > 1&&item33 != ''){
//if((qData.indexOf(item336)) >= 0){
//console.log(levenshtein(item, qSearch));
//console.log(item);



// query
qSearchList.forEach((qSearchListItem) => {
if(levenshtein(item336, qSearchListItem) <= 1&&item336 != ''&&qSearchListItem != ''){

//var subQ = 's3: '+item336+',';
subQ.push(String(item336).trim()+' ');
//https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array
subQ = [...new Set(subQ)];


if(checkDublicateId[0] != postId){ // fixed dublicate post when search and found

// lucky search if last word " l".
if(q2 == 'l'){
if(postUrl == ''&&postId != ''){ postUrl = scriptDir+'?id='+postId; }
if(postUrl != ''){
comMessagePrint = `lucky search, redirect to URL: `+ sTimeRedir[2] / 1000+` sec.`;
if((''+window.location+'').search("#stopRedir") == -1){ // if back Stop Redir
window.location.href = '/projects/25-redirects/?rUrl='+postUrl;
//setTimeout(function(){ window.location.href = postUrl; }, sTimeRedir[2]);
}
window.location.href = window.location.href+'#stopRedir'; 
}
//console.log(postUrl);
}
// end lucky search

if(getP3 <= i){
if(i3 <= postLimit - 1){
subQforLight = subQ.join(conf["confSymbolForSplit"]);
printPost += fuPrintPost(postId, postText, postTag, postTime, subQforLight);
}
i3++;
}
i++;
total = i;
let subQprint = subQ.slice(0, 7).join(", ") + ' ...';
comMessagePrint = `<span class="bold">${q} (s3: ${subQprint})</span> ${i}`;
qData = '';
comMessage = 'found';
checkDublicateId[0] = postId;

// collect for random
if(postUrl == ''&&postId != ''){
lFoundQUrlList.push(scriptDir + '?id=' + postId);
}else{
lFoundQUrlList.push(postUrl);
}

}
}
})


})
})
}
};

if(mode == 'search'&&comMessage != 'found') { comMessagePrint = `<b>${q}</b> <div class="bold red block padding2 h3">Probably not found</div>`; }
// end search 3






// search 4, symbol
if(mode == 'search'&&comMessage != 'found'){
comMessagePrint = '';

var subQ = [];


if(q != ''){
//qSearch = String(q.toLowerCase()).replaceAll(/ /g, "|"); //if((qData).search(qSearch) != -1){}
qSearch = decodeURIComponent(q);
qSearch = (String(qSearch).toLowerCase()).trim();
// rm last symbol if " l".
if(q[q.length - 1] == 'l'&&q[q.length - 2] == ' '){ qSearch = qSearch.slice(0, -2); }

jsonVar.forEach((item, key) => {

postId = '';
postText = '';
postText2 = '';
postText3 = '';
postTag = '';
postUrl = '';
postTime = '';

if(item['id'] != null){ postId = item['id']; }
if(item['text'] != null){ postText = item['text']; }
if(item['tag'] != null){ postTag = item['tag']; }
if(item['url'] != null){ postUrl = item['url']; }
if(item['time'] != null){ postTime = item['time']; }
postText = (postText+' '+postUrl).trim();

var qData = (String(postText + ' ' + postText2 + ' ' + postText3 + ' ' + postTag).toLowerCase()).trim();

// many words from space split


var symbolCounter = 0;
var checkDublicateId = [];
while (symbolCounter <= qSearch.length - 3) {
//console.log(String(qSearch[symbolCounter] + qSearch[symbolCounter + 1]));

// query
if((qData).indexOf(String(qSearch[symbolCounter] + qSearch[symbolCounter + 1] + qSearch[symbolCounter + 2])) != -1){
subQ.push('' + (String(qSearch[symbolCounter] + qSearch[symbolCounter + 1] + qSearch[symbolCounter + 2])).trim()+' ');

//https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array
subQ = [...new Set(subQ)];

if(checkDublicateId[0] != postId){ // fixed dublicate post when search and found

// lucky search if last word " l".
if(q2 == 'l'){
if(postUrl == ''&&postId != ''){ postUrl = scriptDir+'?id='+postId; }
if(postUrl != ''){
comMessagePrint = `lucky search, redirect to URL: `+ sTimeRedir[2] / 1000+` sec.`;
if((''+window.location+'').search("#stopRedir") == -1){ // if back Stop Redir
window.location.href = '/projects/25-redirects/?rUrl='+postUrl;
//setTimeout(function(){ window.location.href = postUrl; }, sTimeRedir[2]);
}
window.location.href = window.location.href+'#stopRedir'; 
}
//console.log(postUrl);
}
// end lucky search

if(getP3 <= i){
if(i3 <= postLimit - 1){
subQforLight = subQ.join(conf["confSymbolForSplit"]);
printPost += fuPrintPost(postId, postText, postTag, postTime, subQforLight);
}
i3++;
}
i++;
total = i;
//subQ = subQ.join(' ');


qData = '';
comMessage = 'found';
checkDublicateId[0] = postId;

// collect for random
if(postUrl == ''&&postId != ''){
lFoundQUrlList.push(scriptDir + '?id=' + postId);
}else{
lFoundQUrlList.push(postUrl);
}

}
}
symbolCounter++;
}



});
}
if(comMessage == 'found'){ comMessagePrint = `${q} <span class="bold">(s4: ${subQ})</span> ${i}`; }
}

if(mode == 'search'&&comMessage != 'found') { comMessagePrint = `<b>${q}</b> <div class="bold red block padding2 h3">Probably not found</div>`; }
// end search 4










if(display == 'grid'&&mode == 'list'&&total != 1||display == 'grid'&&mode == 'search'&&total != 1){
printPost = `

<style>
.blogContentGrid {
display: grid;
/*grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));*/
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
grid-gap: 5px;
width: 100%;
max-width: 1200px;
margin: 0 auto;
}

.postFooter { grid-template-columns: 1fr; }

@media(max-width: 220px) { .blogContentGrid { display: block; width: 100%; }}
</style>

<div class="block">
<div class="wrapper3">

<div class="blogContentGrid">`+printPost+`</div>

</div>
</div>

`;
}else if(display == 'grid'){
printPost = `
<div class="wrapperL">`+printPost+`</div>
`;
}else{
printPost = `
<div>`+printPost+`</div>
`;
}

print = print + `

<div class="blogContent">` + printPost + `</div>

`+print2;



// tagList and nav print
if(tagListStatus != 'off'){





//if(com != 'search'){ print += `<div class="${postClass}">`+blogNav(mode)+`</div>`; }
print += `<div class="center"><div class="wrapper zero">` + blogNav(mode) + `</div></div>`;

if(mode == 'search'){
print += `
<div class="wrapper">
<div class="block tRight">
<a class="border borderRadius2 button light" href="#" onclick="history.back()" title="history back">back</a>
<a class="border borderRadius2 button light" href="?">main</a>
</div>
</div>
`;
}

print += fuTagList(printTagList);

// search forom


print += `
<br>

<div id="form" class="wrapperL">
<form method="GET" style="margin-top: 0px;" action="?">
<label id="search" class="op block tLeft xSmall" for="input">search:</label>
<input id="input" class="padding2 op" type="search" name="q"  autocomplete="off" placeholder="" value="${q}">

<div style="display: grid; grid-template-columns: 1fr 1fr; grid-gap: 2px;">
<input type="submit" value="search" class="xSmall op" style="padding: 0; min-height: 1px; height: 30px;">
<input type="submit" name="q2" value="l" class="xSmall op" style="padding: 0; min-height: 1px; height: 30px;">
</div>

</form>

<br>
<div class="block padding2 tRight">
<span class="tCenter op block padding2 xSmall">total: ${jsonVar.length}</span>
<!--<span class="op block padding2 xSmall">${bottomMsg}</span>--><!-- rmme -->
</div>



</div>

<div class=" ${postClass} ">${bottomMsg}</div>

`;








}



// print all
document.getElementById(printId).innerHTML += print;

comMessagePrint = `mode: ${mode} `+comMessagePrint;
if(comMessagePrint != ''){
if(document.getElementById('comMsg') != null){

document.getElementById('comMsg').innerHTML += `

<div class="wrapper">
<div class="op tCenter small block padding2">
${comMessagePrint}
</div>
</div>


`;
}
}

//if(q != null){ document.getElementById("input").value = q; }
}

main(q, id);





// other functions 
// tagList
function fuTagList(tagList2){
let color = 'silver';
let size = '';

tagList = '';

/*tagList2 = tagList2.toLowerCase();
conf["confSymbolForSplit"] = conf["confSymbolForSplit"].toLowerCase();*/

tagList2 = tagList2.replaceAll(/(?:\r\n|\r|\n)/g, ' ');
tagList2 = tagList2.replaceAll(/,/g, conf["confSymbolForSplit"]);
tagList2 = tagList2.replaceAll(/ /g, conf["confSymbolForSplit"]);
tagList2 = tagList2.replaceAll('·', '');
tagList2 = tagList2.replaceAll('.', ' ');

tagList2 = ''+tagList2+''.replaceAll(',', conf["confSymbolForSplit"]);
tagList2 = ''+tagList2+''.replaceAll(' ', conf["confSymbolForSplit"]);







tagList2 = tagList2.split(conf["confSymbolForSplit"]);

/*
//https://stackoverflow.com/questions/8996963/how-to-perform-case-insensitive-sorting-array-of-string-in-javascript
tagList2.sort(function (a, b) {
return a.toLowerCase().localeCompare(b.toLowerCase());
});*/




var tagAverage = 0;
var tagTotal = 0;

// https://stackoverflow.com/questions/19395257/how-to-count-duplicate-value-in-an-array-in-javascript
// make uniq and count, object
var tagListCount = {};
tagList2.forEach(function (x) {
if(x != null&&x != ''){
tagListCount[x] = (tagListCount[x] || 0) + 1;
}
});







// Taglist limit
//https://stackoverflow.com/questions/1069666/sorting-object-property-by-values
// sort object by value
let entries = Object.entries(tagListCount);
let tagListCountSorted = entries.sort((a, b) => a[1] - b[1]);
tagListCountSorted.reverse();


// Taglist limit (cut array) with sorted tag and convert to old object, sorted previos
tagListCountLimited = {};
tagListCountSorted.forEach(function (item, key) {
if(key <= tagListLimit){
tagListCountLimited[item[0]] = item[1];
}
});


// sort
// https://stackoverflow.com/questions/5467129/sort-javascript-object-by-key
tagListCount = {};
tagListCount = Object.keys(tagListCountLimited).sort().reduce(
  (obj, key) => { 
    obj[key] = tagListCountLimited[key]; 
    return obj;
  }, 
  {}
);
// end Taglist limit







/*tagAverage = (Math.min(...Object.values(tagListCount))+Math.max(...Object.values(tagListCount)))/2;
//console.log(tagAverage);*/
Object.values(tagListCount).forEach(function (x) {
tagTotal = tagTotal+x;
});
tagAverage = tagTotal / Object.values(tagListCount).length;




var tagSize = '';
var tagColor = '';

function fuTag(tagCount){
//let tagPercentage = (Math.floor((tagCount*100)/tagTotal)); // from 100%, need rebuild case from 100
let tagPercentage = (Math.floor((tagCount * 100) / tagAverage)); // over 100%, used average if tag disproportion 1% and 90%
//console.log(tagPercentage);

// tag font-size and color
switch (true) {

case tagPercentage >= 500:
tagColor = "var(--red)";
tagSize = "150%";
break;

case tagPercentage >= 300:
tagColor = "var(--orange)";
tagSize = "140%";
break;

case tagPercentage >= 250:
tagColor = "var(--yellow)";
tagSize = "130%";
break;

case tagPercentage >= 100:
tagColor = "var(--green)";
tagSize = "120%";
break;

case tagPercentage >= 80:
tagColor = "var(--blue)";
tagSize = "115%";
break;

case tagPercentage >= 50:
tagColor = "var(--indigo)";
tagSize = "110%";
break;

case tagPercentage >= 30:
tagColor = "var(--violet)";
tagSize = "100%";
break;

default:
tagColor = "var(--c2)";
tagSize = "90%";
}

//console.log(tagColor);
//return tagColor;
}



//https://stackoverflow.com/questions/8996963/how-to-perform-case-insensitive-sorting-array-of-string-in-javascript
let sortedTags = Object.entries(tagListCount).sort(Intl.Collator().compare)

let hlClassList = '';
// https://masteringjs.io/tutorials/fundamentals/foreach-object
sortedTags.forEach(entry => {
const [key, value] = entry;



tag = key.trim();
tagCount = value;



fuTag(tagCount);




if(tag != ''){
let printTag = tag;
let printTag2 = tag.replaceAll(/#/g, "");
let goTag = encodeURIComponent(tag);

let hlClass = '';
if(printTag2[0] != undefined){
hlClass = 'hlClass'+printTag2[0].toLowerCase();
hlClassList += printTag2[0].toLowerCase();
}

if(q == tag){
tagList += `

<a class="tag light2 border borderRadius2 ${hlClass}" href="${scriptDir}?q=${goTag}" style="background: ${tagColor}; color: var(--l4); font-size: ${tagSize} !important;">${printTag}</a>

`;
}else{

tagList += `

<a class="tag light2 border borderRadius2 ${hlClass}" href="${scriptDir}?q=${goTag}"  style="color: ${tagColor}; font-size: ${tagSize} !important;">${printTag}</a>

`;
}
}
});

hlClassList2 = [...new Set([...hlClassList])]; //https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array
hlClassList = '';
hlClassList2.forEach(function(item){
let hlClass = 'hlClass'+item;
item = item.toUpperCase();
hlClassList += `
<a class="tag light2 border borderRadius ${hlClass}" onmouseover="hlwClassAdd('${hlClass}')" onmouseout="hlwClassRemove('${hlClass}')" href="#id${hlClass}" id="${hlClass}">${item}</a>
`;
});

tagList = `

<div class="center tCenter">
<div class="wrapper3">

<div class="op small padding2">list of tags:</div>
<div class="tagList">`+tagList+`</div>

<div class="block padding2 tCenter tagList">
${hlClassList}
</div>

</div>
</div>


`;


return tagList;
}
//  end tag list






function fuPrintPost(id, post, tag, time, subQforLight){
tag = highlightText(tag, targetOption, subQforLight);
//time = new Date(time).getTime();


function normalize(a){
if(a <= 9){ a = '0' + a; }
return a;
}

//https://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript
function timeConverter(UNIX_timestamp){
var a = new Date(UNIX_timestamp * 1000);
//var months = ['', 'Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
var year = a.getFullYear();
//var month = months[a.getMonth()];
//var month = normalize(a.getMonth());
var month2 = normalize(a.getMonth() + 1);
var date = normalize(a.getDate());
var hour = a.getHours();
var min = normalize(a.getMinutes());
var sec = normalize(a.getSeconds());
//var time = date + ' ' + month2 + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
var time = year + '-' + month2 + '-' + date;
return time;
}
var datePublished = timeConverter(time);
time = `<a class="tag brand light border2 op borderRadius2 small" href="${scriptDir}?id=${id}"><time itemprop="datePublished" datetime="`+datePublished+`">`+fuPostTime(time)+`</time></a>`;

var lPost = '';

// selected orange word when search
if(q != null&&mode == 'search'){
lPost = highlightText(post, targetOption, subQforLight);

}else if(mode == 'id'||mode == 'singleList'||mode == 'random'||mode == 'auto-random'){
if(multiEmbedStatus == 'on'){
lPost = highlightText(post, targetOption);
}else{
lPost = highlightText2(post, targetOption); // autoplay embed
}
}else{
lPost = highlightText(post, targetOption, subQforLight); 
}

var username = (location.hostname).split('.');
username = username[0];


var postFooter = ' postFooter ';
var postFooterPadding = '';
if(postTimeStatus == 'off'){
time = '';
postFooter = '';
postFooterPadding = ' <div class="block padding2List"></div> ';
}


//if(display == 'article'&&mode != 'id'&&mode != 'singleList'){ lPost = `<a href="${scriptDir}?id=${id}"><h1>${post}</h1></a>`; } // without highlight (embed)
if(display == 'article'&&mode != 'id'&&mode != 'singleList'){ time = `<a class="tag brand light border2 op borderRadius2 small"  href="${scriptDir}?id=${id}">read</a>` + time; } // with highlight

return `

<!-- post -->
<div class="` + postClass + ` bgList borderList" id="` + id + `">

<div class="block padding2List bold capitalize"><a href="/"><img class="ico" src="/img/logo.png" width="20" alt="logo">${username}</a></div>

<div class="pre padding2List">` + lPost + `</div>

${postFooterPadding}
<div class=" ${postFooter} break2 ">
<span class="tagList tLeft left">` + tag + `</span>
<span class="tagList tRight right">` + time + `</span>

</div>
</div>
<!-- // end post -->

`;
}




















var checkText = true;

// light 1 highlightText
function highlightText(text, targetOption, subQforLight){

if(mode == 'random'||mode == 'auto-random'){ embedStatus = 'on'; }

//text = decodeURIComponent(text); // error sometimes
text = clearText(text);

// if code
text = text.replaceAll(/</g, "&lt;");
text = text.replaceAll(/>/g, "&gt;");

let text2 = '';
let embed = '';
let embed2 = '';

text = [...text];

let forSplit = [
',', "*", "{", "}", "(", ")", "[", "[", "•", "«", "»", "☞",
`
`, " "
]
text.forEach((item) => {
forSplit.forEach((item2) => { // foreach
if(item == item2){
item = conf["confSymbolForSplit"] + item + conf["confSymbolForSplit"];
}
});
text2 += item;
});
text2 = text2.replaceAll("http", conf["confSymbolForSplit"] + "http");

//return text = text.toString();
//return text = text.join("");

//return text = text2;
//text = [...text];

text = '';
const myArray = text2.split(conf["confSymbolForSplit"]);
myArray.forEach((item) => {
//text += item.hostname;
//if(item.search("http") != -1){ 
/*if(item[0]+item[1]+item[2]+item[3] == 'http'&&item.search("http|://") != -1){ 
host = new URL(item).hostname; // stop working when error
}
*/

let checkEmbedEmpty = item.split('/');
//if(item.split('/').length > 4){
if(checkEmbedEmpty[3]){
host = item.split('/');

if(host[3] != undefined){

checkText = false;

switch (host[2]) {

case "youtu.be":
case "m.youtube.com":
case "www.youtube.com":
case "music.youtube.com":

if((item).indexOf((`v=`)) >= 0){
play = item.split('v=').pop();
if(play != ''){
embed = `<!--<iframe id="player" style="border:0;" height="${h}" width="${w}" src="https://www.youtube.com/embed/${play}"></iframe>--><iframe width="${w}" height="${h}" src="https://www.youtube.com/embed/${play}" title="YouTube video player" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
embedServiceList += 'youtube';
}
}

if((item).indexOf((`list`)) >= 0){
play = item.split('list=');
play = play[1];
if(play != ''){
embed = `<iframe width="${w}" height="315" src="https://www.youtube-nocookie.com/embed/videoseries?list=${play}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
embedServiceList += 'youtube';
}
}

if((item).indexOf((`featured`)) >= 0||(item).indexOf((`@`)) >= 0){
play = item.split('/');
play = play[3];
if(play != ''){
play = play.replace("@", "");
embed = `<iframe width="${w}" height="315" src="https://www.youtube.com/embed/?listType=user_uploads&list=${play}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
embedServiceList += 'youtube';
}
}

break;

case 'vimeo.com':
play = item.split('/');
embed = `<iframe src="https://player.vimeo.com/video/`+play[play.length-1]+`?badge=0" height="${h}"  frameborder="0"></iframe>`;
embedServiceList += 'vimeo';
break;

case "x.com":
case "mobile.x.com":
case "twitter.com":
case "mobile.twitter.com":
embed = `<style>.twitter-tweet { margin-top: 0px !important; }</style><div style="display: block; width: 100%; max-width: 550px; margin: 0 auto;"><blockquote class="twitter-tweet" data-lang="${lang}" data-theme="${conf["confThemeEmbed"]}"><a href="${item}"></a></blockquote></div><!--<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>-->`;
embedServiceList += 'xcom';
break;

case "www.reddit.com":
if(item.split('/').length >= 9){
play = item.replaceAll('reddit.com/r/', "redditmedia.com/r/");
embed = `<iframe style="border-radius: 0 !important;" id="reddit-embed" src="${play}?ref_source=embed&amp;ref=share&amp;embed=true&amp;theme=${conf["confThemeEmbed"]}" sandbox="allow-scripts allow-same-origin allow-popups" style="border: none;" scrolling="yes" width="640" height="320px"></iframe>`;
}
embedServiceList += 'reddit';
break;

case "soundcloud.com":
embed = `<iframe width="${w}" height="${h}" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=${item}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>`;
break;

case "tunein.com":
play = item.split('/');
play = play[play.length - 2];
play = play.split('-');
play = play[play.length - 1];
embed = `<!--<iframe src="https://tunein.com/embed/player/${play}/?autoplay=false&background=${conf["confThemeEmbed"]}" style="height:100px;" scrolling="no" frameborder="no" sandbox="allow-same-origin allow-scripts allow-popups allow-forms"></iframe>--><!-- ban if many by Clouflare -->`;
embedServiceList += 'tunein';
break;

case "codepen.io":
play = item.split('/');
play = play[play.length - 1];
embed = `<p class="codepen" data-height="420" data-default-tab="result" data-theme-id="${conf["confThemeEmbed"]}" data-slug-hash="${play}" data-user="" style="height: 420px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"></p><!--<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>-->`;
embedServiceList += 'codepen';
break;

case "giphy.com":
play = item.split('-');
play = play[play.length - 1];
embed = `<iframe src="https://giphy.com/embed/${play}" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/$play">via GIPHY</a></p>`;
embedServiceList += 'giphy';
break;

case "archive.org":
if(item.search(`/details/`) != -1) {
play = item.split('/');
play = play[play.length - 1];
h = h + h;
embed = `<iframe src="https://archive.org/embed/${play}" width="${w}" height="${h}" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>`;
embedServiceList += 'archive';
}
break;

case "www.instagram.com":
case "instagram.com":
//https://stackoverflow.com/questions/7841711/javascript-or-jquery-equivalent-of-phps-strtok
play = item.split('?', 1)[0];
embed = `<style>iframe.instagram-media {
    max-width: 100% !important;
    width: 100% !important;
    min-width: auto !important;
}</style><blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="${play}?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="12" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"></blockquote><!--<script async src="//www.instagram.com/embed.js"></script>-->`;
embedServiceList += 'instagram';
break;

case "open.spotify.com":
//https://stackoverflow.com/questions/7841711/javascript-or-jquery-equivalent-of-phps-strtok
play = item.split('?', 1)[0];
play = item.split('/');

if(play[play.length - 2] == 'playlist') {
play2 = play[play.length - 1];
embed = `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/${play2}?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
embedServiceList += 'spotify';
}

if(play[play.length - 2] == 'track') {
play2 = play[play.length - 1];
embed = `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/${play2}?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
}

if(play[play.length - 2] == 'artist') {
play2 = play[play.length - 1];
embed = `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/${play2}?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
}

break;




case 'deezer.com':
case 'www.deezer.com':
//https://stackoverflow.com/questions/7841711/javascript-or-jquery-equivalent-of-phps-strtok
play = item.split('?', 1)[0];
play = item.split('/');

if(play[play.length - 2] == 'album') {
play2 = play[play.length - 1];
embed = `<iframe title="deezer-widget" src="https://widget.deezer.com/widget/${conf["confThemeEmbed"]}/album/${play2}" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>`;
}

if(play[play.length - 2] == 'track') {
play2 = play[play.length - 1];
embed = `<iframe title="deezer-widget" src="https://widget.deezer.com/widget/${conf["confThemeEmbed"]}/track/${play2}" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>`;
}

if(play[play.length - 2] == 'artist') {
play2 = play[play.length - 1];
embed = `<iframe title="deezer-widget" src="https://widget.deezer.com/widget/${conf["confThemeEmbed"]}/artist/${play2}/top_tracks" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>`;
}
embedServiceList += 'deezer';
break;


case 'pinterest.com':
case 'www.pinterest.com':
//https://stackoverflow.com/questions/7841711/javascript-or-jquery-equivalent-of-phps-strtok
play = item.split('?', 1)[0];
play = item.split('/');


if(play[play.length - 3] == 'pin') {
play2 = play[play.length - 2];
embed = `

<a data-pin-do="embedPin" data-pin-width="large" href="https://www.pinterest.com/pin/${play2}/"></a>`;
}

if(play[play.length - 3] == 'www.pinterest.com') {
play2 = play[play.length - 2];
embed = `

<a data-pin-do="embedUser" data-pin-board-width="400" data-pin-scale-height="240" data-pin-scale-width="80" href="https://www.pinterest.com/${play2}/"></a>`;
}

if(play[play.length - 3] != 'www.pinterest.com'&&play[play.length - 3] != 'pin') {
play2 = play[play.length - 2];
play3 = play[play.length - 3];

embed = `

<a data-pin-do="embedBoard" data-pin-board-width="400" data-pin-scale-height="240" data-pin-scale-width="80" href="https://www.pinterest.com/${play3}/${play2}/"></a>`;
}

embedServiceList += 'pinterest';
break;


case 'imgur.com':
play = item.split('/');
play = play[play.length - 1];
embed = `<blockquote class="imgur-embed-pub" lang="en" data-id="a/${play}"><a href="//imgur.com/a/${play}">${item}</a></blockquote><!--<script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>-->`;
embedServiceList += 'imgur';
break;

case 'dailymotion.com':
case 'www.dailymotion.com':
play = item.split('/');
play = play[play.length - 1];
embed = `<iframe frameborder="0" width="${w}" height="${h}" src="https://www.dailymotion.com/embed/video/${play}" allowfullscreen allow="autoplay"></iframe>`;
embedServiceList += 'dailymotion';
break;

case 'www.twitch.tv':
play = item.split('/');
play = play[play.length - 1];
if(play == ''){ play = play[play.length - 2]; }
embed = `<iframe src="https://embed.twitch.tv?channel=${play}&layout=video&referrer=some-referer-url&autoplay=false&parent=${(location.hostname)}" allowfullscreen="" scrolling="no" frameborder="0" height="${h}"></iframe>`;
embedServiceList += 'twitch';
break;


case "facebook.com":
case "www.facebook.com":
embed = `<style>.fb-post{ width: 100%; background: whitesmoke;  }
.fb-post>span { max-width:100%; }</style><script async defer src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2"></script> <div style="" class="fb-post" data-small-header="true" data-href="${item}" data-width="500" data-adapt-container-width="true"></div>`;
embedServiceList += 'facebook';
break;




//default:



}
}
}

/*
if(item.search(".jpg|.jpeg|.png|.gif|.img|.ico") != -1item.search(".jpg|.jpeg|.png|.gif|.img|.ico") != -1){ 
embed = `<a href="${item}"><img class="border" src="${item}" width=""></a>`
}*/

if(embedStatus != 'off'){
//https://stackoverflow.com/questions/2390789/how-to-replace-all-dots-in-a-string-using-javascript
itemCheck = item.replaceAll(/\./g, conf["confSymbolForSplit"]);

if(itemCheck.search(`${conf["confSymbolForSplit"]}mp4|${conf["confSymbolForSplit"]}webm|${conf["confSymbolForSplit"]}avi`) != -1&&itemCheck.search('/') != -1) {
embed2 = `<video height="${h}" controls style="width:100%"><source src="${item}" type="video/mp4">
<source src="${item}" type="video/ogg">Your browser does not support HTML5 video.</video>`;
item = `<a class="brand" target="_blank" href="${item}">${item}</a>`;
}

if(itemCheck.search(`${conf["confSymbolForSplit"]}mp3|${conf["confSymbolForSplit"]}m3u`) != -1&&itemCheck.search('/') != -1) {
embed2 = `<audio controls style="width:100%; opacity:0.8"><source src="${item}" type="audio/mp3">Your browser does not support the audio element.</audio>`;
item = `<a class="brand" target="_blank" href="${item}">${item}</a>`;
}

if(itemCheck.search(`${conf["confSymbolForSplit"]}ogg`) != -1&&itemCheck.search('/') != -1) {
embed2 = `<audio controls style="width:100%; opacity:0.8"><source src="${item}" type="audio/ogg">Your browser does not support the audio element.</audio>`;
item = `<a class="brand" target="_blank" href="${item}">${item}</a>`;
}

if(itemCheck.search(`${conf["confSymbolForSplit"]}wav`) != -1&&itemCheck.search('/') != -1) {

embed2 = `<audio controls style="width:100%; opacity:0.8"><source src="${item}" type="audio/wav">Your browser does not support the audio element.</audio>`;
item = `<a class="brand" target="_blank" href="${item}">${item}</a>`;
}

if(itemCheck.search(`${conf["confSymbolForSplit"]}mpd`) != -1&&itemCheck.search('/') != -1) {
embed2 = `<video data-dashjs-player src="${play}" controls>player: <a href="https://github.com/Dash-Industry-Forum/dash.js">dash.js</a>`;
item = `<a class="brand" target="_blank" href="${item}">${item}</a>`;
embedServiceList += 'mpd';
}

if(itemCheck.search(
`${conf["confSymbolForSplit"]}jpg|${conf["confSymbolForSplit"]}svg|${conf["confSymbolForSplit"]}jpeg|${conf["confSymbolForSplit"]}png|${conf["confSymbolForSplit"]}gif|${conf["confSymbolForSplit"]}img|${conf["confSymbolForSplit"]}ico`) != -1&&itemCheck.search('/') != -1&&itemCheck.search('/') != -1) {
//echo 'test';
embed2 = `
<a href="${item}"><img class="img" src="${item}" alt="img"></a>`;
if(targetOption == 'blank'){
item = `<a class="brand" target="_blank" href="${item}">${item}</a>`;
}else{
item = `<a class="brand" href="${item}">${item}</a>`;
}
}


if(item.indexOf(".html") != -1&&item.indexOf("./") != -1&&item.indexOf("http") == -1||
item.indexOf("/") != -1&&item.indexOf("index.htm") != -1) {
embed2 = `<iframe class="borderRadius2" width="${w}" height="400" src="${item}" loading="lazy" title="iframe"></iframe>`;
}



}




var item222 = '';
//if(item.search("http") != -1){
if(item.slice(0, 4) == 'http'&&item.search("http|://|www.") != -1){

if(embedStatus != 'off'&&host != undefined){

var ico = `https://www.google.com/s2/favicons?domain_url=${host[2]}`;
//var ico = `https://api.statvoo.com/favicon/?url=${host[2]}`;
//var ico = `https://api.faviconkit.com/${host[2]}/16`;
ico = `<img class="ico2 op" src="${ico}" alt="icon">`;
if(localStorage.getItem('confDataCollection') != 'on'){
ico = '🔗';
if(localStorage.getItem('confIconStatus') != 'on'){ ico = '·'; }
}

item = item.trim();


if(targetOption == 'blank'){
item222 = `<a class="brand" target="_blank" href="${item}">${ico} ${item}</a>`;
}else{
item222 = `<a class="brand" href="${item}">${ico} ${item}</a>`;
}

}else{
if(targetOption == 'blank'){
item222 = `<a class="brand" target="_blank" href="${item}">${item}</a>`;
}else{
item222 = `<a class="brand" href="${item}">${item}</a>`;
}

}
}


if(item[0] == '/'&&item.indexOf(".htm") != -1||item.indexOf("./") != -1&&item.indexOf(".htm") != -1&&item.indexOf("http") == -1){
if(targetOption == 'blank'){
/*item = `<a href="/projects/blog-in-progress/?q=${item} tag">#${item} <span class="sup">⇗</span></a>`;*/
item222 = `<a class="brand" target="_blank" href="${item}">${item}</a>`;
}else{
item222 = `<a class="brand" href="${item}">${item}</a>`;
}
}


//add tag
if(item[0] == '#'){
item222 = item.replaceAll(/#/g, "");
item222 = `<a class="tag brand light border2 op borderRadius2 small" href="${scriptDir}?q=%23${item222}">#${item222}</a>`;
}

if(item[0] == '@'){
item222 = `<a class="brand" href="${scriptDir}?q=${item}">${item}</a>`;
}

/*if(checkText == true){
if(q != ''&&q != null){
//item = item.toLowerCase().replaceAll(q.toLowerCase(), `<span style="border-bottom: 3px solid  var(--orange);">${q}</span>`);
//https://stackoverflow.com/questions/7313395/case-insensitive-replace-all
var q33 = (q).split(" ");
q33.forEach((element) => {
if((item.toLowerCase()).indexOf((element.toLowerCase())) >= 0){ item = `<span style="border-bottom: 3px solid  var(--orange);">${item}</span>`; }
});
}*/

var countHl = 0;
if(subQforLight != ''&&subQforLight != null&&subQforLight != undefined){
var q3388 = String(subQforLight).split(conf["confSymbolForSplit"]);
q3388.forEach((element3333) => {
element3333 = (element3333.trim()).toLowerCase();
if(element3333.trim() != ''&&item.trim() != ''){
//alert(element3333);
if(countHl == 0&&String(item.toLowerCase()).indexOf(element3333.toLowerCase()) != -1){
if(item222 != ''){
item222 = `<span class="bold borderBottomOrange break2 bottom">${item222}</span>`;
}else{
item222 = `<span class="bold borderBottomOrange break2 bottom">${item}</span>`;
}

if(item222 == ''){

}
countHl++;
}
}
});
}




if(item222 != ''){ item = item222; }
text += item;

// multi embed
if(multiEmbedStatus == 'on'&&embedStatus != 'off'){
text += embed + embed2;
embed = '';
embed2 = '';
}

// multi embed end


});

// single embed
if(multiEmbedStatus != 'on'&&embedStatus != 'off'){ text += embed+embed2; }


return text;
}














// light 2 highlightText
// highlight Text2 with autoplay when pressed id (date)
function highlightText2(text, targetOption){
//text = decodeURIComponent(text); // error sometimes


text = clearText(text);

var idGo = id;
if(getP2 != ''){ idgo = getP2 + 1; }




// if code

text = text.replaceAll(/</g, "&lt;");
text = text.replaceAll(/>/g, "&gt;");


let text2 = '';
let embed = '';
let embed2 = '';

text = [...text];

let forSplit = [
",", "*", "{", "}", "(", ")", "[", "[", "•", "«", "»", "☞",
`
`, " "
]
text.forEach((item) => {
forSplit.forEach((item2) => { // foreach
if(item == item2){
item = conf["confSymbolForSplit"] + item + conf["confSymbolForSplit"];
}
});
text2 += item;
});
text2 = text2.replaceAll("http", conf["confSymbolForSplit"] + "http");

//return text = text.toString();
//return text = text.join("");

//return text = text2;
//text = [...text];

text = '';
const myArray = text2.split(conf["confSymbolForSplit"]);
myArray.forEach((item) => {
//text += item.hostname;
//if(item.search("http") != -1){ 
/*if(item[0]+item[1]+item[2]+item[3] == 'http'&&item.search("http|://") != -1){ 
host = new URL(item).hostname; // stop working when error
}
*/

let checkEmbedEmpty = item.split('/');
//if(item.split('/').length > 4){
if(checkEmbedEmpty[3]){
host = item.split('/');
if(host[3] != undefined){
switch (host[2]) {

case "youtu.be":
case "m.youtube.com":
case "www.youtube.com":
case "music.youtube.com":

if((item).indexOf((`v=`)) >= 0){
play = item.split('v=').pop();
if(play != ''){
embed = `<!--<iframe id="player" style="border:0;" height="${h}" width="${w}" src="https://www.youtube.com/embed/${play}"></iframe>--><iframe width="${w}" height="${h}" src="https://www.youtube.com/embed/${play}?&autoplay=1" title="YouTube video player" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; gyroscope; autoplay; picture-in-picture" allowfullscreen></iframe>`;
embedServiceList += 'youtube';
}
}

if((item).indexOf((`list`)) >= 0){
play = item.split('list=');
play = play[1];
if(play != ''){
embed = `<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/videoseries?list=${play}&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
embedServiceList += 'youtube';
}
}

if((item).indexOf((`featured`)) >= 0||(item).indexOf((`@`)) >= 0){
play = item.split('/');
play = play[3];
if(play != ''){
play = play.replace("@", "");
embed = `<iframe width="${w}" height="315" src="https://www.youtube.com/embed/?listType=user_uploads&list=${play}&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
embedServiceList += 'youtube';
}
}

break;

case 'vimeo.com':
play = item.split('/');
embed = `<iframe src="https://player.vimeo.com/video/`+play[play.length-1]+`?badge=0&autoplay=1" height="${h}"  frameborder="0"></iframe>`;
embedServiceList += 'vimeo';
break;

case "x.com":
case "mobile.x.com":
case "twitter.com":
case "mobile.twitter.com":
embed = `<style>.twitter-tweet { margin-top: 0px !important; }</style><div style="display: block; width: 100%; max-width: 550px; margin: 0 auto;"><blockquote class="twitter-tweet" data-lang="${lang}" data-theme="${conf["confThemeEmbed"]}"><a href="${item}"></a></blockquote></div><!--<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>-->`;
embedServiceList += 'xcom';
break;

case "www.reddit.com":
if(item.split('/').length >= 9){
play = item.replaceAll('reddit.com/r/', "redditmedia.com/r/");
embed = `<iframe style="border-radius: 0 !important;" id="reddit-embed" src="${play}?ref_source=embed&amp;ref=share&amp;embed=true&amp;theme=${conf["confThemeEmbed"]}" sandbox="allow-scripts allow-same-origin allow-popups" style="border: none;" scrolling="yes" width="640" height="320px"></iframe>`;
embedServiceList += 'reddit';
}
break;

case "soundcloud.com":
embed = `<iframe width="${w}" height="${h}" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=${item}&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>`;
embedServiceList += 'soundcloud';
break;

case "tunein.com":
play = item.split('/');
play = play[play.length - 2];
play = play.split('-');
play = play[play.length - 1];
if(confDevice == 'mobile'){
embed = `<iframe src="https://tunein.com/embed/player/${play}/?autoplay=true&background=${conf["confThemeEmbed"]}" style="height:100px;" scrolling="no" frameborder="no" sandbox="allow-same-origin allow-scripts allow-popups allow-forms"></iframe>`;
}else{
embed = `<iframe width="${w}" height="300" src="${item}"></iframe>`;
}
embedServiceList += 'tunein';
break;

case "codepen.io":
play = item.split('/');
play = play[play.length - 1];
embed = `<p class="codepen" data-height="420" data-default-tab="result" data-theme-id="${conf["confThemeEmbed"]}" data-slug-hash="${play}" data-user="" style="height: 420px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"></p><!--<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>-->`;
embedServiceList += 'codepen';
break;


case "giphy.com":
play = item.split('-');
play = play[play.length - 1];
embed = `<iframe src="https://giphy.com/embed/${play}" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/$play">via GIPHY</a></p>`;
embedServiceList += 'giphy';
break;

case "archive.org":
if(item.search(`/details/`) != -1) {
play = item.split('/');
play = play[play.length - 1];
h = h + h;
embed = `<iframe src="https://archive.org/embed/${play}" width="${w}" height="${h}" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>`;
embedServiceList += 'archive';
}
break;

case "www.instagram.com":
case "instagram.com":
//https://stackoverflow.com/questions/7841711/javascript-or-jquery-equivalent-of-phps-strtok
play = item.split('?', 1)[0];
embed = `<style>iframe.instagram-media {
    max-width: 100% !important;
    width: 100% !important;
    min-width: auto !important;
}</style><blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="${play}?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="12" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"></blockquote><!--<script async src="//www.instagram.com/embed.js"></script>-->`;
embedServiceList += 'instagram';
break;

case "open.spotify.com":
//https://stackoverflow.com/questions/7841711/javascript-or-jquery-equivalent-of-phps-strtok
play = item.split('?', 1)[0];
play = item.split('/');

if(play[play.length - 2] == 'playlist') {
play2 = play[play.length - 1];
embed = `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/${play2}?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
}

if(play[play.length - 2] == 'track') {
play2 = play[play.length - 1];
embed = `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/${play2}?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
}

if(play[play.length - 2] == 'artist') {
play2 = play[play.length - 1];
embed = `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/${play2}?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
}
embedServiceList += 'spotify';
break;




case 'deezer.com':
case 'www.deezer.com':
//https://stackoverflow.com/questions/7841711/javascript-or-jquery-equivalent-of-phps-strtok
play = item.split('?', 1)[0];
play = item.split('/');

if(play[play.length - 2] == 'album') {
play2 = play[play.length - 1];
embed = `<iframe title="deezer-widget" src="https://widget.deezer.com/widget/${conf["confThemeEmbed"]}/album/${play2}" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>`;
}

if(play[play.length - 2] == 'track') {
play2 = play[play.length - 1];
embed = `<iframe title="deezer-widget" src="https://widget.deezer.com/widget/${conf["confThemeEmbed"]}/track/${play2}" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>`;
}

if(play[play.length - 2] == 'artist') {
play2 = play[play.length - 1];
embed = `<iframe title="deezer-widget" src="https://widget.deezer.com/widget/${conf["confThemeEmbed"]}/artist/${play2}/top_tracks" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>`;
}
embedServiceList += 'deezer';
break;

case 'pinterest.com':
case 'www.pinterest.com':
//https://stackoverflow.com/questions/7841711/javascript-or-jquery-equivalent-of-phps-strtok
play = item.split('?', 1)[0];
play = item.split('/');


if(play[play.length - 3] == 'pin') {
play2 = play[play.length - 2];

embed = `

<a data-pin-do="embedPin" data-pin-width="large" href="https://www.pinterest.com/pin/${play2}/"></a>`;
}

if(play[play.length - 3] == 'www.pinterest.com') {
play2 = play[play.length - 2];
embed = `

<a data-pin-do="embedUser" data-pin-board-width="400" data-pin-scale-height="240" data-pin-scale-width="80" href="https://www.pinterest.com/${play2}/"></a>`;
}

if(play[play.length - 3] != 'www.pinterest.com'&&play[play.length - 3] != 'pin') {
play2 = play[play.length - 2];
play3 = play[play.length - 3];

embed = `

<a data-pin-do="embedBoard" data-pin-board-width="400" data-pin-scale-height="240" data-pin-scale-width="80" href="https://www.pinterest.com/${play3}/${play2}/"></a>`;
}

embedServiceList += 'pinterest';
break;

case 'imgur.com':
play = item.split('/');
play = play[play.length - 1];
embed = `<blockquote class="imgur-embed-pub" lang="en" data-id="a/${play}"><a href="//imgur.com/a/${play}">${item}</a></blockquote><!--<script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>-->`;
embedServiceList += 'imgur';
break;

case 'dailymotion.com':
case 'www.dailymotion.com':
play = item.split('/');
play = play[play.length - 1];
embed = `<iframe frameborder="0" width="${w}" height="${h}" src="https://www.dailymotion.com/embed/video/${play}?autoplay=1" allowfullscreen allow="autoplay"></iframe>`;
embedServiceList += 'dailymotion';
break;

case 'www.twitch.tv':
play = item.split('/');
play = play[play.length - 1];
if(play == ''){ play = play[play.length - 2]; }
embed = `<iframe src="https://embed.twitch.tv?channel=${play}&layout=video&referrer=some-referer-url&parent=${(location.hostname)}" allowfullscreen="" scrolling="no" frameborder="0" height="${h}"></iframe>`;
embedServiceList += 'twitch';
break;


case "facebook.com":
case "www.facebook.com":
embed = `<style>.fb-post{ width: 100%; background: whitesmoke;  }
.fb-post>span { max-width:100%; }</style><script async defer src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2"></script> <div style="" class="fb-post" data-small-header="true" data-href="${item}" data-width="500" data-adapt-container-width="true"></div>`;
embedServiceList += 'facebook';
break;




//default:



}
}
}

/*
if(item.search(".jpg|.jpeg|.png|.gif|.img|.ico") != -1item.search(".jpg|.jpeg|.png|.gif|.img|.ico") != -1){ 
embed = `<a href="${item}"><img class="border" src="${item}" width=""></a>`
}*/

if(embedStatus != 'off'){



itemCheck = item.replaceAll(/\./g, conf["confSymbolForSplit"]);

if(itemCheck.search(`${conf["confSymbolForSplit"]}mp4|${conf["confSymbolForSplit"]}webm|${conf["confSymbolForSplit"]}avi`) != -1&&itemCheck.search('/') != -1) {
embed2 = `<video height="${h}" controls autoplay style="width:100%"><source src="${item}" type="video/mp4">
<source src="${item}" type="video/ogg">Your browser does not support HTML5 video.</video>`;
item = `<a class="brand" target="_blank" href="${item}">${item}</a>`;
}

if(itemCheck.search(`${conf["confSymbolForSplit"]}m3u8`) != -1&&itemCheck.search('/') != -1) {
embed2 = `<iframe src="https://www.hlsplayer.org/play?url=${item}" style="width: 100%; height: ${h};" scrolling="no" frameborder="no" sandbox="allow-same-origin allow-scripts allow-popups allow-forms"></iframe>player: <a href="https://www.hlsplayer.org/">www.hlsplayer.org</a>`;
item = `<a class="brand" target="_blank" href="${item}">${item}</a>`;
}

if(itemCheck.search(`${conf["confSymbolForSplit"]}mpd`) != -1&&itemCheck.search('/') != -1) {
embed2 = `<video data-dashjs-player autoplay src="${play}" controls>player: <a href="https://github.com/Dash-Industry-Forum/dash.js">dash.js</a>`;
item = `<a class="brand" target="_blank" href="${item}">${item}</a>`;
embedServiceList += 'mpd';
}



if(itemCheck.search(`${conf["confSymbolForSplit"]}mp3|${conf["confSymbolForSplit"]}m3u`) != -1&&itemCheck.search('/') != -1) {
embed2 = `<audio controls autoplay style="width:100%; opacity:0.8"><source src="${item}" type="audio/mp3">Your browser does not support the audio element.</audio>`;
item = `<a class="brand" target="_blank" href="${item}">${item}</a>`;
}

if(itemCheck.search(`${conf["confSymbolForSplit"]}ogg`) != -1&&itemCheck.search('/') != -1) {
checkText = false;

embed2 = `<audio controls autoplay style="width:100%; opacity:0.8"><source src="${item}" type="audio/ogg">Your browser does not support the audio element.</audio>`;
item = `<a class="brand" target="_blank" href="${item}">${item}</a>`;
}

if(itemCheck.search(`${conf["confSymbolForSplit"]}wav`) != -1&&itemCheck.search('/') != -1) {
embed2 = `<audio controls autoplay style="width:100%; opacity:0.8"><source src="${item}" type="audio/wav">Your browser does not support the audio element.</audio>`;
item = `<a class="brand" target="_blank" href="${item}">${item}</a>`;
}

if(itemCheck.search(`${conf["confSymbolForSplit"]}svg|${conf["confSymbolForSplit"]}jpg|${conf["confSymbolForSplit"]}jpeg|${conf["confSymbolForSplit"]}png|${conf["confSymbolForSplit"]}gif|${conf["confSymbolForSplit"]}img|${conf["confSymbolForSplit"]}ico`) != -1&&itemCheck.search('/') != -1) {
//echo 'test';
embed2 = `
<a href="${item}"><img class="img" src="${item}" alt="img"></a>`;
if(targetOption == 'blank'){
item = `<a class="brand" target="_blank" href="${item}">${item}</a>`;
}else{
item = `<a class="brand" href="${item}">${item}</a>`;
}
}

if(item.indexOf(".html") != -1&&item.indexOf("./") != -1&&item.indexOf("http") == -1||item.indexOf("/") != -1&&item.indexOf("index.htm") != -1) {
embed2 = `<iframe class="borderRadius2" width="${w}" height="400" src="${item}" title="iframe"></iframe>`;
}



}





//if(item.search("http") != -1){
if(item.slice(0, 4) == 'http'&&item.search("http|://|www.") != -1){
checkText = false;
if(embedStatus != 'off'&&host != undefined){
var ico = `https://www.google.com/s2/favicons?domain_url=${host[2]}`;
//var ico = `https://api.statvoo.com/favicon/?url=${host[2]}`;
//var ico = `https://api.faviconkit.com/${host[2]}/16`;
ico = `<img class="ico2 op" src="${ico}" alt="icon">`;
if(localStorage.getItem('confDataCollection') != 'on'){
ico = `🔗`;
if(localStorage.getItem('confIconStatus') != 'on'){ ico = '·'; }
}

item = item.trim();

if(targetOption == 'blank'){
item = `<a class="brand" target="_blank" href="${item}">${ico} ${item}</a>`;
}else{
item = `<a class="brand" href="${item}">${ico} ${item}</a>`;
}


}else{


if(targetOption == 'blank'){
item = `<a class="brand" target="_blank" href="${item}">${item}</a>`;
}else{
item = `<a class="brand" href="${item}">${item}</a>`;
}

}
}


if(item[0] == '/'&&item.indexOf(".htm") != -1||item.indexOf("./") != -1&&item.indexOf(".htm") != -1&&item.indexOf("http") == -1){

if(targetOption == 'blank'){
/*item = `<a href="/projects/blog-in-progress/?q=${item} tag">#${item} <span class="sup">⇗</span></a>`;*/
item = `<a class="brand" target="_blank" href="${item}">${item}</a>`;
}else{
item = `<a class="brand" href="${item}">${item}</a>`;
}

}


//add tag
if(item[0] == '#'){
item = item.replaceAll(/#/g, "");
item = `<a class="tag brand light border2 op borderRadius2 small" href="${scriptDir}?q=%23${item}">#${item}</a>`;
}

if(item[0] == '@'){
item = `<a class="brand" href="${scriptDir}?q=${item}">${item}</a>`;
}

text += item;



// multi embed
if(multiEmbedStatus == 'on'&&embedStatus != 'off'){
text += embed+embed2;
embed = '';
embed2 = '';
}

// multi embed end


});

// single embed
if(multiEmbedStatus != 'on'&&embedStatus != 'off'){ text += embed+embed2; }



return text;
}

















// Time  post date
function checkTime(i) {
  if (i < 10) {i = "0" + i};  
  return i;
}

// https://stackoverflow.com/questions/13903897/javascript-return-number-of-days-hours-minutes-seconds-between-two-dates
function fuPostTime(p){

const  date_future = Date.now();
const  date_now = new Date(p * 1000);


// get total seconds between the times
var delta = Math.abs(date_future - date_now) / 1000;

var year = Math.floor(delta / 31557600);
delta -= year * 31557600;

var month = Math.floor(delta / 2629800);
delta -= month * 2629800;

var week = Math.floor(delta / 604800);
delta -= week * 604800;

// calculate (and subtract) whole days
var days = Math.floor(delta / 86400);
delta -= days * 86400;

// calculate (and subtract) whole hours
var hours = Math.floor(delta / 3600) % 24;
delta -= hours * 3600;

// calculate (and subtract) whole minutes
var minutes = Math.floor(delta / 60) % 60;
delta -= minutes * 60;

// what's left is seconds
var seconds = delta % 60;  // in theory the modulus is not required

if(year > 0){
time = year +' year ';
} else if(month > 0){
time = month +' month ';
} else if (week > 0){
time = week +' week ';
} else if (days > 0){
time = days +' day ';
} else if(hours > 0){
time = hours +' hour ';
} else if (minutes > 0) { time = minutes +' minute '; }
else { time = checkTime(Math.floor(seconds)) +' second '; }

time = time + ' ago';

if(p == 0||isNaN(p) == true||p == ''){ time = p; }
return time;
//document.getElementById("time").innerHTML = '&nbsp;'+time+'&nbsp;';
}


fuPostTime();

var tmp = setInterval(fuPostTime, 1000);








// navigation navbar
function blogNav(mode){


switch (mode){
case 'list':
case 'search':
var prev = Number(Math.floor(getP - postLimit)); //https://stackoverflow.com/questions/1133770/how-to-convert-a-string-to-an-integer-in-javascript
var next = Number(Math.floor(getP + postLimit));



break;

default:
var prev = Number(Math.floor(getP - 1)); //https://stackoverflow.com/questions/1133770/how-to-convert-a-string-to-an-integer-in-javascript
var next = Number(Math.floor(getP + 1));
}

if(mode != 'search'){ // if not search
total = Number(jsonVar.length);
}

let total2 = total;

if(postLimit >= total){ next = total; total2 = total; }
if(prev <= 0){ prev = 0; }

if(next >= total){ next = total  - postLimit; }

var navOption2 = '';
var navOption3 = '';

let nav2Print = '';
var navMode = 'p';

switch (mode){

case 'search':
navMode = 'p3';

navOption3 = `<input type="hidden" name="q" value="${q}">`;
navOption2 = 'q='+encodeURIComponent(q)+"&";
nav2Print = `
<div class="tRight">
<!--<a class="op borderList button light" href="?id=">random</a>-->
</div>
<!--<a class="op border borderRadius2 button light" style="width: 49%;" href="#" onclick="history.back()">back</a>-->
`;
break;

case 'list':
case '':
navMode = 'p';

nav2Print = `
<div class="tRight"></div>
`;

break;

default:
navMode = 'p2';


nav2Print = `

<div class="margin2"></div>

<div class="block right tRight zero">
<div class="tagList">
<a class="op borderList borderRadius2 button light" href="#" onclick="history.back()">back</a>
<a class="op borderList borderRadius2 button light" href="?p=`+Math.floor(getP)+`">list</a>
</div>
</div>

`;
}



if(q == null||q == 'null'){ q = ''; }

var pringInputRange = '';
if(confDevice != 'mobile'){
pringInputRange = `
<form id="form">
${navOption3}
<input  name="${navMode}" style="" id="rangeinput" class="slider" value="${getP}" type="range" min="0" max="${total2}" step="${postLimit}" onmouseup="this.form.submit();" ontouchend="this.form.submit();">
</form>
`;
}

// hide button if end
var hideButtonClass = '';
var hideButtonClass2 = '';
if(mode == 'search'){
if(getP3 >= total - postLimit){ hideButtonClass = 'op2 cursor-not-allowed'; }
if(getP3 <= 0){ hideButtonClass2 = 'op2 cursor-not-allowed'; }
}
if(mode == 'list'){
if(getP + postLimit >= total){ hideButtonClass = 'op2 cursor-not-allowed'; }
if(getP <= 0){ hideButtonClass2 = 'op2 cursor-not-allowed'; }
}

return `


<style>
.gridBlogNav {
display: grid;
grid-template-columns: 1fr minmax(70px, 20%) 1fr;
grid-gap: 1px;
justify-content: center;
}

@media(max-width: 240px) {
.gridBlogNav { grid-template-columns: 1fr; }
}
</style>



<div class="block padding2"></div>

${pringInputRange}

<div class="gridBlogNav">
<a class="${hideButtonClass2} border button light2 borderRadius2" href="?${navOption2}${navMode}=${prev}">&#8592;</a>
<div class="button border op xSmall bg borderRadius2">${navMode}: `+Math.floor(getP/postLimit)+`</div>
<a class="${hideButtonClass} border button light2 borderRadius2" href="?${navOption2}${navMode}=${next}">&#8594;</a>
</div>

${nav2Print}

<div class="block padding2"></div>

`;
}
// end navigation navbar














// for embed 
if(embedStatus != 'off'){

if(embedServiceList.search(`xcom`) != -1) {
var script = document.createElement('script');
script.type='text/javascript';
//script.async = true;
script.charset = 'utf-8';
script.src = 'https://platform.x.com/widgets.js';      
document.getElementsByTagName('head')[0].appendChild(script);
}

if(embedServiceList.search(`codepen`) != -1) {
var script2 = document.createElement('script');
script2.type='text/javascript';
//script2.async = true;
script2.charset = 'utf-8';
script2.src = 'https://cpwebassets.codepen.io/assets/embed/ei.js';
document.getElementsByTagName('head')[0].appendChild(script2);
}

if(embedServiceList.search(`instagram`) != -1) {
var script2 = document.createElement('script');
script2.type='text/javascript';
//script2.async = true;
script2.charset = 'utf-8';
script2.src = '//www.instagram.com/embed.js';
document.getElementsByTagName('head')[0].appendChild(script2);
}

if(embedServiceList.search(`imgur`) != -1) {
var script2 = document.createElement('script');
script2.type='text/javascript';
//script2.async = true;
script2.charset = 'utf-8';
script2.src = '//s.imgur.com/min/embed.js';
document.getElementsByTagName('head')[0].appendChild(script2);
}

if(embedServiceList.search(`pinterest`) != -1) {
var script2 = document.createElement('script');
script2.type='text/javascript';
//script2.async = true;
script2.defer = true;
script2.charset = 'utf-8';
script2.src = '//data/wordEnJsonVar.js';
document.getElementsByTagName('head')[0].appendChild(script2);
}

if(embedServiceList.search(`mpd`) != -1) {
var script2 = document.createElement('script');
script2.type='text/javascript';
//script2.async = true;
script2.defer = true;
script2.charset = 'utf-8';
script2.src = 'https://cdn.dashjs.org/latest/dash.all.min.js';
document.getElementsByTagName('head')[0].appendChild(script2);
}

}



// below without loop array (probably)


// timer redirect
if(mode == 'auto-random'){

setInterval(fuTimerRdirect, 1000);

function fuTimerRdirect(){
sTimeRedir[0] = sTimeRedir[0] - 1000;
document.getElementById("timerRedir").innerHTML = sTimeRedir[0] / 1000;
}
}






// start random url from search
let lFoundQUrlRandom = lFoundQUrlList[Math.floor(Math.random() * lFoundQUrlList.length)];
//console.log(lFoundQUrlRandom);

if(lFoundQUrlRandom != undefined){
if(q2 == 'r'){
if(lFoundQUrlRandom != ''){
/*sTimeRedir[2] = 1200;
comMessagePrint = `random URL: `+ sTimeRedir[2] / 1000 +` sec.`;*/
if((''+window.location+'').search("#stopRedir") == -1){ // if back Stop Redir
window.location.href = '/projects/25-redirects/?rUrl=' + lFoundQUrlRandom;
//setTimeout(function(){ window.location.href = postUrl; }, sTimeRedir[2]);
}
window.location.href = window.location.href+'#stopRedir'; 
}
//console.log(postUrl);
}
// end random url from search
}




}
// end main all end blog (end all)






















function hlwClassAdd(name){
let elementNumb = document.getElementsByClassName(name).length;
let i = 0;
while (i < elementNumb) {
document.getElementsByClassName(name)[i].classList.add("highlight");
document.getElementsByClassName(name)[i].classList.add("highlight2");
i++;
}
}


function hlwClassRemove(name){
let elementNumb = document.getElementsByClassName(name).length;
let i = 0;
while (i < elementNumb) {
document.getElementsByClassName(name)[i].classList.remove("highlight");
document.getElementsByClassName(name)[i].classList.remove("highlight2");
i++;
}
}



function clearText(text){

//https://stackoverflow.com/questions/2774471/what-is-c2-a0-in-mime-encoded-quoted-printable-text
text = text.replaceAll(/%C2%A0/g, " "); // non-breaking space.
text = text.replaceAll(/ /g, " "); // non-breaking space.

return text;
}


// var for if without main.js

//https://stackoverflow.com/questions/5409641/set-a-variable-if-undefined-in-javascript
// if main index js not exit
if (typeof lang === 'undefined') { var lang = 'en'; }

if (typeof conf["confThemeEmbed"] === 'undefined') {
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
conf["confThemeEmbed"] = 'dark';
}else{
conf["confThemeEmbed"] = 'light';
}
}

if (typeof confDevice === 'undefined') {
var confDevice = '';
/*if(confDataCollection != 'on'){
confDevice = '(disabled, privacy)';
}else{}*/
if(navigator.userAgent.search("iPhone|Android|Opera Mini|Mobile|Lumia|Phone") != -1){ confDevice = 'mobile';  }
if(navigator.userAgent.search("PlayStation|Xbox|TV|Roku|SmartTV|BRAVIA") != -1){ confDevice = 'tv';  }
if(confDevice == ''){ confDevice = 'pc'; }
}








//https://stackoverflow.com/questions/18516942/fastest-general-purpose-levenshtein-javascript-implementation
function levenshtein(s, t) {
    if (s === t) {
        return 0;
    }
    var n = s.length, m = t.length;
    if (n === 0 || m === 0) {
        return n + m;
    }
    var x = 0, y, a, b, c, d, g, h, k;
    var p = new Array(n);
    for (y = 0; y < n;) {
        p[y] = ++y;
    }

    for (; (x + 3) < m; x += 4) {
        var e1 = t.charCodeAt(x);
        var e2 = t.charCodeAt(x + 1);
        var e3 = t.charCodeAt(x + 2);
        var e4 = t.charCodeAt(x + 3);
        c = x;
        b = x + 1;
        d = x + 2;
        g = x + 3;
        h = x + 4;
        for (y = 0; y < n; y++) {
            k = s.charCodeAt(y);
            a = p[y];
            if (a < c || b < c) {
                c = (a > b ? b + 1 : a + 1);
            }
            else {
                if (e1 !== k) {
                    c++;
                }
            }

            if (c < b || d < b) {
                b = (c > d ? d + 1 : c + 1);
            }
            else {
                if (e2 !== k) {
                    b++;
                }
            }

            if (b < d || g < d) {
                d = (b > g ? g + 1 : b + 1);
            }
            else {
                if (e3 !== k) {
                    d++;
                }
            }

            if (d < g || h < g) {
                g = (d > h ? h + 1 : d + 1);
            }
            else {
                if (e4 !== k) {
                    g++;
                }
            }
            p[y] = h = g;
            g = d;
            d = b;
            b = c;
            c = a;
        }
    }

    for (; x < m;) {
        var e = t.charCodeAt(x);
        c = x;
        d = ++x;
        for (y = 0; y < n; y++) {
            a = p[y];
            if (a < c || d < c) {
                d = (a > d ? d + 1 : a + 1);
            }
            else {
                if (e !== s.charCodeAt(y)) {
                    d = c + 1;
                }
                else {
                    d = c;
                }
            }
            p[y] = d;
            c = a;
        }
        h = d;
    }

    return h;
}











