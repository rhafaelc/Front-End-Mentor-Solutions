const facebookButton = document.querySelector(
  ".facebook-button"
);
const pinterestButton = document.querySelector(
  ".pinterest-button"
);
const instagramButton = document.querySelector(
  ".instagram-button"
);

facebookButton.addEventListener("click", () => {
  window.open("https://www.facebook.com/", "_blank");
});

pinterestButton.addEventListener("click", () => {
  window.open("https://www.pinterest.com/", "_blank");
});

instagramButton.addEventListener("click", () => {
  window.open("https://www.instagram.com/", "_blank");
});
