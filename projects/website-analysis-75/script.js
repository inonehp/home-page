// v.1.0.0

let print = ``;

var geturl = location.href;
var url = new URL(geturl);
var q = url.searchParams.get("q");

document.getElementById("result").innerHTML = ""; 

let color = "";






if (q != null&&q != ""){
document.getElementById("q").value = q;
analysis(q);

analysis2(q);
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
Сheck:

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


document.getElementById("result2").innerHTML = `
<div class="margin padding"></div>
Get page:
<div class="bgList border3List borderRadius2 padding2">Click submit to further analyze the page
</div>
`;


//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
async function analysis2(url) {
//const url = "https://example.org/";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status} (fetch)`);
    }
//const json = await response.json();
let text = await response.text();

//https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString
const parser = new DOMParser();
const doc = parser.parseFromString(text, "text/html");


//https://stackoverflow.com/questions/32210341/fetch-api-get-title-keywords-and-body-text-from-http-response
//console.log(doc.title);
//console.log(doc.getElementsByName("keywords")[0].getAttribute("content"));
//console.log(doc.getElementsByTagName("body")[0].textContent)

console.log(doc);

text = `Response status: ${response.status}<hr>`;

text += `<div>HTMLDocument:</div><div class="padding2"></div>`;

text += `
<div class="result2">
<div class="bg padding2 borderRadius border">Name:</div>
<div class="bg padding2 borderRadius border">Value:</div>
<div class="bg padding2 borderRadius border">
<div class="${color} bold"></div>
Comment:
</div>
</div>
`;
color = "";


text += `
<div class="result2">
<div class="light3 padding2 borderRadius border">URL:</div>
<div class="light3 padding2 borderRadius border">${doc["URL"]}</div>
<div class="light3 padding2 borderRadius border">
<div class="${color} bold"></div>
</div>
</div>
`;
color = "";


text += `
<div class="result2">
<div class="light3 padding2 borderRadius border">charset:</div>
<div class="light3 padding2 borderRadius border">${doc["charset"]}</div>
<div class="light3 padding2 borderRadius border">
<div class="${color} bold"></div>
</div>
</div>
`;
color = "";


color = "green";
if (doc.title.length >= 61||doc.title.length <= 29){ color = "red"; }
text += `
<div class="result2">
<div class="light3 padding2 borderRadius border">title:</div>
<div class="light3 padding2 borderRadius border">${doc.title}</div>
<div class="light3 padding2 borderRadius border">
<div class="${color} bold">${doc.title.length}</div>
Title length: 30 and 60 characters.
</div>
</div>
`;
color = "";


color = "green";
if (doc.getElementsByName("description")[0].getAttribute("content").length >= 156||doc.getElementsByName("description")[0].getAttribute("content").length <= 29){ color = "red"; }
text += `
<div class="result2">
<div class="light3 padding2 borderRadius border">title:</div>
<div class="light3 padding2 borderRadius border">${doc.getElementsByName("description")[0].getAttribute("content")}</div>
<div class="light3 padding2 borderRadius border">
<div class="${color} bold">${doc.getElementsByName("description")[0].getAttribute("content").length}</div>
Description length: 30-155 characters.
</div>
</div>
`;
color = "";


text += `
<div class="result2">
<div class="light3 padding2 borderRadius border">keywords:</div>
<div class="light3 padding2 borderRadius border">${doc.getElementsByName("keywords")[0].getAttribute("content")}</div>
<div class="light3 padding2 borderRadius border">
<div class="${color} bold"></div>
Keyword: less than 10% of the total words of a page.
</div>
</div>
`;
color = "";



document.getElementById("result2").innerHTML = `
<div class="margin padding"></div>
Get page:
<div class="bgList border3List borderRadius2 padding2">${text}</div>
`; 
//console.table(text);
  } catch (error) {
//console.error(error.message);
document.getElementById("result2").innerHTML = `
<div class="margin padding"></div>
Get page:
<div class="bgList border3List borderRadius2 padding2">` + error.message + `</div>
`;


}
}


function analysisData(data){

}
