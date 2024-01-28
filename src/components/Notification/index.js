const container = document.querySelector("#container");

let notifiVisible = false;

const notifi = () => {
  return `
    <div class="notifi">
      <p class="notifi__title">Notifications</p>
      <div class="notifi__bar notifi__bar--color"></div>
      <div class="notifi__container">
        <p class="container__message">No Notifications</p>
        <div class="container__bar1 notifi__bar--color"></div>
        <div class="container__bar2 notifi__bar--color"></div>
      </div>
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
