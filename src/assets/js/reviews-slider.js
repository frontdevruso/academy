if (document.querySelector('.reviews__slider')) {
    let reviewsSlider = new Swiper(".reviews__slider", {
        slidesPerView: "auto",
        spaceBetween: 100,
        grabCursor: true,
    
        navigation: {
          nextEl: ".reviews__slider--next",
          prevEl: ".reviews__slider--prev",
        },
    });
}