
setTimeout(() => {
if(!window.location.hash) {
if(localStorage.getItem("music2reload") != "done"){
window.location = window.location + '#loaded';
window.location.reload();
}
}
localStorage.setItem("music2reload", "done");
}, "1000")

var url = "/data/musicFP.json";
var json;

var http = new XMLHttpRequest();
//http.overrideMimeType("text/plain");
http.overrideMimeType("application/json");
http.onreadystatechange = function() {
//console.log( this.status);
if (this.readyState == 4 && this.status == 200) {
// Typical action to be performed when the document is ready:
json = http.responseText;
localStorage.setItem("music", http.responseText);
}
if(this.status == 404){
//console.log("json 404");

document.getElementById("msg").innerHTML = '<h3 class="red" style="text-align: center">error load json</h3>';


}


}
http.open("GET", url, true);
http.send();






//alert(json);

json = JSON.parse(localStorage.getItem("music"));
const random = Math.floor(Math.random() * json.length);
var random_url = json[random]['url'];


//console.log(random_url);

document.getElementById("playurl").innerHTML =  '<a class="tag button light2 border2List" style="text-align:center;  display:block;" target="blank" href="'+random_url+'">'+random_url+' ⇗</a>'; 

var tmp = document.createElement ('a');
tmp.href   = random_url;
var host = tmp.hostname;

var w = '100%';
var h = '275px';

switch(host) {

case "youtu.be":
case "m.youtube.com":
case "www.youtube.com":
case "music.youtube.com":
  
//alert(random_url);
var play = random_url.split('v=').pop();

//console.log(play);

    //<!-- 1. The <iframe> (and video player) will replace this <div> tag. -->
document.getElementById("playerxx").innerHTML = '<div id="player" class="border2List"></div>'; 


      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: h,
          width: w,
          videoId: play,
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange,
            'onStateChange': onPlayerStateChange2,
            
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
        event.target.playVideo();
//event.target.mute();
//event.target.setVolume(100); 
      }


      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
 if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
}
       
}
function stopVideo() {
        player.stopVideo();
      }


function onPlayerStateChange2(event) {
		  if(event.data === 0) {            
// Simulate an HTTP redirect:
location.reload();  
}
}


break;
   

case 'vimeo.com':

function injectScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.addEventListener('load', resolve);
        script.addEventListener('error', e => reject(e.error));
        document.head.appendChild(script);
    });
}

injectScript('https://player.vimeo.com/api/player.js')
    .then(() => {
        console.log('Script loaded!');
        
        
        
        
        
        
var play = random_url.split('/').pop();
document.getElementById("playerxx").innerHTML = '<div id="myVideo" data-vimeo-id="'+play+'" data-vimeo-autoplay="true"></div>'; 

var options = {
    url: "https://vimeo.com/"+play,
   // width:400
   height:h
  };

  var videoPlayer = new Vimeo.Player('myVideo', options);

videoPlayer.on('play', function() {
    console.log('Played the video');
  });
  
videoPlayer.on('ended', function(data) {
location.reload(); 
location.reload(); 
});
        
        
        
        
        
    }).catch(error => {
        console.error(error);
    });
    
    
    
    



    break;

    
case "soundcloud.com":

function injectScript2(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.addEventListener('load', resolve);
        script.addEventListener('error', e => reject(e.error));
        document.head.appendChild(script);
    });
}

injectScript2('https://w.soundcloud.com/player/api.js')
    .then(() => {
        console.log('Script loaded!');
        

  document.getElementById("playerxx").innerHTML = '<iframe  id="sc-widget" width="'+w+'" height="'+h+'" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url='+random_url+'&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>'; 


  (function(){
    var widgetIframe = document.getElementById('sc-widget'),
        widget       = SC.Widget(widgetIframe);

    widget.bind(SC.Widget.Events.READY, function() {
      // load new widget
      widget.bind(SC.Widget.Events.FINISH, function() {
// Simulate an HTTP redirect:

location.reload(); 
location.reload(); 
      });
    });

  }());

 }).catch(error => {
 console.error(error);
    });

 break;
    
default:
console.log(`default switch`);
}

