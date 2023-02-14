const nextBtn = document.getElementById('nextImg');
const prevBtn = document.getElementById('prevImg');
const imgs = document.querySelectorAll('.elem');
const dots = document.querySelectorAll('.dotImg');
let index = 0;

const toggleActiveSlide = ind => {
    for (item of imgs) {
        item.classList.remove('active');
    }
   imgs[ind].classList.add('active');
}
const toggleActiveDot = ind => {
    for (item of dots) {
        item.classList.remove('active-dot');
    } dots[ind].classList.add('active-dot');
}
const nextImg = () => {
    if(index === (imgs.length - 1)) {
        index = 0;
        toggleActiveSlide(index);
        toggleActiveDot(index);
    } else {
        index ++;
        toggleActiveSlide(index);
        toggleActiveDot(index);
    }
}
const prevImg = () => {
    if(index == 0) {
        index = (imgs.length - 1);
        toggleActiveSlide(index);
        toggleActiveDot(index);
    } else {
        index --;
        toggleActiveSlide(index);
        toggleActiveDot(index);
    }
}

nextBtn.addEventListener('click', nextImg);
prevBtn.addEventListener('click', prevImg);

setInterval(nextImg, 5000);
