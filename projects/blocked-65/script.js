// v.1.0.0


var geturl = location.href;
var url = new URL(geturl);
var q = url.searchParams.get("q");
var text = url.searchParams.get("text");



var print = `
URL: <a class="blue" href="${q}">${q}</a><br>
Reason: ${text}
`;

if(document.getElementById("result") != null){
document.getElementById("result").innerHTML = print;
}
