let slideIndex = 0;
let slides = document.getElementsByClassName("mySlides");

function showSlides(next = true) {
    let currentSlide = slides[slideIndex];

    // Remove active class from the current slide
    currentSlide.classList.remove("active");
    currentSlide.classList.add(next ? "prev" : "next");

    // Update slide index
    slideIndex = next ? (slideIndex + 1) % slides.length : (slideIndex - 1 + slides.length) % slides.length;
    
    let nextSlide = slides[slideIndex];

    // Ensure the next slide is ready
    nextSlide.classList.remove("prev", "next");
    nextSlide.classList.add("active");

    // Automatically move to next slide after 3s
    setTimeout(() => showSlides(true), 3000);
}

// Start the slideshow
document.addEventListener("DOMContentLoaded", () => {
    slides[slideIndex].classList.add("active");
    setTimeout(() => showSlides(true), 3000);
});
