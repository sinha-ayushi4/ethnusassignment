const train = document.getElementById("train");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");

function start() {
    train.style.animationPlayState = "running";
}

function stop() {
    train.style.animationPlayState = "paused";
}

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);