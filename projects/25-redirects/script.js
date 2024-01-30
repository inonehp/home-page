// Redirect v.1.5.1
// The script redirects the search query + command to another location.

// conf
var sTimeRedir = 550;
// end conf



var geturl = window.location;
var url = new URL(geturl);
var q = url.searchParams.get("q");


var qr = url.searchParams.get("qr");
var rq = url.searchParams.get("rq");
if(rq != null){ qr = qr + rq; }
if(qr != null){
qr = qr.replaceAll(/%/g, "%25");
qr = decodeURIComponent(qr);
qr = qr.trim();
window.location.href = hideFileNameExt(qr);
window.location.href = window.location.href + '#stopRedir'; 
}else{ qr = ''; }




var q233 = url.searchParams.get("q2");
if(q233 != null){
q233 = q233.replaceAll(/%/g, "%25");
q233 = decodeURIComponent(q233);
q233 = q233.trim();
}else{ q233 = ''; }

q = String(q + ' '+q233).trim();

var color = ' yellow ';
if(q.slice(-2) == 'ls'||q.slice(-2) == 'rs'){
sTimeRedir = 2000;
color = ' orange '
}


/*var rUrlGet = url.searchParams.get("rUrl");
//hideFileNameExt(); //rmme
rUrlGet = hideFileNameExt(rUrlGet);*/

var rUrlGet = String(window.location);
rUrlGet = (rUrlGet).split("rUrl=");
rUrlGet = rUrlGet[1];
rUrlGet = hideFileNameExt(rUrlGet);
var rUrlGetPrint = '';

var random = '';
var urlList = [];

var sRedirUrl = '';

var tmp = '';


let sUrlText = String(url);

const myArray = sUrlText.split("q=");
sUrlText = myArray[0];


if(q == ''&&q != 'null'){ q = 'n'; }






if(rUrlGet == null&&q != 'null'&&q != null&&q != ''&&sUrlText.search("cache") == -1){

q = q.trim();
//q = q.replace(/%([^\d].)/, "%25$1");
q = q.replaceAll(/%/g, "%25");
q = decodeURIComponent(q);



// for the command at the end of the search query
var strArray = q.split(" ");
var q2 = strArray[strArray.length - 1] + "#";
var q3 = q + "#";



switch (q2) {
case '⚃#':
case '4#':
case '⚂#':
case '3#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "?q=" + q;
if(q == ''){
urlList = [
'tec', 'sci', 'dev', 'n2',
];
random = Math.floor(Math.random() * urlList.length);
url = '?q=' + urlList[random];
}
sRedirUrl = url;
break;

case 'l#':  case 'll#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
//url = "./?q="+q+' q';
//url = "https://you.com/search?q=!" + q;
urlList = [
"https://www.google.com/search?btnI=1&q=" + q,
//"https://you.com/search?q=!" + q,
//"https://duckduckgo.com/?q=! " + q,
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];

if(q == ''){
url = 'https://www.google.com/';
sRedirUrl = url;
}else{
sRedirUrl = url;
};

break;

// random site
case 'r#':
case 'rs#': 
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"/search.html?q=" + q + " r",
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
if(q == ''){
urlList = [
"/search.html?q=r",
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
}
sRedirUrl = url;
break;

case 'x#':
case 'twi#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "https://x.com/search?q=" + q;
if(q == ''){ url = "https://x.com/"; }
sRedirUrl = url;
break;

case 'red#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
//url = "https://www.reddit.com/search/?q=" + q + "&type=link";
url = "?q=" + q + " site:https://www.reddit.com/";
if(q == ''){ url = "https://www.reddit.com/"; }
sRedirUrl = url;
break;

case 'cc#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://search.creativecommons.org/search?q="+q+"&license=cc0,pdm",
"https://www.google.com/search?q="+q+"&tbm=isch&tbs=il:cl",
"https://www.bing.com/images/search?q="+q+"&setlang=en&cc=us&qft=+filterui:license-L1",
];
random = Math.floor(Math.random() * urlList.length);
random = urlList[random];
sRedirUrl= random;
break;

case 'i#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.google.com/search?q="+q+"&newwindow=1&source=lnms&tbm=isch",
"https://www.bing.com/images/search?q="+q,
];
random = Math.floor(Math.random() * urlList.length);
random = urlList[random];
sRedirUrl= random;
break;

case 't#':
case 'tr#':
case 'tra#':
q = q3.replace(q2, '');
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
sRedirUrl= random;
break;

case 'tt#':
q = q3.replace(q2, '');
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
sRedirUrl = random;
break;

case 'tg#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://translate.google.com/?sl=auto&tl=auto&text="+q+"&op=translate",
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
sRedirUrl = url;
break;

case 'n#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.google.com/search?q="+q+"&tbm=nws",
"https://www.bing.com/news/search?q="+q,
//"https://www.qwant.com/?t=news&q="+q,
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
sRedirUrl = url;
break;

case 'tec#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"?q=" + q + " abc",
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

//"https://news.ycombinator.com/",
"https://news.google.com/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRGRqTVhZU0FtVnVHZ0pWVXlnQVAB",
"https://getpocket.com/explore/technology",
//"https://x.com/i/topics/848920371311001600",
"https://www.reddit.com/r/technology/",
//"https://www.tumblr.com/tagged/technology?sort=top",
//"https://medium.com/tag/technology",
"https://finance.yahoo.com/tech/",

//"https://news.google.com/topics/CAAqIQgKIhtDQkFTRGdvSUwyMHZNREZ0YTNFU0FtVnVLQUFQAQ",
//"https://www.reddit.com/r/computerscience/",
//"https://www.reddit.com/r/compsci/",
//"https://medium.com/tag/computer-science",

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
sRedirUrl = url;
break;

case 'sci#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"?q=" + q + " abc",
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
"https://getpocket.com/explore/science",
//"https://x.com/i/topics/854692455005921281",
"https://www.reddit.com/r/science/",
//"https://www.tumblr.com/tagged/science?sort=top",
//"https://medium.com/tag/science",
"https://news.yahoo.com/science/",
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
}
sRedirUrl = url;
break;


