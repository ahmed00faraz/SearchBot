document.getElementById("run-content-script").addEventListener("click", () => {
    console.log("Button clicked. Sending message to background script...");
    chrome.runtime.sendMessage({ action: "runContentScript" });
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "runContentScript") {
        console.log("Received message from background script to run content script. Executing content script...");
        chrome.tabs.executeScript(sender.tab.id, { file: "content.js" })
            .then(() => {
                console.log("Content script executed successfully.");
                sendResponse({ status: "success" });
            })
            .catch((error) => {
                console.error("Error injecting script:", error);
                sendResponse({ status: "error" });
            });
    }
});
