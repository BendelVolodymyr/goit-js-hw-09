// Описаний в документації
import flatpickr from "flatpickr";
import Notiflix from 'notiflix';
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

const doomEl = {
  datetimeEl: document.querySelector('input#datetime-picker'),
  dataDayEl: document.querySelector('span[data-days]'),
  dataHoursEl: document.querySelector('span[data-hours'),
  dataMinutesEl: document.querySelector('span[data-minutes'),
  dataSecondsEl: document.querySelector('span[data-seconds'),
  buttonStartEl: document.querySelector('button[data-start'),
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    valid(selectedDates);
  },
};

doomEl.buttonStartEl.setAttribute('disabled', 'true');
flatpickr(doomEl.datetimeEl, options);

let selectedDate = null;
let timeData = null;
let resultTime = {};

function valid(selectedDates) {
  selectedDate = selectedDates[0].getTime();
  timeData = new Date().getTime();

  if (selectedDate > timeData) {
            doomEl.buttonStartEl.removeAttribute('disabled');
            Notiflix.Notify.success('The date is selected');
  } else {
           Notiflix.Notify.failure('Please choose a date in the future');
           doomEl.buttonStartEl.setAttribute('disabled', 'true');
  };
};

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
};





doomEl.buttonStartEl.addEventListener('click', onClick);

function onClick() {
  const timeId = setInterval(() => {
    timeData = new Date().getTime();
    if (selectedDate - timeData >= 1000) {
      doomEl.buttonStartEl.setAttribute('disabled', 'true');
      resultTime = convertMs(selectedDate - timeData);
      doomEl.dataDayEl.textContent = resultTime.days;
      doomEl.dataHoursEl.textContent = resultTime.hours;
      doomEl.dataMinutesEl.textContent = resultTime.minutes;
      doomEl.dataSecondsEl.textContent = resultTime.seconds;
    } else {
      Notiflix.Notify.failure('Time is loose');
      clearTimeout(timeId);
      doomEl.buttonStartEl.removeAttribute('disabled');
      doomEl.dataSecondsEl.textContent = '00';
    };
  }, 1000);
};



