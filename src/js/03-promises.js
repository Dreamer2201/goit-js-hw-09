
import Notiflix from 'notiflix';

  const  formEl = document.querySelector('.form');
  const firstDelayInputEl = document.querySelector('input[name="delay"]');
  const stepDelayInputEl = document.querySelector('input[name="step"]');
  const amountInputEl = document.querySelector('input[name="amount"]');
  const btnSubmitEl = document.querySelector('button');
  

  function onSubmitForm (event) {
    event.preventDefault();
    const stepDelay = stepDelayInputEl.value;
    const firstDelay = firstDelayInputEl.value;
    const amount = event.currentTarget.elements[2].value;
     
    for (let position = 1; position <= amount; position ++) {
      console.log(position);
      setTimeout(() => createPromise(position, stepDelay)
      .then(({ position, stepDelay }) => {
        
        Notiflix.Notify.info(`✅ Fulfilled promise ${position} in ${stepDelay}ms`,
        {
          timeout: 6000, 
        },);
        // console.log(`✅ Fulfilled promise ${position} in ${stepDelay}ms`);
        })
      .catch(({ position, stepDelay }) => {
        Notiflix.Notify.info(`❌ Rejected promise ${position} in ${stepDelay}ms`,
        {
          timeout: 6000,
        },);
        // console.log(`❌ Rejected promise ${position} in ${stepDelay}ms`);
        }, firstDelay))
        
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

function thanksGiven() {
  Notiflix.Notify.info('It was such a hard to do, but interesting! Thank you for your work!',
        {
          timeout: 6000,
        },);
}

formEl.addEventListener('submit', onSubmitForm);