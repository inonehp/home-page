// v.1.0.11


function fuShareMain(){
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

}


fuShareMain();














function fuShare(t, u){
var host = '/';

t = decodeURIComponent(t);
u = decodeURIComponent(u);



if(t == ''){ t = q; }
var tshare = encodeURIComponent(t);
var ushare = encodeURIComponent(u);

var target = ' target="_blank" ';

var share = '';

if (navigator.share) {
share += `<input type="button" class="dropbtn border1 tag light" style="display: inline-block;" value="mobile share" onClick="fuMobileShare('`+tshare+`',	'`+ushare+`')" />`;
}

share += `
<a class="border2 tag light" href="`+host+`./projects/14-typing-speed/?mode=input&q=`+tshare+`">input</a>
<hr>
<a $target class="border2 tag light" href="https://twitter.com/intent/tweet?text=`+tshare+' '+ushare+`">twitter</a>
<a $target class="border2 tag light" href="https://tumblr.com/widgets/share/tool?canonicalUrl=`+ushare+`">tumblr</a>
<a $target class="border2 tag light" href="mailto:?subject=`+tshare+`&body=`+ushare+`">email</a>
<a $target class="border2 tag light" href="https://validator.w3.org/nu/?doc=`+ushare+`">w3.org</a>

`;

share = `
<div style="text-align:center; width: 100%;" class="op gray">
`+share+`
</div>
`;


return share;


}

function fuMobileShare(q, url) {

if (navigator.share) {
  navigator.share({
    title: q,
    text: q+' '+url,
    //url: url,
  })
    .then(() => console.log('Successful share'))
    .catch((error) => console.log('Error sharing', error));
}
}




