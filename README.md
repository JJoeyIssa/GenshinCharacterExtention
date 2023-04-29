# GenshinCharacterExtention
Having Fun with google extensions! 
# 0.02
Currently finished. Might go back later and add more characters or make it more interactive, but for now, I've completed my goal of working with extensions. Bonus: I found some cool tools and learnt new methods of implementation that I will use for future projects. 
## Goals
* Create a fun google extension that takes the user directly to their favourite [Genshin Impact](https://genshin.hoyoverse.com/en/) Character's fandom page from any of their active chrome webpages. 
* Learn how to inject code onto the active webpage using a Pop Out screen that lets the user select the specific character they want to see. [Done!]
* Learn how to store information either in a background script or storage to remember the selected character after the Pop Out screen is destroyed. [Done!]
## Challenges 
 CSP blocked an inline event handler in my HTML code since I used:  
```
<button onclick="myFunction()">Click me</button>
```
 In chrome apps, [Content Security Policy](https://developer.chrome.com/extensions/contentSecurityPolicy) does not allow inline javascript. So I had to put my javascript in a .js file and include it in my HTML.
## Tutorials Used
* [Content Scripts, Pop Out, New Tab & Background Page](https://youtu.be/m9mTzpRnOqE). 
* [Saving and retrieving data in the background](https://youtu.be/dFVxUrd1wzA). 

## How to Use
**1. Download all Files**

**2. Navigate to Manage Extentions**

Click the Puzzel Piece Located at the top right corner of your chrome webpage

![Puzzel Peice](https://miro.medium.com/v2/resize:fit:1000/0*7ftPt1OUoJMOqjXN)

Navigate down to "Manage Extensions"

![Manage Extensions](https://media.idownloadblog.com/wp-content/uploads/2023/01/See-installed-Chrome-extensions.png)

On the top right corner, turn on Developer Mode, then click on "Load Unpacked", and selected your downloaded files.

![Developer Mode](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/iYdLKFsJ1KSVGLhbLRvS.png?auto=format)



### If Stuck..
Make sure that the Manifest.js is visible and not located inside any other file apart from the one initially clicked on.

# Enjoy!


