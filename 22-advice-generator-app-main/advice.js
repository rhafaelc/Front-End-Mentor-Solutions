const apiUrl = "https://api.adviceslip.com/advice";
const idElement = document.querySelector(".id-js");
const quoteElement = document.querySelector(".quote-js");
const buttonElement = document.querySelector(".button-js");
let id;
let quote;

const fetchAdvice = () => {
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `HTTP error! status: ${response.status}`
        );
      }
      return response.json();
    })
    .then((data) => {
      id = data.slip.id;
      quote = data.slip.advice;
      updateAdvice();
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
};

const updateAdvice = () => {
  idElement.textContent = `Advice #${id}`;
  quoteElement.textContent = `"${quote}"`;
};

fetchAdvice();
buttonElement.addEventListener("click", () => {
  fetchAdvice();
});
