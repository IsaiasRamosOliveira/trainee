const menuButton = document.querySelector(".aside__menu");
const aside = document.getElementById("aside");

function toggleMenu() {
  aside.classList.toggle("active");
}

menuButton.addEventListener('click', () => {
  toggleMenu();
});

window.addEventListener('resize', () => {
    aside.classList.remove("active");
});

