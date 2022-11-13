var  qget = window.location;
qget = new URL(qget);



var q = qget.searchParams.get("q");
if(q != null){
q = q.replace(/%/g, "%25");
q = decodeURIComponent(q);
} else { q = ''; }

var text = qget.searchParams.get("text");
if(text != null){
//text = text.replace(/%([^\d].)/, "%25$1");
text = text.replace(/%/g, "%25");
text = decodeURIComponent(text);
} else { text = ''; }

var url = qget.searchParams.get("url");
if(url != null){
url = url.replace(/%/g, "%25");
url = decodeURIComponent(url);
} else { url = ''; }



document.getElementById("text").innerHTML = text;
document.getElementById("q").innerHTML = q;
document.getElementById("url").innerHTML = url;
 
var qShare = encodeURIComponent(q);
var textShare = encodeURIComponent(text);
var urlShare = encodeURIComponent(url);
document.getElementById("share").innerHTML = fuShare(qShare+textShare, urlShare);


 document.getElementById("textForm").value = q+text; 
  document.getElementById("urlForm").value = url; 
 
 
/*  var loadFile = function(event) {
    var reader = new FileReader();
    reader.onload = function(){
      var output = document.getElementById('output');
      output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  };*/