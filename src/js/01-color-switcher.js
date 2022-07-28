const startBtnEl = document.querySelector('button[data-start]');
console.log(startBtnEl);
const stopBtnEl = document.querySelector('button[data-stop]');
console.log(stopBtnEl);
const bodyEl = document.querySelector('body');

stopBtnEl.setAttribute('disabled', 'true');

startBtnEl.addEventListener('click', onStartBtnClick);
stopBtnEl.addEventListener('click', onStopBtnClick);

let intervalId = null;

function onStartBtnClick() {
    intervalId = setInterval(getRandomHexColor, 1000, 1000);
    startBtnEl.setAttribute('disabled', 'true');
    stopBtnEl.removeAttribute('disabled', 'true');
};
function onStopBtnClick() {
    clearInterval(intervalId);
    startBtnEl.removeAttribute('disabled', 'true');
    stopBtnEl.setAttribute('disabled', 'true');
};
function getRandomHexColor() {
    return bodyEl.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
