// elements corresponding to Buttons
const Paimon = document.getElementById("Paimon1");
const Childe = document.getElementById("Childe");
const Venti = document.getElementById("Venti1");
const Zhong = document.getElementById("Zhong1");
const Raiden = document.getElementById("Raiden1");
const Nahida = document.getElementById("Nahida1");

chrome.scripting.executeScript({
    target: {tabId: tab.id, allFrames: true},
    files: ['inject.js'],
    function: inject()
});


Paimon.onclick = function() {

    document.getElementById('character').src='/GenshinExtensionSprites/paimon.png';
    console.log("You Clicked Paimon");
    
    //sent a message to inject.js to run
    inject(paimon);

    document.getElementById('overlay').src='/GenshinExtensionSprites/paimon.png'; 
}
Childe.onclick = function() {

    document.getElementById('character').src='/GenshinExtensionSprites/childe.png';
    console.log("You Clicked Childe");

    //sent a message to inject.js to run
    inject(childe);

    document.getElementById('overlay').src='/GenshinExtensionSprites/childe.png';
}
Venti.onclick = function() {

    document.getElementById('character').src='/GenshinExtensionSprites/venti.png';
    console.log("You Clicked Venti");

    //sent a message to inject.js to run
    inject(venti);

    document.getElementById('overlay').src='/GenshinExtensionSprites/venti.png';
}
Zhong.onclick = function() {

    document.getElementById('character').src='/GenshinExtensionSprites/zhongli.png';
    console.log("You Clicked Zhong");

    //sent a message to background.js to run
    inject(zhong);

    document.getElementById('overlay').src='/GenshinExtensionSprites/zhongli.png';
}
Raiden.onclick = function() {

    document.getElementById('character').src='/GenshinExtensionSprites/raiden.png';
    console.log("You Clicked Raiden");

    inject(raiden);

    document.getElementById('overlay').src='/GenshinExtensionSprites/raiden.png';
}
Nahida.onclick = function() {

    document.getElementById('character').src='/GenshinExtensionSprites/nah.png';
    console.log("You Clicked Nahida");
    inject(nah);
    document.getElementById('overlay').src='/GenshinExtensionSprites/nah.png';
}

/*chrome.storage.local.get(["selection"], (result) => {
    const {selection} = result;

    if (selection) {
        
    }
}) */
