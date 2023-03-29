const btnEl = document.querySelector(".btn");
const tipEl = document.querySelector(".tip");
const totalEl = document.querySelector(".total");
const errorEl = document.querySelector(".error");

const hideError = () => {
  setTimeout(() => {
    errorEl.style.display = "none";
  }, 3000);
};

const calculateTip = (e) => {
  e.preventDefault();
  const bill = document.getElementById("bill").value;
  const rate = document.getElementById("rate").value;

  if (bill === "" || rate === "") {
    errorEl.style.display = "block";
    hideError();
  } else if (isNaN(bill)) {
    errorEl.textContent = "Please enter a number";
    errorEl.style.display = "block";
    hideError();
  } else {
    let tipAmount = bill * rate;
    tipAmount = Math.ceil(tipAmount)
    tipEl.textContent = `Tip Amount: $${tipAmount}`;

    const totalBill = +bill + tipAmount 
    totalEl.textContent = `Total Bill: $${totalBill}`;
  }
};

btnEl.addEventListener("click", calculateTip);
