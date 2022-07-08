document.addEventListener("DOMContentLoaded", () => {
    const educationProgramsSlider = document.querySelector(".education-programs__slider");

    if (educationProgramsSlider) {
        let mySwiper;

        const initializeSlider = () => {

            mySwiper = new Swiper(educationProgramsSlider, {
                slidesPerView: "auto",
                pagination: {
                    el: ".education-programs__slider-pagination",
                    clickable: true,
                },
            });

        };

        if (window.innerWidth <= 1200) {
            initializeSlider();
            educationProgramsSlider.dataset.mobile = "true";
        }

        const mobileSlider = () => {
            if (window.innerWidth <= 1200 && educationProgramsSlider.dataset.mobile == "false") {
                initializeSlider();
                educationProgramsSlider.dataset.mobile = "true";
            }

            if (window.innerWidth > 1200) {

                educationProgramsSlider.dataset.mobile = "false";
                if (educationProgramsSlider.classList.contains("swiper-initialized")) {
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