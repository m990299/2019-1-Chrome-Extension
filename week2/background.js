
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(sender.tab ?
            "from a content script:" + sender.tab.url :
            "from the extension");

			if(request.num) {
				chrome.storage.local.set({count:request.num}, function(request){
					console.log("save count");
				});


				sendResponse({response : "executed!"});
			}

    }
);


