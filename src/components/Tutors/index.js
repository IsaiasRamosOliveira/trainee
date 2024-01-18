import { ComponentModal } from "../Modal/index.js";
import { closeModal } from "../Modal/index.js";

const data = [];

const tutors = () => {
  return ` 
    <div class="tutors">
      <form class="tutors__form">
        <legend class="form__description">Add New Tutor</legend>
        <div class="form__inputs">
          <input id="inputs__name" type="text" placeholder="Name" >
            <span class="inputs__error">The name must have at least 3 characters</span>
          <input id="inputs__sub" type="text" placeholder="Subject" >
            <span class="inputs__error">The subject must have at least 3 characters</span>
          <input id="inputs__url" type="text" placeholder="Profile Picture Url" >
            <span class="inputs__error">Enter a valid URL</span>
          <button class="inputs__button" type="submit">Send</button>
        </div>
      </form>
    </div>
  `;
};

function listTutors(ProfileValue, NameValue, SubjectValue) {
  return `
    <button class="list__tutor">
      <img class="tutor__pic" src="${ProfileValue}" alt="" />
        <span class="tutor__description">
          <p class="description__name">${NameValue}</p>
          <p class="tutor__subject">${SubjectValue}</p>
        </span>
      <img class="tutor__add" src="/src/imgs/watch/add.png" alt="">
    </button>
  `;
}

document.addEventListener("click", (e) => {
  if (e.target.className === "btn__dots") {
    const container = document.querySelector("#container");
    const content = tutors();
    const Modal = ComponentModal();
    container.innerHTML += Modal(content);

    const formTutorsButton = document.querySelector(".inputs__button");
    const formTutors = document.querySelector(".form__inputs");

    const inputProfile = formTutors.querySelector("#inputs__url");
    const inputName = formTutors.querySelector("#inputs__name");
    const inputSubject = formTutors.querySelector("#inputs__sub");
    const spanError = document.querySelectorAll(".inputs__error");

    let validatedName = false;
    let validatedSubject = false;
    let validatedProfile = false;

    const errorName = inputName.oninput = () => {
      if (inputName.value.length < 3) {
        spanError[0].style.display = 'block';
        inputName.style.border = '2px solid #e63636';
        validatedName = false;
      }
      else {
        spanError[0].style.display = 'none';
        inputName.style.border = 'none';
        validatedName = true;
      }
    };

    const errorSubject = inputSubject.oninput = () => {
      if (inputSubject.value.length < 3) {
        spanError[1].style.display = 'block';
        inputSubject.style.border = '2px solid #e63636';
        validatedSubject = false;
      }
      else {
        spanError[1].style.display = 'none';
        inputSubject.style.border = 'none';
        validatedSubject = true;
      }
    };

    const errorProfile = inputProfile.oninput = () => {
      const urlRegex = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
      
      if (!urlRegex.test(inputProfile.value)) {
        spanError[2].style.display = 'block';
        inputProfile.style.border = '2px solid #e63636';
        validatedProfile = false;
      }
      else {
        spanError[2].style.display = 'none';
        inputProfile.style.border = 'none';
        validatedProfile = true;
      }
    }

    formTutorsButton.addEventListener("click", (e) => {
      if (validatedName && validatedSubject && validatedProfile) {
      e.preventDefault();
      const close = container.querySelector(".modal__container");

      const NameValue = inputName.value;
      const SubjectValue = inputSubject.value;
      const ProfileValue = inputProfile.value;

      data.push({ ProfileValue, NameValue, SubjectValue });
      data.forEach((post) => {
        const tutor = document.querySelector(".tutors__list");
        tutor.innerHTML += listTutors(
          post.ProfileValue,
          post.NameValue,
          post.SubjectValue
        );
      });
      data.pop();
      closeModal(close);
      }
      else {
        e.preventDefault();
        errorName();
        errorSubject();
        errorProfile();
      }
    });
  }
});