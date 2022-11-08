// "use strict";

const hourHand = document.getElementById("hour-hand");
const minuteHand = document.getElementById("minute-hand");
const secondHand = document.getElementById("second-hand");

function updateClock() {
  const currentDate = new Date();
  setTimeout(updateClock, 1000);
  console.log(currentDate);
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  const hourDeg = (hours / 12) * 360;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
  const minDeg = (minutes / 60) * 360;
  minuteHand.style.transform = `rotate(${minDeg}deg)`;
  const secDeg = (seconds / 60) * 360;
  secondHand.style.transform = `rotate(${secDeg}deg)`;
}

updateClock();
