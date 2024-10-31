'use strict';

const clockDisplay = document.querySelector(".clock");
const alarmForm = document.querySelector(".alarm-form");
const alarmSetIndicator = document.querySelector(".alarm-set-indicator");
const alarmSound = document.querySelector(".alarm-sound");
let alarmTime = null;

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    clockDisplay.textContent = `${hours}:${minutes}`;

    if (alarmTime && `${hours}:${minutes}` === alarmTime) {
        alarmSound.play();
        alarmSetIndicator.textContent = "";
        alarmSetIndicator.classList.remove("error");
        alarmTime = null;
    }
}

document.querySelector(".set-alarm").addEventListener("click", () => {
    const hours = document.querySelector(".hours").value;
    const minutes = document.querySelector(".minutes").value;

    if (hours === "" || minutes === "" || hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
        alarmSetIndicator.textContent = "Please enter a valid time.";
        alarmSetIndicator.classList.add("error");
        return;
    }

    alarmTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
    alarmSetIndicator.textContent = `Alarm set for ${alarmTime}`;
    alarmSetIndicator.classList.remove("error");
});

setInterval(updateClock, 1000); 

