const button = document.querySelector(".burger");
let menu = document.querySelector(".nav");

button.addEventListener("click", function () {
  menu.classList.toggle("active");
});
