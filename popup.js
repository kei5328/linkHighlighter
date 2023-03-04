// JavaScript source code
document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector("form");

     async function listen_func(event) {
        event.preventDefault();
        var keyword = document.getElementById("keyword").value;
        console.log(keyword);
        let [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
        console.log(tab);
        const resp = await chrome.tabs.sendMessage(tab.id, { action: "highlightLinks", keyword: keyword });
     }
     form.addEventListener("submit", listen_func);
});