// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

const inputPickerEl = document.querySelector('#datetime-picker');
const btnStartEl = document.querySelector('button[data-start]');
const spanDaysEl = document.querySelector('span[data-days]');
const spanHoursEl = document.querySelector('span[data-hours]');
const spanMinutesEl = document.querySelector('span[data-minutes]');
const spanSecondsEl = document.querySelector('span[data-seconds]');

btnStartEl.setAttribute('disabled', 'true');

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      const currentTime = Date.now();
          const ms = selectedDates[0] - currentTime;
          if (ms < 0) {
            window.alert('Please choose a date in the future');
          } else {
            btnStartEl.removeAttribute('disabled', 'true');
            
          }
      // console.log(selectedDates[0]);
    },
  };
  
flatpickr(inputPickerEl, options);

btnStartEl.addEventListener('click', getSelectedTime);

function getSelectedTime() {
  const selectedDay = new Date(inputPickerEl.value);
  const selectedTimeMs = selectedDay.getTime();
    
    const timer = {
      start() {
      const intervalId = setInterval(() => {
      const currentTime = Date.now();
      const ms = selectedTimeMs - currentTime;

      if (ms < 0 && ms > -1000) {
        clearInterval(intervalId);
      } else {
        convertMs(ms);
      }
      }, 1000);
      },
};
  timer.start();
  
}

function pad(value) {
  return String(value).padStart(2, '0');
}
function padDays(value) {
  return String(value).padStart(3, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = padDays(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));
 
  const getTime = { days, hours, minutes, seconds };

  spanDaysEl.innerHTML = getTime.days;
  spanHoursEl.innerHTML = getTime.hours;
  spanMinutesEl.innerHTML = getTime.minutes;
  spanSecondsEl.innerHTML = getTime.seconds;
  // console.log(getTime);
  return getTime;
}