const containerEl = document.querySelector(".container");
const leftEl = document.querySelector(".left");
const rightEl = document.querySelector(".right");

leftEl.addEventListener("mouseenter", () => {
  containerEl.classList.add("active-left");
  containerEl.classList.remove("active-right");
});

rightEl.addEventListener("mouseenter", () => {
  containerEl.classList.add("active-right");
  containerEl.classList.remove("active-left");
});
