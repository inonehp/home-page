// for demo nav v.1.0.0


let print = ``;
let print2 = ``;

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
let n = 0;

while (n < fuMRandom(0, 50)) {

print += `<a class="countMenuItem brand padding" href="#">Nav item</a>`;

n++;
}

print2 = print;


window.addEventListener('load', function() {
document.getElementById("lRandomNavItems").innerHTML = print; 
document.getElementById("lRandomNavItems2").innerHTML = print; 
});
