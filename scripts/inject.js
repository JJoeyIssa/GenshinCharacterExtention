(function inject(name) {

	alert("this is running");

	// just place a div at top right
	var div = document.createElement("DIV");
	div.id = "positon";
	var img = document.createElement('IMG');
	img.style.position = 'fixed';
    img.className = "overlay";
	img.src = "/GenshinExtensionSprites/venti.png";
	
	// set the image on popup button press
	if (name = paimon) {
		img.src = "/GenshinExtensionSprites/paimon.png";
	}
	else if (name = childe) {
		img.src = "/GenshinExtensionSprites/childe.png";

	}
	else if (name = venti) {
		img.src = "/GenshinExtensionSprites/venti.png";

	}
	else if (name = zhong) {
		img.src = "/GenshinExtensionSprites/zhongli.png";

	}
	else if (name = raiden) {
		img.src = "/GenshinExtensionSprites/raiden.png";

	}
	else if (name = nah) {
		img.src = "/GenshinExtensionSprites/nah.png";

	}
	else {
		img.src = "/GenshinExtensionSprites/venti.png";
	}
	div.appendChild(img);
	document.body.appendChild(div);

	//alert('Transforming...');

})();