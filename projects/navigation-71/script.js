// Navigation JS part v.1.0.0
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
console.log(mNavItemsCount);
// /2 - dublicate items (links)
var mNavWhenDropdownWidth = (mNavItemsAverageWidth * mNavItemsCount) / 2;
// nav width (mNavItemsAverageWidth * mNavItemsCount)/2 - for 2 rows links
var cssMedia = `@media(width <= ${mNavWhenDropdownWidth}px)`;
var cssMedia2 = `@media(width >= ${mNavWhenDropdownWidth}px)`;

if ((mNavWhenDropdownWidth) >= conf["confWrapperNavWidth"]){
cssMedia = '@media(width >= 1px)';
// cancel
cssMedia2 = `@media(width <= 0px)`; 
}

console.log(cssMedia);
// embed style
document.getElementsByTagName("nav")[0].innerHTML += `

<style>

${cssMedia} {
.topNav .navMenu, .topNav .dropdownMenu {
display: none;
}
.topNav .dropdownMenuButton { display: inline-block; }
}

//fixme
//fix when dynamic change 
${cssMedia2}{
.topNav .dropdownMenu, .topNav .dropdownMenuColumn {
display: none !important;
}
}

</style>

`;

}

const dropdownButton = document.getElementById("dropdownMenuButton");
const dropdownMenu = document.getElementById("dropdownMenu");
const topNav = document.getElementById("topNav");

function fuMDropdownButton(){

//https://stackoverflow.com/questions/64487640/javascript-show-hide-div-onclick
  if (dropdownMenu.style.display === "block") {
    dropdownMenu.style.display = "none";
dropdownButton.textContent = "☰ Menu";
  } else {
    dropdownMenu.style.display = "block";
dropdownButton.textContent = "☶ Menu";
  }

}

//https://stackoverflow.com/questions/36695438/detect-click-outside-div-using-javascript
window.addEventListener('click', function(e){ 

console.log(document.getElementById("dropdownMenu").contains(e.target));
if (topNav.contains(e.target)){
    // Clicked in box
  } else {
    // Clicked outside the box
dropdownMenu.style.display = "none";
dropdownButton.textContent = "☰ Menu";
  }
})
// end Navigation JS version





