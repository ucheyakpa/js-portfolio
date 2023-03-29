const containerEl = document.querySelector(".container");
const kits = ["crash", "kick", "snare", "tom"];

kits.forEach((kit, i) => {
  const btnEl = document.createElement("button");
  btnEl.classList.add("btn");
  btnEl.textContent = kit;
  btnEl.style.backgroundImage = `url(images/${kit}.png)`;
  containerEl.appendChild(btnEl);

  const audioEl = document.createElement("audio");
  audioEl.src = `sounds/${kit}.mp3`;
  containerEl.appendChild(audioEl);

  btnEl.addEventListener("click", () => {
    audioEl.play();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === kit.slice(0, 1)) {
      audioEl.play();
      btnEl.style.transform = "scale(0.94)";
      setTimeout(() => {
        btnEl.style.transform = "scale(1)";
      }, 200);
    }
  });
});
