function convertURL(url){
    console.log(url);
    var original_url = url;
    var huehue = "m.facebook.com/notifications/client/push/fetch?push_endpoint=https://android.googleapis.com/";
    if (url.indexOf(huehue) >= 0){
        console.log("lol");
    }
    else{
        var vars = [], hash;
        var hashes = url.slice(url.indexOf('?') + 1).split('&');
        for(var i = 0; i < hashes.length; i++)
        {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
        }
        console.log("get url leh");
        if (url.indexOf("story") >= 0){
            url = "https://facebook.com/" + vars["id"] + "/posts/" + vars["story_fbid"];
            return url;
        }
        if (url.indexOf("messages") >= 0){
            url = "https://facebook.com/messages/" + vars["tid"];
            return url;
        }
        else{
            url = url.replace("m.facebook.com/", "facebook.com/"); 
            return url;       
        }
    }
    
}

chrome.webRequest.onBeforeRequest.addListener(function(details) {    
    return { redirectUrl: convertURL(details.url)};
        }, {urls: ["*://m.facebook.com/*"]}, ["blocking"]);
