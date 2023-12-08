import { closeModal } from "../../utils/closeModal.js";
import { openModal } from "../../utils/openModal.js";

const container = document.querySelector("#container");
const data = [];

container.addEventListener("click", (e) => {
  const btn = e.target.getAttribute("class");
  const close = container.querySelector(".modal__container");
  if (btn == "button__dots") {
    openModal(container, ComponentModal);
  }
  if (btn == "close__button" || btn == "material-symbols-outlined button__img") {
    closeModal(close);
  }
});

document.addEventListener("click", (e) => {
  const modal = container.querySelector(".modal__container");
  if (modal && modal.contains && !modal.contains(e.target) && e.target.getAttribute("class") !== "button__dots") {
    closeModal(modal);
  }
});

function ComponentModal() {
  return `
    <div class="modal">
      <div class="modal__container">
        <div class="container__close">
          <button class="close__button">
            <span class="material-symbols-outlined button__img">
            close
            </span>
          </button>
        </div>
        <div class="container__content"></div>
      </div>
    </div>
  `;
}

export default function modal() {
  return
}