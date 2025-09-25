(function() {
  const sidebar = document.getElementById("viewissuesidebar");
  if (!sidebar) return;

  const originalWidth = sidebar.offsetWidth || 300;

  const toggleBtn = document.createElement("button");
  toggleBtn.className = "jira-toggle-btn";
  sidebar.style.position = "relative";
  sidebar.appendChild(toggleBtn);

  let collapsed = true;

  const collapse = () => {
    sidebar.style.width = "20px";
    sidebar.style.overflow = "hidden";
    toggleBtn.innerText = "<<";
    collapsed = true;
  };

  const expand = () => {
    sidebar.style.width = originalWidth + "px";
    sidebar.style.overflow = "";
    toggleBtn.innerText = ">>";
    toggleBtn.style.right = "0";
    collapsed = false;
  };

  collapse();

  toggleBtn.addEventListener("click", () => {
    if (collapsed) {
      expand();
    } else {
      collapse();
    }
  });
})();
