let timer;
let maintenanceDuration = 300 * 24 * 60 * 60; // Wartungsarbeiten für 300 Tage in Sekunden

function startTimer() {
    const timerDisplay = document.getElementById('timer');
    let remainingTime = maintenanceDuration;

    timerDisplay.innerHTML = formatTime(remainingTime);

    timer = setInterval(() => {
        remainingTime--;

        if (remainingTime < 0) {
            clearInterval(timer);
            showMessage();
        } else {
            timerDisplay.innerHTML = formatTime(remainingTime);
        }
    }, 1000);
}

function formatTime(seconds) {
    const days = String(Math.floor(seconds / 86400)).padStart(2, '0'); // 86400 Sekunden pro Tag
    const hours = String(Math.floor((seconds % 86400) / 3600)).padStart(2, '0'); // 3600 Sekunden pro Stunde
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0'); // 60 Sekunden pro Minute
    const secs = String(seconds % 60).padStart(2, '0'); // Sekunden
    return `${days}:${hours}:${minutes}:${secs}`;
}

function showMessage() {
    const message = document.getElementById('message');
    message.classList.add('show');
}