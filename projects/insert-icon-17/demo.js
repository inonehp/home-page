// test icon v.1.0.0





var lIconsPrint = '';
iconsJsonVar.forEach((val) => {

lIconsPrint += `

<div class="itemt bg2 shadow borderRadius3 padding2 small">
${val.t}
<hr>
<div style="width: 64px; height: 64px;">${val.t2}</div>
</div>

`;

});


document.getElementById("demo").innerHTML = `

<div class="flexBlock">
${lIconsPrint}
</div>

`;

