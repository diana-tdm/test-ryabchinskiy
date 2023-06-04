const button = document.querySelector(".button__form");
const modal = document.querySelector(".modal");
const buttonClose = document.querySelector(".btn-close");

button.addEventListener("click", () => {
  modal.classList.toggle("modal--open");
});

buttonClose.addEventListener("click", () => {
  modal.classList.remove("modal--open");
});

const inputName = document.querySelector('[name="name"]');
let inputNameTouched = false;
let inputNameError = false;
let inputNameMsg = "";

inputName.addEventListener("focus", () => {
  inputNameTouched = true;
});

inputName.addEventListener("blur", () => {
  validateName();
});

function validateName() {
  let name = inputName.value;
  const regEx = /[\pL\. ]/g;
  console.log(name);
}
