// Navigation JS part v.1.1.0
//Creating navigation in progress, sorry


if (conf == undefined){
var conf = [];
// wrapper size for navigation, number in px from your CSS
conf["confWrapperNavWidth"] = 900;
conf["conMenuItemAverageWidth"] = 120;
}

// nav v.2.0.0 in test
// count links
var countMenuItem = document.querySelectorAll('.countMenuItem');
if (document.getElementsByTagName("nav")[0] != null){

var mNavItemsAverageWidth = conf["conMenuItemAverageWidth"];
// Average: 66 
var mNavItemsCount = (countMenuItem.length / 2);
// /2 - dublicate items (links)
var mNavWhenDropdownWidth = (mNavItemsAverageWidth * mNavItemsCount) / 2;
// /2 - for 2 rows links
// auto based on item
var cssMedia = `@media(width <= ${mNavWhenDropdownWidth}px)`;
var cssMedia2 = `@media(width >= ${mNavWhenDropdownWidth}px)`;

// if nav (items) more width then wrapper (forece dropdown)
if ((mNavWhenDropdownWidth) >= conf["confWrapperNavWidth"]){
cssMedia = '@media(width >= 1px)';
// cancel
cssMedia2 = `@media(width <= 0px)`; 
}

// embed style
document.getElementsByTagName("nav")[0].innerHTML += `

<style>

${cssMedia} {
.navMenu {
display: none;
}
.topNav .dropdownMenuButton { display: inline-block; }
}

//fixme !!!
//fix when dynamic change 
${cssMedia2} {
.dropdownMenu, .showDropdownMenu {
display: none !important;
border: 1px solid red;
}
}

</style>

`;

}

// button
const dropdownButton = document.getElementById("dropdownMenuButton");
const dropdownMenu = document.getElementById("dropdownMenu");
const topNav = document.getElementById("topNav");

function fuMDropdownButton(){
/*
//https://stackoverflow.com/questions/64487640/javascript-show-hide-div-onclick
if (dropdownMenu.style.display === "block") {
dropdownMenu.style.display = "none";
} else {
dropdownMenu.style.display = "block";
}*/

dropdownMenu.classList.toggle("showDropdownMenu");

}

// out area click
//https://stackoverflow.com/questions/36695438/detect-click-outside-div-using-javascript
window.addEventListener('click', function(e){ 

if (topNav.contains(e.target)){
    // Clicked in box
} else {
    // Clicked outside the box
//dropdownMenu.style.display = "none";
dropdownMenu.classList.remove("showDropdownMenu");
dropdownButton.textContent = "☰ Menu";
  }
})

// end Navigation JS version





