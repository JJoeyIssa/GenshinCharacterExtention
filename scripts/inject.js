(function inject() {

	// just place a div at top right
	var div = document.createElement("DIV");
	div.id = "positon";
	var img = document.createElement('IMG');
	img.style.position = 'fixed';
	//img.style.top = 0;
	//img.style.right = 0;
    img.className = "overlay";
	img.src = "/GenshinExtensionSprites/venti.png";
	div.appendChild(img);
	document.body.appendChild(div);

	//alert('Transforming...');

})();