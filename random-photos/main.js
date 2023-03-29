const imageContainerEl = document.querySelector(".image-container");
const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", () => {
  imageNumber = 8;
  addNewImages();
});

function addNewImages() {
  for (let i = 0; i < imageNumber; i++) {
    const randomNum = Math.floor(Math.random() * 2000);

    const newImage = document.createElement("img");
    newImage.src = `https://picsum.photos/300?random=${randomNum}`;
    imageContainerEl.appendChild(newImage);
  }
}
