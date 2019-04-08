
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(sender.tab ?
            "from a content script:" + sender.tab.url :
            "from the extension");

			if(request.elements_num) {
				chrome.storage.local.set({count:request.elements_num}, function(request){
					console.log("save count");
				});

				sendResponse({response:"elements_num received"});
			}

    }
);


