let isActive = false;

document.addEventListener("mouseover", (e) => {
  if (!isActive) return;




  const target = e.target;

  if (
      target &&
      target.nodeType === 1 &&
      target.textContent.trim().length > 3 &&
      !["SCRIPT", "STYLE", "IMG", "INPUT", "TEXTAREA"].includes(target.tagName)


  )
  // ease in ease out animations
  {
    target.style.transition = "all 0.2s ease";
    target.style.fontSize = "1.5em";
    target.style.backgroundColor = "#111";
    target.style.color = "#fff";
    target.style.outline = "2px solid #555";
  }
});

document.addEventListener("mouseout", (e) => {
  if (!isActive) return;
  const target = e.target;
  target.style.fontSize = "";
  target.style.backgroundColor = "";
  target.style.color = "";
  target.style.outline = "";


});

chrome.runtime.onMessage.addListener((request) => {
  if (typeof request.toggle === "boolean") {
    isActive = request.toggle;


  }




});




