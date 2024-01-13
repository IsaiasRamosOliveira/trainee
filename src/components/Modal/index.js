function openModal(container, ComponentModal, submitForm, content) {
  if (submitForm) {
    submitForm();
  }
}

export function closeModal(container) {
  if (container) {
    container.parentElement.remove();
  }
  return;
}

export const ComponentModal = (content) => {

  const container = document.querySelector("#container");
  container.addEventListener("click", (e) => {
    const btn = e.target.getAttribute("class");
    const close = container.querySelector(".modal__container");
    if (btn == "button__dots") {
      openModal(container, Modal, null, content);
    }
    if (btn == "close__button" || btn == "material-symbols-outlined button__img") {
      closeModal(close);
    }
  });

  document.addEventListener("click", (e) => {
    const close = container.querySelector(".modal__container");
    if (close && close.contains && !close.contains(e.target) && e.target.className !== "btn__dots") {
      closeModal(close);
    }
  });

  const Modal = (content) => {
    let modal = `
    <div class="modal">
      <div class="modal__container">
        <div class="container__close">
          <button class="close__button">
            <span class="material-symbols-outlined button__img">
              close
            </span>
          </button>
        </div>
        <div class="container__content">${content}</div>
      </div>
    </div>
  `;
    return modal
  }
  return Modal;
}

if (ComponentModal() === null || ComponentModal() === undefined) {
  ComponentModal('');
};