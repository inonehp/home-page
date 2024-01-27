// Fu insert icon v.2.6.1
// Function for insert icon in links using class name.


async function insertIcon(classNameForInsert, mode){


var insertIconStatus = localStorage.getItem("confIconStatus");
if(insertIconStatus == null){ insertIconStatus = 'on'; }

// mode: "strict" - for full word
if(mode != 'strict'){ mode = ''; }

let icons = {
"arch":`<span class="bold">△</span>`,
"beacons":"°.・",
"bitcoin":`<span class="orange">₿</span>`,
"bluesky":"🟦", "bento":"🟦",
"blogspot":"🅱",
"dev.to":"⬛", "aboutme":"⬛",
"twitter":`<span class="bold">𝕏</span>`, "x.com":`<span class="small bold">𝕏</span>`,
"twitch":"🔴",
"docs":"📄",
"geany":"🫖",
"blender":"✏️",
"framer":"//",
"facebook":"🇫",
"cloudflare pages":"⚡",
"behance":"🎨",
"dribbble":"🎨",
"codepen":"📜",
"github":"🐱", "neocities":"🐱",
"gitlab":"📜",
"hashnode":`🟦`,
"codepen":"📜",
"friendica":"🇫",
"firefox":"🦊",
"liberapay":`<em class="bold">lp</em>`,
"lightning":"⚡", "getalby":"⚡",
"linkedin":`<b class="blue lowercase">in</b>`,
"limey":"🥝",
"linux":"🐧",
"linktr":`<span class="bold green">✳</span>`, "linktree":`<span class="bold green">✳</span>`,
"pocket":"📰", "medium":"📰",
"producthunt":`<span class="bold orange">P</span>`, "figma":`<span class="bold orange">F</span>`,
"pxlmo":"🖼",
"sites":"📄",
"substack":"🔖",
"slashdot":`<span class="bold">/.</span>`,
"nostr":"🦩",
"tumblr":`<span class="bold">Ⓣ</span>`,
"onedrive":"☁️",
"deviantart":"🖼",
"pinterest":"🖼",
"threads":"@",
"instagram":"📸",
"wordpress":"🅦",
"youtube":"▶️",
"wix":`<span class="bold">W</span>`, "webflow":`<span class="bold em">W</span>`,



"angle":"◀", "angled":"◀",
"angel":"😇",
"angle":"🔺",
"antilope":"🦌", "gnu":"🦌",
"archive":"🗃️", "zip":"🗃️",
"balloon":"🎈",
"button":"▬",
"bird":"🐦",
"binary":"010", "number":"010",
"blog":"📝", "todo":"📝", "task":"📝", "note":"📝", "reminde":"📝", "paper":"📝", "article":"📝",
"book":"📚", "quiz":"📚",
"box":"📦",
"bookmark":"🔖",
"brain":"🧠", "memory":"🧠",
"calculator":"🧮", "abacus":"🧮", "count":"🧮",
"circle":"⭕", "round":"⭕",
"cloud":"☁️",
"contact":"💬",
"cookie":"🍪",
"cut":"✂️",
"clock":"🕑",
"cofee":"☕", "coffee":"☕",
"copyright":"©",
"comment":"💬","talk":"💬","chat":"💬",
"unicorn":"🦄",
"db":"💾", "data":"💾", "database":"💾", "keep":"💾", "save":"💾",
"download":"⬇️",
"dir":"📁️",
"developer":"💻",
"document":"📄", "page":"📄", "pages":"📄",
"draw":"✏️", "drawing":"✏️", "paint":"✏️", "painting":"✏️", "art":"🎨",
"earth":"🌍",
"embed":"▣",
"flash":"⚡", "fact":"⚡",
"file":"🗃️",
"game":"🎮", "mmorpg":"🎮",
"idea":"💡",
"fire":"🔥",
"teapot":"🫖",
"teacup":"🍵",
"translit":"⇄", "convert":"⇄",
"fox":"🦊",
"hello":"👋",
"info":"ℹ️", "faq":"ℹ️", "about":"ℹ️", 
"insert":"📋", "paste":"📋",
"joystick":"🕹",
"keyboard":"⌨️", "typing":"⌨️", "input":"⌨️",
"mark":"✔️", "check":"✅",
"label":"🏷️", "tag":"🏷️",
"laptop":"💻", "notebook":"💻",
"learning":"🌱", "learn":"🌱",
"live":"🔴", "online":"🔴", "broadcast":"🔴",
"like":"👍","love":"❤","fav":"❤",
"magazine":"📰",
"map":"📍", "sitemap":"📍",
"mammoth ":"🦣", "mastodon":"🦣",
"mail":"📧",
"@":"📧",
"message":"💬", "status":"💬",
"matrix":"💊",
"menu":"☰",
"movie":"🎥",
"money":"💲", "wallet":"💲", "payment":"💲",
"music": "🎶",
"network":"📶",
"new":"🆕",
"news":"📰",
"pumpkin":"🎃", "halloween":"🎃",
"pc":"🖥", "desktop":"🖥", "computer":"🖥",
"photo":"📷", "camera":"📷", "screenshot":"📷",
"project":"❖", "projects":"❖", "tpl":"📄", "template":"📄", "templates":"📄", "iframe":"📄",
"radio":"📻",
"random":"🎲", "dice":"🎲",
"robot":"🤖", "auto":"🤖",
"share":"🔁",
"script":"📜","JavaScript":"📜", "code":"📜", "coding":"📜", "history":"📜",
"search": "🔎",
"sleep":"😴💤", "bed":"🛏",
"store":"🛍️","shop":"🛍️", "extension":"🛍️", "extensions":"🛍️",
"style":"🎨", "css":"🎨", "color":"🎨", "theme":"🎨", "palette":"🎨", "design":"🎨", "webdesign":"🎨",
"time":"⌛", "timer":"⌛",
"tmp":"⏳", "temporary":"⏳",
"training":"🏃", "run":"🏃",
"test":"🧪", "demo":"🧪", "lorem":"🧪", "ipsum":"🧪", 
"play":"▶️",
"pleroma":"🟧️",
"portfolio":"💼",
"progress":"█░░",
"quote":"❝❞", "quotes":"❝❞", "blockquotes":"❝❞", 
"rain":"💧",
"redirect":"⬈", "redirects":"⬈",
"smoking":"🚭",
"sun":"🌞",
"snake":"🐍",
"snow":"❄️", "cold":"❄️", "winter":"❄️",
"star":"⭐",
"stopwatch":"⏱️",
"text":"📄",
"textarea":"◻",
"texture":"ᚙ", "textures":"ᚙ", "grid":"ᚙ",
"tool":"🔨",
"tv":"📺",
"url":"🔗","link":"🔗","www":"🔗", "popup":"🔗",
"video":"🎞️", "gif":"🎞️",
"setting":"⚙️", "settings":"⚙️", "custom":"⚙️",
"user":"👤", "followers":"👤",
"wastebasket":"🗑️", "trash":"🗑️",
"weather":"🌤️",
"web":"🕸️", "website":"🕸️", "internet":"🕸️", "browser":"🕸️",
"wallpaper":"🖼", "picture":"🖼", "image":"🖼", "img":"🖼", "pixel":"🖼",
"window":"🪟", "windows":"🪟",
"work":"🛠️",

"question":"❓",
"light":"⬜️", "highlight":"⬜️", "white":"⬜️",
 "dark":"⬛", "black":"⬛",
"red":"🟥",
"orange":"🟧",
"yellow":"🟨",
"green":"🟩",
"indigo":"🟪",
"violet":"🟪",
"blue":"🟦",



/* img ico
"instagram":`<img src="/img/icons/instagram-48x48.png" alt="ico" width="16" height="16">`,
"twitter":`<img src="/img/icons/x-48x48.png" alt="ico" width="16" height="16">`,
*/

};


let iconsArr = Object.getOwnPropertyNames(icons);
// links
//iconsArr = iconsArr.sort();

var counter = 0; // for only be 1 icon

const allLinks = document.querySelectorAll('.' + classNameForInsert);
allLinks.forEach((item, index) => {

if(counter == 0){



let linkText = item.innerHTML;


let linkURL = item.href;
if(item.href != undefined){
linkURL = item.href;
}else{ linkURL = '#undefined'; }

let check = '';
let icArr = [];
counter = 0; 

iconsArr.forEach((item33, index33) => {

let textIcon = String(item33);
let icon = String(icons[item33]);
//console.log((linkText.toLowerCase()+'')+((icon+' ')));




var linkText2 = linkText.replaceAll("@", " @ ");
linkText2 = linkText2 + " " + linkText2.slice(0, -1) + ' ' + linkText2 + 's' + ' ' + linkText2.replaceAll(".", " . ");
linkText2 = linkText2.replaceAll(",", " , ");
/*linkText2 = linkText2.replaceAll(".", " . ");*/
linkText2 = linkText2.replaceAll(":", " : ");
linkText2 = linkText2.replaceAll(">", " > ");
linkText2 = linkText2.replaceAll("<", " < ");
linkText2 = linkText2.replaceAll("-", " - ");
linkText2 = linkText2.replaceAll("(", " ( ");
linkText2 = linkText2.replaceAll(")", " ) ");
linkText2 = linkText2.replaceAll(`
`, "");
;


//counter == 0 - only one icon insert
if(mode != 'strict'&&check != 'exit'&&counter == 0){
// main, not strict

//https://stackoverflow.com/questions/412123764/how-to-remove-numbers-from-a-string
if(
(''+linkText2.replace(/\d+/g, '').toLowerCase()).indexOf((''+textIcon.replace(/\d+/g, '')+'')) != -1
||linkText2.replace(/\d+/g, '').toLowerCase().trim().search(textIcon.replace(/\d+/g, '')) != -1
&&linkText2.replace(/\d+/g, '').toLowerCase().trim().search(icon.replace(/\d+/g, '')) == -1){
icArr.push(icon);
check = 'exit';
counter++;
}

}else if(mode == 'strict'&&check != 'exit'&&counter == 0){
// main, strict word
if(
(' '+linkText2.replace(/\d+/g, '').toLowerCase()+' ').indexOf((' '+textIcon.replace(/\d+/g, '')+' ')) >= 0
||(' '+linkText2.replace(/\d+/g, '').toLowerCase()+' ').indexOf((' '+textIcon.replace(/\d+/g, '')+' ')) >= 0
&&linkText2.replace(/\d+/g, '').toLowerCase().trim().search(icon.replace(/\d+/g, '')) == -1){
icArr.push(icon);
check = 'exit';
counter++;

}
}

});


// insert favicon url
if(check != 'exit'&&counter == 0){
// if link
if(linkText.toLowerCase().trim().slice(0, 4) == 'http'&&linkText.toLowerCase().trim().search("http|://|www.") != -1&&counter == 0){
let linkTextURL = linkText;
let host = linkTextURL.split('/');
if(host[2] != undefined){
linkTextURL = host[2];
}
var iconHTTP = `https://www.google.com/s2/favicons?domain_url=${linkTextURL}`;
//var ico = `https://api.statvoo.com/favicon/?url=${host[2]}`;
//var ico = `https://api.faviconkit.com/${host[2]}/16`;
iconHTTP = `<img src="${iconHTTP}" alt="ico" width="16" height="16">`;
if(localStorage.getItem('confDataCollection') != 'on'){ iconHTTP = '🔗'; }
icArr.push(iconHTTP);
check = 'exit';
counter++;
}
}

// insert favicon text
if(check != 'exit'){
// if link2
if(linkURL.toLowerCase().trim().search(location.host) == -1&&linkURL.toLowerCase().trim().slice(0, 4) == 'http'&&linkURL.toLowerCase().trim().search("http|://|www.") != -1&&counter == 0){
let linkTextURL = linkURL;
let host = linkTextURL.split('/');
if(host[2] != undefined){
linkTextURL = host[2];
}
var iconHTTP = `https://www.google.com/s2/favicons?domain_url=${linkTextURL}`;
//var ico = `https://api.statvoo.com/favicon/?url=${host[2]}`;
//var ico = `https://api.faviconkit.com/${host[2]}/16`;
iconHTTP = `<img src="${iconHTTP}" alt="ico" width="16" height="16">`;
if(localStorage.getItem('confDataCollection') != 'on'){ iconHTTP = '🔗'; }
icArr.push(iconHTTP);
check = 'exit';
counter++;
}
}

if(insertIconStatus == "on"){
icArr = [...new Set(icArr)];
//icon = icArr.toString();
icon = icArr.join('');

// main insert icons if rule bellow true and text icon == text from link
if(check == 'exit'&&counter == 1&&
('' + linkText.toLowerCase()).indexOf((icon)) == -1
){

linkText = `<span><span class="brand ico">${icon}</span>` + linkText + '</span>';
document.getElementsByClassName(classNameForInsert)[index].innerHTML = linkText;

check = 'exit';
counter++;
}else if(counter == 0&&
('' + linkText.toLowerCase()).indexOf('🦝') == -1&&
('' + linkText.toLowerCase()).indexOf('🔗') == -1
){
linkText = `<span><span class="brand ico">🦝</span>` + linkText + '</span>';
document.getElementsByClassName(classNameForInsert)[index].innerHTML = linkText;
}
}else{
//linkText = `<span class=" capitalize${classNameForInsert} ">${linkText}</span>`;
/*//upper if off
linkText = String(linkText).trim();
var linkTextUp = '';
if(linkText[0] != '<'){
linkTextUp = '<span style="text-transform: capitalize; padding: 1px; margin: 0;">' + linkText[0] + '</span>';
linkText = '<span> • ' + linkTextUp + linkText.slice(1) + '</span>';
}else{
linkText = '<span> • ' + linkText + '</span>';
}*/

linkText = '<span>' + linkText + '</span>';
//linkText = `<span class="brand ico uppercase"> • </span>` + linkText;
document.getElementsByClassName(classNameForInsert)[index].innerHTML = linkText;

/*if(index == 0){
document.getElementsByClassName(classNameForInsert)[0].innerHTML += `<style>.capitalize${classNameForInsert}::first-letter { text-transform: capitalize; }</style>`;
}*/

}


}



ckeck = '';
icArr = [];

counter = 0;

});



}






