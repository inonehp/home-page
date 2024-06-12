
var notesJsonVar = 

[
    {
        "id": "40",
        "text": "Document: DOMContentLoaded event - Web APIs | MDN",
        "text2": "addEventListener(\"DOMContentLoaded\", (event) => {});",
        "text3": "",
        "url": "https:\/\/developer.mozilla.org\/en-US\/docs\/Web\/API\/Document\/DOMContentLoaded_event",
        "tag": "#code #JS",
        "time": 1717668413,
        "rightFooter": "<a class=\"brand\" href=\"\/notes.html?id=40\">id<\/a>"
    },
    {
        "id": "39",
        "text": "How To Add a Class Name",
        "text2": "function myFunction() {\r\n  var element = document.getElementById(\"myDIV\");\r\n  element.classList.add(\"mystyle\");\r\n}",
        "text3": "",
        "url": "https:\/\/www.w3schools.com\/howto\/howto_js_add_class.asp",
        "tag": "#JavaScript #coding #code",
        "time": 1717666815,
        "rightFooter": "<a class=\"brand\" href=\"\/notes.html?id=39\">id<\/a>"
    },
    {
        "id": "38",
        "text": "do...while - JavaScript | MDN",
        "text2": "let result = '';\r\nlet i = 0;\r\n\r\ndo {\r\n  i = i + 1;\r\n  result = result + i;\r\n} while (i < 5);\r\n\r\nconsole.log(result);\r\n\/\/ Expected output: \"12345\"\r\n\r\n===",
        "text3": "",
        "url": "https:\/\/developer.mozilla.org\/en-US\/docs\/Web\/JavaScript\/Reference\/Statements\/do...while",
        "tag": "#code #coding #JavaScript",
        "time": 1717663309,
        "rightFooter": "<a class=\"brand\" href=\"\/notes.html?id=38\">id<\/a>"
    },
    {
        "id": "37",
        "text": ":root - CSS: Cascading Style Sheets | MDN",
        "text2": "\/* Selects the root element of the document:\r\n   <html> in the case of HTML *\/\r\n:root {\r\n  background: yellow;\r\n}\r\n\r\n===\r\n\r\n:root {\r\n  --main-color: hotpink;\r\n  --pane-padding: 5px 42px;\r\n}",
        "text3": "",
        "url": "https:\/\/developer.mozilla.org\/en-US\/docs\/Web\/CSS\/:root",
        "tag": "#code #CSS",
        "time": 1717661687,
        "rightFooter": "<a class=\"brand\" href=\"\/notes.html?id=37\">id<\/a>"
    },
    {
        "id": "36",
        "text": "Python For Loops",
        "text2": "fruits = [\"apple\", \"banana\", \"cherry\"]\r\nfor x in fruits:\r\n  print(x)\r\n\r\n===\r\n\r\nfruits = [\"apple\", \"banana\", \"cherry\"]\r\nfor x in fruits:\r\n  print(x)\r\n  if x == \"banana\":\r\n    break\r\n\r\n===\r\nfruits = [\"apple\", \"banana\", \"cherry\"]\r\nfor x in fruits:\r\n  if x == \"banana\":\r\n    break\r\n  print(x)",
        "text3": "",
        "url": "https:\/\/www.w3schools.com\/python\/python_for_loops.asp",
        "tag": "#coding #python",
        "time": 1717650888,
        "rightFooter": "<a class=\"brand\" href=\"\/notes.html?id=36\">id<\/a>"
    },
    {
        "id": "35",
        "text": "Python Functions",
        "text2": "def my_function(fname):\r\n  print(fname + \" Refsnes\")\r\n\r\nmy_function(\"Emil\")\r\nmy_function(\"Tobias\")\r\nmy_function(\"Linus\")",
        "text3": "",
        "url": "https:\/\/www.w3schools.com\/python\/python_functions.asp",
        "tag": "#coding #python",
        "time": 1717650246,
        "rightFooter": "<a class=\"brand\" href=\"\/notes.html?id=35\">id<\/a>"
    },
    {
        "id": "34",
        "text": "Function - JavaScript | MDN",
        "text2": "\/\/ Create a global property with `var`\r\nvar x = 10;\r\n\r\nfunction createFunction1() {\r\n  const x = 20;\r\n  return new Function(\"return x;\"); \/\/ this `x` refers to global `x`\r\n}\r\n\r\nfunction createFunction2() {\r\n  const x = 20;\r\n  function f() {\r\n    return x; \/\/ this `x` refers to the local `x` above\r\n  }\r\n  return f;\r\n}\r\n\r\nconst f1 = createFunction1();\r\nconsole.log(f1()); \/\/ 10\r\nconst f2 = createFunction2();\r\nconsole.log(f2()); \/\/ 20",
        "text3": "",
        "url": "https:\/\/developer.mozilla.org\/en-US\/docs\/Web\/JavaScript\/Reference\/Global_Objects\/Function",
        "tag": "#JavaScript #JS #code #coding",
        "time": 1717643982,
        "rightFooter": "<a class=\"brand\" href=\"\/notes.html?id=34\">id<\/a>"
    },
    {
        "id": "33",
        "text": "if...else - JavaScript | MDN",
        "text2": "function testNum(a) {\r\n  let result;\r\n  if (a > 0) {\r\n    result = 'positive';\r\n  } else {\r\n    result = 'NOT positive';\r\n  }\r\n  return result;\r\n}\r\n\r\nconsole.log(testNum(-5));\r\n\/\/ Expected output: \"NOT positive\"\r\n\r\n===\r\n\r\nx = y;\r\nif (x) {\r\n  \/\/ \u2026\r\n}",
        "text3": "",
        "url": "https:\/\/developer.mozilla.org\/en-US\/docs\/Web\/JavaScript\/Reference\/Statements\/if...else",
        "tag": "#code #JavaScript",
        "time": 1715214777,
        "rightFooter": "<a class=\"brand\" href=\"\/notes.html?id=33\">id<\/a>"
    },
    {
        "id": "32",
        "text": "Array.prototype.indexOf() - JavaScript | MDN",
        "text2": "const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];\r\n\r\nconsole.log(beasts.indexOf('bison'));\r\n\/\/ Expected output: 1\r\n\r\n\/\/ Start from index 2\r\nconsole.log(beasts.indexOf('bison', 2));\r\n\/\/ Expected output: 4\r\n\r\nconsole.log(beasts.indexOf('giraffe'));\r\n\/\/ Expected output: -1",
        "text3": "",
        "url": "https:\/\/developer.mozilla.org\/en-US\/docs\/Web\/JavaScript\/Reference\/Global_Objects\/Array\/indexOf",
        "tag": "#code #JavaScript",
        "time": 1714813827,
        "rightFooter": "<a class=\"brand\" href=\"\/notes.html?id=32\">id<\/a>"
    },
    {
        "id": "31",
        "text": "Window: localStorage property - Web APIs | MDN",
        "text2": "localStorage.setItem(\"myCat\", \"Tom\");\r\nconst cat = localStorage.getItem(\"myCat\");\r\nlocalStorage.removeItem(\"myCat\");\r\nlocalStorage.clear();",
        "text3": "",
        "url": "https:\/\/developer.mozilla.org\/en-US\/docs\/Web\/API\/Window\/localStorage",
        "tag": "#code #coding #JavaScript #JS",
        "time": 1714812463,
        "rightFooter": "<a class=\"brand\" href=\"\/notes.html?id=31\">id<\/a>"
    },
    {
        "id": "30",
        "text": "Using the Web Storage API - Web APIs | MDN",
        "text2": "if (storageAvailable(\"localStorage\")) {\r\n  \/\/ Yippee! We can use localStorage awesomeness\r\n} else {\r\n  \/\/ Too bad, no localStorage for us\r\n}",
        "text3": "",
        "url": "https:\/\/developer.mozilla.org\/en-US\/docs\/Web\/API\/Web_Storage_API\/Using_the_Web_Storage_API",
        "tag": "#coding #code #JavaScript #JS",
        "time": 1714812424,
        "rightFooter": "<a class=\"brand\" href=\"\/notes.html?id=30\">id<\/a>"
    },
    {
        "id": "29",
        "text": "Array.prototype.reduce() - JavaScript | MDN",
        "text2": "const array1 = [1, 2, 3, 4];\r\n\r\n\/\/ 0 + 1 + 2 + 3 + 4\r\nconst initialValue = 0;\r\nconst sumWithInitial = array1.reduce(\r\n  (accumulator, currentValue) => accumulator + currentValue,\r\n  initialValue,\r\n);\r\n\r\nconsole.log(sumWithInitial);\r\n\/\/ Expected output: 10\r\n\r\n===\r\n\r\nconst getMax = (a, b) => Math.max(a, b);\r\n\r\n\/\/ callback is invoked for each element in the array starting at index 0\r\n[1, 100].reduce(getMax, 50); \/\/ 100\r\n[50].reduce(getMax, 10); \/\/ 50\r\n\r\n\/\/ callback is invoked once for element at index 1\r\n[1, 100].reduce(getMax); \/\/ 100\r\n\r\n\/\/ callback is not invoked\r\n[50].reduce(getMax); \/\/ 50\r\n[].reduce(getMax, 1); \/\/ 1\r\n\r\n[].reduce(getMax); \/\/ TypeError",
        "text3": "",
        "url": "https:\/\/developer.mozilla.org\/en-US\/docs\/Web\/JavaScript\/Reference\/Global_Objects\/Array\/reduce",
        "tag": "#code #JavaScript #JS",
        "time": 1714626528,
        "rightFooter": "<a class=\"brand\" href=\"\/notes.html?id=29\">id<\/a>"
    },
    {
        "id": "28",
        "text": "Array.prototype.filter() - JavaScript | MDN",
        "text2": "const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];\r\n\r\nconst result = words.filter((word) => word.length > 6);\r\n\r\nconsole.log(result);\r\n\/\/ Expected output: Array [\"exuberant\", \"destruction\", \"present\"]",
        "text3": "",
        "url": "https:\/\/developer.mozilla.org\/en-US\/docs\/Web\/JavaScript\/Reference\/Global_Objects\/Array\/filter",
        "tag": "#code #JavaScript #JS",
        "time": 1714625890,
        "rightFooter": "<a class=\"brand\" href=\"\/notes.html?id=28\">id<\/a>"
    },
    {
        "id": "27",
        "text": "Window: blur event - Web APIs | MDN",
        "text2": "addEventListener(\"blur\", (event) => {});\r\n\r\nonblur = (event) => {};",
        "text3": "",
        "url": "https:\/\/developer.mozilla.org\/en-US\/docs\/Web\/API\/Window\/blur_event",
        "tag": "",
        "time": 1714550159,
        "rightFooter": "<a class=\"brand\" href=\"\/notes.html?id=27\">id<\/a>"
    },
    {
        "id": "26",
        "text": "Window: focus event - Web APIs | MDN",
        "text2": "addEventListener(\"focus\", (event) => {});\r\n\r\nonfocus = (event) => {};",
        "text3": "",
        "url": "https:\/\/developer.mozilla.org\/en-US\/docs\/Web\/API\/Window\/focus_event",
        "tag": "#code #JavaScript #JS",
        "time": 1714550125,
        "rightFooter": "<a class=\"brand\" href=\"\/notes.html?id=26\">id<\/a>"
    },
    {
        "id": "25",
        "text": "CSS Default Browser Values for HTML Elements",
        "text2": "",
        "text3": "",
        "url": "https:\/\/www.w3schools.com\/cssref\/css_default_values.php",
        "tag": "#CSS #code",
        "time": 1714534030,
        "rightFooter": "<a class=\"brand\" href=\"\/notes.html?id=25\">id<\/a>"
    },
    {
        "id": "23",
        "text": "Array.prototype.map() - JavaScript | MDN",
        "text2": "const array1 = [1, 4, 9, 16];\r\n\r\n\/\/ Pass a function to map\r\nconst map1 = array1.map((x) => x * 2);\r\n\r\nconsole.log(map1);\r\n\/\/ Expected output: Array [2, 8, 18, 32]\r\n\r\n===\r\n\r\nconst numbers = [1, 4, 9];\r\nconst roots = numbers.map((num) => Math.sqrt(num));\r\n\r\n\/\/ roots is now     [1, 2, 3]\r\n\/\/ numbers is still [1, 4, 9]\r\n\r\n===\r\n\r\nconst kvArray = [\r\n  { key: 1, value: 10 },\r\n  { key: 2, value: 20 },\r\n  { key: 3, value: 30 },\r\n];\r\n\r\nconst reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));\r\n\r\nconsole.log(reformattedArray); \/\/ [{ 1: 10 }, { 2: 20 }, { 3: 30 }]\r\nconsole.log(kvArray);\r\n\/\/ [\r\n\/\/   { key: 1, value: 10 },\r\n\/\/   { key: 2, value: 20 },\r\n\/\/   { key: 3, value: 30 }\r\n\/\/ ]",
        "text3": "",
        "url": "https:\/\/developer.mozilla.org\/en-US\/docs\/Web\/JavaScript\/Reference\/Global_Objects\/Array\/map",
        "tag": "",
        "time": 1714080415,
        "rightFooter": "<a class=\"brand\" href=\"\/notes.html?id=23\">id<\/a>"
    },
    {
        "id": "22",
        "text": "Array: length - JavaScript | MDN",
        "text2": "const clothing = ['shoes', 'shirts', 'socks', 'sweaters'];\r\n\r\nconsole.log(clothing.length);\r\n\/\/ Expected output: 4",
        "text3": "",
        "url": "https:\/\/developer.mozilla.org\/en-US\/docs\/Web\/JavaScript\/Reference\/Global_Objects\/Array\/length",
        "tag": "#code #JavaScript #JS",
        "time": 1714022740,
        "rightFooter": "<a class=\"brand\" href=\"\/notes.html?id=22\">id<\/a>"
    },
    {
        "id": "21",
        "text": "Math.random() - JavaScript | MDN",
        "text2": "function getRandomInt(max) {\r\n  return Math.floor(Math.random() * max);\r\n}",
        "text3": "",
        "url": "https:\/\/developer.mozilla.org\/en-US\/docs\/Web\/JavaScript\/Reference\/Global_Objects\/Math\/random",
        "tag": "#code #JavaScript #JS",
        "time": 1713950256,
        "rightFooter": "<a class=\"brand\" href=\"\/notes.html?id=21\">id<\/a>"
    },
    {
        "id": "20",
        "text": "Storage: getItem() method - Web APIs | MDN",
        "text2": "const currentColor = localStorage.getItem(\"bgcolor\");",
        "text3": "",
        "url": "https:\/\/developer.mozilla.org\/en-US\/docs\/Web\/API\/Storage\/getItem",
        "tag": "#JavaScript #code #coding #JS",
        "time": 1713949517,
        "rightFooter": "<a class=\"brand\" href=\"\/notes.html?id=20\">id<\/a>"
    },
    {
        "id": "19",
        "text": "Storage: setItem() method - Web APIs | MDN",
        "text2": "localStorage.setItem(\"bgcolor\", \"red\");",
        "text3": "",
        "url": "https:\/\/developer.mozilla.org\/en-US\/docs\/Web\/API\/Storage\/setItem",
        "tag": "#JS #JavaScript #code #coding",
        "time": 1713949471,
        "rightFooter": "<a class=\"brand\" href=\"\/notes.html?id=19\">id<\/a>"
    },
    {
        "id": "18",
        "text": "switch - JavaScript | MDN",
        "text2": "const expr = 'Papayas';\r\n\r\nswitch (expr) {\r\n\r\ncase 'Oranges':\r\nconsole.log('Oranges are $0.59 a pound.');\r\nbreak;\r\n\r\ncase 'Mangoes':\r\ncase 'Papayas':\r\nconsole.log('Mangoes and papayas are $2.79 a pound.');\r\n\/\/ Expected output: \"Mangoes and papayas are $2.79 a pound.\"\r\nbreak;\r\n\r\ndefault:\r\nconsole.log(`Sorry, we are out of ${expr}.`);\r\n}",
        "text3": "",
        "url": "https:\/\/developer.mozilla.org\/en-US\/docs\/Web\/JavaScript\/Reference\/Statements\/switch",
        "tag": "#code #coding #JavaScript #JS",
        "time": 1713949190,
        "rightFooter": "<a class=\"brand\" href=\"\/notes.html?id=18\">id<\/a>"
    },
    {
        "id": "17",
        "text": "Coding conventions - Wikipedia",
        "text2": "",
        "text3": "",
        "url": "https:\/\/en.wikipedia.org\/wiki\/Coding_conventions",
        "tag": "#coding #rule",
        "time": 1713052551,
        "rightFooter": "<a class=\"brand\" href=\"\/notes.html?id=17\">id<\/a>"
    },
    {
        "id": "16",
        "text": "JavaScript Style Guide",
        "text2": "",
        "text3": "",
        "url": "https:\/\/www.w3schools.com\/js\/js_conventions.asp",
        "tag": "#JavaScript #coding #rule",
        "time": 1713052475,
        "rightFooter": "<a class=\"brand\" href=\"\/notes.html?id=16\">id<\/a>"
    },
    {
        "id": "15",
        "text": "Document: querySelectorAll() method - Web APIs | MDN",
        "text2": "document.querySelectorAll(\"p, div.note, div.alert\");",
        "text3": "",
        "url": "https:\/\/developer.mozilla.org\/en-US\/docs\/Web\/API\/Document\/querySelectorAll",
        "tag": "#code #HTML",
        "time": 1712539368,
        "rightFooter": "<a class=\"brand\" href=\"\/notes.html?id=15\">id<\/a>"
    },
    {
        "id": "14",
        "text": "<input type=\"reset\"> - HTML: HyperText Markup Language | MDN",
        "text2": "<input type=\"reset\">",
        "text3": "",
        "url": "https:\/\/developer.mozilla.org\/en-US\/docs\/Web\/HTML\/Element\/input\/reset",
        "tag": "#HTML #code",
        "time": 1712538187,
        "rightFooter": "<a class=\"brand\" href=\"\/notes.html?id=14\">id<\/a>"
    },
    {
        "id": "13",
        "text": "PHP: json_decode - Manual",
        "text2": "$json = '{\"a\":1,\"b\":2,\"c\":3,\"d\":4,\"e\":5}';\r\n\r\njson_decode($json);\r\njson_decode($json, true);",
        "text3": "",
        "url": "https:\/\/www.net\/manual\/en\/function.json-decode",
        "tag": "#code #PHP",
        "time": 1712480476,
        "rightFooter": "<a class=\"brand\" href=\"\/notes.html?id=13\">id<\/a>"
    },
    {
        "id": "11",
        "text": "How do I use the Firefox spell checker? | Firefox Help",
        "text2": "",
        "text3": "",
        "url": "https:\/\/support.mozilla.org\/en-US\/kb\/how-do-i-use-firefox-spell-checker#w_adding-dictionaries",
        "tag": "#fix",
        "time": 1711811445,
        "rightFooter": "<a class=\"brand\" href=\"\/notes.html?id=11\">id<\/a>"
    },
    {
        "id": "10",
        "text": "Web Speech API",
        "text2": "",
        "text3": "",
        "url": "https:\/\/wicg.github.io\/speech-api\/",
        "tag": "#WebDesign #code #JavaScript #STT",
        "time": 1711739916,
        "rightFooter": "<a class=\"brand\" href=\"\/notes.html?id=10\">id<\/a>"
    },
    {
        "id": "9",
        "text": "Web Design notes",
        "text2": "Notes:\r\n=====\r\n\r\n- Do not use emojis (emoji can have a double meaning and are difficult to read)\r\n- Don't use duplicate content (license conflict)\r\n- Name uppercase (grammar)\r\n- Spaces in JavaScript for if and else\r\n- Use standard font sizes (16px, 1em, 14px because non-standard (13.4px etc) are not suitable for CSS properties such as small, smaller)\r\n\r\nJavaScript\r\nclassList - added class with delay, use style",
        "text3": "",
        "url": "",
        "tag": "#WebDesign #notes",
        "time": 1711727102,
        "rightFooter": "<a class=\"brand\" href=\"\/notes.html?id=9\">id<\/a>"
    },
    {
        "id": "8",
        "text": "Map - JavaScript | MDN",
        "text2": "const map1 = new Map();\r\n\r\nmap1.set('a', 1);\r\nmap1.set('b', 2);\r\nmap1.set('c', 3);\r\n\r\nconsole.log(map1.get('a'));\r\n\/\/ Expected output: 1\r\n\r\nmap1.set('a', 97);\r\n\r\nconsole.log(map1.get('a'));\r\n\/\/ Expected output: 97\r\n\r\nconsole.log(map1.size);\r\n\/\/ Expected output: 3\r\n\r\nmap1.delete('b');\r\n\r\nconsole.log(map1.size);\r\n\/\/ Expected output: 2\r\n\r\n===\r\n\r\nconst myMap = new Map();\r\nmyMap.set(0, \"zero\");\r\nmyMap.set(1, \"one\");\r\n\r\nfor (const [key, value] of myMap) {\r\n  console.log(`${key} = ${value}`);\r\n}\r\n\/\/ 0 = zero\r\n\/\/ 1 = one\r\n\r\nfor (const key of myMap.keys()) {\r\n  console.log(key);\r\n}\r\n\/\/ 0\r\n\/\/ 1\r\n\r\nfor (const value of myMap.values()) {\r\n  console.log(value);\r\n}\r\n\/\/ zero\r\n\/\/ one\r\n\r\nfor (const [key, value] of myMap.entries()) {\r\n  console.log(`${key} = ${value}`);\r\n}\r\n\/\/ 0 = zero\r\n\/\/ 1 = one\r\n\r\n\r\n===\r\n\r\nmyMap.forEach((value, key) => {\r\n  console.log(`${key} = ${value}`);\r\n});\r\n\/\/ 0 = zero\r\n\/\/ 1 = one",
        "text3": "",
        "url": "https:\/\/developer.mozilla.org\/en-US\/docs\/Web\/JavaScript\/Reference\/Global_Objects\/Map",
        "tag": "#code #JavaScript",
        "time": 1711625173,
        "rightFooter": "<a class=\"brand\" href=\"\/notes.html?id=8\">id<\/a>"
    },
    {
        "id": "7",
        "text": "English alphabet - Wikipedia",
        "text2": "A a B b C c D d E e F f G g H h I i J j K k L l M m N n O o P p Q q R r S s T t U u V v W w X x Y y Z z\r\n\r\n====\r\n\r\nAaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz",
        "text3": "",
        "url": "https:\/\/en.wikipedia.org\/wiki\/English_alphabet",
        "tag": "#text #alphabet",
        "time": 1711620434,
        "rightFooter": "<a class=\"brand\" href=\"\/notes.html?id=7\">id<\/a>"
    },
    {
        "id": "6",
        "text": "Node: textContent property - Web APIs | MDN",
        "text2": "document.getElementById(\"test\").textContent = \"test\";\r\ndocument.getElementById(\"test\").textContent = decodeURIComponent(\"test\");",
        "text3": "",
        "url": "https:\/\/developer.mozilla.org\/en-US\/docs\/Web\/API\/Node\/textContent",
        "tag": "#code #JavaScript",
        "time": 1711610799,
        "rightFooter": "<a class=\"brand\" href=\"\/notes.html?id=6\">id<\/a>"
    },
    {
        "id": "5",
        "text": "Displaying the result in JavaScript",
        "text2": "document.getElementById(\"id\").innerHTML = 'Test';\r\ndocument.getElementsByTagName(\"body\")[0].innerHTML = 'Test';\r\ndocument.getElementsByClassName(\"className\")[0].innerHTML = 'Test;\r\n[0] - first element\r\n\r\n\r\nSource:\r\nhttps:\/\/developer.mozilla.org\/en-US\/docs\/Web\/API\/Document\/getElementById",
        "text3": "",
        "url": "",
        "tag": "#code #JavaScript",
        "time": 1711560138,
        "rightFooter": "<a class=\"brand\" href=\"\/notes.html?id=5\">id<\/a>"
    },
    {
        "id": "4",
        "text": "Debug in CSS, and JavaScript.",
        "text2": "Debug in CSS:\r\n----------------------\r\n\r\n.className { border: 1px solid red; }`  \r\n\r\n\r\nDebug in JavaScript:\r\n--------------------------------\r\n\r\nalert(\"Hello World!\");\r\nconsole.log(\"Hello World!\");  \r\nconsole.table(\"Hello World!\"); - (if the previous one doesn't work (object))",
        "text3": "",
        "url": "",
        "tag": "#code #JavaScript #CSS",
        "time": 1711560076,
        "rightFooter": "<a class=\"brand\" href=\"\/notes.html?id=4\">id<\/a>"
    },
    {
        "id": "3",
        "text": "Element: innerHTML property - Web APIs | MDN",
        "text2": "document.getElementById(\"test\").innerHTML = \"Hello!\";",
        "text3": "",
        "url": "https:\/\/developer.mozilla.org\/en-US\/docs\/Web\/API\/Element\/innerHTML",
        "tag": "#code #JavaScript",
        "time": 1711559749,
        "rightFooter": "<a class=\"brand\" href=\"\/notes.html?id=3\">id<\/a>"
    },
    {
        "id": "2",
        "text": "Document: getElementById() method - Web APIs | MDN",
        "text2": "const elem = document.getElementById(\"test\");\r\nelem.style.innerHTML = \"test\";",
        "text3": "",
        "url": "https:\/\/developer.mozilla.org\/en-US\/docs\/Web\/API\/Document\/getElementById",
        "tag": "#code #JavaScript",
        "time": 1711558357,
        "rightFooter": "<a class=\"brand\" href=\"\/notes.html?id=2\">id<\/a>"
    },
    {
        "id": "1",
        "text": "Array.prototype.forEach() - JavaScript | MDN",
        "text2": "arr.forEach((val, index) => {\r\nconsole.log(val + \"=\" + index);\r\n});",
        "text3": "",
        "url": "https:\/\/developer.mozilla.org\/en-US\/docs\/Web\/JavaScript\/Reference\/Global_Objects\/Array\/forEach",
        "tag": "#JavaScript #code",
        "time": 1711556664,
        "rightFooter": "<a class=\"brand\" href=\"\/notes.html?id=1\">id<\/a>"
    }
]
