const changeThemeButton = document.querySelector(".account__mode");
const screenBlocks = document.querySelectorAll(
  "#container,#aside, #watch, #header, #tutorials"
);

function toggleThemeFunction() {
  screenBlocks.forEach((block) => {
    block.classList.toggle("lightMode");
  });
}

const dotsImgs = document.querySelectorAll(".button__dots");

const imgSrcValues = [
  "/src/imgs/watch/two-dots.png",
  "/src/imgs/tutorials/two-dots.png",
  "/src/imgs/aside/musical-sign-of-two-dots.png",
];

function changeDotsImgs() {
  dotsImgs.forEach((img) => {
    let originalSrc = img.src;
    if (imgSrcValues.includes(img.getAttribute("src"))) {
      img.setAttribute("src", "/src/imgs/theme/twoDotsLightMode.png");
    } else {
      img.setAttribute("src", originalSrc);
    }
  });
}

changeThemeButton.addEventListener("click", toggleThemeFunction);

changeThemeButton.addEventListener("click", changeDotsImgs);
