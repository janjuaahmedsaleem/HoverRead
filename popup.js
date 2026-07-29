let isOn = false;
// adding the code for button to toggle on and off

document.getElementById("toggle").addEventListener("click", () => {
  isOn = !isOn;
  document.getElementById("toggle").innerText = isOn ? "Deactivate Zoom" : "Activate Zoom";

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { toggle: isOn });
  });
});
