const button = document.querySelector(".button__form");
const modal = document.querySelector(".modal");
const buttonClose = document.querySelector(".btn-close");

const inputName = document.querySelector('[name="name"]');
const inputNameErrorMsg = document.querySelector(
  '[name="name"]+.form__label-msg'
);
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
  const regEx = /^[A-Za-zА-яёЁ0-9\.\-\_ ]+$/;

  if (name.match(regEx) === null) {
    inputNameErrorMsg.classList.add("form__label-msg--error");
    inputNameErrorMsg.classList.remove("form__label-msg--ok");
    inputNameErrorMsg.classList.remove("form__label-msg--hidden");
    inputNameErrorMsg.textContent = "Имя содержит специальные символы";
    inputNameError = true;
  } else {
    inputNameErrorMsg.classList.remove("form__label-msg--error");
    inputNameErrorMsg.classList.add("form__label-msg--ok");
    inputNameErrorMsg.classList.remove("form__label-msg--hidden");
    inputNameErrorMsg.textContent = "Имя разрешено";
    inputNameError = false;
  }
}

const inputPhone = document.querySelector('[name="phone"]');
const inputPhoneErrorMsg = document.querySelector(
  '[name="phone"]+.form__label-msg'
);
let inputPhoneTouched = false;
let inputPhoneError = false;
let inputPhoneMsg = "";

inputPhone.addEventListener("focus", () => {
  inputPhoneTouched = true;
});

inputPhone.addEventListener("blur", () => {
  validatePhone();
});

function validatePhone() {
  let phone = inputPhone.value;
  let phoneShort = phone.replace(/[^0-9]/g, "");
  if (phoneShort[0] === "8") phoneShort = phoneShort.replace("8", "7");
  let phoneLong =
    "+" +
    (phoneShort[0] || "") +
    " (" +
    (phoneShort[1] || "") +
    (phoneShort[2] || "") +
    (phoneShort[3] || "") +
    ") " +
    (phoneShort[4] || "") +
    (phoneShort[5] || "") +
    (phoneShort[6] || "") +
    "-" +
    (phoneShort[7] || "") +
    (phoneShort[8] || "") +
    "-" +
    (phoneShort[9] || "") +
    (phoneShort[10] || "");
  inputPhone.value = phoneLong;

  if (phoneShort[10]) {
    inputPhoneErrorMsg.classList.remove("form__label-msg--error");
    inputPhoneErrorMsg.classList.add("form__label-msg--ok");
    inputPhoneErrorMsg.classList.remove("form__label-msg--hidden");
    inputPhoneErrorMsg.textContent = "Номер введен верно";
    inputPhoneError = false;
  } else {
    inputPhoneErrorMsg.classList.add("form__label-msg--error");
    inputPhoneErrorMsg.classList.remove("form__label-msg--ok");
    inputPhoneErrorMsg.classList.remove("form__label-msg--hidden");
    inputPhoneErrorMsg.textContent = "Номер некорректен";
    inputPhoneError = true;
  }
}

const inputText = document.querySelector('[name="text"]');
const inputTextErrorMsg = document.querySelector(
  '[name="text"]+.form__label-msg'
);
let inputTextTouched = false;
let inputTextError = false;
let inputTextMsg = "";

inputText.addEventListener("focus", () => {
  inputTextTouched = true;
});

inputText.addEventListener("blur", () => {
  validateText();
});

function validateText() {
  let name = inputText.value;
  const regEx = /^[A-Za-zА-яёЁ0-9\.\-\_\, ]+$/;

  if (name.match(regEx) === null) {
    inputTextErrorMsg.classList.add("form__label-msg--error");
    inputTextErrorMsg.classList.remove("form__label-msg--ok");
    inputTextErrorMsg.classList.remove("form__label-msg--hidden");
    inputTextErrorMsg.textContent = "Текст содержит специальные символы";
    inputTextError = true;
  } else {
    inputTextErrorMsg.classList.remove("form__label-msg--error");
    inputTextErrorMsg.classList.add("form__label-msg--ok");
    inputTextErrorMsg.classList.remove("form__label-msg--hidden");
    inputTextErrorMsg.textContent = "Текст верный";
    inputTextError = false;
  }
}

const submitButton = document.querySelector('[type="submit"]');
const formMsg = document.querySelector(".form__msg");

submitButton.addEventListener("click", () => {
  const name = inputName.value;
  const phone = inputPhone.value.replace(/[^0-9\+]/g, "");
  const text = inputText.value;
  const json = {
    name,
    phone,
    text,
  };
  if (inputNameError || inputPhoneError || inputTextError) {
    formMsg.classList.add("form__msg--error");
    formMsg.classList.remove("form__msg--hidden");
    formMsg.classList.remove("form__msg--ok");
    formMsg.textContent = "Ошибка отправки формы";
  } else {
    formMsg.classList.add("form__msg--ok");
    formMsg.classList.remove("form__msg--hidden");
    formMsg.classList.remove("form__msg--error");
    formMsg.textContent = "Форма отправлена успешно";
    console.log(json);
  }
});

button.addEventListener("click", () => {
  modal.classList.toggle("modal--open");
  inputName.value = "";
  inputPhone.value = "";
  inputText.value = "";
  inputNameErrorMsg.classList.add("form__label-msg--hidden");
  inputPhoneErrorMsg.classList.add("form__label-msg--hidden");
  inputTextErrorMsg.classList.add("form__label-msg--hidden");
  formMsg.classList.add("form__msg--hidden");
});

buttonClose.addEventListener("click", () => {
  modal.classList.remove("modal--open");
});
