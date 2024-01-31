// v.1.2.1
// Cookie Consent Popups
// if not selected: popup

fuMPrintText('cookiePopup', `

<div class="wrapper">
<div class="cookiePopup post bg2 border margin tCenter shadow borderRadius3">
<p class="h5 bold">Allow Cookie for third parties?</p>

<p>This consent is required to improve the website, collect statistics, and show relevant advertisements.</p>

<div class="padding2List"></div>

<p>
<button class="bold button light3 border margin2List cookieBtnYes borderRadius2" onclick="cookiePopup('on')">Yes</button>
<button class="bold button light3 border margin2List cookieBtnNo borderRadius2"  onclick="cookiePopup('off')">No</button>
</p>
</div>
</div>

<style>
#cookiePopup {
position: fixed;
bottom: 10vh;
left: 0;
right: 0;
display: none;
z-index: 99;
}

.cookiePopup { max-width: calc(100% - (var(--bodyP) * 2)); margin: 0 auto; }
#cookiePopup button { width: 120px; max-width: 100%; }
.cookieBtnYes { border: 1px solid var(--green); }
.cookieBtnNo { border: 1px solid var(--c); }
</style>

`);

if(conf["confDataCollection"] == 'not selected'){
if(document.getElementById("cookiePopup") != null){
document.getElementById("cookiePopup").style.display = "block";
}
}


function cookiePopup(option){
localStorage.setItem("confDataCollection", option);
if(document.getElementById("cookiePopup") != null){
document.getElementById("cookiePopup").style.display = "none";
fuMPrintText('fPrivacy', `<a href="/settings.html#confDataCollection">cookie: ${option}</a>`); 
}
}
// end Cookie Consent Popups



