
let is24HourMode = false;

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let session = "";

    if (!is24HourMode) {
        session = hours >= 12 ? "PM" : "AM";
        hours = hours % 12;
        if (hours === 0) hours = 12;
    }

    // Pad numbers with zeros if necessary
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    const timeStr = `${hours}:${minutes}:${seconds}` + (is24HourMode ? "" : " " + session);
    document.getElementById("clock").innerText = timeStr;
}

function toggleTimeMode() {
    const toggle = document.getElementById("timeModeSwitch");
    is24HourMode = toggle.checked;
    updateClock();
}

setInterval(updateClock, 1000);
updateClock();