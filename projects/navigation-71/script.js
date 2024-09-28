// Navigation JS version v.1.0.0
//Creating navigation in progress, sorry

// nav v.1.2.2, in test
// count links
var countMenuItem = document.querySelectorAll('.countMenuItem');
if (document.getElementsByTagName("nav")[0] != null){

var mNavItemsAverageWidth = conf["conMenuItemAverageWidth"];
// Average: 66 
var mNavItemsCount = (countMenuItem.length / 2);
console.log(countMenuItem.length);
// /2 - dublicate items (links)
var mNavWhenDropdownWidth = (mNavItemsAverageWidth * mNavItemsCount) / 2;
// nav width (mNavItemsAverageWidth * mNavItemsCount)/2 - for 2 rows links
//var cssMedia = `@media(width <= ${mNavWhenDropdownWidth}px)`;
//var cssMedia2 = `@media(width >= ${mNavWhenDropdownWidth}px)`;
var cssMedia = `@media(width <= ${mNavWhenDropdownWidth}px)`;
var cssMedia2 = `@media(width >= ${mNavWhenDropdownWidth}px)`;
// fix // hide, wrapper limit

if ((mNavWhenDropdownWidth) >= conf["confWrapperNavWidth"]){
cssMedia = '@media(width >= 1px)';
// cancel
cssMedia2 = `@media(width <= 0px)`; 
}
console.log(cssMedia);
// embed style
/*document.getElementsByTagName("nav")[0].innerHTML += `

<style>

${cssMedia} {
.navMenu, .dropdownMenu {
display: none;
}
.topNav .dropdownMenuButton { display: inline-block; }
}

//fix when dynamic change 
${cssMedia2}{
.dropdownMenu {
display: none !important;
}
}

</style>

`;*/

}


const span = document.getElementById("dropdownMenuButton");
const dropdownMenu = document.getElementById("dropdownMenu");
const classes = dropdownMenu.classList;

//https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle
span.addEventListener("click", () => {
const result = classes.toggle("show");
if (result){
dropdownMenu.classList.add("show")
} else {
dropdownMenu.classList.remove("show")
}

});







