// Local main index script v.1.0.0




//fix
// Nav up for main list page
if(document.getElementById("mNavUp") != null){
let mNavUpCheck = new String(window.location.pathname);

if(mNavUpCheck != "/"){
document.getElementById("mNavUp").href = "/main-list.html";

if(mNavUpCheck.indexOf('/main-list') != -1){
document.getElementById("mNavUp").href = "../";
}
}

}


