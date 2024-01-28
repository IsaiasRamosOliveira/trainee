const container = document.querySelector("#container");

function toggleLightMode() {
  const screenBlocks = document.querySelectorAll(
    "#container, #aside, #watch, #header, #tutorials"
  );
  screenBlocks.forEach((block) => {
    block.classList.toggle("lightMode");
  });
  saveThemeState(document.body.classList.contains("lightMode"));
  changeDotImgColor();
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
  const dotsImgs = document.querySelectorAll(
    ".button__dots, .buttonWatch__dots, .btn__dots"
  );
  dotsImgs.forEach((img) => {
    container.classList.contains("lightMode")
      ? (img.src = "/src/imgs/theme/twoDotsLightMode.png")
      : (img.src = "/src/imgs/watch/two-dots.png");
  });
}

document.addEventListener("click", (e) => {
  if (
    e.target.className === "account__mode" ||
    e.target.className.includes("mode__themeButton")
  ) {
    toggleLightMode();
  }
});
