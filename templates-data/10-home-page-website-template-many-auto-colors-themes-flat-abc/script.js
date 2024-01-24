// v.1.0.0
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


// insert color-theme.css in header
function mainPrintTheme(theme){

if(document.getElementById('theme') != null){

//https://stackoverflow.com/questions/36641137/how-exactly-does-link-rel-preload-work
let cssEmbed = document.createElement("link");
cssEmbed.rel = "preload";
cssEmbed.as = "style";
cssEmbed.href = '/css/'+theme+'.css';
document.head.appendChild(cssEmbed);

document.getElementById('theme').href = '/css/'+theme+'.css';
}


// print theme mode and name in footer
if(document.getElementById('fTheme') != null){
document.getElementById("fTheme").innerHTML = '<a href="./theme.html">theme: ' + conf["confTheme"] + ' (' + theme + ')</a>';
}



}

//var theme = conf["confThemeMain"];
var themeListLight = [
"light",
"l-blue",
"l-green",
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

var themeListHightContrast = [
"hight-contrast-light",
"hight-contrast-dark"
];

// fav from others
var themeListBest = [
"light",
"l-green",
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
"rand-h-contrast",
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
themeListAllLight.push("hight-contrast-light");

// all dark theme
var themeListAllDark = [];
themeListAllDark.push(...themeListDark);
themeListAllDark.push(...themeListOtherDark);
themeListAllDark.push("hight-contrast-dark");

// all theme
var themeList = [];
themeList.push(...themeListLight);
themeList.push(...themeListOther);
themeList.push(...themeListDark);
themeList.push(...themeListOtherDark);
themeList.push(...themeListHightContrast);



var themeListOption = [];
themeListOption.push(...themeList);
themeListOption.push(...themeListOption2);






conf["confRealTmpTheme"] = '';
conf["confThemeEmbed"] = '';

    
function themeAuto(){
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
conf["confRealTmpTheme"] = 'dark';
//document.getElementById('theme').href = '/css/'+confRealTmpTheme+'.css';
mainPrintTheme(conf["confRealTmpTheme"]);
}else{
conf["confRealTmpTheme"] = 'light';
//document.getElementById('theme').href = '/css/' + conf["confRealTmpTheme"] + '.css';
mainPrintTheme(conf["confRealTmpTheme"]);
}
}

function themeAutoHightContrast(){
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
conf["confRealTmpTheme"] = 'hight-contrast-dark';
//document.getElementById('theme').href = '/css/'+confRealTmpTheme+'.css';
mainPrintTheme(conf["confRealTmpTheme"]);
}else{
conf["confRealTmpTheme"] = 'hight-contrast-light';
//document.getElementById('theme').href = '/css/' + conf["confRealTmpTheme"] + '.css';
mainPrintTheme(conf["confRealTmpTheme"]);
}
}

function themeAutoRandom(){
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
conf["confRealTmpTheme"] = themeListDark[Math.floor(Math.random()*themeListDark.length)];
//document.getElementById('theme').href = '/css/'+confRealTmpTheme+'.css';
mainPrintTheme(conf["confRealTmpTheme"] );
}else{
conf["confRealTmpTheme"]  = themeListLight[Math.floor(Math.random()*themeListLight.length)];
//document.getElementById('theme').href = '/css/'+confRealTmpTheme+'.css';
mainPrintTheme(conf["confRealTmpTheme"] );
}
}


function themeAutoRandomAll(){
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
conf["confRealTmpTheme"]  = themeListAllDark[Math.floor(Math.random() * themeListAllDark.length)];
//document.getElementById('theme').href = '/css/'+confRealTmpTheme+'.css';
mainPrintTheme(conf["confRealTmpTheme"] );
}else{
conf["confRealTmpTheme"]  = themeListAllLight[Math.floor(Math.random() * themeListAllLight.length)];
//document.getElementById('theme').href = '/css/'+confRealTmpTheme+'.css';
mainPrintTheme(conf["confRealTmpTheme"] );
}
}

function setTheme(mode){

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
document.cookie = "theme=dark; SameSite=None; Secure; path=/";
}else{
document.cookie = "theme=light; SameSite=None; Secure; path=/";
}

/*themeList.forEach((element) => {
if(mode == element){
//document.getElementById('theme').href = '/css/'+mode+'.css';
mainPrintTheme(conf["confRealTmpTheme"] );
}
})*/

var themeSelect;
if(themeList.includes(mode) == true){ themeSelect = mode; }



switch (mode) {

case 'auto-time':
if(new Date().getHours() <= 6||new Date().getHours() >= 19){
//if(new Date().getSeconds() % 2 == 0){
conf["confRealTmpTheme"]   = 'dark';
//document.getElementById('theme').href = '/css/'+confRealTmpTheme+'.css';
mainPrintTheme(conf["confRealTmpTheme"]);
}else{
conf["confRealTmpTheme"]   = 'light';
//document.getElementById('theme').href = '/css/'+confRealTmpTheme+'.css';
mainPrintTheme(conf["confRealTmpTheme"]);
}
//var interval1 = setInterval(themeAutoTime, 60000);
break;

case 'auto-h-contrast':
themeAutoHightContrast();
window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", function () {
themeAutoHightContrast();
});
break;

