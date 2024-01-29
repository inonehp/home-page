/* v.1.4.7 */
// print ads from json var list: fuAds('', 'ads2 - id where print', '');

async function fuAds(none, idAds, none2){


// none - Reserved variable
// idAds - for print
// comAds - reserved

//var adsStatus =  localStorage.getItem("confAdsStatus");
var adsStatus = conf["confAdsStatus"];
if(adsStatus != "off"){

//var cookieStatus =  localStorage.getItem("confDataCollection");
var cookieStatus =  conf["confDataCollection"];

var insertIcon = '';

switch (adsStatus){

case 'off':
adsStatus = 'off';
break;

case 'random':
var items = ['on', 'off'];
item = items[Math.floor(Math.random() * items.length)];
adsStatus = item;
break;

default:
adsStatus = 'on';
}


if(adsStatus != 'off'&&document.getElementById(idAds) != null){

let ads = [];
var adsPrint = '';


//ads = JSON.parse(adsJson);

//if (typeof linksListJsonVar != 'undefined') { ads = ads.concat(linksListJsonVar); }
if (typeof adsJsonVar != 'undefined') { ads = ads.concat(adsJsonVar); }


//ads = JSON.parse(adsJson);


if(ads != null&&ads != ''){


// single

var random = Math.floor(Math.random() * ads.length);
//console.log(ads[random]['text']);

// single
adsText = ads[random]['text']; if(adsText == null) { adsText = ''; }
adsURL = ads[random]['url']; if(adsURL == null){ adsURL = ''; }
if(adsText.search("src=") != -1&&cookieStatus != 'on'){ // found
adsText = `<a class="brand inlineBlock" href="/settings.html#confDataCollection">Cookie setting: ${cookieStatus}.</a>`;
}
if(adsText.search("src=") == -1){ // not found code
insertIcon = ' insertIcon ';
adsPrint = '<div class="adsHeader"><a class="brand inlineBlock" href="/ads.html"><del>ads</del>, links</a></div><div class="adsBody ' + insertIcon + '">'+adsText+' <a class="brand break2" target="blank" href="'+adsURL+'">'+adsURL+'</a></div>';

document.getElementById(idAds).innerHTML = '<div class="center"><div class="post light borderList ads tLeft break">'+adsPrint+'</div></div>';
}else{
insertIcon = '';
adsPrint = '<div class="adsHeader"><a class="padding light brand inlineBlock" href="/ads.html"><del>ads</del>, links</a></div><div class="adsBody ' + insertIcon + '">'+adsText+' <a class="brand" target="blank" href="'+adsURL+'">'+adsURL+'</a></div>';

document.getElementById(idAds).innerHTML = '<div class="center"><div class="adsCode">'+adsPrint+'</div></div>';
}

// end single



// all
if(comAds == 'all'){


var adsPrintAll = '';
ads.forEach((item, index) => {


// multi
// single
adsText = ads[index]['text']; if(adsText == null) { adsText = ''; }
adsURL = ads[index]['url']; if(adsURL == null){ adsURL = ''; }
if(adsText.search("src=") != -1&&cookieStatus != 'on'){ // found
adsText = `<a class="brand" href="/settings.html#confDataCollection">Cookie setting: ${cookieStatus}.</a>`;
}
if(adsText.search("src=") == -1){ // not found code
insertIcon = ' insertIcon ';
adsPrint = '<div class="adsHeader"><a class="brand inlineBlock" href="/ads.html"><del>ads</del>, links</a></div><div class="adsBody ' + insertIcon + '">'+adsText+' <a class="brand break2" target="blank" href="'+adsURL+'">'+adsURL+'</a></div>';

adsPrint = '<div class="center"><div class="post light borderList ads tLeft break">'+adsPrint+'</div></div>';
}else {
insertIcon = '';
adsPrint = '<div class="adsHeader"><a class="padding light brand inlineBlock" href="/ads.html"><del>ads</del>, links</a></div><div class="adsBody ' + insertIcon + '">'+adsText+' <a class="brand" target="blank" href="'+adsURL+'">'+adsURL+'</a></div>';

adsPrint = '<div class="center"><div class="adsCode">'+adsPrint+'</div></div>';
}

adsPrintAll += adsPrint;
adsPrint = '';
// end single
// end multi



});



document.getElementById(idAds).innerHTML = '<div class="wrapper"><div class="padding2 bg shadow borderRadius2">'+adsPrintAll+'</div>';
}
// end all




}

}
}

}





