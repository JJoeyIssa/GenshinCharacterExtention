/*const Paimon = document.getElementById("Paimon1");
const Primo = document.getElementById("Primo1");
const Venti = document.getElementById("Venti1");
const Zhong = document.getElementById("Zhong1");
const Raiden = document.getElementById("Raiden1");
const Nahida = document.getElementById("Nahida1");


if (Paimon) {
    Paimon.addEventListener("click", changeImg('Paimon'));
}
if (Primo) {
    Primo.addEventListener("click", changeImg('Primo'));
}
if (Venti) {
    Venti.addEventListener("click", changeImg('Venti'));;
}
if (Zhong) {
    Zhong.addEventListener("click", changeImg('Zhong'));
}
if (Raiden) {
    Raiden.addEventListener("click", changeImg('Raiden'));
}
if (Nahida) {
    Nahida.addEventListener("click", changeImg('Nahida'));
}




function changeImg(string) {

    if (string == 'Paimon') {
       document.getElementById('character').src='/GenshinExtensionSprites/test.png';
       document.body.style.cursor = '/GenshinExtensionSprites/test.png';
    }

    else if (string == 'Primogem') {
        
        document.getElementById('character').src ='/GenshinExtensionSprites/test.png';
        document.body.style.cursor = '/GenshinExtensionSprites/test.png';
    }

    else if (string == 'Venti') {

       document.getElementById('character').src ='/GenshinExtensionSprites/128.png';
       document.body.style.cursor = '/GenshinExtensionSprites/test.png';
    }
    
    else if (string == 'Zhong') {

        document.getElementById('character').src ='/GenshinExtensionSprites/test.png';
        document.body.style.cursor = '/GenshinExtensionSprites/test.png';
    }
    
    else if (string == 'Raiden') {

        document.getElementById('character').src ='/GenshinExtensionSprites/raiden.png';
        document.body.style.cursor = '/GenshinExtensionSprites/raiden.png';
    }

}

*/

/*
var character = document.getElementById("character")

var showRaid = document.getElementById("Raiden");

        showRaid.onclick = function(){
               character.style.background = "url(/GenshinExtensionSprites/raiden.png)";
        }
*/            

var onOffButton = document.getElementById("onOffButton");
        onOffButton.onclick = function(){
           if (localStorage.ToneSet === "off") {
               onOffButton.style.background = "red";
               localStorage.ToneSet = "on";
            } else {
               onOffButton.style.background = "green";
               localStorage.ToneSet = "off";
            }
        }
            
    onOffButton.onclick()
       



