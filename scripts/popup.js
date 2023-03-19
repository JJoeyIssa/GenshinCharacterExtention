// elements corresponding to Buttons
const Paimon = document.getElementById("Paimon1");
const Childe = document.getElementById("Childe");
const Venti = document.getElementById("Venti1");
const Zhong = document.getElementById("Zhong1");
const Raiden = document.getElementById("Raiden1");
const Nahida = document.getElementById("Nahida1");

Paimon.onclick = function() {

    document.getElementById('character').src='/GenshinExtensionSprites/paimon.png';
    console.log("You Clicked Paimon");
    document.getElementById('overlay').src='/GenshinExtensionSprites/paimon.png'; 
}
Childe.onclick = function() {

    document.getElementById('character').src='/GenshinExtensionSprites/childe.png';
    onsole.log("You Clicked Childe");
    document.getElementById('overlay').src='/GenshinExtensionSprites/childe.png';
}
Venti.onclick = function() {

    document.getElementById('character').src='/GenshinExtensionSprites/venti.png';
    console.log("You Clicked Venti");
    document.getElementById('overlay').src='/GenshinExtensionSprites/venti.png';
}
Zhong.onclick = function() {

    document.getElementById('character').src='/GenshinExtensionSprites/zhongli.png';
    console.log("You Clicked Zhong");
    document.getElementById('overlay').src='/GenshinExtensionSprites/zhongli.png';
}
Raiden.onclick = function() {

    document.getElementById('character').src='/GenshinExtensionSprites/raiden.png';
    console.log("You Clicked Raiden");
    document.getElementById('overlay').src='/GenshinExtensionSprites/raiden.png';
}
Nahida.onclick = function() {

    document.getElementById('character').src='/GenshinExtensionSprites/nah.png';
    console.log("You Clicked Nahida");
    document.getElementById('overlay').src='/GenshinExtensionSprites/nah.png';
}

/*chrome.storage.local.get(["selection"], (result) => {
    const {selection} = result;

    if (selection) {
        
    }
}) */