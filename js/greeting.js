const form = document.querySelector(".js-form"),
      greeing = document.querySelector(".js-greetings"),
      input = form.querySelector("input");      
const USER_LS = "currentUser",
      SHOW_CN = "show";

function saveName(name) {
    localStorage.setItem(USER_LS, name);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOW_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(name) {
    form.classList.remove(SHOW_CN);
    greeing.classList.add(SHOW_CN);
    greeing.innerText = `Hello ${name}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        // he/she is not
        askForName();
    } else {
        // he/she is
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();
