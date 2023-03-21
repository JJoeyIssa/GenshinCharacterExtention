chrome.runtime.onMessage.addListerner(data => {
    switch (data.event) {
        case "Paimon":
            console.log("Change Background");
            document.getElementById('overlay').src='/GenshinExtensionSprites/paimon.png';
        case "Childe":
            console.log("Change Background");
            document.getElementById('overlay').src='/GenshinExtensionSprites/childe.png';
        case "Venti":
            console.log("Change Background");
            document.getElementById('overlay').src='/GenshinExtensionSprites/venti.png';
        case "Zhong":
            console.log("Change Background");
            document.getElementById('overlay').src='/GenshinExtensionSprites/zhongli.png';
        case "Raiden":
            console.log("Change Background");
            document.getElementById('overlay').src='/GenshinExtensionSprites/raiden.png';
        case "Nah":
            console.log("Change Background");
            document.getElementById('overlay').src='/GenshinExtensionSprites/nah.png';
                    
    }
})


//chrome.storage.local.set()
