// elements corresponding to Buttons
const Paimon = document.getElementById("Paimon1");
const Childe = document.getElementById("Childe");
const Venti = document.getElementById("Venti1");
const Zhong = document.getElementById("Zhong1");
const Raiden = document.getElementById("Raiden1");
const Nahida = document.getElementById("Nahida1");

Paimon.onclick = function() {
    console.log("You Clicked Paimon")
    document.getElementById('character').src='/GenshinExtensionSprites/paimon.png';
}
Childe.onclick = function() {
    console.log("You Clicked Childe")
    document.getElementById('character').src='/GenshinExtensionSprites/childe.png';
}
Venti.onclick = function() {
    console.log("You Clicked Venti")
    document.getElementById('character').src='/GenshinExtensionSprites/venti.png';
}
Zhong.onclick = function() {
    console.log("You Clicked Zhong")
    document.getElementById('character').src='/GenshinExtensionSprites/zhongli.png';
}
Raiden.onclick = function() {
    console.log("You Clicked Raiden")
    document.getElementById('character').src='/GenshinExtensionSprites/raiden.png';
}
Nahida.onclick = function() {
    console.log("You Clicked Nahida")
    document.getElementById('character').src='/GenshinExtensionSprites/nah.png';
}