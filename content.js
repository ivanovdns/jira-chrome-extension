(function() {
  const sidebar = document.getElementById("viewissuesidebar");
  if (!sidebar) return;

  // Сохраняем оригинальную ширину (если не удаётся измерить — ставим 300px)
  const originalWidth = sidebar.offsetWidth || 300;

  // Создаём кнопку
  const toggleBtn = document.createElement("button");
  toggleBtn.className = "jira-toggle-btn";
  sidebar.style.position = "relative";
  sidebar.appendChild(toggleBtn);

  let collapsed = true; // сразу начинаем со свернутого состояния

  const collapse = () => {
    sidebar.style.width = "20px";
    sidebar.style.overflow = "hidden";
    toggleBtn.innerText = ">>";  // кнопка для разворачивания
    toggleBtn.style.right = "-20px";
    collapsed = true;
  };

  const expand = () => {
    sidebar.style.width = originalWidth + "px";
    sidebar.style.overflow = "";
    toggleBtn.innerText = "<<"; // кнопка для сворачивания
    toggleBtn.style.right = "0";
    collapsed = false;
  };

  // Инициализация (свёрнуто при загрузке)
  collapse();

  // Обработка клика
  toggleBtn.addEventListener("click", () => {
    if (collapsed) {
      expand();
    } else {
      collapse();
    }
  });
})();