case 'auto-t-h-contrast':
if(new Date().getHours() <= 6||new Date().getHours() >= 19){
//if(new Date().getSeconds() % 2 == 0){
conf["confRealTmpTheme"]   = 'hight-contrast-dark';
//document.getElementById('theme').href = '/css/'+confRealTmpTheme+'.css';
mainPrintTheme(conf["confRealTmpTheme"] );
}else{
conf["confRealTmpTheme"]   = 'hight-contrast-light';
//document.getElementById('theme').href = '/css/'+confRealTmpTheme+'.css';
mainPrintTheme(conf["confRealTmpTheme"] );
}
//var interval1 = setInterval(themeAutoTime, 60000);
break;

case 'auto-t-rand':
if(new Date().getHours() <= 6||new Date().getHours() >= 19){
//if(new Date().getSeconds() % 2 == 0){
conf["confRealTmpTheme"]  = themeListDark[Math.floor(Math.random()*themeListDark.length)];
//document.getElementById('theme').href = '/css/'+confRealTmpTheme+'.css';
mainPrintTheme(conf["confRealTmpTheme"] );
}else{
conf["confRealTmpTheme"]  = themeListLight[Math.floor(Math.random()*themeListLight.length)];
//document.getElementById('theme').href = '/css/'+confRealTmpTheme+'.css';
mainPrintTheme(conf["confRealTmpTheme"] );
}
break;

case 'auto-t-rand-all':
if(new Date().getHours() <= 6||new Date().getHours() >= 19){
//if(new Date().getSeconds() % 2 == 0){
conf["confRealTmpTheme"]  = themeListAllDark[Math.floor(Math.random() * themeListAllDark.length)];
//document.getElementById('theme').href = '/css/'+confRealTmpTheme+'.css';
mainPrintTheme(conf["confRealTmpTheme"] );
}else{
conf["confRealTmpTheme"]  = themeListAllLight[Math.floor(Math.random() * themeListAllLight.length)];
//document.getElementById('theme').href = '/css/'+confRealTmpTheme+'.css';
mainPrintTheme(conf["confRealTmpTheme"] );
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
confRealTmpTheme = themeListLight[Math.floor(Math.random()*themeListLight.length)];
//document.getElementById('theme').href = '/css/'+confRealTmpTheme+'.css';
mainPrintTheme(confRealTmpTheme);
break;

case 'rand-d':
confRealTmpTheme = themeListDark[Math.floor(Math.random()*themeListDark.length)];
//document.getElementById('theme').href = '/css/'+confRealTmpTheme+'.css';
mainPrintTheme(confRealTmpTheme);
break;

case 'rand-o':
confRealTmpTheme = themeListOther[Math.floor(Math.random()*themeListOther.length)];
//document.getElementById('theme').href = '/css/'+confRealTmpTheme+'.css';
mainPrintTheme(confRealTmpTheme);
break;

case 'rand-od':
confRealTmpTheme = themeListOtherDark[Math.floor(Math.random() * themeListOtherDark.length)];
//document.getElementById('theme').href = '/css/'+confRealTmpTheme+'.css';
mainPrintTheme(confRealTmpTheme);
break;

case 'rand-all-l':
confRealTmpTheme = themeListAllLight[Math.floor(Math.random() * themeListAllLight.length)];
//document.getElementById('theme').href = '/css/'+confRealTmpTheme+'.css';
mainPrintTheme(confRealTmpTheme);
break;

case 'rand-all-d':
confRealTmpTheme = themeListAllDark[Math.floor(Math.random() * themeListAllDark.length)];
//document.getElementById('theme').href = '/css/'+confRealTmpTheme+'.css';
mainPrintTheme(confRealTmpTheme);
break;

case 'rand-h-contrast':
confRealTmpTheme = themeListHightContrast[Math.floor(Math.random() * themeListHightContrast.length)];
//document.getElementById('theme').href = '/css/' + confRealTmpTheme+'.css';
mainPrintTheme(confRealTmpTheme);
break;

case 'rand-best':
confRealTmpTheme = themeListBest[Math.floor(Math.random()*themeListBest.length)];
//document.getElementById('theme').href = '/css/'+confRealTmpTheme+'.css';
mainPrintTheme(confRealTmpTheme);
break;

case 'rand-all':
confRealTmpTheme = themeList[Math.floor(Math.random()*themeList.length)];
//document.getElementById('theme').href = '/css/'+confRealTmpTheme+'.css';
mainPrintTheme(confRealTmpTheme);
break;

case themeSelect:
confRealTmpTheme = mode;
//document.getElementById('theme').href = '/css/'+mode+'.css';
mainPrintTheme(confRealTmpTheme);
break;

// auto  
default:
themeAuto();
window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", function () {
themeAuto();
});
break;
}

if(conf["confRealTmpTheme"].search("dark|d-") != -1){
confThemeEmbed = 'dark';
}else{
confThemeEmbed = 'light';
}
//console.log(confThemeEmbed);




}



setTheme(theme);

/* // disabled for if not theme, Unexpected behavior
window.addEventListener('storage', () => {
if(theme != conf["confTheme"]){
setTheme(conf["confTheme"]);
}
});
*/
// end theme



// print theme mode and name in footer
if(document.getElementById('fTheme') != null){
document.getElementById("fTheme").innerHTML = '<a href="./theme.html">theme: ' + theme + ' (' + conf["confRealTmpTheme"] + ')</a>';
}




function fuReload(){ location.reload(true); }
function reload(){ location.reload(true); }













