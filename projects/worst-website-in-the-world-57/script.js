// v.1.0.1


var print = `
result
`;

if(document.getElementById("result") != null){
document.getElementById("result").innerHTML = print; 
}


// in CSS
document.addEventListener("selectionchange", () => {
alert("Text selection is probably turned off");
});


// title: new message!
let lTitle = document.getElementsByTagName('title')[0].innerHTML;
document.getElementsByTagName('title')[0].innerHTML = "New Message! (1) " + lTitle;

/*
// disable copy
document.addEventListener("selectionchange", () => {

});

document.addEventListener("oncopy", () => {

});

document.addEventListener("oncut", () => {

});
*/




// v.1.0.1
// Effect when scroll to element
// The effect starts in the center of the screen, so you need to indent at the top and bottom of the page.
 
function effectWhenScroll(idNumberStart, idNumberEnd, styleClassName){

let counter = idNumberStart;

window.onscroll = event => {
while (counter <= idNumberEnd) {
if (document.documentElement.scrollTop >= document.getElementById("footer2" + counter).offsetTop - ((document.documentElement.clientHeight))){

document.getElementsByTagName("body")[0].classList.add(styleClassName);

document.getElementById("secondNav").scrollIntoView();
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
//https://developer.mozilla.org/en-US/docs/Web/API/WakeLock
try {
//const wakeLock = await navigator.wakeLock.request("screen");
//const wakeLock = navigator.wakeLock.request("screen");
wakeLock = navigator.wakeLock.request("screen");
//document.getElementById('msg').innerHTML = `* Trying to prevent sleep: <b>on</b>`;
//document.getElementById("secondNav").scrollIntoView();
} catch (err) {
  // the wake lock request fails - usually system related, such being low on battery
console.log(`Trying to prevent sleep: on. ${err.name}, ${err.message}`);
}
};

onblur = (event) => {
wakeLock = "";
document.getElementById("secondNav").scrollIntoView();
};

