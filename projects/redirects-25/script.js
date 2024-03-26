// Search redirects v.1.9.0
// Mini google or search engine
// The script redirects the search query + command to another location.

// conf
var com = "on"; // on, off redirection
var sTimeRedirect = 1000;
// conf

var geturl = location.href;
var url = new URL(geturl);
var q = url.searchParams.get("q");


var qr = url.searchParams.get("qr");
var rq = url.searchParams.get("rq");
if(rq != null){ qr = qr + rq; }
if(qr != null){
qr = qr.replaceAll(/%/g, "%25");
qr = decodeURIComponent(qr);
qr = qr.trim();

q = qr;

if(com == "on"&&String(location.href).indexOf("#!StopRedirect") == -1){

location.href = fuMHideFileNameExt(qr);
location.href = location.href + '#!StopRedirect';

//location.href.replace(fuMHideFileNameExt(qr),);
//location.href.replace(location.href + '#!StopRedirect',);
}
}else{ qr = ''; }




var qCom33 = url.searchParams.get("qCom");
if(qCom33 != null){
qCom33 = qCom33.replaceAll(/%/g, "%25");
qCom33 = decodeURIComponent(qCom33);
qCom33 = qCom33.trim();
}else{ qCom33 = ''; }

q = String(q + ' '+qCom33).trim();

var rColor = 'yellow';
if(q.slice(-2) == 'ls'||q.slice(-2) == 'rs'){
sTimeRedirect = 2000;
rColor = 'orange';
}


/*var rUrlGet = url.searchParams.get("rUrl");
//fuMHideFileNameExt(); //rmme
rUrlGet = fuMHideFileNameExt(rUrlGet);*/

var rUrlGet = String(location.href);
rUrlGet = (rUrlGet).split("rUrl=");
rUrlGet = rUrlGet[1];
rUrlGet = fuMHideFileNameExt(rUrlGet);
var rUrlGetPrint = '';

var random = '';
var urlList = [];

var sRedirectUrl = '';

var tmp = '';


let sUrlText = String(url);

const myArray = sUrlText.split("q=");
sUrlText = myArray[0];


if(q == ''&&q != 'null'){ q = 'q'; }






