import { billValue } from "./bill.js";
import { tipPercentage } from "./tipPercentage.js";
import { peopleValue } from "./peopleError.js";
import { updateTotalAmount } from "./calculateTotalAmount.js";

let tipAmount;
export let tipAmountPerPerson;

export function updateTipAmount() {
  tipAmount = (billValue * tipPercentage) / 100;
  tipAmountPerPerson = tipAmount / peopleValue;
  tipAmountPerPerson =
    Math.round(tipAmountPerPerson * 100) / 100;

  if (!isFinite(tipAmountPerPerson)) {
    tipAmountPerPerson = "Error";
  }

  updateTipUI();
  updateTotalAmount();
}

function updateTipUI() {
  const tipAmountElement =
    document.getElementById("tip-amount-js");
  tipAmountElement.textContent = `$${tipAmountPerPerson.toFixed(2)}`;
}
