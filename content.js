// JavaScript source code
chrome.runtime.onMessage.addListener(async function (request, sender, sendResponse) {
    if (request.action == "highlightLinks") {
        console.log(request.keyword);
        var links = document.getElementsByTagName("a");
        for (var i = 0; i < links.length; i++) {
            console.log(links[i].href.toLowerCase());
            var linkUrl = links[i].href.toLowerCase();
            await fetch(linkUrl)
                .then(response => response.text())
                .then(data => {
                var regex = new RegExp(request.keyword, "i");
                if (regex.test(data)) {
                            console.log("line24");
                            links[i].style.color = "red";
                }
                }).catch(error => console.error(error));
        }
    }
});