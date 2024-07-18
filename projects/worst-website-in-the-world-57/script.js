// v.1.0.2


var print = `
result
`;

if(document.getElementById("result") != null){
document.getElementById("result").innerHTML = print; 
}

let lTitle = document.getElementsByTagName('title')[0].innerHTML;

// in CSS
/*ocument.addEventListener("selectionchange", () => {
alert("Text selection is probably turned off");
});
*/

/*
// disable copy
document.addEventListener("selectionchange", () => {

});

document.addEventListener("oncopy", () => {

});

document.addEventListener("oncut", () => {

});
*/



// Auto jump
// Effect when scroll to element v.1.0.1
// The effect starts in the center of the screen, so you need to indent at the top and bottom of the page.
 
function effectWhenScroll(idNumberStart, idNumberEnd, styleClassName){

let counter = idNumberStart;

window.onscroll = event => {
while (counter <= idNumberEnd) {
if (document.documentElement.scrollTop >= document.getElementById("footer2" + counter).offsetTop - ((document.documentElement.clientHeight))){

document.getElementsByTagName("body")[0].classList.add(styleClassName);

//document.getElementById("secondNav").scrollIntoView();
//alert('test');
} else {
document.getElementsByTagName("body")[0].classList.remove(styleClassName);
}

counter++;
}

counter = idNumberStart;
}

}

effectWhenScroll(1, 1, 'lBodyAni');

//https://developer.mozilla.org/en-US/docs/Web/API/Window/focus_event
onfocus = (event) => {

// Message alert
document.getElementsByTagName('title')[0].innerHTML = lTitle;

//https://developer.mozilla.org/en-US/docs/Web/API/WakeLock
try {
//const wakeLock = await navigator.wakeLock.request("screen");
//const wakeLock = navigator.wakeLock.request("screen");
//wakeLock = navigator.wakeLock.request("screen");
//document.getElementById('msg').innerHTML = `* Trying to prevent sleep: <b>on</b>`;
//document.getElementById("secondNav").scrollIntoView();
} catch (err) {
  // the wake lock request fails - usually system related, such being low on battery
console.log(`Trying to prevent sleep: on. ${err.name}, ${err.message}`);
}
};

onblur = (event) => {
// Message alert
document.getElementsByTagName('title')[0].innerHTML = "New Message! (1)";

// auto scroll
document.getElementById("secondNav").scrollIntoView();
};






window.addEventListener('load', function() {

lManyAds()

});


function lManyAds(){

let i = 0;
do {
i = i + 1;
fuAds('', 'manyAds' + i, 'force');
} while (i <= 10);

}

// Cookie Consent Popup v.1.3.0
// if "not selected": popup

fuMPrintText('cookiePopup', `

<div class="wrapper">
<div class="cookiePopup post bg2 border3 margin tCenter shadow borderRadius2">
<p class="h5 bold">Allow Cookie for third parties?</p>

<p>This consent is required to improve the website, collect statistics, and show relevant advertisements.</p>

<div class="padding2List"></div>

<p>
<button class="bold button light3 border3 margin2List cookieBtnYes borderRadius2" onclick="cookiePopup('on')">Yes</button>
<button class="bold button light3 border3 margin2List cookieBtnNo borderRadius2"  onclick="cookiePopup('off')">No</button>
</p>
</div>
</div>

<style>
#cookiePopup {
position: fixed;
bottom: 15px;
left: 0;
right: 0;
display: none;
z-index: 99;
}

.cookiePopup { max-width: calc(100% - (var(--bodyPadding) * 2)); margin: 0 auto; }
#cookiePopup button { width: 120px; max-width: 100%; }
.cookieBtnYes { border: 1px double var(--green); }
</style>

`);

if(conf["confDataCollection"] == 'not selected'||conf["confDataCollection"]){
if(document.getElementById("cookiePopup") != null){
document.getElementById("cookiePopup").style.display = "block";
}
}


function cookiePopup(option){
localStorage.setItem("confDataCollection", option);
if(document.getElementById("cookiePopup") != null){
document.getElementById("cookiePopup").style.display = "none";
//fuMPrintText('fPrivacy', `<a href="/settings.html#confDataCollection">cookie: ${option}</a>`); 
if(document.getElementById('fPrivacy') != null){
document.getElementById('fPrivacy').innerText = `Cookie: ${option}`;
}
}
}
// end Cookie Consent Popups












