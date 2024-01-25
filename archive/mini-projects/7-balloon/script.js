// v.2.0.0
// only for many random div with different position

function balloon(printId){
let n = 0;
var print = "";
let min = 15;
let max = 50;
var snowflake = Math.floor(Math.random() * (max - min + 1) + min);

// https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
while (n <= snowflake) {
	print +=
		`<div class="snowflake" style="position: absolute; top:` +
		Math.floor(Math.random() * 100) +
		`%; left:` +
		Math.floor(Math.random() * 100) +
		`%">🎈  🎉</div>`;
	n++;

}

print = `


<div id="snow">
<div id="snowPrint" class="ani">

<div class="group" >
<div class="item">`+print+`</div>
<div class="item2">`+print+`</div>
</div>

</div>
</div>

`;

var head  = document.getElementsByTagName('head')[0];
var link  = document.createElement('link');
link.id   = 'lStyle';
link.rel  = 'stylesheet';
link.type = 'text/css';
link.href = '/mini-projects/balloon/style.css';
link.media = 'all';

head.appendChild(link);

return document.getElementById(printId).innerHTML = print;
}















