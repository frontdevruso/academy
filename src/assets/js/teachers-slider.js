document.addEventListener("DOMContentLoaded", () => {
    const teachersSlider = document.querySelector(".teachers__slider");

    if (teachersSlider) {
        let mySwiper;

        const initializeSlider = () => {

            mySwiper = new Swiper(teachersSlider, {
                slidesPerView: "auto",
                pagination: {
                    el: ".teachers__slider-pagination",
                    clickable: true,
                },
            });

        };

        if (window.innerWidth <= 1440) {
            initializeSlider();
            teachersSlider.dataset.mobile = "true";
        }

        const mobileSlider = () => {
            if (window.innerWidth <= 1440 && teachersSlider.dataset.mobile == "false") {
                initializeSlider();
                teachersSlider.dataset.mobile = "true";
            }

            if (window.innerWidth > 1440) {

                teachersSlider.dataset.mobile = "false";
                if (teachersSlider.classList.contains("swiper-initialized")) {
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