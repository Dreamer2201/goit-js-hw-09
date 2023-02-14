const nextBtn = document.getElementById('nextImg');
const prevBtn = document.getElementById('prevImg');
const imgs = document.querySelectorAll('.elem');

let index = 0;

const toggleActiveSlide = ind => {
    for (item of imgs) {
        item.classList.remove('active');
    }
   imgs[ind].classList.add('active');
}

const nextImg = () => {
    if(index === (imgs.length - 1)) {
        index = 0;
        toggleActiveSlide(index);
    } else {
        index ++;
        toggleActiveSlide(index);
    }
}
const prevImg = () => {
    if(index == 0) {
        index = (imgs.length - 1);
        toggleActiveSlide(index);
    } else {
        index --;
        toggleActiveSlide(index);
    }
}

nextBtn.addEventListener('click', nextImg);
prevBtn.addEventListener('click', prevImg);

setInterval(nextImg, 3000);
