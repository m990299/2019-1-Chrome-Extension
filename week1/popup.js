

var count2 = -1;
function onLoad() {
	
	chrome.storage.local.get(['count'], function(result) {
		console.log(result.count);
		count2 = result.count;
		if(count2 != -1) {
			document.getElementById("elements_num").innerText = count2;
			console.log("woww");
		}
	});

	//document.addEventListener('DOMContentLoaded', function() {
/*		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.runtime.sendMessage(
				tabs[0].id,
				{msg:"count end"},
				function(count2) {*/
					
				
				//}
	//		);
	 
		//}
		//);
	
	

}

/*
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      	if (request.msg === "count end" && request.elements_num) {
      		sendResponse({response:"elements_num value setting"});
      		
      		console.log("elements_num value setting");
      		
      	}

      }
);
*/

window.onload = onLoad;