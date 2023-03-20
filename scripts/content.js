/*var img = document.createElement('img');
img.id = "overlay";
img.className = "overlay";
*/

//remove scroll bar on extension
var styleElement = document.createElement('style');
    styleElement.id = 'remove-scroll-style';
    styleElement.textContent =
        'html::-webkit-scrollbar{display:none !important}' +
        'body::-webkit-scrollbar{display:none !important}';
    document.getElementsByTagName('body')[0].appendChild(styleElement);


//inject element (Image) onto page