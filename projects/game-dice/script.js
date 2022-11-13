// v.1.1.0

var dice = {
"1":"⚀",
"2":"⚁",
"3":"⚂",
"4":"⚃",
"5":"⚄",
"6":"⚅"
};



const diceKeyArr = Object.keys(dice);
const diceValArr = Object.values(dice);

function randomDice(){
let random = Math.floor(Math.random() * (diceKeyArr.length));
return random;
}




document.getElementById("panel").innerHTML = '<button class="gDbtn light border2"  id="myBtn"><h1>roll</h1></button>';
document.getElementById("myBtn").addEventListener("click", displayResult); 

displayResult()

function displayResult(){
var rand = randomDice();
var rand2 = randomDice();
var player = diceValArr[rand];
var pc = diceValArr[rand2];
var player2 = diceKeyArr[rand];
var pc2 = diceKeyArr[rand2];

var win = '';
if(player2 > pc2){
win = '<span class="orange">Player Win!!!</span>';
win += '<audio style="display:none" autoplay="false" src="/audio/win.mp3">';
}
if(player2 < pc2){
win = '<span class="red">PC Win!!!</span>';
win += '<audio style="display:none" autoplay="false" src="/audio/game-over.mp3">';
}
if(player2 == pc2){
win = '<span class="blue">Tie!!!</span>';
win += '<audio style="display:none" autoplay="false" src="/audio/ok.mp3">';
}

document.getElementById("result").innerHTML = `
<div class="gDice">
<div class="">`+player+`<span class="block gDname">player</span></div>
<div class="">`+pc+`<span  class="block gDname">pc</span></div>
</div>
`;
document.getElementById("result2").innerHTML = '<span>'+win+'</span>';
}
 
 