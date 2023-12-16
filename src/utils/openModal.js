export function openModal(container, ComponentModal, submitForm, content) {
  container.innerHTML += ComponentModal(content);
  if (submitForm) {
    submitForm();
  }
}