import { ComponentModal } from "../Modal/index.js";

const buttons = document.querySelectorAll(".button__dots");

const watchModal = `
  <form class="watchModal__form">  
    <label class="watchModal__label">
      <legend class="watchModal__legend">Add new stream</legend>
      <input class="watchModal__input" type="text" required placeholder="Insert image URL">
      <button type="submit" class="watchModal__submit">Send</button>
    </label>
  </form>
`;

function watchInsertedDiv(url) {
  return `<li class="streamsList__user">
    <a href="" class="user__stream">
      <img class="stream__img" src="${url}" alt="" />
    </a>
  </li>
  `;
}

const createWatchModal = () => {
  ComponentModal(watchModal);
};

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn === buttons[1]) {
      createWatchModal();

      setTimeout(() => {
        const streamList = document.querySelector(".watchNow__streamsList");
        const watchModalSubmit = document.querySelector(".watchModal__submit");
        const watchModalInput = document.querySelector(".watchModal__input");

        const submitWatchModal = (url) =>
          streamList.insertAdjacentHTML("afterbegin", watchInsertedDiv(url));

        watchModalSubmit.addEventListener("click", (e) => {
          e.preventDefault();
          const url = watchModalInput.value;
          submitWatchModal(url);
          watchModalInput.value = "";
        });
      }, 0);
    } else {
      return;
    }
  });
});
