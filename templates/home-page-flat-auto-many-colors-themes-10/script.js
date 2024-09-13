// v.1.1.0
/* copy paste from main site */

var conf = [];
conf["confTheme"] = localStorage.getItem("confTheme");

// css color fixed if offline
if(String(window.location.href).slice(0, 4) != 'http'){
document.getElementById('theme').id = 'themeDisable';
}




function mainPrintMsg(id, PrintMsg){
if(document.getElementById(id) != null){
document.getElementById(id).innerHTML = PrintMsg;
}else{
// console.log(id+' not fount');
}
}


conf["confDevice"] = 'none';
/*if(conf["confDataCollection"] != 'on'){
conf["confDevice"] = '(disabled, privacy)';
}else{}*/
if(navigator.userAgent.search("iPhone|Android|Opera Mini|Mobile|Lumia|Phone") != -1){ conf["confDevice"] = 'mobile';  }
if(navigator.userAgent.search("PlayStation|Xbox|TV|Roku|SmartTV|BRAVIA") != -1){ conf["confDevice"] = 'tv';  }
if(conf["confDevice"] == 'none'){ conf["confDevice"] = 'pc'; }



// start theme
theme = conf["confTheme"];
if(theme == null||theme == undefined){ theme = "auto"; }
// conf["confDeviceTheme"] - device theme (dark or light)
conf["confDeviceTheme"] = 'none';
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) { conf["confDeviceTheme"] = 'dark'; }
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) { conf["confDeviceTheme"] = 'light'; }



function fuMPrintTheme(theme){

if(document.getElementById('theme') != null){

//https://stackoverflow.com/questions/36641137/how-exactly-does-link-rel-preload-work
let cssEmbed = document.createElement("link");
/*cssEmbed.rel = "preload";
cssEmbed.as = "style";
cssEmbed.href = '/css/' + theme + '.css';
document.head.appendChild(cssEmbed);*/

document.getElementById('theme').href = '/css/' + theme + '.css';
}


// print theme mode and name in footer
if(document.getElementById('fTheme') != null){
document.getElementById("fTheme").innerHTML = '<a href="/theme.html">theme: ' + conf["confTheme"] + ' (' + theme + ')</a>';
}



}

//var theme = conf["confThemeMain"];
var themeListLight = [
"light",
"l-blue",
"l-green",
"l-merino",
"l-olive",
"l-orange",
"l-pink",
"l-purple",
"l-plum",
"l-red",
"l-sea",
"l-seashell",
"l-violet",
"l-yellow"
];

var themeListOther = [
"o-blue",
"o-green",
"o-lime",
"o-mint",
"o-olive",
"o-orange",
"o-pink",
"o-plum",
"o-purple",
"o-red",
"o-sea",
"o-silver",
"o-violet",
"o-yellow"
];

var themeListDark = [
"dark",
"d-green",
"d-blue",
"d-orange",
"d-pink",
"d-plum",
"d-red",
"d-sea",
"d-violet",
"d-yellow"
];

var themeListOtherDark = [
"od-blue",
"od-brown",
"od-green",
"od-gray",
"od-forest",
"od-pink",
"od-plum",
"od-purple",
"od-red",
"od-olive",
"od-sea",
"od-slate",
"od-violet",
"od-yellow",
];

var themeListHContrast = [
"h-contrast-l",
"h-contrast-d"
];

// fav from others
var themeListBest = [
"light",
"l-green",
"l-merino",
"l-olive",
"l-orange",
"l-yellow",

"dark",
"d-blue",
"d-green",
"d-sea",
"d-violet",

"o-yellow",
"o-lime",
"o-orange",
"o-olive",
"o-silver",

"od-blue",
"od-green",
"od-gray",
"od-sea",
"od-slate",
"od-violet"
];



var themeListOption2 = [
"rand-l",
"rand-o",
"rand-d",
"rand-od",
//"rand-h-contrast",
"rand-best",

"rand-all-l",
"rand-all-d",
"rand-all",

"auto-time",
"auto-t-h-contrast",
"auto-t-rand",
"auto-t-rand-all",

"auto",
"auto-h-contrast",
"auto-rand",
"auto-rand-all",

];

// all light theme
var themeListAllLight = [];
themeListAllLight.push(...themeListLight);
themeListAllLight.push(...themeListOther);
themeListAllLight.push("h-contrast-l");

