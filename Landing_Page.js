document.addEventListener("DOMContentLoaded", function () {
    let scrollContainer = document.querySelector(".Specials");
    let backBtn = document.getElementById("Backbtn");
    let nextBtn = document.getElementById("Frontbtn");

    if (scrollContainer && backBtn && nextBtn) {
        // Set smooth scrolling globally
        scrollContainer.style.scrollBehavior = "smooth";

        // Mouse wheel scrolling
      /*  scrollContainer.addEventListener("wheel", (evt) => {
            evt.preventDefault();
            scrollContainer.scrollBy({ left: evt.deltaY, behavior: "smooth" });
        });*/

        // Next button
        nextBtn.addEventListener("click", () => {
            scrollContainer.scrollBy({ left: 900, behavior: "smooth" });
        });

        // Back button
        backBtn.addEventListener("click", () => {
            scrollContainer.scrollBy({ left: -900, behavior: "smooth" });
        });
    }
});
