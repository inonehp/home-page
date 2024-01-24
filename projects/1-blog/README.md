README.md

<!-- v.1.0.1 -->

# Micro Blog JS function using JSON data in JavaScript variable. (id, list of tags, search).   

#### 1. JSON data format (in JS file), * For small data files, up to 2 megabytes:   
```javascript

var blogJsonVar = 
[
    {
        "id": 251,
        "text": "test2 text2",
        "url": "https:\/\/test2.com",
        "tag": "#test2 #tag",
        "time": 1671480576
    },
    {
        "id": 250,
        "text": "test text",
        "url": "https:\/\/test.com",
        "tag": "#test #tag",
        "time": 1668444918
    }
]

```


#### 2. Install or how using:
```javascript

<div id="echoBlog"></div>

<script async src="script.js" onload="blog('echoBlog', blogJsonVar, 'post', './', '')"></script>
```

or  

```javascript

<div id="echoBlog"></div>

<<script src="nameJsonVar.js"></script>
<script src="script.js"></script>

<style>
/*.blogContent .pre { font-size: 1em; /*text-transform: capitalize;*/ }
.blogContent .pre a { text-transform: none; }*/
</style>

<script>
let blogConfig = {
"postLimit":"", // number
"embedStatus":"", // off
"multiEmbedStatus":"", // on
"tagListStatus":"", // off
"tagListLimit":"", // number
"targetOption":"", // blank
"bottomMsg":"", // text
"display":"", // grid
"timeStatus":"", // off
};
</script>

<script>
blog("echoBlog", nameJsonVar, 'post', './', blogConfig);
</script>

```

#### 3. Short explain:  
echoBlog - printId - div id where print blog  
blogJsonVar - jsonVar - json in JavaSript variable  
// other  
post - postClass - CSS class name for post.  
embedStatus - If off, not showing embed, only link.  
tagListStatus - If off, not showing tags and navigation, only posts.  
postLimit - How many post showing on page.  
scriptDir - For tag location link, if run script on other location.  
multiEmbedStatus - If on, working multi embed, default single embed.  
tagListLimit - How many tag showing in taglist.  
targetOption - If "blank" open link in new tab.  
timeStatus - If off, without post time.  


#### 4. Screenshot  (short)
![screenshot](screenshot.png)


