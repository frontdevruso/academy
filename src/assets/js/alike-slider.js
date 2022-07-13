if (document.querySelector('.alike-articles__slider')) {
    let alikeSlider = new Swiper(".alike-articles__slider", {
        slidesPerView: "auto",
        spaceBetween: 75,
        grabCursor: true,
    
        navigation: {
          nextEl: ".alike-articles__slider--next",
          prevEl: ".alike-articles__slider--prev",
        },
    });
}