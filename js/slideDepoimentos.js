const slideContainer = document.querySelector(".box-flex");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

const numSlides = Math.ceil(slide.children.length / 6);
let currentSlide = 0;

function goToSlide(slideIndex) {
    slide.style.transform = `translateX(-${slideIndex * 33.5}%)`;
}

prevButton.addEventListener("click", () => {
    if (currentSlide > 0) {
        currentSlide--;
        goToSlide(currentSlide);
    }
});

nextButton.addEventListener("click", () => {
    if (currentSlide < numSlides - 1) {
        currentSlide++;
        goToSlide(currentSlide);
    }
});

// Inicialmente, exiba o primeiro slide
goToSlide(currentSlide);