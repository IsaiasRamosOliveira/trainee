const changeThemeButton = document.querySelector(".account__mode");
const screenBlocks = document.querySelectorAll(
  "#aside, #watch, #header, #tutorials"
);

function toggleThemeFunction() {
  screenBlocks.forEach((block) => {
    block.classList.toggle("lightMode");
  });
}

const dotsImgs = document.querySelectorAll(".button__dots");

const imgSrcValues = [
  "/src/assets/imgs/watch/two-dots.png",
  "/src/assets/imgs/tutorials/two-dots.png",
  "/src/assets/imgs/aside/musical-sign-of-two-dots.png",
];

function changeDotsImgs() {
  dotsImgs.forEach((img) => {
    let originalSrc = img.src;
    if (imgSrcValues.includes(img.getAttribute("src"))) {
      img.setAttribute("src", "/src/assets/imgs/theme/twoDotsLightMode.png");
    } else {
      img.setAttribute("src", originalSrc);
    }
  });
}

changeThemeButton.addEventListener("click", toggleThemeFunction);

changeThemeButton.addEventListener("click", changeDotsImgs);
