
let slides = document.querySelectorAll('.header__back-item');
let dots = document.querySelectorAll('.header__dot');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 3000);
 
function nextSlide() {
    slides[currentSlide].className = 'header__back-item';
    dots[currentSlide].className = 'header__dot';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'header__back-item header__back-item-showing';
    dots[currentSlide].className ='header__dot active';
}