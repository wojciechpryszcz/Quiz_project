const countdownDuration = 30;

const timerElement = document.getElementById("timer");

let countdown = countdownDuration;
let intervalId = setInterval(() => {
  timerElement.textContent = countdown;
  countdown--;
  if (countdown < 0) {
    clearInterval(intervalId);
    timerElement.textContent = "Time is up!";
  }
}, 1000);
