import { billValue } from "./bill.js";
import { peopleValue } from "./peopleError.js";
import { tipAmountPerPerson } from "./calculateTipAmount.js";

let totalAmountPerPerson;

export function updateTotalAmount() {
  totalAmountPerPerson = billValue / peopleValue;
  totalAmountPerPerson =
    Math.round(totalAmountPerPerson * 100) / 100;
  totalAmountPerPerson += tipAmountPerPerson;

  if (!isFinite(totalAmountPerPerson)) {
    totalAmountPerPerson = "Error";
  }

  updateTotalUI();
}

function updateTotalUI() {
  const totalAmountElement =
    document.getElementById("total-amount-js");
  totalAmountElement.textContent = `$${totalAmountPerPerson.toFixed(2)}`;
}