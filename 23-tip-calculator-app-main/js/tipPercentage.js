import { updateTipAmount } from "./calculateTipAmount.js";

const customTipInputElement =
  document.getElementById("custom-tip");
const tipButtons = document.querySelectorAll(
  "input[type=radio]"
);
export let tipPercentage = 0;

tipButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tipPercentage = parseFloat(button.dataset.id);
    updateTipAmount();
    customTipInputElement.classList.remove("checked");
    tipButtons.forEach((btn) => {
      btn.classList.remove("checked");
    });
    button.classList.add("checked");
  });
});

customTipInputElement.addEventListener("click", () => {
  customTipInputElement.classList.add("checked");
  tipPercentage = parseFloat(
    customTipInputElement.dataset.id
  );
  updateTipAmount();
  tipButtons.forEach((btn) => {
    btn.classList.remove("checked");
  });
});

let customTipValue;

customTipInputElement.addEventListener("input", () => {
  customTipValue = parseFloat(customTipInputElement.value);
  if (customTipValue < 0) {
    customTipValue = 0;
    customTipInputElement.value = 0;
  }
  customTipInputElement.dataset.id = customTipValue;
  tipPercentage = customTipValue;
  updateTipAmount();
});
