// _______
document.addEventListener("DOMContentLoaded", function () {
    // elements corresponding to Buttons
    const Paimon = document.getElementById("Paimon1");
    const Childe = document.getElementById("Childe");
    const Venti = document.getElementById("Venti1");
    const Zhong = document.getElementById("Zhong1");
    const Raiden = document.getElementById("Raiden1");
    const Nahida = document.getElementById("Nahida1");

  
    Paimon.addEventListener("click", async function () {
      await chrome.storage.sync.set({ button: "Paimon" });
      await chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        func: injectOverlay,
      });
    });

      
    Childe.addEventListener("click", async function () {
        await chrome.storage.sync.set({ button: "Childe" });
        await chrome.scripting.executeScript({
          target: {tabId: tabs[0].id},
          func: injectOverlay,
        });
      });

      
    Venti.addEventListener("click", async function () {
        await chrome.storage.sync.set({ button: "Venti" });
        await chrome.scripting.executeScript({
          target: {tabId: tabs[0].id},
          func: injectOverlay,
        });
    });

      
    Zhong.addEventListener("click", async function () {
        await chrome.storage.sync.set({ button: "Zhong" });
        await chrome.scripting.executeScript({
          target: {tabId: tabs[0].id},
          func: injectOverlay,
        });
      });

      
    Raiden.addEventListener("click", async function () {
        await chrome.storage.sync.set({ button: "Raiden" });
        await chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
          func: injectOverlay,
        });
    });
  
    Nahida.addEventListener("click", async function () {
      await chrome.storage.sync.set({ button: "Nahida" });
      await chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        func: injectOverlay,
      });
    });
  });
  
  function injectOverlay() {
    chrome.storage.sync.get("button", function (result) {
      if (result.button == "Paimon") {
        const underlay = document.createElement("div");
        document.getElementById('character').src='/GenshinExtensionSprites/paimon.png';
        underlay.style.backgroundImage.src =
        '/GenshinExtensionSprites/paimon.png';
        underlay.style.backgroundRepeat = "no-repeat";
        underlay.style.backgroundSize = "cover";
        underlay.style.position = "fixed";
        underlay.style.top = "0";
        underlay.style.left = "0";
        underlay.style.width = "100%";
        underlay.style.height = "100%";
        document.body.appendChild(underlay);
      } else if (result.button == "Childe") {
        const underlay = document.createElement("div");
        document.getElementById('character').src='/GenshinExtensionSprites/childe.png';
        underlay.style.backgroundImage.src =
        '/GenshinExtensionSprites/childe.png';
        underlay.style.backgroundRepeat = "no-repeat";
        underlay.style.backgroundSize = "cover";
        underlay.style.position = "fixed";
        underlay.style.top = "0";
        underlay.style.left = "0";
        underlay.style.width = "100%";
        underlay.style.height = "100%";
        document.body.appendChild(underlay);
      } else if (result.button == "Venti") {
        const underlay = document.createElement("div");
        document.getElementById('character').src='/GenshinExtensionSprites/venti.png';
        underlay.style.backgroundImage.src=
        '/GenshinExtensionSprites/childe.png';
        underlay.style.backgroundRepeat = "no-repeat";
        underlay.style.backgroundSize = "cover";
        underlay.style.position = "fixed";
        underlay.style.top = "0";
        underlay.style.left = "0";
        underlay.style.width = "100%";
        underlay.style.height = "100%";
        document.body.appendChild(underlay);
      } else if (result.button == "Zhong") {
        const underlay = document.createElement("div");
        document.getElementById('character').src='/GenshinExtensionSprites/zhongli.png';
        underlay.style.backgroundImage.src=
        '/GenshinExtensionSprites/zhongli.png';
        underlay.style.backgroundRepeat = "no-repeat";
        underlay.style.backgroundSize = "cover";
        underlay.style.position = "fixed";
        underlay.style.top = "0";
        underlay.style.left = "0";
        underlay.style.width = "100%";
        underlay.style.height = "100%";
        document.body.appendChild(underlay);
      } else if (result.button == "Raiden") {
        const underlay = document.createElement("div");
        document.getElementById('character').src='/GenshinExtensionSprites/raiden.png';
        underlay.style.backgroundImage.src=
        '/GenshinExtensionSprites/raiden.png';
        underlay.style.backgroundRepeat = "no-repeat";
        underlay.style.backgroundSize = "cover";
        underlay.style.position = "fixed";
        underlay.style.top = "0";
        underlay.style.left = "0";
        underlay.style.width = "100%";
        underlay.style.height = "100%";
        document.body.appendChild(underlay);
      } else if (result.button == "Nahida") {
        const underlay = document.createElement("div");
        document.getElementById('character').src='/GenshinExtensionSprites/nah.png';
        underlay.style.backgroundImage.src=
        '/GenshinExtensionSprites/nah.png';
        underlay.style.backgroundRepeat = "no-repeat";
        underlay.style.backgroundSize = "cover";
        underlay.style.position = "fixed";
        underlay.style.top = "0";
        underlay.style.left = "0";
        underlay.style.width = "100%";
        underlay.style.height = "100%";
        document.body.appendChild(underlay);
      }
    });
  }
  //________