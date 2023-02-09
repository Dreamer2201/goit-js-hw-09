// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

import Notiflix from 'notiflix';

const inputPickerEl = document.querySelector('#datetime-picker');
const btnStartEl = document.querySelector('button[data-start]');
const spanDaysEl = document.querySelector('span[data-days]');
const spanHoursEl = document.querySelector('span[data-hours]');
const spanMinutesEl = document.querySelector('span[data-minutes]');
const spanSecondsEl = document.querySelector('span[data-seconds]');

console.log(inputPickerEl.value);

btnStartEl.addEventListener('click', getSelectedTime);
btnStartEl.setAttribute('disabled', 'true');

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose,
  };
  
function onClose(selectedDates) {
  const currentTime = Date.now();
          const ms = selectedDates[0] - currentTime;
          if (ms < 0) {
            Notiflix.Notify.failure('Please choose a date in the future');
          } else {
            btnStartEl.removeAttribute('disabled', 'true');         
          }
}
   
flatpickr(inputPickerEl, options);

function getSelectedTime() {   
timerStart();
btnStartEl.setAttribute('disabled', 'false');
}

function timerStart() {
  inputPickerEl.setAttribute('disabled', 'true');
  const selectedDay = new Date(inputPickerEl.value);
  const selectedTimeMs = selectedDay.getTime();  
  const intervalId = setInterval(() => {
  const currentTime = Date.now();
  const deltaTime = selectedTimeMs - currentTime;

  if (deltaTime < 0 && deltaTime > -1000) {
    clearInterval(intervalId);
    inputPickerEl.removeAttribute('disabled', 'true');
  } else {
    updateTime(convertMs(deltaTime));
  }
  }, 1000);

};

function pad(value) {
  return String(value).padStart(2, '0');
}
function padDays(value) {
  if(value < 100) {
  return String(value).padStart(2, '0');
 } return String(value).padStart(3, '0');
}

function convertMs(time) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = padDays(Math.floor(time / day));
  const hours = pad(Math.floor((time % day) / hour));
  const minutes = pad(Math.floor(((time % day) % hour) / minute));
  const seconds = pad(Math.floor((((time % day) % hour) % minute) / second));
 
  const getTime = { days, hours, minutes, seconds };
  return getTime;
}

function updateTime({ days, hours, minutes, seconds }) {
  spanDaysEl.innerHTML = days;
  spanHoursEl.innerHTML = hours;
  spanMinutesEl.innerHTML = minutes;
  spanSecondsEl.innerHTML = seconds;
}
//#endregion
// timer in circles
let dayEl = document.getElementById('days');
let hourEl = document.getElementById('hours');
let minEl = document.getElementById('minutes');
let secEl = document.getElementById('seconds');

let dd = document.getElementById('dd');
let dh = document.getElementById('dh');
let dm = document.getElementById('dm');
let ds = document.getElementById('ds');

let dotDays = document.querySelector('.dot-day');
let dotHours = document.querySelector('.dot-hours');
let dotMin = document.querySelector('.dot-min');
let dotSec = document.querySelector('.dot-sec');

let endDate = '01/01/2024 00:00:00';

let x = setInterval(function() {
  let endTime = new Date(inputPickerEl.value).getTime();
  let nowTime = new Date().getTime();
  let diff = endTime - nowTime;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  let d = Math.floor(diff / (1000 * 60 * 60 * 24))
  let h = Math.floor((diff % day) / hour);
  let m = Math.floor(((diff % day) % hour) / minute);
  let s = Math.floor((((diff % day) % hour) % minute) / second);


  dayEl.innerHTML = `${d} <span>days</span>`;
  hourEl.innerHTML = `${h} <span>hours</span>`;
  minEl.innerHTML = `${m} <span>min</span>`;
  secEl.innerHTML = `${s} <span>sec</span>`;

  // aminate stroke
  dd.style.strokeDashoffset = 440 - (440 * d) / 365;
  dh.style.strokeDashoffset = 440 - (440 * h) / 24;
  dm.style.strokeDashoffset = 440 - (440 * m) / 60;
  ds.style.strokeDashoffset = 440 - (440 * s) / 60;

  // animate dots
  dotDays.style.transform = `rotateZ(${d*0.986}deg)`;
  dotHours.style.transform = `rotateZ(${h*16}deg)`;
  dotMin.style.transform = `rotateZ(${m*6}deg)`;
  dotSec.style.transform = `rotateZ(${s*6}deg)`;
}, 1000);