if(rUrlGet == null&&q != 'null'&&q != null&&q != ''&&sUrlText.indexOf("cache") == -1){

q = q.trim();
//q = q.replace(/%([^\d].)/, "%25$1");
q = q.replaceAll(/%/g, "%25");
q = decodeURIComponent(q);

let qHashtag = location.href;
qHashtag = qHashtag.split("#")[1];
if(qHashtag != undefined){
qHashtag = (String(location.href)).split("?")[1];
qHashtag = (qHashtag + "&").split("&");
qHashtag.forEach((val) => {
if(val.indexOf("q=") != -1){
val = val.replace("q=", "");
q = val;
q = decodeURIComponent(q);
}
});
}

// for the command at the end of the search query
var strArray = q.split(" ");
var qCom = strArray[strArray.length - 1] + "#";
var q3 = q + "#";



switch (qCom) {
case 'π#':
q = q.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
url = "?q=" + q;
if(q == ''){
urlList = [
'tec', 'sci', 'dev', 'n2', "spo",
];
random = Math.floor(Math.random() * urlList.length);
url = '?q=' + urlList[random];
}
sRedirectUrl = url;
break;

case 'l#':  case 'll#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.google.com/search?btnI=1&q=" + q,
//url = "https://you.com/search?q=!" + q;
//url = "https://duckduckgo.com/?q=! " + q;
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
sRedirectUrl = url;

if(q == ''){
url = 'https://www.google.com/';
sRedirectUrl = url;
}

break;


case 'r#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q.trim());
urlList = [
"/site-search.html?q=" + q + " r",
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
if(q == ''){
urlList = [
"/site-search.html",
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
}
sRedirectUrl = url;
break;

case 'rr#':
case 'rs#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q.trim());
urlList = [
"/site-search.html?q=" + q + " r",
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
if(q == ''){
urlList = [
"/links.html?mode=randUrl",
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
}
sRedirectUrl = url;
break;

case 'x#':
case 'twi#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
url = "https://x.com/search?q=" + q;
if(q == ''){ url = "https://x.com/"; }
sRedirectUrl = url;
break;

case 'red#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
//url = "https://www.reddit.com/search/?q=" + q + "&type=link";
url = "?q=" + q + " site:https://www.reddit.com/";
if(q == ''){ url = "https://www.reddit.com/"; }
sRedirectUrl = url;
break;

case 'med#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
url = "?q=" + q + " site:https://medium.com/";
if(q == ''){ url = "https://medium.com/"; }
sRedirectUrl = url;
break;

case 'cc#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://search.creativecommons.org/search?q="+q+"&license=cc0,pdm",
"https://www.google.com/search?q="+q+"&tbm=isch&tbs=il:cl",
"https://www.bing.com/images/search?q="+q+"&setlang=en&cc=us&qft=+filterui:license-L1",
];
random = Math.floor(Math.random() * urlList.length);
random = urlList[random];
sRedirectUrl= random;
break;

case 'i#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.google.com/search?q=" + q + "&newwindow=1&source=lnms&tbm=isch",
"https://www.bing.com/images/search?q=" + q,
];
random = Math.floor(Math.random() * urlList.length);
random = urlList[random];
sRedirectUrl= random;
break;

case 't#':
case 'tr#':
case 'tra#':
case 'd#':
q = q3.replace(qCom, '');
q = q.trim();

var deepLq = q.replaceAll(/\//g, "-"); // fix
deepLq = encodeURIComponent(deepLq);

q = encodeURIComponent(q);

urlList = [
//"https://translate.google.com/?sl=auto&tl=auto&text="+q+"&op=translate",
"https://www.deepl.com/translator#auto/auto/"+deepLq,
"https://www.bing.com/translator/?text="+q+"&from=auto&to=auto",
];
if(conf["confDevice"] != 'mobile'){
urlList.push("https://translate.google.com/?sl=auto&text="+q+"&op=translate");
}

random = Math.floor(Math.random() * urlList.length);
random = urlList[random];
sRedirectUrl= random;
break;

case 'tt#':
q = q3.replace(qCom, '');
q = q.trim();
var deepLq = q.replaceAll(/\//g, "-"); // fixed
deepLq = encodeURIComponent(deepLq);
q = encodeURIComponent(q);
urlList = [
"https://translate.google.com/?sl=auto&tl=en&text="+q+"&op=translate",
"https://www.deepl.com/translator#auto/en/"+deepLq,
"https://www.bing.com/translator/?text="+q+"&from=auto&to=en",
];
random = Math.floor(Math.random() * urlList.length);
random = urlList[random];
sRedirectUrl = random;
break;

case 'tg#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://translate.google.com/?sl=auto&tl=auto&text="+q+"&op=translate",
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
sRedirectUrl = url;
break;

case 'n#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.google.com/search?q="+q+"&tbm=nws",
"https://www.bing.com/news/search?q="+q,
];

random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
if(q == ''){
urlList = [
"https://news.google.com/",
"https://flipboard.com/topic/news",
"https://www.bing.com/news/",
"https://news.yahoo.com/",
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
}
sRedirectUrl = url;
break;

case 'tec#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"?q=" + q + " q",
];

random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
if(q == ''){
urlList = [
"https://www.bing.com/news/search?q=Technology",
"https://www.yahoo.com/tech/",
"https://slashdot.org/",
"https://flipboard.com/topic/technology",
"https://flipboard.com/topic/computerscience",
"https://news.google.com/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRGRqTVhZU0FtVnVHZ0pWVXlnQVAB",
"https://www.reddit.com/r/technology/",
"https://finance.yahoo.com/tech/",
"https://substack.com/browse/technology",
];

/*if(conf["confDevice"] == 'mobile'){
urlList.push("https://www.bing.com/news/search?q=Technology");
}else{
urlList.push("https://www.bing.com/news/search?q=Sci/Tech");
}*/

random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
}
sRedirectUrl = url;
break;

case 'sci#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"?q=" + q + " q",
];

random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
if(q == ''){
urlList = [
"https://flipboard.com/topic/science",
"https://flipboard.com/topic/science",
"https://flipboard.com/topic/science",
"https://science.slashdot.org/",
"https://news.google.com/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRFp0Y1RjU0FtVnVHZ0pWVXlnQVAB",
"https://www.bing.com/news/search?q=Science",
"https://www.yahoo.com/news/science/",
"https://www.reddit.com/r/science/",
"https://news.yahoo.com/science/",
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
}
sRedirectUrl = url;
break;


case 'n2#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"?q=" + q + " q",
];

random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
if(q == ''){
urlList = [
"https://flipboard.com/topic/culture",
"https://flipboard.com/topic/lifestyle",
"https://flipboard.com/topic/celebritynews",
"https://flipboard.com/topic/food",
"https://flipboard.com/topic/travel",
"https://flipboard.com/topic/homedecor",
"https://www.reddit.com/r/movies/",
"https://www.reddit.com/r/Music/",
"https://www.reddit.com/r/pics/",

"https://www.bing.com/news/search?q=Entertainment",

"https://finance.yahoo.com/",
"https://www.yahoo.com/entertainment/",
"https://www.yahoo.com/lifestyle/",

"https://www.bing.com/news/search?q=Business",
"https://www.google.com/finance/",
"https://news.google.com/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRGx6TVdZU0FtVnVHZ0pWVXlnQVAB",
"https://news.google.com/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNREpxYW5RU0FtVnVHZ0pWVXlnQVAB",
"https://news.google.com/topics/CAAqIQgKIhtDQkFTRGdvSUwyMHZNR3QwTlRFU0FtVnVLQUFQAQ",
"https://flipboard.com/topic/business",

];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
}
sRedirectUrl = url;
break;

case 'nn#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
//"?q=" + q + " bin",
"https://www.perplexity.ai/search/?q=" + q,
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];

if(q == ''){
urlList = [
"https://gemini.google.com/",
"https://copilot.microsoft.com/",

"https://www.perplexity.ai/",
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
}
sRedirectUrl = url;
break;

case 'spo#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"?q=" + q + " red",
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
sRedirectUrl = random;
if(q == ''){
urlList = [
"https://sports.yahoo.com/",
"https://news.google.com/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRFp1ZEdvU0FtVnVHZ0pWVXlnQVAB",
"https://www.bing.com/news/search?q=Sports",
"https://www.reddit.com/r/sports/",
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
}
sRedirectUrl = url;
break;


case 'dev#':
case 'doc#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"?q=" + q + " q",
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
sRedirectUrl = random;
if(q == ''){
urlList = [
"https://www.reddit.com/r/programming/",
"https://www.reddit.com/r/learnprogramming/",
"https://www.reddit.com/r/webdev/",
"https://www.reddit.com/r/web_design/",
"https://dev.to/",
"https://hashnode.com/community",
"https://stackoverflow.com/",
"https://medium.com/tag/webdevelopment",
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
}
sRedirectUrl = url;
break;



case 'git#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://github.com/topics/" + q,
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
sRedirectUrl = random;
if(q == ''){
urlList = [
"https://github.com/explore",
"https://gitlab.com/explore",
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
}
sRedirectUrl = url;
break;

case 'gitt#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://github.com/search?q=" + q,
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
sRedirectUrl = random;
if(q == ''){
urlList = [
"https://github.com/explore",
"https://gitlab.com/explore",
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
}
sRedirectUrl = url;
break;


case 'y#':
case '.#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
url = "https://www.youtube.com/results?search_query=" + q;
if(q == ''){ url = "https://www.youtube.com/"; }
sRedirectUrl = url;
break;

case 'v#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.google.com/search?q="+q+"&newwindow=1&tbm=vid",
"https://www.bing.com/videos/search?q="+q
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
if(q == ''){
urlList = [
"https://www.youtube.com/",
"https://vimeo.com/",
"https://www.dailymotion.com/",
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
}
sRedirectUrl = url;
break;

case 'liv#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.youtube.com/results?search_query=" + q + "&sp=EgJAAQ%253D%253D",
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
if(q == ''){
urlList = [
//"https://www.twitch.tv/directory/all?sort=VIEWER_COUNT",
"https://www.youtube.com/channel/UC4R8DWoMoI7CAwX8_LjQHig/livetab?ss=CKEK",
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
}
sRedirectUrl = url;
break;

case 'tv#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.twitch.tv/directory/all/tags/" + q + "?sort=VIEWER_COUNT",
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
if(q == ''){
urlList = [
"https://www.twitch.tv/directory/all?sort=VIEWER_COUNT",
//"https://www.youtube.com/channel/UC4R8DWoMoI7CAwX8_LjQHig",
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
}
sRedirectUrl = url;
break;

case 's#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);

let wordpress = (q.replaceAll("%20", ' ')).trim();
let medium = (q.replaceAll("%20", '-')).trim();

urlList = [
"https://twitter.com/search?q=" + q,
"https://bsky.app/search?q=" + q,
"https://wordpress.com/tag/" + wordpress,
"https://medium.com/tag/" + medium,
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
if(q == ''){
urlList = [
"https://twitter.com/",
"https://bsky.app/",
"https://wordpress.com/",
"https://medium.com/",
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
}
sRedirectUrl = url;
break;

case 's#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.google.com/search?q="+q+"&newwindow=1&tbm=vid",
"https://www.bing.com/videos/search?q="+q
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
if(q == ''){
urlList = [
"https://www.youtube.com/",
"https://vimeo.com/",
"https://www.dailymotion.com/",
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
}
sRedirectUrl = url;
break;

case 'we#':
case 'wet#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.accuweather.com/search-locations?query=" + q,
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
if(q == ''){
urlList = [
"?q=weather",
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
}
sRedirectUrl = url;
break;

case 'g#':
case 'goo#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
url = "https://www.google.com/search?q=" + q;
if(q == ''){ url = "https://www.google.com/"; }
sRedirectUrl = url;
break;

case 'ps#':
case 'gg#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
url = "/projects/google-programmable-search-49/index.html?q=" + q;
if(q == ''){ url = "/projects/google-programmable-search-49/index.html"; }
sRedirectUrl = url;
break;

case 'bi#':
case 'bin#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
url = "https://www.bing.com/search?q=" + q;
if(q == ''){ url = "https://www.bing.com/"; }
sRedirectUrl = url;
break;

case 'qq#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
url = "/site-search.html?q=" + q;
if(q == ''){
urlList = [
"/site-search.html",
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
}
sRedirectUrl = url;
break;


case 'o#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.bing.com/search?q=" + q,
"https://www.mojeek.com/search?q=" + q,

"https://www.qwant.com/?q=" + q,
"https://you.com/search?q=" + q,
"https://search.yahoo.com/search?q=" + q,
"https://duckduckgo.com/?q=" + q,
"https://www.ecosia.org/search?q=" + q,
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
if(q == ''){
urlList = [
"https://www.bing.com/",
"https://www.mojeek.com/",

"https://search.yahoo.com/",
"https://duckduckgo.com/",
"https://www.ecosia.org/",
"https://you.com/",
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
}
sRedirectUrl = url;
break;


case 'q#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);

urlList = [
"https://www.google.com/search?q="+ q,
//"https://www.bing.com/search?q="+ q,
//"?q=" + q + " o",
];
if(q == ''){
urlList = [
"https://www.google.com/",
//"https://www.bing.com/",
];
}
random = Math.floor(Math.random() * urlList.length);
random = urlList[random];
sRedirectUrl = random;
break;


default:
q = encodeURIComponent(q);
urlList = [
"https://www.google.com/search?q="+ q,
//"https://www.bing.com/search?q="+ q,
//"?q=" + q + " o",
];
if(q == ''){
urlList = [
"https://www.google.com/",
//"https://www.bing.com/",
];
}
random = Math.floor(Math.random() * urlList.length);
random = urlList[random];
sRedirectUrl = random;
}


if(sRedirectUrl != ''&&sRedirectUrl != undefined&&sRedirectUrl != null){
rUrlGet = fuMHideFileNameExt(sRedirectUrl);
if(com == "on"){
//location.href = "/projects/redirects-25/?rUrl="+sRedirectUrl;
//location.href.replace(/projects/redirects-25/?rUrl="+sRedirectUrl,);
}
}

}






// print
function runRedirect(rUrlGet){

var print = '';




if(rUrlGet != null&&rUrlGet != 'null'&&rUrlGet != ''&&rUrlGet != undefined){
if(rUrlGet[0] == "."){ rUrlGet = (rUrlGet).slice(1); }


// main redirect
var sTimeRedirectStatus = `<span class="small">Redirection (${com}): `+ sTimeRedirect / 1000 + ` sec.</span>`;

//window.location
if(com == "on"&&(String(location.href)).indexOf("#!StopRedirect") == -1){

let rUrlGetClean = rUrlGet.replaceAll('%23!StopRedirect', '');
rUrlGetClean = rUrlGetClean.replaceAll('#!StopRedirect', '');

if(sRedirectUrl == ''&&rUrlGetClean[0] == 'h'){
rColor = "orange";
// disabled if http
sTimeRedirectStatus = `<span class="small">Redirection (${com}): force off</span>`;
}else{

setTimeout(function(){
location.href = rUrlGetClean;
location.href = location.href + '#!StopRedirect'; 
}, sTimeRedirect); 

}

}else{
sTimeRedirectStatus = `<span class="small">Redirection (${com}): re-redirection stopped</span>`;
}
// main redirect



//if((rUrlGet).search("#!StopRedirect") != -1){

rUrlGetPrint = decodeURIComponent(rUrlGet);
rUrlGetPrint = fuMClearText(rUrlGetPrint);

rUrlGetPrint = rUrlGetPrint.replaceAll('#!StopRedirect', '');
rUrlGet = decodeURIComponent(rUrlGet);
rUrlGet = rUrlGet.replaceAll('#!StopRedirect', '');
rUrlGet = rUrlGet.replaceAll('%23!StopRedirect', '');

print = `

<div class="tCenter">
<div class="padding3 bgList borderList op tCenter borderRadius2">` + sTimeRedirectStatus + `</div>
<div class="padding3 bgList borderList h3 ${rColor} bold borderRadius2">` + rUrlGetPrint + `</div>
<a class="block padding3 bgList borderList light brand borderRadius2" href="` + rUrlGet + `">Open</a>
</div>

`;

document.getElementById("result").innerHTML = print;

}




var a = [
"goo", "bin", "n", "x", "red, v, l"
];

var b = '';
a.forEach((item, index) => { 
b  += item+ ', ';
 });

if(document.getElementById('printComList') != null){
document.getElementById('printComList').innerHTML = '<div class="bg padding2 border2 light op pre small">Redirects commands list: ' + b + `

Example redirects (random): "Google n" - news about Google.

goo - Google, bin - Bing, n - News, x - X (Twitter), red - Reddit, v - video, l - lucky (first search result).
</div>`;
}



if(document.getElementById('input') != null&&q != null&&q != 'null'){
document.getElementById('input').value = q;
}

}

runRedirect(rUrlGet);




