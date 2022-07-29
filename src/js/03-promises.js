
import Notiflix from 'notiflix';

  const  formEl = document.querySelector('.form');
  const firstDelayInputEl = document.querySelector('input[name="delay"]');
  const stepDelayInputEl = document.querySelector('input[name="step"]');
  const amountInputEl = document.querySelector('input[name="amount"]');

  formEl.addEventListener('submit', onSubmitForm);

  function onSubmitForm (event) {
    event.preventDefault();
    let delay = Number(firstDelayInputEl.value);
    const step = Number(stepDelayInputEl.value);
    const amount = Number(amountInputEl.value);
 
    for (let position = 1; position <= amount; position ++) {
      createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`,)})
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`,)})
      delay += step;
  } 
  }
 
  function createPromise(position, delay) {
    const shouldResolve = Math.random() > 0.3;
    return new Promise ((resolve, reject) => {
    setTimeout(() => {
      if(shouldResolve) {
        resolve({position, delay})
      } else {
        reject({position, delay});
      }
    }, delay);
   }); 
};
