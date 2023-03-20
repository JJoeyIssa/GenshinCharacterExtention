# GenshinCharacterExtention
Having Fun with google extensions! 
## Goals
* Create a fun google extension that allows the user to see their favourite [Genshin Impact](https://genshin.hoyoverse.com/en/) Character on their active chrome webpage. 
* Learn how to inject code onto the active webpage using a Pop Out screen that lets the user select the specific character they want to see. 
* Learn how to store information either in a background script or storage to remember the selected character after the Pop Out screen is destroyed. 
## Challenges 
> CSP blocked an inline event handler in my HTML code since I used:  
```
<button onclick="myFunction()">Click me</button>
```
In chrome apps, [Content Security Policy](https://developer.chrome.com/extensions/contentSecurityPolicy) does not allow inline javascript. So I had to put my javascript in a .js file and include it in my HTML.
## Tutorials Used
* [Content Scripts, Pop Out, New Tab & Background Page](https://youtu.be/m9mTzpRnOqE). 
* [Saving and retrieving data in the background](https://youtu.be/dFVxUrd1wzA). 
## How to Use

