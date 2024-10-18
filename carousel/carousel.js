let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    updateCarousel();
}

function setSlide(index) {
    currentSlide = index;
    updateCarousel();
}

function updateCarousel() {
    const slides = document.querySelectorAll('.slide');
    slides.forEach( slide => slide.classList.remove('active'));
    slides[currentSlide].classList.add('active');
    document.querySelector('.slides').style.transform = ` translateX(-${currentSlide * 100}%) `;

    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
}

document.querySelector('.slide').classList.add('active')