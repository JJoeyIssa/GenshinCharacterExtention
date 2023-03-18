// elements corresponding to Buttons
const Paimon = document.getElementById("Paimon1");
const Childe = document.getElementById("Childe");
const Venti = document.getElementById("Venti1");
const Zhong = document.getElementById("Zhong1");
const Raiden = document.getElementById("Raiden1");
const Nahida = document.getElementById("Nahida1");

Paimon.onclick = function() {
    chrome.runtime.sendMessage({event: "Paimon"})
    console.log("You Clicked Paimon")
    document.getElementById('character').src='/GenshinExtensionSprites/paimon.png';
}
Childe.onclick = function() {
    chrome.runtime.sendMessage({event: "Childe"})
    console.log("You Clicked Childe")
    document.getElementById('character').src='/GenshinExtensionSprites/childe.png';
}
Venti.onclick = function() {
    chrome.runtime.sendMessage({event: "Venti"})
    console.log("You Clicked Venti")
    document.getElementById('character').src='/GenshinExtensionSprites/venti.png';
}
Zhong.onclick = function() {
    chrome.runtime.sendMessage({event: "Zhong"})
    console.log("You Clicked Zhong")
    document.getElementById('character').src='/GenshinExtensionSprites/zhongli.png';
}
Raiden.onclick = function() {
    chrome.runtime.sendMessage({event: "Raiden"})
    console.log("You Clicked Raiden")
    document.getElementById('character').src='/GenshinExtensionSprites/raiden.png';
}
Nahida.onclick = function() {
    chrome.runtime.sendMessage({event: "Nah"})
    console.log("You Clicked Nahida")
    document.getElementById('character').src='/GenshinExtensionSprites/nah.png';
}

/*chrome.storage.local.get(["selection"], (result) => {
    const {selection} = result;

    if (selection) {
        
    }
}) */