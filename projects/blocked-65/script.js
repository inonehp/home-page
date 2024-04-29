// v.1.0.0


var print = `
result
`;

if(document.getElementById("result") != null){
document.getElementById("result").innerHTML = `<span class="smaller">document.referrer:
</span>`;
document.getElementById("result").textContent += document.referrer; 
}
