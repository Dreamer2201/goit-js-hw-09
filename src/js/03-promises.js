
  const  formEl = document.querySelector('.form');
  const delayInputEl = document.querySelector('input[name="delay"]');
  const stepInputEl = document.querySelector('input[name="step"]');
  const amountInputEl = document.querySelector('input[name="amount"]');
  const btnSubmitEl = document.querySelector('button');

  console.log(formEl);

  formEl.addEventListener('submit', onSubmitForm);

  function onSubmitForm(event) {
    event.preventDefault();
     
    const amount = event.currentTarget.elements[2].value;
    const delay = event.currentTarget.elements[0].value;
    const stepDelay = event.currentTarget.elements[1].value;
    console.log(amount);

    for(let position = 0; position < amount; position++) {
      
      const promise = new Promise((resolve, reject) => {
        const shouldResolve = Math.random() > 0.3;

          setTimeout(() => {
            if (shouldResolve) {
              resolve('✅ Fulfilled promise ${position} in ${delay}ms');
            } else {
              reject('❌ Rejected promise ${position} in ${delay}ms');
            }
            return promise;
          }, stepDelay);
          
      });
      promise.then(result => {
        console.log(result);
      }).catch(error => {
        console.log(error);
      })

    }
  }


  
      