// all dark theme
var themeListAllDark = [];
themeListAllDark.push(...themeListDark);
themeListAllDark.push(...themeListOtherDark);
themeListAllDark.push("h-contrast-d");

// all theme
var themeList = [];
themeList.push(...themeListLight);
themeList.push(...themeListOther);
themeList.push(...themeListDark);
themeList.push(...themeListOtherDark);
themeList.push(...themeListHContrast);



var themeListOption = [];
themeListOption.push(...themeList);
themeListOption.push(...themeListOption2);




conf["confRealTmpTheme"] = '';
conf["confThemeEmbed"] = '';

    
function themeAuto(){
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
conf["confRealTmpTheme"] = 'dark';
fuMPrintTheme(conf["confRealTmpTheme"]);
}else{
conf["confRealTmpTheme"] = 'light';
fuMPrintTheme(conf["confRealTmpTheme"]);
}
}

function themeAutoHContrast(){
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
conf["confRealTmpTheme"] = 'h-contrast-d';
fuMPrintTheme(conf["confRealTmpTheme"]);
}else{
conf["confRealTmpTheme"] = 'h-contrast-l';
fuMPrintTheme(conf["confRealTmpTheme"]);
}
}

function themeAutoRandom(){
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
conf["confRealTmpTheme"] = themeListDark[Math.floor(Math.random()*themeListDark.length)];
fuMPrintTheme(conf["confRealTmpTheme"]);
}else{
conf["confRealTmpTheme"]  = themeListLight[Math.floor(Math.random()*themeListLight.length)];
fuMPrintTheme(conf["confRealTmpTheme"]);
}
}


function themeAutoRandomAll(){
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
conf["confRealTmpTheme"]  = themeListAllDark[Math.floor(Math.random() * themeListAllDark.length)];
fuMPrintTheme(conf["confRealTmpTheme"]);
}else{
conf["confRealTmpTheme"]  = themeListAllLight[Math.floor(Math.random() * themeListAllLight.length)];
fuMPrintTheme(conf["confRealTmpTheme"]);
}
}

function fuMSetTheme(mode){

/*if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
document.cookie = "theme=dark; SameSite=None; Secure; path=/";
}else{
document.cookie = "theme=light; SameSite=None; Secure; path=/";
}*/

/*themeList.forEach((element) => {
if(mode == element){
//document.getElementById('theme').href = '/css/'+mode+'.css';
fuMPrintTheme(conf["confRealTmpTheme"] );
}
})*/

var themeSelect;
if(themeList.includes(mode) == true){ themeSelect = mode; }


switch (mode) {

case 'auto-time':
if(new Date().getHours() <= Number(conf["confStartDay"]) - 1||new Date().getHours() >= conf["confStartNight"]){
//if(new Date().getSeconds() % 2 == 0){
conf["confRealTmpTheme"]   = 'dark';
fuMPrintTheme(conf["confRealTmpTheme"]);
}else{
conf["confRealTmpTheme"]   = 'light';
fuMPrintTheme(conf["confRealTmpTheme"]);
}
//var interval1 = setInterval(themeAutoTime, 60000);
break;

case 'auto-h-contrast':
themeAutoHContrast();
window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", function () {
themeAutoHContrast();
});
break;

case 'auto-t-h-contrast':
if(new Date().getHours() <= Number(conf["confStartDay"]) - 1|new Date().getHours() >= conf["confStartNight"]){
//if(new Date().getSeconds() % 2 == 0){
conf["confRealTmpTheme"]   = 'h-contrast-d';
fuMPrintTheme(conf["confRealTmpTheme"] );
}else{
conf["confRealTmpTheme"]   = 'h-contrast-l';
fuMPrintTheme(conf["confRealTmpTheme"] );
}
//var interval1 = setInterval(themeAutoTime, 60000);
break;

case 'auto-t-rand':
if(new Date().getHours() <= Number(conf["confStartDay"]) - 1||new Date().getHours() >= conf["confStartNight"]){
//if(new Date().getSeconds() % 2 == 0){
conf["confRealTmpTheme"]  = themeListDark[Math.floor(Math.random()*themeListDark.length)];
fuMPrintTheme(conf["confRealTmpTheme"] );
}else{
conf["confRealTmpTheme"]  = themeListLight[Math.floor(Math.random()*themeListLight.length)];
fuMPrintTheme(conf["confRealTmpTheme"] );
}
break;

