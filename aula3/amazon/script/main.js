document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector("#mainCarousel");
  if (carousel) {
    const bsCarousel = new bootstrap.Carousel(carousel, {
      interval: 3000,
      wrap: true,
    });
  }

  const backToTop = document.querySelector(".back-to-top a");
  if (backToTop) {
    backToTop.addEventListener("click", function (e) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  const categoryCarousel = document.querySelector("#categoryCarouselControls");
  if (categoryCarousel) {
    const bsCategoryCarousel = new bootstrap.Carousel(categoryCarousel, {
      interval: false,
      wrap: false,
    });
  }
});
