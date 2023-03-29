const loginEl = document.querySelector(".login-link");
const registerEl = document.querySelector(".register-link");
const forgotEl = document.querySelector(".forgot-link");

const loginSectionEl = document.querySelector(".login");
const registerSectionEl = document.querySelector(".register");
const forgotSectionEl = document.querySelector(".forgot");

const closeEl = document.querySelector(".close");

registerEl.addEventListener("click", () => {
  loginSectionEl.style.display = "none";
  registerSectionEl.style.display = "flex";
});

loginEl.addEventListener("click", () => {
  loginSectionEl.style.display = "flex";
  registerSectionEl.style.display = "none";
});

forgotEl.addEventListener("click", () => {
  loginSectionEl.style.display = "none";
  forgotSectionEl.style.display = "flex";
});

closeEl.addEventListener("click", () => {
  forgotSectionEl.style.display = "none";
  loginSectionEl.style.display = "flex";
});
