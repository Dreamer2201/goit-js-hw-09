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



//carusel with translate

const wrapperImg = document.querySelector('.wrapperImg');
const images = document.querySelectorAll('.img');
const imgWrappers = document.querySelectorAll('.item');

let slider = [];
console.log(images);
for(let i=0; i < images.length; i++) {
    slider[i] = images[i].src;
    wrapperImg.innerHTML = '';
}
console.log(images);

let step = 0;
let offset = 0;  

function createSlider() {
    let newImg = document.createElement('img');
    newImg.src = slider[step];
    newImg.classList.add('img');
    newImg.classList.add('item');
    newImg.style.left = offset*500 + "px";

    wrapperImg.appendChild(newImg);

    if(step +1 === slider.length) {
        step = 0;
        offset = 0;
    } else {
        step += 1;
        offset=1;
    }
}
createSlider();
createSlider();

function showNextSlide() {
    const twoSlides = document.querySelectorAll('.item');
    let offset2 = 0;
    for(let i=0; i < twoSlides.length; i++) {
        twoSlides[i].style.left = offset2*500 - 500 + 'px';
        offset2 = 1;
    }
    createSlider();
    setTimeout(() => twoSlides[0].remove(), 1000);
}

wrapperImg.addEventListener('click', showNextSlide);
console.log();

