const poundEl = document.getElementById("pound");
const kiloEl = document.getElementById("kilo");
const gramEl = document.getElementById("gram");
const ounceEl = document.getElementById("ounce");
const formEl = document.querySelector("form");

// Pounds Coverter
formEl.addEventListener("input", convertWeight);

function convertWeight(e) {
  if (e.target.classList.contains("pound")) {
    let x = e.target.value;
    kiloEl.value = (x / 2.2046).toFixed(2);
    gramEl.value = (x / 0.0022046).toFixed(2);
    ounceEl.value = (x * 16).toFixed(2);
  }

  if (e.target.classList.contains("kilo")) {
    let x = e.target.value;
    poundEl.value = (x * 2.2046).toFixed(2);
    gramEl.value = (x * 1000).toFixed(2);
    ounceEl.value = (x * 35.274).toFixed(2);
  }

  if (e.target.classList.contains("gram")) {
    let x = e.target.value;
    kiloEl.value = (x / 1000).toFixed(2);
    poundEl.value = (x * 0.0022046).toFixed(2);
    ounceEl.value = (x * 0.035274).toFixed(2);
  }

  if (e.target.classList.contains("ounce")) {
    let x = e.target.value;
    kiloEl.value = (x / 2.2046).toFixed(2);
    gramEl.value = (x / 0.0022046).toFixed(2);
    ounceEl.value =(x * 16).toFixed(2);
  }
}
