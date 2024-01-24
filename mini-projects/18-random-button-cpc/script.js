// v.1.0.0
// codepen cpc random button


function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const toy = [
"🐁",
"🐟",
"🌿",
"🕹️",
"🖇️",
"🍇"
];

document.getElementById("toy").innerHTML = '🖱️';

const button = document.querySelector("button");
button.addEventListener("click", () => {
var toy2 = toy[randomNumber(0, (toy.length - 1))]
document.getElementById("toy").innerHTML = toy2;

if(toy2 == "🐁"||toy2 =="🐟"){
document.getElementById("cat").classList.add("ani");
}else{
document.getElementById("cat").classList.remove("ani");
}

});


document.getElementById("cat").innerHTML = `
🐈
`;
