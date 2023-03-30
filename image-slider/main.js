const nextEl = document.querySelector(".next");
const prevEl = document.querySelector(".prev");
const imageContainer = document.querySelector(".image-container");
const imgEls = document.querySelectorAll("img");

let currentImg = 0;
let timer

nextEl.addEventListener("click", () => {
  clearTimeout(timer)
  currentImg++;
  updateImg();
});

prevEl.addEventListener("click", () => {
  clearTimeout(timer)
  currentImg--;
  updateImg();
});

function updateImg() {
  if (currentImg > imgEls.length - 1) {
    currentImg = 0;
  } else if (currentImg < 0) {
    currentImg = imgEls.length - 1;
  }

  imageContainer.style.transform = `translateX(-${currentImg * 500}px)`;
  
  timer = setTimeout(() => {
    currentImg++;
    updateImg();
  }, 4000);
}

updateImg()
