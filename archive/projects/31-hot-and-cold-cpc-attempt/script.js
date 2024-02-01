// v.1.0.0


var url = new URL(window.location);
var q = url.searchParams.get("q");
if(q != null){ localStorage.setItem('lHotColdQ', q) }
if(q == null){ q = localStorage.getItem('lHotColdQ'); }
if(q == null){ q = 'lHot'; }

function lGetQ(q33){
if(q33 != ''){
localStorage.setItem('lHotColdQ', q33);
}

switch (q33){
case 'lHot':
document.getElementById("lPlayer").innerHTML = `
<iframe id="ytplayer" type="text/html" width="640" height="360" src="https://www.youtube.com/embed/gBDEUuB4fQA?autoplay=1" frameborder="0"></iframe>
`;
break;

default:
document.getElementById("lPlayer").innerHTML = `
<iframe id="ytplayer" type="text/html" width="640" height="360" src="https://www.youtube.com/embed/DKaZTjgYldE?autoplay=1" frameborder="0"></iframe>
`;
}

}


lGetQ(q);
