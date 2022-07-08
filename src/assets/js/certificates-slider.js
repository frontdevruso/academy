if (document.querySelector('.certificates__slider')) {
    let certificatesSlider = new Swiper(".certificates__slider", {
        slidesPerView: 1,
        spaceBetween: 60,
        grabCursor: true,
    
        navigation: {
            nextEl: ".certificates__slider--next",
            prevEl: ".certificates__slider--prev",
        },

        breakpoints: {
            575: {
                spaceBetween: 60,
                slidesPerView: "auto",
            }
          }
    }); 
}