case 'auto-t-rand-all':
if(new Date().getHours() <= Number(conf["confStartDay"]) - 1||new Date().getHours() >= conf["confStartNight"]){
//if(new Date().getSeconds() % 2 == 0){
conf["confRealTmpTheme"]  = themeListAllDark[Math.floor(Math.random() * themeListAllDark.length)];
fuMPrintTheme(conf["confRealTmpTheme"] );
}else{
conf["confRealTmpTheme"]  = themeListAllLight[Math.floor(Math.random() * themeListAllLight.length)];
fuMPrintTheme(conf["confRealTmpTheme"] );
}
break;


/*case 'rand-all-blink':
themeRandomAllBlink();
//var interval2 = setInterval(themeRandomAllBlink, 4000);
break;*/

case 'auto-rand':
themeAutoRandom();
window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", function () {
themeAutoRandom();
});
break;

case 'auto-rand-all':
themeAutoRandomAll();
window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", function () {
themeAutoRandomAll();
});
break;

case 'rand-l':
conf["confRealTmpTheme"] = themeListLight[Math.floor(Math.random()*themeListLight.length)];
fuMPrintTheme(conf["confRealTmpTheme"]);
break;

case 'rand-d':
conf["confRealTmpTheme"] = themeListDark[Math.floor(Math.random()*themeListDark.length)];
fuMPrintTheme(conf["confRealTmpTheme"]);
break;

case 'rand-o':
conf["confRealTmpTheme"] = themeListOther[Math.floor(Math.random()*themeListOther.length)];
fuMPrintTheme(conf["confRealTmpTheme"]);
break;

case 'rand-od':
conf["confRealTmpTheme"] = themeListOtherDark[Math.floor(Math.random() * themeListOtherDark.length)];
fuMPrintTheme(conf["confRealTmpTheme"]);
break;

case 'rand-all-l':
conf["confRealTmpTheme"] = themeListAllLight[Math.floor(Math.random() * themeListAllLight.length)];
fuMPrintTheme(conf["confRealTmpTheme"]);
break;

case 'rand-all-d':
conf["confRealTmpTheme"] = themeListAllDark[Math.floor(Math.random() * themeListAllDark.length)];
fuMPrintTheme(conf["confRealTmpTheme"]);
break;

case 'rand-h-contrast':
conf["confRealTmpTheme"] = themeListHContrast[Math.floor(Math.random() * themeListHContrast.length)];
fuMPrintTheme(conf["confRealTmpTheme"]);
break;

case 'rand-best':
conf["confRealTmpTheme"] = themeListBest[Math.floor(Math.random()*themeListBest.length)];
fuMPrintTheme(conf["confRealTmpTheme"]);
break;

case 'rand-all':
conf["confRealTmpTheme"] = themeList[Math.floor(Math.random()*themeList.length)];
fuMPrintTheme(conf["confRealTmpTheme"]);
break;

case 'none':
case 'empty':
conf["confRealTmpTheme"] = 'empty';
fuMPrintTheme(conf["confRealTmpTheme"]);
break;

case themeSelect:
conf["confRealTmpTheme"] = mode;
fuMPrintTheme(conf["confRealTmpTheme"]);
break;

// auto  
default:
themeAuto();
window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", function () {
themeAuto();
});
break;
}

let mForseStatus = '';
if(conf["confTheme"] != mode){ mForseStatus = "[force] "; }

// print theme mode and name in footer
if(document.getElementById('fTheme') != null){
document.getElementById("fTheme").innerHTML = `<a href="/theme.html">theme: ${mForseStatus}${mode} (${conf["confRealTmpTheme"]})</a>`;
}


}

fuMSetTheme(theme);

function fuMThemeEmbed(){
if(conf["confRealTmpTheme"].search("dark|d-|-d") != -1){
conf["confThemeEmbed"] = 'dark';
}else{
conf["confThemeEmbed"] = 'light';
}
}


/* // disabled for if not theme, Unexpected behavior
window.addEventListener('storage', () => {
if(theme != conf["confTheme"]){
fuMSetTheme(conf["confTheme"]);
}
});
*/
// end theme



// print theme mode and name in footer
if(document.getElementById('fTheme') != null){
document.getElementById("fTheme").innerHTML = '<a class="brand inlineBlock padding" href="./theme.html">theme: ' + theme + ' (' + conf["confRealTmpTheme"] + ')</a>';
}




function fuReload(){ location.reload(true); }
function reload(){ location.reload(true); }













