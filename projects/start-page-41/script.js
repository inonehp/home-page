// v.1.0.2

// time v.1.4.4
// creation date: 2023
// inspired by Google Clock


function normalize(a){
if(a <= 9){ a = '0'+a; }
return a;
}

var sec = 0;
var secArr = [];
secArr[0] = 0;

function fuStopwatch(){

sec = secArr[0]++;

let hours = normalize(Math.floor(sec / 3600));
let minutes = normalize(Math.floor(sec % 3600 / 60));
let seconds = normalize(Math.floor(sec % 3600 % 60));
//console.log(hours+' '+minutes+' '+seconds);

let time2 = Date.now();
time2 = new Date(time2);
let hours2 = normalize(time2.getHours());
let minutes2 = normalize(time2.getMinutes());
let seconds2 = normalize(time2.getSeconds());


/*
// sound alert
if(minutes == '59'&&seconds == '59'){
document.getElementById('audio').innerHTML += '<audio style="display:none" autoplay="false" src="/audio/ok.ogg">';
}
if(minutes == '29'&&seconds == '59'){
document.getElementById('audio').innerHTML += '<audio style="display:none" autoplay="false" src="/audio/click.ogg">';
}*/

document.getElementById('clock').innerHTML = hours + ':' + minutes + ':' + seconds;
document.getElementById('clock2').innerHTML = hours2 + ':' + minutes2; // result 2 standart 


//clock time
document.getElementsByTagName('title')[0].innerHTML = hours+':'+minutes+':'+seconds+'';



}





fuStopwatch();
setInterval(fuStopwatch, 1000);

//document.getElementById('search').innerHTML = ``;




