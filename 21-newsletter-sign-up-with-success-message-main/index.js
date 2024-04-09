mainDoc = document.querySelector(".main-js");
formDoc = document.querySelector(".form-js");
inputEmail = document.querySelector(".input-js");
submitBtn = document.querySelector(".submit-js");
successMsg = document.querySelector(".success-msg-js");
dismissBtn = document.querySelector(".dismiss-js");

inputEmail.addEventListener("keyup", (e) => {
  checkInput();
});

formDoc.addEventListener("submit", function (e) {
  e.preventDefault();
  userEmail = inputEmail.value;
  subscribe(userEmail);
  formDoc.reset();
});

dismissBtn.addEventListener("click", function () {
  mainDoc.style.display = "flex";
  successMsg.style.display = "none";
});

function subscribe(email) {
  successMsg.querySelector("span").textContent = email;
  mainDoc.style.display = "none";
  successMsg.style.display = "flex";
  console.log(successMsg);
}

function checkInput() {
  if (
    !inputEmail.validity.valid &
    !inputEmail.validity.valueMissing
  ) {
    formDoc.classList.add("is-error");
  } else {
    formDoc.classList.remove("is-error");
  }
}
