README.md

About:  
Your URL website will open in a new tab.  

You need to enter your website URL address in the add-on options, and then this address will be opened whenever you press the "+" button to create a new tab (or Ctrl+T)  


Notice:  
· Makes a small delay.  
· Broken functionality: when selecting "Bookmarks Toolbar" -> "Only Show on New Tab" that not showing, because opened extension in the new tab make a redirect (creating a new tab) and immediately closed. One solution: Bookmarks Toolbar -> Always Show.  
· How it works: when you open a new tab, the extension tab creates a new tab with your website address and closes the current one (redirect)  
  
--
  
· main code:
<!-- code -->
```javascript
// second 2 redirect
//https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/Add_a_button_to_the_toolbar
browser.tabs.create({
url: rUrl
});
window.close();
//rUrl - redirect url
```

Screenshots:
![screenshot](screenshot.png)
![screenshot2](screenshot2.png)
![screenshot3](screenshot3.png)






