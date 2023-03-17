//Track mouse movement 
document.getElementById("Paimon").addEventListener("click", changeImg(Paimon));
document.getElementById("Primo").addEventListener("click", changeImg(Primogem));
document.getElementById("Venti").addEventListener("click", changeImg(Venti));
document.getElementById("Zhong").addEventListener("click", changeImg(Zhongli));
document.getElementById("Raiden").addEventListener("click", changeImg(Raiden));
document.getElementById("Nahida").addEventListener("click", changeImg(Nahida));

function changeImg(string) {

    if (string == Paimon) {
        document.getElementById('character').src='/GenshinExtensionSprites/test.png';
    }

    else if (string == Primogem) {
        
        document.getElementById('character').src ='/GenshinExtensionSprites/test.png';
    }

    else if (string == Venti) {

        document.getElementById('character').src ='/GenshinExtensionSprites/128.png';
        
    }
    
    else if (string == Zhongli) {

        document.getElementById('character').src ='/GenshinExtensionSprites/test.png';
        
    }
    
    else if (string == Raiden) {

        document.getElementById('character').src ='/GenshinExtensionSprites/test.png';
        
    }

}


