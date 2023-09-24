"use strict";
const button = document.querySelectorAll("[data-carousel-button]");

button.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");
    // const slides = document.querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;

    //for prev
    if (newIndex < 0) {
      newIndex = slides.children.length - 1;
    } else if (newIndex >= 0) {
      newIndex = newIndex;
    }
    //for next
    if (newIndex >= slides.children.length) {
      newIndex = 0;
    } else {
      newIndex = newIndex;
    }

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});
