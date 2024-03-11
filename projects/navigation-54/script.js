// Nav v.1.2.0

// config

// wrapper size, number in px from your CSS
let mNavigationWrapperWidth = 900;


// JS part
// Dropdown menu  v.1.3.0
// if JS off (CSS version in noscript.css)
//https://www.w3schools.com/howto/howto_js_dropdown.asp
// menu click
function dropdownMenuFunction() {
var x = document.getElementById("dropdownMenu");
  if (x.style.display === "none"||x.style.display === "") {
document.getElementById("dropdownMenuButton").innerHTML = '☶ Menu'; 
x.style.display = "block";
  } else {
x.style.display = "none";
document.getElementById("dropdownMenuButton").innerHTML = '☰ Menu'; 
  }

// out area hide
var getclick = document.getElementById('dropdownMenuButton');
document.addEventListener('click', function(event) {
// hide and make posible text selected
if (!getclick.contains(event.target)&&document.getSelection().toString() == '') {
var x = document.getElementById("dropdownMenu");
x.style.display = "none";
document.getElementById("dropdownMenuButton").innerHTML = '☰ Menu'; 
    }
});
}

// nav v.1.2.1, in test
// count links
var countMenuItem = document.querySelectorAll('.countMenuItem');
//if((countMenuItem.length / 2) >= 4){}
//if(document.getElementById("footer") != null){}
//fuMPrintText('footer', ``, '+');
if(document.getElementById("navTop") != null){ // not body, id not found

/*var cssMedia = '@media(max-width: 500px)';
var cssMedia2 = '@media(min-width: 500px)';
if((countMenuItem.length / 2) >= 13){
cssMedia = '@media(max-width: 1000px)';
cssMedia2 = '@media(min-width: 1000px)';
}*/

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

/* when start dropdown js noscript */
${cssMedia} {
.navTop nav { display: block; }
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







