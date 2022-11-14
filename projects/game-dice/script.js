// v.1.2.1

var dice = {
"1":"⚀",
"2":"⚁",
"3":"⚂",
"4":"⚃",
"5":"⚄",
"6":"⚅"
};

var pointsPlayer = '0';
var pointsPc = '0';


const diceKeyArr = Object.keys(dice);
const diceValArr = Object.values(dice);

function randomDice(){
let random = Math.floor(Math.random() * (diceKeyArr.length));
return random;
}

var colorPlayerWin = '';
var colorPcWin = '';


document.getElementById("panel").innerHTML = '<button class="gDbtn light border2"  id="myBtn">roll</button>';
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
win = '<span class="orange"><h1>Player Win!!!</h1></span>';
win += '<audio style="display:none" autoplay="false" src="/audio/ok.mp3">';
colorPlayerWin = 'green';
colorPcWin = '';
pointsPlayer++;
}
if(player2 < pc2){
win = '<span class="red"><h1>PC Win!!!</h1></span>';
win += '<audio style="display:none" autoplay="false" src="/audio/error.mp3">';
colorPlayerWin = '';
colorPcWin = 'green';
pointsPc++;
}
if(player2 == pc2){
win = '<span class="blue"><h1>Tie!!!</h1></span>';
win += '<audio style="display:none" autoplay="false" src="/audio/ok.mp3">';
colorPlayerWin = 'green';
colorPcWin = 'green';
}

document.getElementById("result").innerHTML = `
<div class="gDice">

<div>
<div class="`+colorPlayerWin+`">`+player+`</div>
<div class="block gDname op">player</div>
<div class="block gDname op">`+pointsPlayer+`</div>
</div>

<div>
<div class="`+colorPcWin+`">`+pc+`</div>
<div class="block gDname op">pc</div>
<div class="block gDname op">`+pointsPc+`</div>
</div>

</div>
`;
document.getElementById("result2").innerHTML = '<span>'+win+'</span>';
}
 
 