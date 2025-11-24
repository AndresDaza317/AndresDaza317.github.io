document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menuToggle");
  const sideMenu = document.getElementById("sideMenu");
  const overlay = document.getElementById("overlay");

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    sideMenu.classList.toggle("open");
    overlay.classList.toggle("show");
  });

  overlay.addEventListener("click", () => {
    toggle.classList.remove("active");
    sideMenu.classList.remove("open");
    overlay.classList.remove("show");
  });
});