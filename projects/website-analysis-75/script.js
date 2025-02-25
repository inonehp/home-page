// v.1.0.0

let print = ``;

var geturl = location.href;
var url = new URL(geturl);
var q = url.searchParams.get("q");

document.getElementById("result").innerHTML = ""; 








if (q != null&&q != ""){
document.getElementById("q").value = q;
analysis(q);
}

//https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event
//input.addEventListener("input", updateValue);
document.addEventListener("input", updateValue);

function updateValue(e) {
q = e.target.value;
analysis(q);
}



function analysis(q){
let q2 = q;
q2 = q2.replace("https://", "");
q2 = q2.replace("http://", "");



let data = [
{
"text":"W3C HTML Validation ",
"text2":`https://validator.w3.org/check?uri=%q`,
"text3":"1.1",
"text4":""
},
{
"text":"W3C CSS Validation",
"text2":`https://jigsaw.w3.org/css-validator/validator?uri=%q`,
"text3":"1.2",
"text4":""
},

{
"text":"Google check indexing",
"text2":`https://www.google.com/search?q=site:%q2`,
"text3":"1.2",
"text4":""
},
{
"text":"Google search for links",
"text2":`https://www.google.com/search?q=&quot;%q2&quot;`,
"text3":"1.2",
"text4":""
},
{
"text":"Bing check indexing",
"text2":`https://www.bing.com/search?q=site:%q2`,
"text3":"1.2",
"text4":""
},
{
"text":"Bing search for links",
"text2":`https://www.bing.com/search?q=&plus;%2B%q2`,
"text3":"1.2",
"text4":""
},
];




let data2 = [
{
"text":"PageSpeed Insights",
"text2":`https://pagespeed.web.dev/`,
"text3":"9",
"text4":""
},
{
"text":"Google Analytics",
"text2":`https://analytics.google.com/`,
"text3":"9",
"text4":""
},
{
"text":"Google Search Console",
"text2":`https://search.google.com/search-console`,
"text3":"9",
"text4":""
},
{
"text":"Bing Webmaster Tools",
"text2":`https://www.bing.com/webmasters/`,
"text3":"9",
"text4":""
},
];

//https://stackoverflow.com/questions/43996959/json-sorting-by-alphabetical-order
// JSON sorting
data = data.sort((a,b)=> {
var a1 = a.text3.toLowerCase();
var b1 = b.text3.toLowerCase();
return a1<b1 ?-1:a1> b1? 1 :0;
})



//print = `URL: ${q}`;
print += `

<div class="margin padding"></div>

`;
//alert(encodeURIComponent('"'));
data.forEach((val, index) => {

val["text2"] = val["text2"].replace("%q2", q2);
val["text2"] = val["text2"].replace("%q", q);

print += `

<div class="bgList border3List borderRadius2">
<a target="blank" href="${val["text2"]}">
<div class="padding2 tLeft">
${val["text"]} - <span class="brand">${val["text2"]}</span>
</div>
</a>
</div>

`;

});



// links
print += `

<div class="margin padding"></div>
Other:

`;

data2.forEach((val, index) => {

print += `

<div class="bgList border3List borderRadius2">
<a target="blank" href="${val["text2"]}">
<div class="padding2 tLeft">
${val["text"]} - <span class="brand">${val["text2"]}</span>
</div>
</a>
</div>

`;

});

document.getElementById("result").innerHTML = print; 
print = ``;
}


