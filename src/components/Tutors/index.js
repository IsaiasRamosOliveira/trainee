import { ComponentModal } from "../Modal/index.js";

const btnDots = document.querySelectorAll(".button__dots");
const data = [];

const tutors = () => {
  return ` 
    <div class="tutors">
      <form class="tutors__form">
        <legend class="form__description">Add New Tutor</legend>
        <div class="form__inputs">
          <input id="inputs__name" type="text" placeholder="Name" required>
          <input id="inputs__sub" type="text" placeholder="Subject" required>
          <input id="inputs__url" type="text" placeholder="Profile Picture Url" required>
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

btnDots.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn === btnDots[3]) {
      ComponentModal(tutors());
      setTimeout(() => {
        const formTutors = document.querySelector(".form__inputs");
        const formTutorsButton = document.querySelector(".inputs__button");

        formTutorsButton.addEventListener("click", (e) => {
          e.preventDefault();
          const inputProfile = formTutors.querySelector("#inputs__url");
          const inputName = formTutors.querySelector("#inputs__name");
          const inputSubject = formTutors.querySelector("#inputs__sub");

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
        });
      });
    }
  });
}, 0);
