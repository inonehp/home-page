// Search redirects v.2.1.32
// Mini Google
// The script redirects the search query + command.

// conf
var com = "on"; // on, off redirection
var sTimeRedirect = 1000;
// conf

var geturl = location.href;
var url = new URL(geturl);
var q = url.searchParams.get("q");

var qr = url.searchParams.get("qr");
var rq = url.searchParams.get("rq");
if (rq != null){ qr = qr + rq; }
if (qr != null){
/*qr = qr.replaceAll(/%/g, "%25");
q = q.replaceAll('+', ' ');
qr = decodeURIComponent(qr);*/
qr = qr.trim();

q = qr;

if (com == "on"&&String(location.href).indexOf("#!StopRedirect") == -1){

location.href = fuMHideFileNameExt(qr);
location.href = location.href + '#!StopRedirect';

//location.href.replace(fuMHideFileNameExt(qr),);
//location.href.replace(location.href + '#!StopRedirect',);

}
} else { qr = ''; }

/*var rUrlGet = url.searchParams.get("rUrl");
//fuMHideFileNameExt(); //rmme
rUrlGet = fuMHideFileNameExt(rUrlGet);*/

rUrlGet = String(location.href);
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


if (q == ''&&q != 'null'){ q = 'q'; }


if (rUrlGet == null&&q != 'null'&&q != null&&q != ''&&sUrlText.indexOf("cache") == -1){


q = q.trim();

if (q.slice(-2) == 'ls'||q.slice(-2) == 'rs'){
sTimeRedirect = 2000;
}

q = q.replaceAll('%23!StopRedirect', '');
q = q.replaceAll('#!StopRedirect', '');

// for the command at the end of the search query
let qTmpNoPlus = q.replaceAll('%23', '+', ' ');
var strArray = qTmpNoPlus.split(" ");
var qCom = strArray[strArray.length - 1] + "#";
var q3 = q + "#";



switch (qCom) {

// pi#
case 'π#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"?q=" + q
];
if (q == ''){
urlList = [
'tec', 'sci', 'dev',
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = '?q=' + random;
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
if (q == ''){
url = 'https://www.google.com/';
sRedirectUrl = url;
urlList = [
"https://www.google.com/",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;

case 'tre#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://trends.google.com/trends/explore?q=" + q,
];
if (q == ''){
urlList = [
"https://trends.google.com/trends/explore?cat=5&date=now%207-d",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;

case 'r#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q.trim());
urlList = [
"/site-search.html?q=" + q + " r",
];
if (q == ''){
urlList = [
"/site-search.html",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;

case 'rr#':
case 'rs#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"/site-search.html?q=" + q + " r",
];
if (q == ''){
urlList = [
"/links.html?mode=randUrl",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;

case 'x#':
case 'twi#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
url = "https://x.com/search?q=" + q;
if (q == ''){ url = "https://x.com/"; }
sRedirectUrl = url;
break;

case 'bs#':
case 'blu#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
url = "https://bsky.app/search?q=" + q;
if (q == ''){ url = "https://bsky.app/"; }
sRedirectUrl = url;
break;

case 'red#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.reddit.com/search/?q=" + q + "&type=link&sort=hot",
];
if (q == ''){
urlList = [
"https://www.reddit.com/",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;

case 'med#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
//"?q=" + q + " site:https://medium.com/",
"https://medium.com/search?q=" + q,
];
if (q == ''){
urlList = [
"https://medium.com/",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;

case 'cc#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://search.creativecommons.org/search?q=" + q + "&license=cc0,pdm",
"https://www.google.com/search?q=" + q + "&tbm=isch&tbs=il:cl",
"https://www.bing.com/images/search?q=" + q + "&setlang=en&cc=us&qft=+filterui:license-L1",
];
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = random;
break;

case 'i#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.google.com/search?q=" + q + "&newwindow=1&source=lnms&tbm=isch",
"https://www.bing.com/images/search?q=" + q,
];
if (q == ''){
urlList = [
"https://images.google.com/",
"https://www.bing.com/images/",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = random;
break;

case 't#':
case 'tr#':
case 'tra#':
case 'd#':
q = q3.replace(qCom, '');
q = q.trim();
var deepLq = q.replaceAll(/\//g, "-"); // fixed
deepLq = encodeURIComponent(deepLq);
q = encodeURIComponent(q);

urlList = [
//"https://translate.google.com/?sl=auto&tl=auto&text=" + q + "&op=translate",
"https://www.deepl.com/translator#auto/auto/" + deepLq,
"https://www.bing.com/translator/?text=" + q + "&from=auto&to=auto",
];
if (conf["confDevice"] != 'mobile'){
urlList.push("https://translate.google.com/?sl=auto&text=" + q + "&op=translate");
}
if (q == ''){
urlList = [
"https://www.deepl.com/translator",
"https://www.bing.com/translator/",
];
if (conf["confDevice"] != 'mobile'){
urlList.push("https://translate.google.com/");
}
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = random;
break;

case 'tt#':
q = q3.replace(qCom, '');
q = q.trim();
var deepLq = q.replaceAll(/\//g, "-"); // fixed
deepLq = encodeURIComponent(deepLq);
q = encodeURIComponent(q);
urlList = [
"https://translate.google.com/?sl=auto&tl=en&text=" + q + "&op=translate",
"https://www.deepl.com/translator#auto/en/" + deepLq,
"https://www.bing.com/translator/?text=" + q + "&from=auto&to=en",
];
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = random;
break;

case 'tg#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://translate.google.com/?sl=auto&tl=auto&text=" + q + "&op=translate",
];
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;

case 'n#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.google.com/search?q=" + q + "&tbm=nws",
];
if (q == ''){
urlList = [
"https://news.google.com/",
"https://flipboard.com/topic/news",
"https://www.reddit.com/r/news/",
"https://www.reddit.com/r/worldnews/",
"https://www.perplexity.ai/discover",

"/?q=news tag",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;

case 'tec#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"/?q=" + q + " q",
];

if (q == ''){
urlList = [
"https://news.google.com/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRGRqTVhZU0FtVnVHZ0pWVXlnQVAB",
"https://slashdot.org/",
"https://flipboard.com/topic/technology",
"https://flipboard.com/topic/computerscience",
"https://www.reddit.com/r/technology/",
"https://lemmy.world/c/technology",

"/?q=technology tag",
];

}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'sci#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"/?q=" + q,
];

if (q == ''){
urlList = [
"https://news.google.com/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRFp0Y1RjU0FtVnVHZ0pWVXlnQVAB",
"https://flipboard.com/topic/science",
"https://science.slashdot.org/",
"https://www.reddit.com/r/science/",

"?q=science tag",

];

}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'n2#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"/?q=" + q,
];

if (q == ''){
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

"https://www.google.com/finance/",
//"https://news.google.com/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRGx6TVdZU0FtVnVHZ0pWVXlnQVAB",
//"https://news.google.com/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNREpxYW5RU0FtVnVHZ0pWVXlnQVAB",
//"https://news.google.com/topics/CAAqIQgKIhtDQkFTRGdvSUwyMHZNR3QwTlRFU0FtVnVLQUFQAQ",
"https://flipboard.com/topic/business",

"/?q=culture tag",
];

}

random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
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

if (q == ''){
urlList = [
"https://gemini.google.com/",
//"https://copilot.microsoft.com/",
"https://www.bing.com/copilot",
"https://chatgpt.com/",
"https://www.perplexity.ai/",
];
}

random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;

case 'spo#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"/?q=" + q,
];

if (q == ''){
urlList = [
"https://news.google.com/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRFp1ZEdvU0FtVnVHZ0pWVXlnQVAB",
"https://www.reddit.com/r/sports/",

"/?q=sport tag",
];

}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'dev#':
case 'doc#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"/?q=" + q + " q",
];

if (q == ''){
urlList = [
"https://www.reddit.com/r/programming/",
"https://www.reddit.com/r/webdev/",
"https://dev.to/",
"https://hashnode.com/community",
//"https://stackoverflow.com/",
"https://news.ycombinator.com/",

"/?q=programming tag",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;



case 'git#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://github.com/topics/" + q,
];

if (q == ''){
urlList = [
"https://github.com/explore",
//"https://gitlab.com/explore",
];
}

random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;

case 'gitt#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://github.com/search?q=" + q,
];

if (q == ''){
urlList = [
"https://github.com/explore",
//"https://gitlab.com/explore",
];
}

random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;

case 'wik#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://wikipedia.org/w/?search=" + q,
];
if (q == ''){
urlList = [
"https://en.wikipedia.org/wiki/Special:Random",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;

case 'vim#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://vimeo.com/search?price=free&q=" + q,
];
if (q == ''){
urlList = [
"https://vimeo.com/watch",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;

case 'y#':
case '.#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.youtube.com/results?search_query=" + q,
];
if (q == ''){
urlList = [
"https://www.youtube.com/",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;

case 'ch#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.youtube.com/results?search_query=" + q + "&sp=EgIQAg%253D%253D",
];
if (q == ''){
urlList = [
"https://www.youtube.com/feed/trending",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;

case 'v#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.google.com/search?q=" + q + "&newwindow=1&tbm=vid",
"https://www.bing.com/videos/search?q=" + q
];

if (q == ''){
urlList = [
"https://www.google.com/videohp",
"https://www.bing.com/videos/",
];

}

random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;

case 'liv#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.youtube.com/results?search_query=" + q + "&sp=EgJAAQ%253D%253D",
];

if (q == ''){
urlList = [
//"https://www.twitch.tv/directory/all?sort=VIEWER_COUNT",
"https://www.youtube.com/channel/UC4R8DWoMoI7CAwX8_LjQHig/livetab?ss=CKEK",
];
}

random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;

case 'tv#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.twitch.tv/directory/all/tags/" + q + "?sort=VIEWER_COUNT",
];

if (q == ''){
urlList = [
"https://www.twitch.tv/directory/all?sort=VIEWER_COUNT",
//"https://www.youtube.com/channel/UC4R8DWoMoI7CAwX8_LjQHig",
];

}

random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;

case 'b#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);

urlList = [
"https://www.google.com/search?q=" + q + " site:blogspot.com OR site:medium.com OR site:wordpress.com&tbs=qdr:m",
];

if (q == ''){
urlList = [
"https://wordpress.com",
"https://medium.com/",
"https://blogspot.com/",
];
}

random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;

case 's#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);

//let wordpress = (q.replaceAll("%20", ' ')).trim();
//let medium = (q.replaceAll("%20", '-')).trim();

urlList = [
"https://x.com/search?q=" + q,
"https://www.threads.net/search?q=" + q,
"https://bsky.app/search?q=" + q,
//"https://medium.com/tag/" + medium + "/recommended",
"https://medium.com/search?q=" + q,
//"https://www.google.com/search?q=" + q + " site:https://www.reddit.com/&newwindow=1&tbs=qdr:m",
//"https://www.reddit.com/search/?q=" + q + "&type=link&sort=hot",
"https://www.reddit.com/search/?q=" + q + "&type=link&sort=hot",
"https://www.tumblr.com/search/" + q,
"https://wordpress.com/search?q=" + q,
];

if (q == ''){
urlList = [
"https://x.com/",
"https://www.threads.net/following",
"https://bsky.app/",
"https://medium.com/",
"https://www.reddit.com/",
"https://www.tumblr.com/",
"https://wordpress.com/",
];

}

random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;

case 'tag#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);

let wordpressTag = (q.replaceAll("%20", ' ')).trim();
let mediumTag = (q.replaceAll("%20", '-')).trim();

urlList = [
"https://x.com/hashtag/" + q,
"https://www.threads.net/search?q=%23" + q,
"https://bsky.app/hashtag/" + q,
"https://medium.com/tag/" + mediumTag + "/recommended",
"https://www.tumblr.com/tagged/" + q,
"https://wordpress.com/tag/" + wordpressTag,
];

if (q == ''){
urlList = [
"https://x.com/explore/",
"https://www.threads.net/following",
"https://bsky.app/",
"https://medium.com/",
"https://www.tumblr.com/explore/trending",
"https://wordpress.com/discover",
];

}

random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
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

if (q == ''){
urlList = [
"?q=weather",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;

case 'g#':
case 'goo#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
url = "https://www.google.com/search?q=" + q;
if (q == ''){ url = "https://www.google.com/"; }
sRedirectUrl = url;
break;

case 'ps#':
case 'gg#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
url = "/projects/google-programmable-search-49/index.html?q=" + q;
if (q == ''){ url = "/projects/google-programmable-search-49/index.html"; }
sRedirectUrl = url;
break;

case 'bi#':
case 'bin#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.bing.com/search?q=" + q
];
if (q == ''){
urlList = [
"https://www.bing.com/",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;

case 'qq#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"/site-search.html?q=" + q,
];
if (q == ''){
urlList = [
"/site-search.html",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;

case 'lin#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"/bookmarks.html?q=" + q,
];
if (q == ''){
urlList = [
"/bookmarks.html",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'o#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
//"https://www.bing.com/search?q=" + q,
"https://www.ecosia.org/search?q=" + q,
];

if (q == ''){
urlList = [
//"https://www.bing.com/",
"https://www.ecosia.org/",
];
}

random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;


case 'test#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"#https://www.example.com/?q=" + q,
];

if (q == ''){
urlList = [
"#https://www.example.com/",
];
}

random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;

case 'w#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);

urlList = [
"https://www.google.com/search?q="+ q + "&udm=14",
//"https://www.bing.com/search?q="+ q,
//"?q=" + q + " o",
];
if (q == ''){
urlList = [
"https://www.google.com/",
//"https://www.bing.com/",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;

/*case 'a#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);

urlList = [
"/projects/assistant-67/?q=" + q,
];
if (q == ''){
urlList = [
"/projects/assistant-67/",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;*/

case 'q#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);

urlList = [
"https://www.google.com/search?q="+ q,
//"https://www.bing.com/search?q="+ q,
//"?q=" + q + " o",
];
if (q == ''){
urlList = [
"https://www.google.com/",
//"https://www.bing.com/",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;
break;

default:
q = encodeURIComponent(q);
urlList = [
"https://www.google.com/search?q="+ q,
//"https://www.bing.com/search?q="+ q,
//"?q=" + q + " o",
];
if (q == ''){
urlList = [
"https://www.google.com/",
//"https://www.bing.com/",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = random;
}


if (sRedirectUrl != ''&&sRedirectUrl != undefined&&sRedirectUrl != null){
rUrlGet = fuMHideFileNameExt(sRedirectUrl);

if (com == "on"){
//location.href = "/projects/redirects-25/?rUrl="+sRedirectUrl;
//location.href.replace(/projects/redirects-25/?rUrl="+sRedirectUrl,);
}
}

}







// print
function runRedirect(rUrlGet){

var print = '';





if (rUrlGet != null&&rUrlGet != 'null'&&rUrlGet != ''&&rUrlGet != undefined){
if (rUrlGet[0] == "."){ rUrlGet = (rUrlGet).slice(1); }

// filter
let allowUrlList = [
"archive.org",
"blogspot.com",
"codepen.io",
"dailymotion.com",
"deezer.com",
"facebook.com",
"giphy.com",
"imgur.com",
"instagram.com",
"medium.com",
"pinterest.com",
"reddit.com",
"soundcloud.com",
"spotify.com",
"tunein.com",
"twitch.tv",
"x.com",
"vimeo.com",
"wordpress.com",
"x.com",
"youtube.com",
];

let allowUrlListStatus = "not found";

allowUrlList.forEach((val) => {
if (rUrlGet.indexOf(val) != -1){ allowUrlListStatus = "found"; }
});


// main redirect
var sTimeRedirectStatus = `<span class="small">Redirection (${com}): `+ sTimeRedirect / 1000 + ` sec.</span>`;

//window.location
if (com == "on"&&(String(location.href)).indexOf("#!StopRedirect") == -1){

let rUrlGetClean = rUrlGet.replaceAll('%23!StopRedirect', '');
rUrlGetClean = rUrlGetClean.replaceAll('#!StopRedirect', '');

if (rUrlGet == ''&&rUrlGetClean[0] == 'h'&&allowUrlListStatus == 'not found'){
// disabled if http
sTimeRedirectStatus = `<span class="small">Redirection (${com}): force off</span>`;
} else {

setTimeout(function(){
location.href = rUrlGetClean;
location.href = location.href + '#!StopRedirect'; 
}, sTimeRedirect); 

}

} else {
sTimeRedirectStatus = `<span class="small">Redirection (${com}): re-redirection forse stopped</span>`;
}
// main redirect



//if ((rUrlGet).search("#!StopRedirect") != -1){

/*rUrlGetPrint = decodeURIComponent(rUrlGet);
rUrlGetPrint = fuMClearText(rUrlGetPrint);*/

//rUrlGetPrint = fuMClearText(decodeURIComponent(rUrlGet).replaceAll('#!StopRedirect', ''));
//rUrlGet = decodeURIComponent(rUrlGet);
rUrlGet = rUrlGet.replaceAll('#!StopRedirect', '');
rUrlGet = rUrlGet.replaceAll('%23!StopRedirect', '');

print = `

<div class="tCenter bg border borderRadius2">
<div class="margin padding3 bgList op">${sTimeRedirectStatus}</div>
<div class="margin padding3 bgList border brand borderRadius2"><a class="inlineBlock padding brand break2" href="${rUrlGet}"><span id="printTextUrl" class="break2"></span></a></div>
</div>

`;

if (document.getElementById("result") != null){
document.getElementById("result").innerHTML = print;
}
if (document.getElementById("printTextUrl") != null){
document.getElementById("printTextUrl").textContent = decodeURIComponent(rUrlGet);
}

}




var a = [
"goo", "bin", "n", "x", "red, v, l"
];

var b = '';
a.forEach((item, index) => { 
b  += item+ ', ';
 });

if (document.getElementById('printComList') != null){
document.getElementById('printComList').innerHTML = '<div class="bg padding2 border2 light op pre small">Redirects commands list: ' + b + `

Example redirects (random): "Google n" - news about Google.

goo - Google, bin - Bing, n - News, x - X (Twitter), red - Reddit, v - video, l - lucky (first search result).
</div>`;
}



if (document.getElementById('input') != null&&q != null&&q != 'null'){
document.getElementById('input').value = q;
}

}

runRedirect(rUrlGet);




