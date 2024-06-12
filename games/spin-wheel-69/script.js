// v.1.0.0


let spinNumber = "";


spinNumber = `

<div class="spinNumber" style="transform: rotate(0deg);">1</div>
<div class="spinNumber" style="transform: rotate(45deg);">8</div>
<div class="spinNumber" style="transform: rotate(90deg);">7</div>
<div class="spinNumber" style="transform: rotate(135deg);">6</div>
<div class="spinNumber" style="transform: rotate(180deg);">5</div>
<div class="spinNumber" style="transform: rotate(225deg);">4</div>
<div class="spinNumber" style="transform: rotate(270deg);">3</div>
<div class="spinNumber" style="transform: rotate(315deg);">2</div>
<style>
.spinWheelAni {
/*transition: transform 1000ms ease-in-out;*/
transition: transform 1000ms liner;
}
</style>
`;


var print = `

<div class="spinArrow light"> ⋙ </div>

<div id="spinWheel" class="spinWheel spinWheelAni">
${spinNumber}
<div class="spinStart button submit" onclick="spinWheel('start');">start</div>
</div>



`;


function spinWheel(mode){

document.getElementById("result2").innerHTML = `
<style>
.spinWheelAni {
/*animation: spin 8s linear infinite;*/
transform: rotate(45deg);
}
</style>
`;

if (mode == 'start'){

let spinRound = 0;
let spinRandomNumber = fuMRandom(1, 8);

let spinRotateDeg = 0;

let i = 1;

setInterval(() => {
if (mode == 'start'){
i++;
spinRound++;
spinRotateDeg = spinRotateDeg + 45;

if(i == 9){ i = 1; }

//console.log(i);
//console.log(spinRound);
console.log(`spinNumber: ${spinRandomNumber}`);
console.log(`sping round: ${spinRound}`);

/*var element = document.getElementById("spinWheel");
element.classList.add("spinWheelAni");*/


//if (spinRotateDeg == 360){ spinRotateDeg = 360; }
document.getElementById("result2").innerHTML = `

<style>
.spinWheelAni {
transform: rotate(${spinRotateDeg}deg);
}
</style>

`;

if(spinRound >= 8&&spinRandomNumber == i){
mode = 'stop';
}

}

}, 1000);


}

}

if (document.getElementById("result") != null){
document.getElementById("result").innerHTML = print; 
}

/*addEventListener("DOMContentLoaded", (event) => {});
i = 1;
setInterval(() => {
console.log(i);
//console.log(Math.round((new Date() - before) / 1000));
//if(i == 5){ alert(i); }
i++;
}, 1000);*/





/*var element = document.getElementById("spinWheel");
element.classList.add("spinWheelAni");*/
