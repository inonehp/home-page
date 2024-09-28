// Nav v.2.0.1

// config

// wrapper size, number in px from your CSS
let mNavigationWrapperWidth = 900;


// JS part
// Dropdown menu  v.3.0.0
// if JS off (CSS version in noscript.css)
//https://stackoverflow.com/questions/52556194/how-to-toggle-on-off-javascript
// menu click
function dropdownMenuFunction() {
var dropdown = document.getElementById("dropdownMenu");
if (dropdown.style.display === "none"||dropdown.style.display === "") {
document.getElementById("dropdownMenuButton").innerHTML = '☶ Menu'; 
dropdown.style.display = "block";
} else {
dropdown.style.display = "none";
document.getElementById("dropdownMenuButton").innerHTML = '☰ Menu'; 
}

// out area hide
var getclick = document.getElementById('dropdownMenuButton');
document.addEventListener('click', function(event) {
// hide and make posible text selected
if (!getclick.contains(event.target)&&document.getSelection().toString() == '') {
var dropdown = document.getElementById("dropdownMenu");
dropdown.style.display = "none";
document.getElementById("dropdownMenuButton").innerHTML = '☰ Menu'; 
}
});
}

// nav v.1.2.2, in test
// count links
var countMenuItem = document.querySelectorAll('.countMenuItem');
//if((countMenuItem.length / 2) >= 4){}
//if(document.getElementById("footer") != null){}
//fuMPrintText('footer', ``, '+');
if(document.getElementById("navTop") != null){ // not body, id not found

var mNavItemsAverageWidth = 110;
// Average: 66
var mNavItemsCount = (countMenuItem.length / 2);
// /2 - dublicate items (links)
var mNavWhenDropdownWidth = (mNavItemsAverageWidth * mNavItemsCount) / 2;
// nav width (mNavItemsAverageWidth * mNavItemsCount)/2 - for 2 rows links
//var cssMedia = `@media(width <= ${mNavWhenDropdownWidth}px)`;
//var cssMedia2 = `@media(width >= ${mNavWhenDropdownWidth}px)`;
var cssMedia = `@media(width <= ${mNavWhenDropdownWidth}px)`;
var cssMedia2 = `@media(width >= ${mNavWhenDropdownWidth}px)`;
// fix // hide, wrapper limit

if((mNavWhenDropdownWidth) >= mNavigationWrapperWidth){
cssMedia = '@media(width >= 1px)';
// cancel
cssMedia2 = `@media(width <= 0px)`; 
}
// embed style
document.getElementsByTagName("nav")[0].innerHTML += `

<style>

/* mobile dropdown menu */

/* when start dropdown: main.js, noscript.css */
${cssMedia} {
.menuTop { display: none; }
#dropdownMenuButton { display: inline-block; }
}

/* fix when dynamic change */
${cssMedia2}{
.dropdownMenuContentColumn, .dropdownMenuContent {
display: none !important;
}
}
/* // when start dropdown js noscript */
</style>

`;
}



//console.log(document.getElementsByTagName("header")[0]);
// end JS part
//<!-- end Nav -->







