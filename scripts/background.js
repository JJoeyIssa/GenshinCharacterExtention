chrome.runtime.onMessage.addListerner(data => {
    switch (data.event) {
        case "Paimon":
            console.log("Change Background");
        case "Childe":
            console.log("Change Background");
        case "Venti":
            console.log("Change Background");
        case "Zhong":
            console.log("Change Background");
        case "Raiden":
            console.log("Change Background");
        case "Nah":
            console.log("Change Background");
                    
    }
})

//chrome.storage.local.set()
