// Rock paper scissors v.1.0.0


let variantArr = ["🪨", "📄", "✂️"];

var print = ``;

let resultWinStatus = "<h2>Start of the game</h2>";


function main(gameMode, selectedVal){

document.getElementById("resultWin").innerHTML = `${resultWinStatus}`;

switch (gameMode) {

case 'select':
variantArr.forEach((val, index) => {

val = `
<a class="xxLarge padding2" href="#" onclick="main('result', '${val}')">${val}</a>
`;

print += val;
});

document.getElementById("resultTop").innerHTML = `<p>Select:</p>`;
break;

case 'result':

resultWinStatus = `
<h2 class="red">Wrong!</h2>
<audio style="display:none" autoplay="false" src="/audio/error.mp3"></audio>
`;

let pcVariant = variantArr[fuMRandom(0, 2)];
//getRandomInt
//console.log(`pc: ${pcVariant}, user: ${selectedVal}`);
// Expected output: "Mangoes and papayas are $2.79 a pound."

if(pcVariant == "🪨"&&selectedVal == "📄"){
resultWinStatus = `
<h2 class="orange">Win!</h2>
<audio style="display:none" autoplay="false" src="/audio/ok.mp3"></audio>
`;
}

if(pcVariant == "📄"&&selectedVal == "✂️"){
resultWinStatus = `
<h2 class="orange">Win!</h2>
<audio style="display:none" autoplay="false" src="/audio/ok.mp3"></audio>
`;
}

if(pcVariant == "✂️"&&selectedVal == "🪨"){
resultWinStatus = `
<h2 class="orange">Win!</h2>
<audio style="display:none" autoplay="false" src="/audio/ok.mp3"></audio>
`;
}

if(pcVariant == selectedVal){
resultWinStatus = `
<h2>Tie!</h2>
<audio style="display:none" autoplay="false" src="/audio/neutral.mp3"></audio>
`;
}

document.getElementById("resultWin").innerHTML = `${resultWinStatus}`;
document.getElementById("resultTop").innerHTML = `
PC: <span class="xxLarge">${pcVariant}</span>
<span class="xxLarge">${selectedVal} </span> :You
`;

break;

default:
console.log(`Sorry, we are out of ${gameMode}.`);
}

}

main('select');



if (document.getElementById("result") != null){
document.getElementById("result").innerHTML = print;
}
