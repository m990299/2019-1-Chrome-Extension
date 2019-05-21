
var count = -1;
function onLoad() {
	
	chrome.storage.local.get(['count'], function(result) {
		console.log(result.count);
		count = result.count;
		if(count != -1) {
			document.getElementById("count").innerText = count;
			console.log("send count to html");
		}
	});



window.onload = onLoad;