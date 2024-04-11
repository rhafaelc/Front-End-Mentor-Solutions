const countToDate = new Date("2024-04-21");
let previousTimeBetweenDates;
setInterval(() => {
  const currentDate = new Date();
  const timeDiff = countToDate - currentDate;
  const timeBetweenDates = Math.ceil(timeDiff / 1000);

  if(previousTimeBetweenDates !== timeBetweenDates) {
    flipAllCards(timeBetweenDates);
  }

  previousTimeBetweenDates = timeBetweenDates
}, 250);

function flipAllCards(timeBetweenDates) {
  const seconds = timeBetweenDates % 60;
  const minutes = Math.floor(timeBetweenDates / 60) % 60;
  const hours = Math.floor(timeBetweenDates / 3600) % 24;
  const days = Math.floor(timeBetweenDates / 86400);

  if(timeBetweenDates < 0) {
    return;
  }

  const time = [days, hours, minutes, seconds];

  const flipDays = document.querySelector(".days-left");
  const flipHours = document.querySelector(".hours-left");
  const flipMinutes = document.querySelector(".minutes-left");
  const flipSeconds = document.querySelector(".seconds-left");

  flip(flipDays, time[0]);
  flip(flipHours, time[1]);
  flip(flipMinutes, time[2]);
  flip(flipSeconds, time[3]);

}

function flip(flipCard, newNumber) {
  const topCard = flipCard.querySelector(".top-card");
  const startNumber = parseInt(topCard.textContent);

  if (newNumber === parseInt(topCard.textContent)) return;


  const botCard = flipCard.querySelector(".bot-card");

  const topFlip = document.createElement("div");
  topFlip.classList.add("top-flip");
  const botFlip = document.createElement("div");
  botFlip.classList.add("bot-flip");

  botCard.textContent = twoDigit(startNumber);
  topFlip.textContent = twoDigit(startNumber);
  botFlip.textContent = twoDigit(newNumber);

  flipCard.addEventListener("animationstart", () => {
    topCard.textContent = twoDigit(newNumber);
  });
  flipCard.addEventListener("animationend", () => {
    topFlip.remove();
  });
  flipCard.addEventListener("animationend", () => {
    botCard.textContent = twoDigit(newNumber);
    setTimeout(() => {
      botFlip.remove();
    }, 250);
  });
  flipCard.append(topFlip, botFlip);
}

function twoDigit(number) {
  return number < 10 ? `0${number}` : number;
}

