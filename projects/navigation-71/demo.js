// for demo nav v.1.0.0


let print = ``;
let print2 = ``;

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
let n = 0;

while (n < Math.floor(Math.random() * 50)) {

print += `<a class="countMenuItem borderBottomTransparent inlineBlock padding brand itemLinkAni" href="#">Nav item</a>`;

n++;
}

print2 = print;



document.getElementById("lRandomNavItems").innerHTML = print; 
document.getElementById("lRandomNavItems2").innerHTML = print; 

