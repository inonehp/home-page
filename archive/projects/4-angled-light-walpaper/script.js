// v.1.0.0



// https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}




// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
let n = 0;
let max = 3000;
let result = '';

while (n < max) {
let randTop = randomIntFromInterval(-20, 100);
let randTop2 = randomIntFromInterval(-20, 100);
let randTop3 = randomIntFromInterval(-20, 100);

let randLeft = randomIntFromInterval(-20, 100);
let randLeft2 = randomIntFromInterval(-20, 100);
let randLeft3 = randomIntFromInterval(-20, 100);

let randRotate = randomIntFromInterval(-90, 90);
let randRotate2 = randomIntFromInterval(-90, 90);
let randRotate3 = randomIntFromInterval(-90, 90);


result += `
<div class="triangle" style="top: ${randTop}%; left: ${randLeft}%; transform: rotate(${randRotate}deg);"></div>
<div class="triangle2" style="top: ${randTop2}%; left: ${randLeft2}%; transform: rotate(${randRotate2}deg);"></div>
<div class="triangle3" style="top: ${randTop2}%; left: ${randLeft2}%; transform: rotate(${randRotate3}deg);"></div>
`;
n++;
}

document.getElementById("result").innerHTML = result;


fuMSetTheme('light');