case 'n2#':
case 'nn#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"?q=" + q + " abc",
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
"https://sports.yahoo.com/",
"https://www.yahoo.com/lifestyle/",

"https://www.bing.com/news/search?q=Business",
"https://news.google.com/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRGx6TVdZU0FtVnVHZ0pWVXlnQVAB",
"https://news.google.com/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNREpxYW5RU0FtVnVHZ0pWVXlnQVAB",
"https://news.google.com/topics/CAAqIQgKIhtDQkFTRGdvSUwyMHZNR3QwTlRFU0FtVnVLQUFQAQ",
"https://flipboard.com/topic/business",


"https://www.bing.com/news/search?q=Sports",
"https://www.reddit.com/r/sports/",
"https://news.google.com/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRFp1ZEdvU0FtVnVHZ0pWVXlnQVAB",
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
}
sRedirUrl = url;
break;


case 'dev#':
case 'doc#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"?q=" + q + " abc",
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
sRedirUrl = random;
if(q == ''){
urlList = [
"https://www.reddit.com/r/programming/",
"https://www.reddit.com/r/learnprogramming/",
"https://www.reddit.com/r/webdev/",
"https://www.reddit.com/r/web_design/",
"https://www.reddit.com/r/css/",
"https://medium.com/tag/web-development",
//"https://medium.com/tag/programming",

//"https://medium.com/tag/webdevelopment",
"https://dev.to/",
"https://hashnode.com/community",
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
}
sRedirUrl = url;
break;



case 'git#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://github.com/search?q=" + q,
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
sRedirUrl = random;
if(q == ''){
urlList = [
"https://github.com/explore",
"https://gitlab.com/explore",
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
}
sRedirUrl = url;
break;

case 'y#':
case '.#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "https://www.youtube.com/results?search_query=" + q;
if(q == ''){ url = "https://www.youtube.com/"; }
sRedirUrl = url;
break;

case 'v#':
q = q3.replace(q2, '');
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
sRedirUrl = url;
break;

case 'liv#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.youtube.com/results?search_query=" + q + "&sp=EgJAAQ%253D%253D",
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
if(q == ''){
urlList = [
"https://www.twitch.tv/",
"https://www.youtube.com/channel/UC4R8DWoMoI7CAwX8_LjQHig",
"https://www.pinterest.com/tv/",
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
}
sRedirUrl = url;
break;

case 'tv#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.twitch.tv/directory/all/tags/" + q,
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
if(q == ''){
urlList = [
"https://www.twitch.tv/",
"https://www.youtube.com/channel/UC4R8DWoMoI7CAwX8_LjQHig",
"https://www.pinterest.com/tv/",
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
}
sRedirUrl = url;
break;

case 'we#':
q = q3.replace(q2, '');
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
sRedirUrl = url;
break;

case 'g#':
case 'goo#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "https://www.google.com/search?q=" + q;
if(q == ''){ url = "https://www.google.com/"; }
sRedirUrl = url;
break;

case 'abc#':
case 'gg#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "/projects/49-google-programmable-search/?q=" + q;
if(q == ''){ url = "/projects/49-google-programmable-search/"; }
sRedirUrl = url;
break;

case 'bi#':
case 'bin#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "https://www.bing.com/search?q=" + q;
if(q == ''){ url = "https://www.bing.com/"; }
sRedirUrl = url;
break;


case 'qwa#':
case 'qw#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "https://www.qwant.com/?q=" + q;
if(q == ''){ url = "https://www.qwant.com/"; }
sRedirUrl = url;
break;

case 'qq#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "/search.html?q=" + q;
if(q == ''){
urlList = [
"/search.html",
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
}
sRedirUrl = url;
break;

case 'b#':
case 'bb#':
case 'bm#':
case 'lin#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "/links.html?q=" + q;
if(q == ''){
urlList = [
"/links.html",
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
}
sRedirUrl = url;
break;


case 'o#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://search.yahoo.com/search?p=" + q,
"https://search.givewater.com/serp?q=" + q,
"https://duckduckgo.com/?q="+q,
"https://www.qwant.com/?q=" + q,
"https://you.com/search?q=" + q,
"https://www.ecosia.org/search?q=" + q,
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
if(q == ''){
urlList = [
"https://search.yahoo.com/",
"https://search.givewater.com/",
"https://duckduckgo.com/",
"https://www.qwant.com/",
"https://you.com/",
"https://www.ecosia.org/",
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
}
sRedirUrl = url;
break;


case 'q#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);

urlList = [
"https://www.google.com/search?q="+ q,
"https://www.bing.com/search?q="+ q,
//"?q=" + q + " o",
];
if(q == ''){
urlList = [
"https://www.google.com/",
"https://www.bing.com/",
];
}
random = Math.floor(Math.random() * urlList.length);
random = urlList[random];
sRedirUrl = random;
break;


default:
q = encodeURIComponent(q);
urlList = [
"https://www.google.com/search?q="+ q,
"https://www.bing.com/search?q="+ q,
//"?q=" + q + " o",
];
if(q == ''){
urlList = [
"https://www.google.com/",
"https://www.bing.com/",
];
}
random = Math.floor(Math.random() * urlList.length);
random = urlList[random];
sRedirUrl = random;
}


if(sRedirUrl != ''&&sRedirUrl != undefined&&sRedirUrl != null){
rUrlGet = hideFileNameExt(sRedirUrl);
//window.location.href = "/projects/25-redirects/?rUrl="+sRedirUrl;
}

}

























// print

function runRedir(rUrlGet){

var print = '';



if(rUrlGet != null&&rUrlGet != 'null'&&rUrlGet != ''&&rUrlGet != undefined){
if(rUrlGet[0] == "."){ rUrlGet = (rUrlGet).slice(1); }


var sTimeRedirStatus = `<span class="small">redirection:</span> `+ sTimeRedir / 1000 + ` sec.`;
if((''+window.location+'').search("#stopRedir") == -1){
setTimeout(function(){
window.location.href = rUrlGet;
}, sTimeRedir); 
}

window.location.href = window.location.href+'#stopRedir'; 

if ((rUrlGet).search("#stopRedir") != -1){
sTimeRedirStatus = ' <span class="small">( redirection: off ) </span> ';
}

rUrlGetPrint = decodeURIComponent(rUrlGet);
print = `

<div class="tCenter">
<div class="post bgList borderList op tCenter">`+sTimeRedirStatus+`</div>
<div class="post bgList borderList h3 ${color} bold">`+rUrlGetPrint+`</div>
<a class="block padding2 light borderList op" href="`+rUrlGet+`">open</a>
</div>

`;

document.getElementById("result").innerHTML = print;

}




var a = [
"bin", "goo", "n", "x", "red, m, v, s, we, l"
];

var b = '';
a.forEach((item, index) => { 
b  += item+ ', ';
 });

if(document.getElementById('print') != null){
document.getElementById('print').innerHTML = '<div class="bg padding2 border2 light op">Redirects commands list: '+b+'<br />Example redirects: "Google n" - news about Google, etc</div>';
}



if(document.getElementById('input') != null&&q != null&&q != 'null'){
document.getElementById('input').value = q;
}

}

runRedir(rUrlGet);




