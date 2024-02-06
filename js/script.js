// Local main index script v.1.0.1


//fix
// Nav up for main list page
//if(document.getElementById("mNavUp") != null){
if(document.getElementsByClassName("mClassNavUp")[0] != null){
let mNavUpCheck = new String(window.location.pathname);

var allMClassNavUp = document.querySelectorAll(".mClassNavUp");
allMClassNavUp.forEach((item, index) => {

if(mNavUpCheck != "/"){
//document.getElementsByClassName("mClassNavUp").href = "/main-list.html";
document.getElementsByClassName("mClassNavUp")[index].href = "/main-list.html";

if(mNavUpCheck.indexOf('/main-list') != -1){
//document.getElementsByClassName("mClassNavUp").href = "../";
document.getElementsByClassName("mClassNavUp")[index].href = "../";
}
}

});




}


