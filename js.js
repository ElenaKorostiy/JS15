// const fetchData = async () => {
//   const res = await fetch("https://dummyjson.com/products");
//   location.assign("https://dummyjson.com/products");
// };

// fetchData();
const button = document.getElementById("sign-in");
button.addEventListener("click", () => {
  const url = new URL(location.href);
  url.searchParams.set("auth", true);
  location.replace(url);
});

document.addEventListener("DOMContentLoaded", () => {
  const url = new URL(location.href);
  const auth = url.searchParams.get("auth");
  if (auth) {
    button.remove();
  }
});

const STORAGE_KEYS = {
  name: "name",
  email: "email",
  timer: "timer",
};

const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
nameInput.addEventListener("blur", (e) => {
  localStorage.setItem(STORAGE_KEYS.name, e.target.value);
});
emailInput.addEventListener("blur", (e) => {
  localStorage.setItem(STORAGE_KEYS.email, e.target.value);
});
document.addEventListener("DOMContentLoaded", () => {
  const savedName = localStorage.getItem(STORAGE_KEYS.name);
  const savedEmail = localStorage.getItem(STORAGE_KEYS.email);
  nameInput.value = savedName;
  emailInput.value = savedEmail;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  nameInput.value = "";
  emailInput.value = "";
  localStorage.clear();
});

const timer = document.getElementById("timer");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let startTime = sessionStorage.getItem(STORAGE_KEYS.timer)
  ? +sessionStorage.getItem(STORAGE_KEYS.timer)
  : 0;
let timerId;

startBtn.addEventListener("click", () => {
  if (!timerId) {
    timerId = setInterval(() => {
      startTime += 1;
      sessionStorage.setItem(STORAGE_KEYS.timer, startTime);
      timer.innerText = startTime;
    }, 1000);
  }
});

stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
  timerId = null;
});

resetBtn.addEventListener("click", () => {
  clearInterval(timerId);
  startTime = 0;
  timerId = null;
  timer.innerText = 0;
  sessionStorage.removeItem(STORAGE_KEYS.timer);
});