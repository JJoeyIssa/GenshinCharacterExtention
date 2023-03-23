(function inject() {

	// just place a div at top right
	var img = document.createElement('img');
	img.style.position = 'fixed';
	//img.style.top = 0;
	//img.style.right = 0;
    img.className = "overlay";
	img.src = "/GenshinExtensionSprites/nah.png";
	document.body.appendChild(img);

	alert('Transforming...');

})();