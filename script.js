let stopwatch;
let lapTimes = [];
let isRunning = false;

function startStopwatch() {
    if (!isRunning) {
        stopwatch = setInterval(updateTime, 1000);
        isRunning = true;
    }
}

function pauseStopwatch() {
    clearInterval(stopwatch);
    isRunning = false;
}

function resetStopwatch() {
    clearInterval(stopwatch);
    isRunning = false;
    lapTimes = [];
    updateTime();
    displayLapTimes();
}

function recordLap() {
    if (isRunning) {
        lapTimes.unshift(getFormattedTime());
        displayLapTimes();
    }
}

function updateTime() {
    const timeDisplay = document.getElementById("timeDisplay");
    const currentTime = getFormattedTime();
    timeDisplay.textContent = currentTime;
}

function getFormattedTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
}

function displayLapTimes() {
    const lapTimesList = document.getElementById("lapTimes");
    lapTimesList.innerHTML = "";
    lapTimes.forEach((lap, index) => {
        const lapItem = document.createElement("li");
        lapItem.textContent = `Lap ${index + 1}: ${lap}`;
        lapTimesList.appendChild(lapItem);
    });
}
