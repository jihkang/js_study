const form = document.querySelector('.js-form');
const input = form.querySelector("input");
const greeting = document.querySelector('js-greeting');

const USER_LS = "currentUser",
      SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(e) {
  e.preventDefault();
  const curValue = input.value;
  paintGreeting(curValue);
  saveName(curValue);
}

function paintGreeting(txt) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = txt + ":)";
}

function askName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function loadName()
{
  const curUser = localStorage.getItem(USER_LS);

  if (curUser === null) {
    askName();
  } else {
    paintGreeting(curUser);
  }
}

function init() {
  loadName();
}

init();
