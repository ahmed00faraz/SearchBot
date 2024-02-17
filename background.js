chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "runContentScript") {
      console.log("Received message to run content script from popup.js.");
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

chrome.action.onClicked.addListener(() => {
  console.log("Browser action clicked. Sending message to run content script...");
  chrome.runtime.sendMessage({ action: "runContentScript" });
});
