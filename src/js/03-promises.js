
import Notiflix from 'notiflix';

  const  formEl = document.querySelector('.form');
  const firstDelayInputEl = document.querySelector('input[name="delay"]');
  const stepDelayInputEl = document.querySelector('input[name="step"]');
  const amountInputEl = document.querySelector('input[name="amount"]');

  function onSubmitForm (event) {
    event.preventDefault();
    const stepDelay = stepDelayInputEl.value;
    const firstDelay = firstDelayInputEl.value;
    const amount = event.currentTarget.elements[2].value;
     
    for (let position = 0; position < amount; position ++) {

      setTimeout(() => createPromise(position, stepDelay)
      .then(({ position, stepDelay }) => {
        
        Notiflix.Notify.success(`✅ Fulfilled promise ${position+1} in ${stepDelay}ms`,
        {
          timeout: (10000 - position * stepDelay), 
        },);
        // console.log(`✅ Fulfilled promise ${position} in ${stepDelay}ms`);
        })
      .catch(({ position, stepDelay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position+1} in ${stepDelay}ms`,
        {
          timeout: (10000 - position * stepDelay),
        },);
        // console.log(`❌ Rejected promise ${position} in ${stepDelay}ms`);
        }), firstDelay);
  } 
  }
 
  function createPromise(position, stepDelay) {
    
   const shouldResolve = Math.random() > 0.3;
   return new Promise ((resolve, reject) => {
    setTimeout(() => {
      if(shouldResolve) {
        resolve({position, stepDelay})
      } else {
        reject({position, stepDelay});
      }
    }, position * stepDelay);
   }); 
};

formEl.addEventListener('submit', onSubmitForm);