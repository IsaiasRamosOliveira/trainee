const changeThemeButton = document.querySelector(".account__mode");
const screenBlocks = document.querySelectorAll(
  "#container, #aside, #watch, #header, #tutorials"
);
const container = document.querySelector("#container");
const dotsImgs = document.querySelectorAll(
  ".button__dots, .buttonWatch__dots, .btn__dots"
);

function toggleLightMode() {
  screenBlocks.forEach((block) => {
    block.classList.toggle("lightMode");
  });
  saveThemeState(document.body.classList.contains("lightMode"));
  changeDotImgColor()
}

function saveThemeState(isLightMode) {
  localStorage.setItem("themeState", isLightMode ? "light" : "dark");
}

document.addEventListener("DOMContentLoaded", () => {
  const themeState = localStorage.getItem("themeState");
  if (themeState === "light") {
    toggleLightMode();
  }
});

function changeDotImgColor() {
  dotsImgs.forEach((img) => {
    container.classList.contains("lightMode")
      ? (img.src = "/src/imgs/theme/twoDotsLightMode.png")
      : (img.src = "/src/imgs/watch/two-dots.png");
  });
}

changeThemeButton.addEventListener("click", () => {
  toggleLightMode();
  changeDotsImgs();
});
