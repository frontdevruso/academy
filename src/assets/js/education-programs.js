document.addEventListener("DOMContentLoaded", () => {
    const timerSlider = document.querySelector(".timer__slider");

    if (timerSlider) {
        let mySwiper;
        const initializeSlider = () => {
            mySwiper = new Swiper(timerSlider, {
                slidesPerView: "auto",
                pagination: {
                    el: ".timer__slider-pagination",
                    clickable: true,
                },
            });
        };

        if (window.innerWidth <= 1300) {
            initializeSlider();
            timerSlider.dataset.mobile = "true";
        }

        const mobileSlider = () => {
            if (window.innerWidth <= 1300 && timerSlider.dataset.mobile == "false") {
                initializeSlider();
                timerSlider.dataset.mobile = "true";
            }

            if (window.innerWidth > 1300) {

                timerSlider.dataset.mobile = "false";
                if (timerSlider.classList.contains("swiper-initialized")) {
                    mySwiper.destroy();
                }
            }
        };
        mobileSlider();

        window.addEventListener("resize", () => {
            mobileSlider();
        });
    }
});