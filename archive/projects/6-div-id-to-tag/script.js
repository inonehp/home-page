// v.1.1.0



function divIdToTag(printId, fromId){


var allIdOnPage = '';

let divId = document.getElementById(fromId);

let allDivId = divId.querySelectorAll('div');
allDivId.forEach((item, index) => {
if(item.id != ''){
allIdOnPage += `<a class="tag2 border2 op light" href="#`+item.id+`">`+item.id+`</a>`
}
});
allIdOnPage = `
<div class="block tagList tCenter padding">`+allIdOnPage+`</div>
`;
//document.getElementsByClassName('print')[0].innerHTML = allIdOnPage;

if(document.getElementById(printId) == null){
console.log('id for print null');
}else{
document.addEventListener("DOMContentLoaded", (event) => {
document.getElementById(printId).innerHTML = allIdOnPage;
});

}


}









