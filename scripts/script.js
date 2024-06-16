const btn = document.getElementById("menu-btn");
const mobMenu = document.getElementById("mob-menu");

const btnHandler = function () {
  btn.classList.toggle("open");
  mobMenu.classList.toggle("hidden");
  mobMenu.classList.toggle("flex");
};

btn.addEventListener("click", btnHandler);
