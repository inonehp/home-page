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
