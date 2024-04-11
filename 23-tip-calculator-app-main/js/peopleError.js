import { updateTipAmount } from "./calculateTipAmount.js";

const peopleSection = document.querySelector(
  ".people-section"
);
const inputElement = document.getElementById("people");

export let peopleValue = 1;
inputElement.addEventListener("input", () => {
  peopleValue = parseInt(inputElement.value);
  console.log(peopleValue)
  updateTipAmount();
  if (peopleValue < 0) {
    peopleValue = 0;
    inputElement.value = 0;
  } else if (peopleValue == 0) {
    peopleSection.classList.add("error-people");
  } else {
    peopleSection.classList.remove("error-people");
  }
});
