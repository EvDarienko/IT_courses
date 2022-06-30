let slides = ['https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg', 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg', 'https://cdn.pixabay.com/photo/2018/05/04/16/50/cat-3374422_960_720.jpg'];

let container = document.querySelector('.container');
let sliderContainer = document.querySelector('.slider-container');
let sliderWrap = document.querySelector('.slider-wrapper');
let images = document.querySelectorAll('.slider-container img');
let arrowLeft = document.querySelector('.arrow-left');
let arrowRight = document.querySelector('.arrow-right');
let dots = document.querySelector('.dots');

slides.forEach((item, index) => {
    let img = document.createElement('img');
    img.src = item;
    img.style.width = '400px';
    sliderWrap.append(img);

    let dot = document.createElement('div');
    dot.style.cssText = 'width: 15px; height: 15px; border-radius: 50%; background-color: black; transition: 1s;';
    dots.append(dot);
    (index == 0) && dot.classList.add('active');
    dots.style.cssText = 'position: absolute; top: 100%; left: 50%; transform: translateX(-50%); display: flex; width: 100px; justify-content: space-between;';

})

let img = document.querySelectorAll('.slider-wrapper img');
let dot = dots.querySelectorAll('div');
let counter = 0;

arrowRight.addEventListener('click', (e) => {
    if (counter == img.length - 1) {
        sliderWrap.style.left = '0px';
        dot[counter].classList.remove('active');
        dot[0].classList.add('active');
        counter = 0;
    } else {
        counter++;
        sliderWrap.style.left = getCoords(sliderWrap, 'left') - 400 + 'px';
        dot[counter - 1].classList.remove('active');
        dot[counter].classList.add('active');
    }
})

arrowLeft.addEventListener('click', (e) => {
    if (counter == 0) {
        sliderWrap.style.left = -400 * (img.length - 1) + 'px';
        dot[counter].classList.remove('active');
        dot[img.length - 1].classList.add('active');
        counter = img.length - 1;
    } else {
        counter--;
        sliderWrap.style.left = getCoords(sliderWrap, 'left') + 400 + 'px';
        dot[counter + 1].classList.remove('active');
        dot[counter].classList.add('active');
    }
})
 
function getCoords(elem, side) {
   return parseInt(getComputedStyle(elem)[side])
}
