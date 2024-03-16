// v.1.0.0

let totalPost = agicountdownJsonVar.length;
let averageYear = 0;
let result = "empty";
let resultCountdown = "empty";

let i = 0;
agicountdownJsonVar.forEach((item, key) => {

postId = '';
postText = '';
postText2 = '';
postText3 = '';
postTag = '';
postUrl = '';
postTime = '';

if(item['id'] != null){ postId = item['id']; }
if(item['text'] != null){ postText = item['text']; }
if(item['text2'] != null){ postText2 = item['text2']; }
if(item['text3'] != null){ postText3 = item['text3']; }
if(item['tag'] != null){ postTag = item['tag']; }
if(item['url'] != null){ postUrl = item['url']; }
if(item['time'] != null){ postTime = item['time']; }


averageYear = averageYear + Number(postText2.trim());

i++;
});



result = averageYear / Number(totalPost);
//https://stackoverflow.com/questions/3174285/javascript-remove-numbers-after-the-dot
result = String(result).split('.')[0];

//https://stackoverflow.com/questions/6002254/get-the-current-year-in-javascript
resultCountdown = Number(result) - Number(new Date().getFullYear())

var print = `

<div class="bg border3">
<h1 class="tCenter">${resultCountdown} years</h1>
<h2 class="tCenter">${result}</h2>
</div>

<div class="margin2 padding2"></div>

<div class="small">- ${result} - average number of ${totalPost} items.</div>
<div class="small">- Based on random posts about a possible date when AGI will be created, not just experts, everyone.</div>
- <a class="bold brand" href="data-list.html">List of collected data</a>

`;

if(document.getElementById("result") != null){
document.getElementById("result").innerHTML = print; 
}
