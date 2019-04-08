function removeHref() {
	var element1 = document.getElementsByClassName("wiki-link-internal");
	var element2 = document.getElementsByClassName("wiki-link-external");
	var num = element1.length + element2.length;


	for(var i = 0; i < element1.length; i++) {
		element1[i].removeAttribute("href");
		console.log("internal link remove");
	}
	for(var i = 0; i < element2.length; i++) {
		element2[i].removeAttribute("href");
		console.log("external link remove");
	}

	chrome.runtime.sendMessage({elements_num : num});


}


removeHref(document);
