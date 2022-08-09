setTimeout(function() {
    if (document.querySelector('.main-slider')) {
        let mySwiper = new Swiper(".main-slider", {
            spaceBetween: 30,
            allowTouchMove: false,
            effect: "fade",
    
            navigation: {
                nextEl: ".main-slider--next",
                prevEl: ".main-slider--prev",
            },
        });
    
        // mySwiper.slides.length
        const progressBar = document.querySelector('.progress-bar');
        const allSlides = document.querySelectorAll('.main-slider .swiper-slide')
    
        const linksContainer = document.querySelector('.main-slider__info-wrapper-link');
        const descriptionContainer = document.querySelector('.main-slider__info-wrapper-description');
        const titleContainer = document.querySelector('.main-slider__info-wrapper-title');
    
        const allDescriptions = document.querySelectorAll('.main-slider .swiper-wrapper .swiper-slide p');
        const allTitles = document.querySelectorAll('.main-slider .swiper-wrapper .swiper-slide h1');
    
        const nextBtn = document.querySelector('.main-slider--next');
        const prevBtn = document.querySelector('.main-slider--prev');
    
    
        function progressBarSize() {
            progressBar.querySelector('span').style.width = `${document.querySelector('.progress-bar').clientWidth / mySwiper.slides.length}px`;
            progressBar.querySelector('span').style.transform = `translateX(${(document.querySelector('.progress-bar').clientWidth / mySwiper.slides.length) * mySwiper.activeIndex}px)`;
        }

        function generatingSlidesCount() {
            const leadingCounter = document.querySelector('.main-slider__nav-bar-leading main');
            leadingCounter.innerHTML = '';
            allSlides.forEach(function(slide, index) {
                leadingCounter.innerHTML += 
                `<li>0${index + 1}</li>`
            });
            
            document.querySelector('.main-slider__nav-bar-total li').innerHTML = `0${mySwiper.slides.length}`;
        }
    
        function slidesCountPrev() {
            const leadingCounter = document.querySelector('.main-slider__nav-bar-leading main');
            let leadingElemHeight = Number(document.querySelector('.main-slider__nav-bar-leading main li').clientHeight);
            let leadingCounterPosition = Number(leadingCounter.getAttribute('data-position'));
    
            leadingCounter.setAttribute('data-position', leadingCounterPosition + leadingElemHeight);
            leadingCounter.style.transform = `translateY(${leadingCounterPosition + leadingElemHeight}px)`;
        }
    
        function slidesCountNext() {
            const leadingCounter = document.querySelector('.main-slider__nav-bar-leading main');
            let leadingElemHeight = Number(document.querySelector('.main-slider__nav-bar-leading main li').clientHeight);
            let leadingCounterPosition = Number(leadingCounter.getAttribute('data-position'));
    
            leadingCounter.setAttribute('data-position', leadingCounterPosition - leadingElemHeight);
            leadingCounter.style.transform = `translateY(${leadingCounterPosition - leadingElemHeight}px)`;
        }
    
        function slideBodyInfoInitialization() {
            allDescriptions.forEach(function(desc, index) {
                const link = desc.getAttribute('data-link');
    
                descriptionContainer.innerHTML += `<p class="${index === 0 ? 'active' : ''}">${desc.innerHTML}</p>`;
                linksContainer.innerHTML += 
                `<a href="${link}" class="g-arrow-btn ${index === 0 ? 'active' : ''}">
                    <span>Узнать подробнее</span>
                    <svg><use xlink:href="./assets/images/svg/sprite.svg#linkLongArrow"></use></svg>
                </a>`
    
                desc.remove();
            });
        }
    
        function titleInitialization() {
            titleContainer.innerHTML = '';
            allTitles.forEach(function(title, index) {
                titleContainer.innerHTML += `<h1 class="${index === 0 ? 'active' : ''}">${title.innerHTML}</h1>`;
    
                title.remove();
            });
        }
    
        function titleContainerHeightDefinition() {
            const activeTitle = document.querySelector('.main-slider__info-wrapper-title .active');
            const activeTitleStrings = activeTitle.querySelectorAll('span');
    
            titleContainer.style.height = `${activeTitle.querySelector('span').clientHeight * activeTitleStrings.length}px`;
            activeTitleStrings.forEach(function(string, index) {
                setTimeout(function() {
                    string.classList.add('show');
                }, (index + 1) * 200);
            });
        }
    
        function descContainerHeightDefinition() {
            const activeDesc = document.querySelector('.main-slider__info-wrapper-description .active');
            descriptionContainer.style.height = `${activeDesc.clientHeight}px`;
        }
    
        function titleNext() {
            const activeTitle = document.querySelector('.main-slider__info-wrapper-title .active');
    
            if (activeTitle.nextElementSibling) {
                activeTitle.nextElementSibling.classList.add('active');
                activeTitle.querySelectorAll('span').forEach(function(string) {
                    string.classList.remove('show');
                });
                activeTitle.classList.remove('active');
            }
        }
    
        function titlePrev() {
            const activeTitle = document.querySelector('.main-slider__info-wrapper-title .active');
    
            if (activeTitle.previousElementSibling) {
                activeTitle.previousElementSibling.classList.add('active');
                activeTitle.querySelectorAll('span').forEach(function(string) {
                    string.classList.remove('show');
                });
                activeTitle.classList.remove('active');
            }
        }
    
        function descriptionNext() {
            const activeDesc = document.querySelector('.main-slider__info-wrapper-description .active');
    
            if (activeDesc.nextElementSibling) {
                activeDesc.nextElementSibling.classList.add('active');
                activeDesc.classList.remove('active');
            }
        }
    
        function descriptionPrev() {
            const activeDesc = document.querySelector('.main-slider__info-wrapper-description .active');
    
            if (activeDesc.previousElementSibling) {
                activeDesc.previousElementSibling.classList.add('active');
                activeDesc.classList.remove('active');
            }
        }
    
        function linkNext() {
            const activeLink = document.querySelector('.main-slider__info-wrapper-link .active');
    
            if (activeLink.nextElementSibling) {
                activeLink.nextElementSibling.classList.add('active');
                activeLink.classList.remove('active');
            }
        }

        function descFadeIn() {
            setTimeout(function() {
                document.querySelectorAll('.main-slider__info-wrapper-description').forEach(function(desc) {
                    desc.classList.add('show');
                });
            }, 150)
        }
    
        function linkPrev() {
            const activeLink = document.querySelector('.main-slider__info-wrapper-link .active');
    
            if (activeLink.previousElementSibling) {
                activeLink.previousElementSibling.classList.add('active');
                activeLink.classList.remove('active');
            }
        }
    
        mySwiper.on('slidePrevTransitionStart', function() {
            progressBarSize();
            slidesCountPrev();
            descriptionPrev();
            linkPrev();
            titlePrev();
    
            titleContainerHeightDefinition();
            descContainerHeightDefinition();
    
            prevBtn.disabled = true;
            setTimeout(function() { prevBtn.disabled = false }, 1000);
        });
        
        mySwiper.on('slideNextTransitionStart', function() {
            progressBarSize();
            slidesCountNext();
            descriptionNext();
            linkNext();
            titleNext();
    
            titleContainerHeightDefinition();
            descContainerHeightDefinition();
    
            nextBtn.disabled = true;
            setTimeout(function() { nextBtn.disabled = false }, 1000);
        });
        
        progressBarSize();
        generatingSlidesCount();
        slideBodyInfoInitialization();
        titleInitialization();
    
        titleContainerHeightDefinition();
        descContainerHeightDefinition();
        descFadeIn();
    
        window.addEventListener("resize", () => {    
            setTimeout(function() {
                titleContainerHeightDefinition();
            }, 400);
        
            progressBarSize();
            descContainerHeightDefinition();
        });
    }
}, 2000);