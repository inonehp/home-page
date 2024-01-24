// v.1.0.0

function captcha(){
let task = '2 + 3';
let result = 2 + 3;
let answer = prompt(task);

if(answer == result){
alert('win');
}else{
alert('end game');
//captcha();
}
}

captcha();
