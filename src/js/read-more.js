const btnEl = document.querySelectorAll('.btnReadMore');
const mainTextEl = document.querySelectorAll('.cardText');
const dotsEl = document.querySelectorAll('.dotsCard');
const moreEl = document.querySelectorAll('.additionalText');
const containerEl = document.querySelector('.container');
const boxCardEl = document.querySelectorAll('.boxCard');
btnEl.innerHTML = 'read more';
console.log(boxCardEl);

const arrayBoxCard = [...boxCardEl];
console.log(arrayBoxCard);

function showHiddenText(e) {
    const currentBtn = e.target;
    const currentBlock = currentBtn.closest('div');
    currentBlock.classList.toggle('show-more');
    
    if (currentBlock.classList.contains("show-more")) {
            currentBtn.innerHTML = "hide text"
        } else  {
            currentBtn.innerHTML = "read more"
        }
} 

containerEl.addEventListener('click', showHiddenText);
