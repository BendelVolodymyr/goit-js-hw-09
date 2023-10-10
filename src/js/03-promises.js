import Notiflix from 'notiflix';

const formEl = document.querySelector('form');

formEl.addEventListener('submit', onPromiseCreate);

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

  let delay = Number(formEl.elements.delay.value);
  let step = Number(formEl.elements.step.value);
  let amount = Number(formEl.elements.amount.value);
  let promiseDelay = delay;
  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, promiseDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    promiseDelay = delay + step * i;
  }
};
