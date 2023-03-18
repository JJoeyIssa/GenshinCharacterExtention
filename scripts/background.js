/*chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {createDiv: {width: "100px", height: "100px", innerHTML: "Hello"}}, function(response) {
        console.log(response.confirmation);
    });
});

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.requested == "createDiv"){
            //Code to create the div
            sendResponse({confirmation: "Successfully created div"});
        }
    });
    */
