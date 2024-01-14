import { ComponentModal, closeModal } from "../Modal/index.js";

const container = document.querySelector("#container");

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

document.addEventListener("click", (e) => {
  if (e.target.className === "buttonWatch__dots") {
    const content = watchModal;
    const modal = ComponentModal();

    container.innerHTML += modal(content);

    const streamList = document.querySelector(".watchNow__streamsList");
    const watchModalSubmit = document.querySelector(".watchModal__submit");
    const watchModalInput = document.querySelector(".watchModal__input");
    const urlInput = document.querySelector(".watchModal__input");
    const modalContainer = container.querySelector(".modal__container");

    const submitWatchModal = (url) =>
      streamList.insertAdjacentHTML("afterbegin", watchInsertedDiv(url));

    const regex =
      /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

    const errorMessage = document.createElement("span");
    errorMessage.textContent = "Invalid URL!";

    watchModalSubmit.addEventListener("click", (e) => {
      e.preventDefault();

      if (!regex.test(urlInput.value)) {
        urlInput.style.border = "1px solid red";
        urlInput.insertAdjacentElement("afterend", errorMessage);
        urlInput.value = "";
        return;
      }

      const url = watchModalInput.value;
      submitWatchModal(url);
      closeModal(modalContainer);
    });
  }
});
