import Notiflix from 'notiflix';

const doomEl = {
  inputDelayEl: document.querySelector('input[name="delay"]'),
  inputStepEl: document.querySelector('input[name="step"]'),
  inputAmountEl: document.querySelector('input[name="amount"]'),
  buttonCreateEl: document.querySelector('button'),
};


doomEl.buttonCreateEl.addEventListener('click', onPromiseCreate);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    var shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
};

function onPromiseCreate(event) {
  event.preventDefault();

  let delay = Number(doomEl.inputDelayEl.value);
  let step = Number(doomEl.inputStepEl.value);
  let amount = Number(doomEl.inputAmountEl.value);

  for (let i = 1; i <= amount; i += 1) {
    let promiseDelay = delay + step * i;

    createPromise(i, promiseDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
};
