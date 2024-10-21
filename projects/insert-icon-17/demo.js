// test demo icon v.1.0.1



let demoCounter = 0;
demoCounter = iconsJsonVar.length;

var lIconsPrint = '';
iconsJsonVar.forEach((val) => {

//let demoSvgFileName = val.text;

lIconsPrint += `

<div class="item bg2 shadow borderRadius3 padding2">
${val.text}
<hr>
<div><a href="/data2/icons/${val.text}.svg">

<span style="display: inline-flex; width: 16px; height: 16px;">
${val.text2}
</span>

${val.text2}

</a></div>
</div>

`;

});


document.getElementById("demo").innerHTML = `

<b class="block tCenter padding3">SVG icons, total: ${demoCounter}</b><br>

<div class="flexBlock">

${lIconsPrint}

</div>

<div class="margin2 padding2"></</div>
<a class="block tCenter tag brand" href="/icons-data/inspiration-log.html">inspiration log</a>
<div class="margin2 padding2"></</div>

`;

