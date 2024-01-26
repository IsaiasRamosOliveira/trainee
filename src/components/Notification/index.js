const container = document.getElementById("container");

let notifiVisible = false;

const notifi = () => {
  return `
    <div class="notifi">
      <p class="notifi__container">oi</p>
    </div>
  `;
}

container.addEventListener("click", (e) => {
  if (e.target.className === "notifi__img") {
    if (notifiVisible) {
      container.querySelector(".notifi").remove();
      notifiVisible = false;
    } else {
      container.innerHTML += notifi();
      notifiVisible = true;
    }
  }
});

container.addEventListener("click", (e) => {
  const close = container.querySelector(".notifi");
  if (close && close.contains && !close.contains(e.target) && e.target.className !== "notifi__img") {
    close.remove();
    notifiVisible = false;
  }
});
