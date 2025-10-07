document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector("#mainCarousel");
  if (carousel) {
    const bsCarousel = new bootstrap.Carousel(carousel, {
      interval: 3000,
      wrap: true,
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
