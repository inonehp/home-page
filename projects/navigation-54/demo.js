// nav demo v.1.0.0

lDemoRandomItem();

function fuMReload(){ location.reload(true); }

function lDemoRandomItem(){

let lMenuItems = '';
let lRand = 0;
if(document.getElementsByClassName("idForRandomItemDemo") != null){
lRand = Math.floor(Math.random() * 3);

switch (lRand) {
  case 0:

lMenuItems = `

<a class="countMenuItem brand inlineBlock padding" href="#item">Item</a>
<a class="countMenuItem brand inlineBlock padding" href="#item">Lorem Ipsum</a>
<a class="countMenuItem brand inlineBlock padding" href="#item">Item</a>
<a class="countMenuItem brand inlineBlock padding" href="#item">Lorem Ipsum</a>
<a class="countMenuItem brand inlineBlock padding" href="#item">Item</a>
<a class="countMenuItem brand inlineBlock padding" href="#item">Lorem Ipsum</a>
<a class="countMenuItem brand inlineBlock padding" href="#item">Item</a>
<a class="countMenuItem brand inlineBlock padding" href="#item">Lorem Ipsum</a>
<a class="countMenuItem brand inlineBlock padding" href="#item">Item</a>
<a class="countMenuItem brand inlineBlock padding" href="#item">Lorem Ipsum</a>


`;

document.getElementsByClassName("idForRandomItemDemo")[0].innerHTML = lMenuItems;
document.getElementsByClassName("idForRandomItemDemo")[1].innerHTML = lMenuItems;

    break;
  case 1:

lMenuItems = `

<a class="countMenuItem brand inlineBlock padding" href="#item">Item</a>
<a class="countMenuItem brand inlineBlock padding" href="#item">Lorem Ipsum</a>
<a class="countMenuItem brand inlineBlock padding" href="#item">Item</a>
<a class="countMenuItem brand inlineBlock padding" href="#item">Lorem Ipsum</a>
<a class="countMenuItem brand inlineBlock padding" href="#item">Item</a>
<a class="countMenuItem brand inlineBlock padding" href="#item">Lorem Ipsum</a>
<a class="countMenuItem brand inlineBlock padding" href="#item">Item</a>
<a class="countMenuItem brand inlineBlock padding" href="#item">Lorem Ipsum</a>
<a class="countMenuItem brand inlineBlock padding" href="#item">Item</a>
<a class="countMenuItem brand inlineBlock padding" href="#item">Lorem Ipsum</a>
<a class="countMenuItem brand inlineBlock padding" href="#item">Item</a>
<a class="countMenuItem brand inlineBlock padding" href="#item">Lorem Ipsum</a>
<a class="countMenuItem brand inlineBlock padding" href="#item">Item</a>
<a class="countMenuItem brand inlineBlock padding" href="#item">Lorem Ipsum</a>
<a class="countMenuItem brand inlineBlock padding" href="#item">Item</a>
<a class="countMenuItem brand inlineBlock padding" href="#item">Lorem Ipsum</a>
<a class="countMenuItem brand inlineBlock padding" href="#item">Item</a>
<a class="countMenuItem brand inlineBlock padding" href="#item">Lorem Ipsum</a>
<a class="countMenuItem brand inlineBlock padding" href="#item">Item</a>
<a class="countMenuItem brand inlineBlock padding" href="#item">Lorem Ipsum</a>
<a class="countMenuItem brand inlineBlock padding" href="#item">Item</a>
<a class="countMenuItem brand inlineBlock padding" href="#item">Lorem Ipsum</a>
<a class="countMenuItem brand inlineBlock padding" href="#item">Item</a>
<a class="countMenuItem brand inlineBlock padding" href="#item">Lorem Ipsum</a>
<a class="countMenuItem brand inlineBlock padding" href="#item">Item</a>
<a class="countMenuItem brand inlineBlock padding" href="#item">Lorem Ipsum</a>
<a class="countMenuItem brand inlineBlock padding" href="#item">Item</a>
<a class="countMenuItem brand inlineBlock padding" href="#item">Lorem Ipsum</a>
<a class="countMenuItem brand inlineBlock padding" href="#item">Item</a>
<a class="countMenuItem brand inlineBlock padding" href="#item">Lorem Ipsum</a>
<a class="countMenuItem brand inlineBlock padding" href="#item">Item</a>
<a class="countMenuItem brand inlineBlock padding" href="#item">Lorem Ipsum</a>
<a class="countMenuItem brand inlineBlock padding" href="#item">Item</a>
<a class="countMenuItem brand inlineBlock padding" href="#item">Lorem Ipsum</a>

`;

document.getElementsByClassName("idForRandomItemDemo")[0].innerHTML = lMenuItems;
document.getElementsByClassName("idForRandomItemDemo")[1].innerHTML = lMenuItems;
break;

  default:
lMenuItems = '';
document.getElementsByClassName("idForRandomItemDemo")[0].innerHTML = lMenuItems;
document.getElementsByClassName("idForRandomItemDemo")[1].innerHTML = lMenuItems;
}





}

}
