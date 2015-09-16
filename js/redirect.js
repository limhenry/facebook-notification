chrome.runtime.sendMessage({"action": "convertURL", "url": location.href},
    function (response) {
      	location.href = response;
    });
