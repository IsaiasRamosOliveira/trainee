import { closeModal } from "../../utils/closeModal.js";
import { openModal } from "../../utils/openModal.js";

function ComponentModal() {
  return `
  <div class="modal">
  <div class="modal__close">
    <button class="close__button">
      <img class="button__img" src="/src/imgs/modal/botao-fechar.png" alt="close button">
    </button>
  </div>
  <div class="modal__container"></div>
</div>
  `;
}
