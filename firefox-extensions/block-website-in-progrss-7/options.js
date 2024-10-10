// v.1.0.0


filterJsonVar.forEach((val, key) => {

document.getElementById("result").innerHTML += `
<a class="brand" href="${val['url']}">${val['url']}</a>: ${val['tag']}<br>
`;

});


//https://stackoverflow.com/questions/23728626/localstorage-and-json-stringify-json-parse
//browser.storage.sync.set({
browser.storage.local.set({
    dataUrlRedirectList: JSON.stringify(dataUrlRedirectListArr)
  });






function setCurrentChoice(result) {
//document.querySelector("#q").value = result.rUrl || "https://example.com";
//document.querySelector("#q").value = result.rUrl || "";

if(result.dataUrlRedirectList){
var getData =  JSON.parse(result.dataUrlRedirectList);


getData.forEach((item, index) => {
if(index != undefined&&index != "undefined"){
document.getElementsByClassName("classUrlFirst")[index].value = getData[index].urlFirst;
document.getElementsByClassName("classUrlSecond")[index].value =  getData[index].urlSecond;
}
});

}
}


//let getting = browser.storage.sync.get("dataUrlRedirectList");
let getting = browser.storage.local.get("dataUrlRedirectList");
getting.then(setCurrentChoice, onError);

