// v.1.0.0

var geturl = location.href;
var url = new URL(geturl);
var qGMode = url.searchParams.get("mode");
if(qGMode != null&&qGMode != ""){
qGMode = qGMode.trim();
localStorage.setItem('qGMode', qGMode);
}
if(qGMode == null){ qGMode = localStorage.getItem('qGMode'); }
if(qGMode == null) { qGMode = "web"; }

var qGQ = url.searchParams.get("q");
if(qGQ == null) { qGQ = ""; }
if(qGQ != ''){ qGQ = encodeURIComponent(qGQ); }

// config
var lQModePrint = "";
let lQMode = [
{"name":"web", "code":"74e19ee10195d4644"},
{"name":"blog", "code":"653a54ad99a1442eb"},
{"name":"video", "code":"66e67d2cd1ec94b3b"},
{"name":"github.io", "code":"614f3596881c64f5f"},
{"name":"pages.dev", "code":"c1bb12232f9de476e"},
{"name":"custom", "code":"2460fb11690ab4ead"},
];

lQMode.forEach((item, item2) => {
if (item["name"] == qGMode){
lQModePrint += `
<a class="brand active tag border borderRadius3" href="?mode=${item["name"]}&q=${qGQ}">${item["name"]}</a>
`;
} else {
lQModePrint += `
<a class="brand tag light border borderRadius3" href="?mode=${item["name"]}&q=${qGQ}">${item["name"]}</a>
`;
}
});
document.getElementById("mode").innerHTML = `${lQModePrint}`; 


lQMode.forEach((item, item2) => {
if (item["name"] == qGMode){

document.getElementById("publicUrl").innerHTML = `
<a class="tag2 borderBottomBlue brand" href="https://cse.google.com/cse?cx=${item["code"]}">Public URL</a>
`;

var script = document.createElement('script');
script.type='text/javascript';
script.async = true;
script.charset = 'utf-8';
script.src = 'https://cse.google.com/cse.js?cx=' + item["code"];      
document.getElementsByTagName('head')[0].appendChild(script);

}
});









