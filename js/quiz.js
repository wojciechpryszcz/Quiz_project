const countdownDuration = 30;

const timerElement = document.getElementById("timer");

let countdown = countdownDuration;
const intervalId = setInterval(() => {
  timerElement.textContent = countdown;
  countdown--;
  if (countdown < 0) {
    clearInterval(intervalId);
    timerElement.textContent = "Time is up!";
    window.location.href = "ranking5.html";
  }
}, 1000);
