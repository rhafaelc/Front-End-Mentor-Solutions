import { updateTipAmount } from "./calculateTipAmount.js";

const billInputElement = document.getElementById("bill");
export let billValue;
billInputElement.addEventListener("input", () => {
  billValue = parseFloat(billInputElement.value);
  if (billValue < 0) {
    billValue = 0;
    billInputElement.value = 0;
  }
  updateTipAmount();
});
