// v.1.1.4

var colorsListBg = [
  "#fff",  "SeaShell",     "#F0F0F0",
  "#fbfbeb",
  
  "#EBE8E4",
  "#EBEBE4",
  "#E8EBE4",
"#fcfaec",
  
  
  "#EBE5BC",
  "#D0EBBC",
  "#BCEBD2",
  "#4edea6",
  "#e75c44",
  
  "#000",
  "#34363B",
  "#4A4A4A",
  "#2D2D2E",
  "#285963",
  "#3E275E",
 "rebeccapurple",
  "#ff0000",


  ];

var colorsListText = [
 "#000",
   "rebeccapurple",
  "#5bb29d",
  "#e35c34",
  "#5cbceb",
  "#d8c939",
  "#8ccde4",

  "#fff",
  
  ];

var items = '';
colorsListBg.forEach((item) => {
  items += `

<div style="background: ${item};" onclick="changeBgColor('${item}')">
<span style="color: #000;">${item}</span>
<span style="color: #fff;">${item}</span>
</div>

`;
});

document.getElementById("jsResultBg").innerHTML = `
<div class="menuColor">
${items}
</div>
`;

items = '';
colorsListText.forEach((item) => {
  items += `

<div style="background: ${item};" onclick="changeTextColor('${item}')">
<span style="color: #000;">${item}</span>
<span style="color: #fff;">${item}</span>
</div>

`;
});

document.getElementById("jsResultText").innerHTML = `
<div class="menuColor">
${items}
</div>
`;

//https://stackoverflow.com/questions/197748/how-do-i-change-the-background-color-with-javascript
function changeBgColor(color33) {
   //document.getElementsByClassName('content')[0].style.background = color;
 //document.body.style.background = color;
  document.getElementsByClassName("colorPage")[0].style.background = color33;
   document.getElementById("lColorBg").innerHTML = color33;
}

function changeTextColor(color33) {
//document.getElementsByClassName('content')[0].style.background = color;
//document.body.style.color = color;
  document.getElementsByClassName("colorPage")[0].style.color = color33;
  document.getElementById("lColorText").innerHTML = color33;
}

function getRandomIntColor(max){
  return Math.floor(Math.random() * max);
}

changeBgColor(colorsListBg[getRandomIntColor(colorsListBg.length - 1)]);
changeTextColor(colorsListText[getRandomIntColor(colorsListText.length - 1)]);



