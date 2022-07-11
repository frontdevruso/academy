if (document.querySelectorAll('.accordion')) {
    document.querySelectorAll('.accordion').forEach(function(accordion) {
        accordion.querySelectorAll('.accordion__item').forEach(function(item) {
            item.addEventListener('click', function() {
                if (item.classList.contains('open')) {
                    item.classList.remove('open');
                } else {
                    if(item.querySelector(".accordion__item-control")) {
                        item.classList.add("open");
                    }
                    accordion.querySelectorAll('.accordion__item').forEach(i => i.classList.remove('open'));
                    item.classList.add("open");
                }
            });
        });
    });
}
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
function addClassOnEyeContact(elements, timeout) {
    if (elements) {        
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(function() {
                        entry.target.classList.add('show');
                    }, timeout);
                }
            });
        });
        
        elements.forEach(element => {
            observer.observe(element);
        });
    }
}

addClassOnEyeContact(document.querySelectorAll('.cards-services__table-item-icon'), 0);
addClassOnEyeContact(document.querySelectorAll('.education-programs__slider ul a'), 0);
addClassOnEyeContact(document.querySelectorAll('.main-slider__nav'), 0);
document.addEventListener('DOMContentLoaded', function() {
    addClassOnEyeContact(document.querySelectorAll('.page'), 0);
})
function addClassOnEyeContact(elements, timeout) {
    if (elements) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(function() {
                        entry.target.classList.add('show');
                    }, timeout);
                }
            });
        });
        
        if (elements.length) {
            elements.forEach(element => {
                observer.observe(element);
            });
        }
    }
}

addClassOnEyeContact(document.querySelectorAll('.modal__tabs-item[data-tab]'), 0)
addClassOnEyeContact(document.querySelectorAll('.cabinet__account main[data-tab]'), 0)
const reviewsComment = document.querySelectorAll('.reviews__slider ul li p');
const mainSliderComment = document.querySelectorAll('.main-slider__info-wrapper-description p');

if (reviewsComment) {
    reviewsComment.forEach(function(item) {
        item.style.setProperty("-webkit-box-orient", "vertical");
    })
}

if (mainSliderComment) {
    mainSliderComment.forEach(function(item) {
        item.style.setProperty("-webkit-box-orient", "vertical");
    })
}
document.addEventListener("DOMContentLoaded", () => {
    const burgers = document.querySelectorAll(".burger");
    
    burgers.forEach(burger => {
        burger.addEventListener("click", (e) => {
            e.currentTarget.classList.toggle("isOpen");
        });    
    })
});
if (document.querySelector('.cabinet-save-changes')) {
    document.querySelector('.cabinet-save-changes').addEventListener('click', function() {
        let cabinetBirthdayValue = document.querySelector('.cabinet-input-birthday input');
        let cabinetPhoneValue = document.querySelector('.cabinet-input-phone input');
        let cabinetEmailValue = document.querySelector('.cabinet-input-email input');

        let cabinetBirthdayField = document.querySelector('.cabinet__account-birthday');
        let cabinetPhoneField = document.querySelector('.cabinet__account-phone');
        let cabinetEmailField = document.querySelector('.cabinet__account-email');

        let regx = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u;

        if (cabinetBirthdayValue.value) {
            cabinetBirthdayField.innerHTML = cabinetBirthdayValue.value;
        }
        
        if (cabinetPhoneValue.value.length > 15) {
            cabinetPhoneField.innerHTML = cabinetPhoneValue.value;
        }

        if (regx.test(cabinetEmailValue.value)) {
            cabinetEmailField.innerHTML = cabinetEmailValue.value;
        }
    });
}
if (document.querySelectorAll('.calendar')) {
    document.querySelectorAll('.calendar--consultation').forEach(function(calendar) {
        let useCalendar = flatpickr(calendar, {
            disableMobile: "true",
            "locale": "ru",
            minDate: "today",
        });
    })
    document.querySelectorAll('.calendar--cabinet').forEach(function(calendar) {
        let useCalendar = flatpickr(calendar, {
            disableMobile: "true",
            dateFormat: "d F Y",
            "locale": "ru",
            maxDate: "today",
        });
    })
    document.querySelectorAll('.calendar--timer').forEach(function(calendar) {
        let useCalendar = flatpickr(calendar, {
            enableTime: true,
            noCalendar: true,
            time_24hr: true,
            dateFormat: "H:i",
            disableMobile: "true",
            weekNumbers: true,
        });
    })
}

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
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelectorAll('.contact-form');
    if (contactForm) {
        contactForm.forEach(function(form) {
            const formPhone = form.querySelector('[data-validate-field="tel"]');
            const formName = form.querySelector('[data-validate-field="name"]');
            const formSurname = form.querySelector('[data-validate-field="surname"]');
            const formMessage = form.querySelector('[data-validate-field="message"]');
            const formMail = form.querySelector('[data-validate-field="mail"]');
            const formMailOrNum = form.querySelector('[data-validate-field="email-or-num"]');
            const formPassword = form.querySelector('[data-validate-field="password"]');
            const formPasswordConfirm = form.querySelector('[data-validate-field="confirm-password"]');
            
            const formCreditCardNum = form.querySelector('[data-validate-field="credit-card-num"]');
            const formCreditCardData = form.querySelector('[data-validate-field="credit-card-data"]');
            const formCreditCardCvv = form.querySelector('[data-validate-field="credit-card-cvv"]');
            
            const formDate = form.querySelector('[data-validate-field="date"]');
            const formTime = form.querySelector('[data-validate-field="time"]');
            
            const formSMSNumbers = form.querySelectorAll('[data-validate-field="sms-code"]');
            const formPolicyCheckbox = form.querySelector('.contact-form__wrapper-form-policy input');
        
            const formAllInput = form.querySelectorAll('[data-validate-field]');
            const contactFormSubmitBtn = form.querySelector('.contact-form-submit');
            
            let hasSelected = false;
            let smsCodeValue = '0'.substring(1);

            let regx = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u;
            
            formAllInput.forEach(function(item) {
                item.addEventListener('focus', function() {
                    item.parentElement.classList.remove('g-input-error');
                    item.parentElement.classList.remove('policy-error');
                })
    
                inputEl = item.querySelector('input');
                item.addEventListener('blur', onInputBlur);
    
                function onInputBlur(inputEl) {
                    if(inputEl.target && inputEl.target.value) {
                        inputEl.target.parentElement.classList.add('input--filled');
                    } else {
                        inputEl.target.parentElement.classList.remove('input--filled');
                    }
                }
            });
            
            if (formPolicyCheckbox) {
                formPolicyCheckbox.addEventListener('change', function() {
                    if(this.checked) {
                        formPolicyCheckbox.parentElement.classList.remove('policy-error');
                    }
                });
            }
        
            if (contactFormSubmitBtn) {
                contactFormSubmitBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    let errCount = 0;
        
                    if(formName) {
                        if (formName.value.length === 0) {
                            formName.parentElement.classList.add('g-input-error');
                            errCount++;
                        } else { formName.parentElement.classList.remove('g-input-error') }
                    } 
        
                    if(formSurname) {
                        if (formSurname.value.length === 0) {
                            formSurname.parentElement.classList.add('g-input-error');
                            errCount++;
                        } else { formSurname.parentElement.classList.remove('g-input-error') }
                    }
        
                    if(formMessage) {
                        if (formMessage.value.length === 0) {
                            formMessage.parentElement.classList.add('g-input-error');
                            errCount++;
                        } else { formMessage.parentElement.classList.remove('g-input-error') }
                    }

                    if(formMailOrNum) {
                        if (formMailOrNum.value.length === 0) {
                            formMailOrNum.parentElement.classList.add('g-input-error');
                            errCount++;
                        } else { formMailOrNum.parentElement.classList.remove('g-input-error') }
                    }

                    if(formSMSNumbers) {
                        formSMSNumbers.forEach(function(input) {
                            if (input.value.length === 0) {
                                input.parentElement.classList.add('g-input-error');
                                errCount++;
                            } else { input.parentElement.classList.remove('g-input-error') }
                        })
                    }

                    if(formDate) {
                        if (formDate.value.length === 0) {
                            formDate.parentElement.classList.add('g-input-error');
                            errCount++;
                        } else { formDate.parentElement.classList.remove('g-input-error') }
                    }

                    if(formTime) {
                        if (formTime.value.length === 0) {
                            formTime.parentElement.classList.add('g-input-error');
                            errCount++;
                        } else { formTime.parentElement.classList.remove('g-input-error') }
                    }

                    if(formCreditCardNum) {
                        if (formCreditCardNum.value.length < 19) {
                            formCreditCardNum.parentElement.classList.add('g-input-error');
                            errCount++;
                        } else { formCreditCardNum.parentElement.classList.remove('g-input-error') }
                    }

                    if(formCreditCardData) {
                        if (formCreditCardData.value.length < 5) {
                            formCreditCardData.parentElement.classList.add('g-input-error');
                            errCount++;
                        } else { formCreditCardData.parentElement.classList.remove('g-input-error') }
                    }

                    if(formCreditCardCvv) {
                        if (formCreditCardCvv.value.length < 3) {
                            formCreditCardCvv.parentElement.classList.add('g-input-error');
                            errCount++;
                        } else { formCreditCardCvv.parentElement.classList.remove('g-input-error') }
                    }
        
                    if(formPassword) {
                        if (formPassword.value.length === 0 || formPassword.value.length <= 7) {
                            formPassword.parentElement.classList.add('g-input-error');
                            errCount++;
                        } else { formPassword.parentElement.classList.remove('g-input-error') }
                    }
        
                    if(formPasswordConfirm) {
                        if (formPasswordConfirm.value.length === 0 || formPasswordConfirm.value.length <= 7) {
                            formPasswordConfirm.parentElement.classList.add('g-input-error');
                            errCount++;
                        } else { formPasswordConfirm.parentElement.classList.remove('g-input-error') }
                    }
        
                    if(formMail) {
                        if (!formMail.required === false) {
                            if (formMail.value.length === 0 || !regx.test(formMail.value)) {
                                formMail.parentElement.classList.add('g-input-error');
                                errCount++;
                            } else { formMail.parentElement.classList.remove('g-input-error') }
                        }
                    } 
        
                    if(formPhone) {
                        if (formPhone.value.length < 15 || formPhone.value.length >= 24 || formPhone.value.length === 0) { // SET MIN/MAX COUNT OF NUMBERS IN PHONE NUMBER
                            formPhone.parentElement.classList.add('g-input-error');
                            errCount++;
                        } else { formPhone.parentElement.classList.remove('g-input-error') }
                    } 
                        
                    if(form.querySelector('.select-box-init')) {
                        if (hasSelected === false) {
                            form.querySelector('.select-box-init').classList.add('g-select-error');
                            errCount++;
                        } else {
                            form.querySelector('.select-box-init').classList.remove('g-select-error');
                        }
                    }
    
                    if(formPolicyCheckbox) {
                        if (formPolicyCheckbox.checked == false) {
                            errCount++;
                            formPolicyCheckbox.parentElement.classList.add('policy-error');
                        } else { formPolicyCheckbox.classList.remove('policy-error') }
                    } 
        
                    if (errCount === 0) {
                        if (formSMSNumbers) {
                            formSMSNumbers.forEach(function(input) { smsCodeValue += String(input.value) });
                        } // TO GET REGISTER SMS CODE USE ===> smsCodeValue

                        if (form.classList.contains('contact-form--login')) {
                            // THIS CODE WILL SEND AJAX REQUEST FOR FORMS WHICH HAVE THE CLASS --login
                            alert('DATA HAS SENDED!')
                        } else {
                            // CODE HERE WILL SEND AJAX REQUEST FOR ALL FORMS BY DEFAULT
                            alert('SEND AJAX REQUEST FOR ALL FORMS BY DEFAULT');
                        }
                    }
                });
            }


            // SELECT-BOX

            form.querySelectorAll('.select-box').forEach(function(select) {
                const selected = select.querySelector(".select-box-current");
                const optionsContainer = select.querySelector(".options-container");
                const selectArrow = select.querySelector(".select-box-arrow");
                const optionsList = select.querySelectorAll(".option");
            
                document.addEventListener('click', (event) => {
                    let isClickInsideElement = selected.contains(event.target); 
                    if (!isClickInsideElement) {
                        optionsContainer.classList.remove("active");
                        selectArrow.classList.remove("select-box-arrow-opened");
                    }
                });
            
                selected.addEventListener("click", () => {
                    optionsContainer.classList.toggle("active");
                    selectArrow.classList.toggle("select-box-arrow-opened");
                    select.classList.remove('g-select-error');
                });
            
                optionsList.forEach(o => {
                    o.addEventListener("click", () => {
                        hasSelected = true;
                        selected.innerHTML = o.querySelector("label").innerHTML;
                        optionsContainer.classList.remove("active");
                        selectArrow.classList.remove("select-box-arrow-opened");
                    });
                });
            })
        })
    }
});
// if (document.querySelectorAll('.counter')) {
//     document.querySelectorAll('.counter').forEach(function(counter) {
//         const days = counter.querySelector('[data-unit="days"]');
//         const hours = counter.querySelector('[data-unit="hours"]');
//         const minutes = counter.querySelector('[data-unit="minutes"]');
//         const seconds = counter.querySelector('[data-unit="seconds"]');
//         const countEnd = new Date("2022/09/14 13:01");
        
//         function updateCountdown() {
//             const currentTime = new Date();
//             const diff = countEnd - currentTime;

//             // Translate in Days || Hours || Minutes
//             const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
//             const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
//             const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
//             const secondsLeft = Math.floor(diff / 1000) % 60;

//             if (countEnd < currentTime) {
//                 days.innerText = '00';
//                 hours.innerText = '00';
//                 minutes.innerText = '00';
//                 seconds.innerText = '00';
//             } else {
//                 days.innerText = daysLeft < 10 ? '0' + daysLeft : daysLeft;
//                 hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
//                 minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
//                 seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
//             }
//         }

//         updateCountdown();
//         setInterval(updateCountdown, 1000);
//     });
// }

function initCounter(counter, counterEndTime) {
    if (counter) {
        const days = counter.querySelector('[data-unit="days"]');
        const hours = counter.querySelector('[data-unit="hours"]');
        const minutes = counter.querySelector('[data-unit="minutes"]');
        const seconds = counter.querySelector('[data-unit="seconds"]');
        const countEnd = new Date(counterEndTime);
        
        function updateCountdown() {
            const currentTime = new Date();
            const diff = countEnd - currentTime;

            // Translate in Days || Hours || Minutes
            const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
            const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
            const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
            const secondsLeft = Math.floor(diff / 1000) % 60;

            if (countEnd < currentTime) {
                days.innerText = '00';
                hours.innerText = '00';
                minutes.innerText = '00';
                seconds.innerText = '00';
            } else {
                days.innerText = daysLeft < 10 ? '0' + daysLeft : daysLeft;
                hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
                minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
                seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
            }
        }

        updateCountdown();
        setInterval(updateCountdown, 1000);
    }
}

initCounter(document.querySelector('.timer .counter'), "2022/09/14 13:01")
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
function addClassOnEyeContactDelay(elements, timeout) {
    if (elements) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(function(entry, index) {
                if (entry.isIntersecting) {
                    setTimeout(function() {
                        entry.target.classList.add('show');
                    }, timeout * (index + 1));
                }
            });
        });
        
        if (elements.length) {
            elements.forEach(element => {
                observer.observe(element);
            });
        }
    }
}

addClassOnEyeContactDelay(document.querySelectorAll('.achievements__bubbles-item'), 500);
addClassOnEyeContactDelay(document.querySelectorAll('.image-fade-in'), 200);
// if (document.querySelector('.header')) {
//     const header = document.querySelector('.header');
//     const headerHeight = parseInt(window.getComputedStyle(header).height);

//     const checkingHeaderPosition = () => {    
//         if (window.scrollY > headerHeight / 2) {
//             header.classList.add('header--floating');
//         } else {
//             header.classList.remove('header--floating');
//         }
//     }

//     checkingHeaderPosition();

//     window.addEventListener("scroll", function() {
//         checkingHeaderPosition();
//     });
// }
if (document.querySelectorAll("input[type=\"tel\"]")) {
    const tels = document.querySelectorAll("input[type=\"tel\"]");
    tels.forEach(el => {
        IMask(el, { mask: "+ {0} (000) 000 00 000 00" });
    });
}

if (document.querySelectorAll("input[data-validate-field='credit-card-num']")) {
    const creditCardNumb = document.querySelectorAll("input[data-validate-field='credit-card-num']");
    creditCardNumb.forEach(el => {
        IMask(el, { mask: "0000 0000 0000 0000" });
    });
}

if (document.querySelectorAll("input[data-validate-field='credit-card-data']")) {
    const creditCardNumb = document.querySelectorAll("input[data-validate-field='credit-card-data']");
    creditCardNumb.forEach(el => {
        IMask(el, { mask: "00/00" });
    });
}

if (document.querySelectorAll("input[data-validate-field='credit-card-cvv']")) {
    const creditCardNumb = document.querySelectorAll("input[data-validate-field='credit-card-cvv']");
    creditCardNumb.forEach(el => {
        IMask(el, { mask: "000" });
    });
}
function initializeTabsPanel(selects) {
    selects.forEach(select => {
        select.addEventListener('click', function() {
            selects.forEach(function(s) {s.classList.remove('active')});
            select.classList.add('active');
        });
    });
}

initializeTabsPanel(document.querySelectorAll('.tabs-panel a'));
if (document.querySelectorAll('[data-link-section]')) {
    const allLinks = document.querySelectorAll('[data-link-section]');
    const allSections = document.querySelectorAll('[data-section]');

    function initActiveClass() {
        window.addEventListener('scroll', () => {
            let current = '';
            allSections.forEach(function(section) {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                if (window.pageYOffset >= sectionTop) {
                    current = section.getAttribute('id');
                }
            });
            
            allLinks.forEach(function(link) {
                if (current === link.getAttribute('href').substring(1)) {
                    allLinks.forEach(function(l) { l.classList.remove('active') })
                    link.classList.add('active');
                }
            });
        });
    }

    initActiveClass();
}
function changingOrderList(items, itemsContainer) {
    const itemsCount = items.length;
    if(itemsContainer) {
        if (itemsCount % 2 == 0) {
            itemsContainer.style.gridTemplateRows = `repeat(${itemsCount / 2}, auto)`;
        } else {
            itemsContainer.style.gridTemplateRows = `repeat(${Math.round(itemsCount / 2)}, auto)`;
        }
    }
}

changingOrderList(document.querySelectorAll('.client-hook__info-list li'), document.querySelector('.client-hook__info-list'));

if (document.querySelector('.loading-screen')) {
    document.querySelector('body').classList.add('b-hidden');
    const loadingScreen = document.querySelector('.loading-screen');
    const loadingScreenCircle = document.querySelector('.loading-screen__circle');

    document.addEventListener('DOMContentLoaded', function() {
        loadingScreen.querySelector('.loading-screen__container').classList.add('show');
        setTimeout(function() {
            document.querySelector('.page').classList.remove('show');
            loadingScreenCircle.classList.add('l40');
            setTimeout(function() {
                loadingScreenCircle.classList.add('l70');
                setTimeout(function() {
                    document.querySelector('.page').classList.remove('show');
                    loadingScreenCircle.classList.add('l100');
                    setTimeout(function() {
                        loadingScreen.classList.add('hide');
                        setTimeout(function() {
                            document.querySelector('.page').classList.add('show');
                            document.querySelector('body').classList.remove('b-hidden');
                            loadingScreen.classList.add('none');
                        }, 100);
                    }, 300);
                }, 700);
            }, 700);
        }, 100);
    });
} 
const observer = lozad('.lozad', {
    loaded: function(img) {
        img.addEventListener('load', function() {
            img.classList.add('loaded');
        });
        
        if(img.hasAttribute('data-background-image')) {
            img.classList.add('loaded');
        };
    },
});


observer.observe();
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
                    <svg><use xlink:href="./assets/images/svg/sprite.svg#linkArrow"></use></svg>
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
function manangeActiveBtns(allBtns) {
    if (allBtns) {
        allBtns.forEach(function(btn) {
            btn.addEventListener('click', function() {
                allBtns.forEach(function(b) {b.classList.remove('active')});
                btn.classList.add('active');
            });
        });
    }
}

manangeActiveBtns(document.querySelectorAll('.modal__panel button'));
if (document.querySelector('.desktop-menu')) {
    const mobileMenu = document.querySelector('.mobile-menu');
    const burger = document.querySelector('.burger--mb');
    const header = document.querySelector('.header');

    const body = document.body
    const page = document.querySelector('.page');

    burger.addEventListener('click', function() {
        body.classList.toggle('m-open');
        header.classList.remove('header--floating');
        mobileMenu.classList.toggle('show');

        page.classList.toggle('hide');
    });
}
if (document.querySelectorAll('.modal')) {
    const allModal = document.querySelectorAll('.modal');
    const allModalBtns = document.querySelectorAll('[data-modal-btn]');

    function timerInit(allCounters) {
        if (allCounters) {
            allCounters.forEach(function(counter) {
                function countdown() {
                    var seconds = 59;
                    function tick() {
                        seconds--;
                        counter.innerHTML =
                        "0:" + (seconds < 10 ? "0" : "") + String(seconds);
                        if (seconds > 0) {
                            setTimeout(tick, 1000);
                        } else {
                            // let container = counter.parentElement;
                            // counter.parentElement.innerHTML += '<button type="button">Отправить ещё раз</button>';
                        }
                    }
                    tick();
                }
                countdown();
            });
        }
    }

    allModalBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            let btnModalTag = btn.getAttribute('data-modal-btn');
            allModal.forEach(function(modal) {
                if (modal.getAttribute('data-modal') === btnModalTag) {
                    modal.classList.toggle('open');
                    document.querySelector('body').classList.toggle('m-hidden');
                    if (btnModalTag === 'register-sms') {
                        timerInit(modal.querySelectorAll('.modal__timer'))
                    }
                }
            });
        });
    })

    allModal.forEach(function(modal) {
        const closeBtn = modal.querySelector('.modal__close');
        closeBtn.addEventListener('click', function() {
            modal.classList.remove('open');
            document.querySelector('body').classList.toggle('m-hidden');
        });
    });
}

if (document.querySelector('.desktop-menu')) {
    const desktopMenu = document.querySelector('.desktop-menu');
    const header = document.querySelector('.header');
    const headerLinks = document.querySelector('.header__nav-links');
    const headerIcons = document.querySelector('.header__nav-icons');
    const headerConsulting = document.querySelector('.header__nav-consulting');
    const burger = document.querySelector('.burger--pc');

    function hide(element) {
        if (!element.classList.contains('none')) {
            element.classList.add('a-hide');
            setTimeout(function() {
                element.classList.add('none');
            }, 400);
        } else {
            setTimeout(function() {
                element.classList.remove('none');
            }, 400);
            setTimeout(function() {
                element.classList.remove('a-hide');
            }, 600);
        }
    }

    burger.addEventListener('click', function() {
        hide(headerLinks);
        hide(headerIcons);
        hide(headerConsulting);
        
        if (!burger.classList.contains('burger--ml')) {
            setTimeout(function() {
                burger.classList.add('burger--ml');
            }, 600);
        } else {
            setTimeout(function() {
                burger.classList.remove('burger--ml');
            }, 100);
        }

        desktopMenu.classList.toggle('show');
        header.classList.toggle('header--clean');
        if (desktopMenu.classList.contains('show')) {
            setTimeout(function() {
                desktopMenu.querySelector('.desktop-menu__container').classList.add('show');
            }, 400);
        } else { desktopMenu.querySelector('.desktop-menu__container').classList.remove('show') }
    });
}
if (document.querySelector('.reviews-add__table')) {
    const allElements = document.querySelectorAll('.reviews-add__table li');
    allElements.forEach(function(element) {
        element.querySelector('button').addEventListener('click', function() {
            element.classList.add('open');
        });
    });
}
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
if (document.querySelector('.search-btn')) {
    const searchBtn = document.querySelector('.search-btn');
    const closeSearchForm = document.querySelector('.header__nav-close');

    const headerLinks = document.querySelector('.header__nav-links');
    const headerConsulting = document.querySelector('.header__nav-consulting');
    const headerIcons = document.querySelector('.header__nav-icons');
    const burgerPc = document.querySelector('.burger--pc');

    const searchInput = document.querySelector('.header__nav-search');
    const input = document.querySelector('.header__nav-search input');
    const searchContainer = document.querySelector('.header__nav-search ul');

    input.addEventListener('focus', function() {
        showHide(searchContainer);
    });

    input.addEventListener('blur', function() {
        showHide(searchContainer);
    });

    function showHide(element) {
        if (!element.classList.contains('none')) {
            element.classList.add('a-hide');
            setTimeout(function() {
                element.classList.add('none');
            }, 200);
        } else {
            setTimeout(function() {
                element.classList.remove('none');
            }, 200);
            setTimeout(function() {
                element.classList.remove('a-hide');
            }, 400);
        }
    }

    searchBtn.addEventListener('click', function() {
        showHide(headerLinks);
        showHide(headerConsulting);
        showHide(burgerPc);
        showHide(headerIcons);
        showHide(searchInput)
    });

    closeSearchForm.addEventListener('click', function() {
        showHide(headerLinks);
        showHide(headerConsulting);
        showHide(burgerPc);
        showHide(headerIcons);
        showHide(searchInput)
    });
}
function initializeSelect(selects) {
    selects.forEach(select => {
        select.addEventListener('click', function() {
            selects.forEach(function(s) {s.classList.remove('active')});
            select.classList.add('active');
        });
    });
}

initializeSelect(document.querySelectorAll('.the-title__select [data-select-item]'));


// MOBILE

document.querySelectorAll('.select-box').forEach(function(select) {
    const selected = select.querySelector(".select-box-current");
    const optionsList = select.querySelectorAll(".option");

    document.addEventListener('click', (event) => {
        let isClickInsideElement = selected.contains(event.target); 
        if (!isClickInsideElement) {
            select.classList.remove("active");
        }
    });

    selected.addEventListener("click", () => {
        select.classList.toggle("active");
        select.classList.remove('g-select-error');
    });

    optionsList.forEach(o => {
        o.addEventListener("click", () => {
            hasSelected = true;
            selected.innerHTML = o.querySelector("label").innerHTML;
            select.classList.remove("active");
        });
    });
})
function showPassword() {
    if (document.querySelectorAll('.password-input')) {
        document.querySelectorAll('.password-input').forEach(function(password) {
            const toggleBtn = password.querySelector('.password-input__icon');

            toggleBtn.addEventListener('click', function() {
                password.classList.toggle('active');
                let input = password.querySelector('input');

                if (password.classList.contains('active')) {
                    input.setAttribute('type', 'text');
                } else {
                    input.setAttribute('type', 'password');
                }
            })
        });
    }
}

showPassword();
const smoothLinks = document.querySelectorAll('a[href^="#"]');
if (smoothLinks) {
    for (let smoothLink of smoothLinks) {
        smoothLink.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = e.currentTarget.getAttribute("href") === "#" || "" ? "#page" : e.currentTarget.getAttribute("href");
            const headerHeight = document.querySelector('.header') ? document.querySelector('.header').clientHeight : 0;
            
            function getPosition(element) {
                var xPosition = 0;
                var yPosition = 0;
            
                while(element) {
                    xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
                    yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
                    element = element.offsetParent;
                }
            
                return { x: xPosition, y: yPosition };
            }

            if (targetId) {
                window.scrollTo(0, getPosition(document.querySelector(targetId)).y - headerHeight);
            }
        });
    };
}

function initAutoFocus (input, index, list) {
    const next = list[index + 1]
    if (!next) { return }

    input.addEventListener('input', () => {
        if (input.value.length === input.maxLength) { next.focus() }
    })
}

document.querySelectorAll('.modal--register-sms .g-input input').forEach(initAutoFocus);
if (document.querySelector('.tabs-panel')) {
    const tabsPanel = document.querySelector('.tabs-panel');
    const position = getPosition(tabsPanel).y
    const headerPadding = document.querySelector('.header').clientHeight * 2;

    function getPosition(element) {
        var xPosition = 0;
        var yPosition = 0;
    
        while(element) {
            xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
            yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
            element = element.offsetParent;
        }
    
        return { x: xPosition, y: yPosition };
    }

    const checkingTabPosition = () => {    
        if (window.scrollY > (position - headerPadding)) {
            tabsPanel.classList.add('tabs-panel--floating');
        } else {
            tabsPanel.classList.remove('tabs-panel--floating');
        }
    }
    
    checkingTabPosition()
    
    window.addEventListener("scroll", function() {
        checkingTabPosition();
    });
}

// function detectCertainElement(elements, timeout) {
//     if (elements) {
//         const observer = new IntersectionObserver(entries => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     setTimeout(function() {
//                         console.log(entry.target)
//                         document.querySelector('.tabs-panel').classList.add('tabs-panel--fx-bottom');
//                     }, timeout);
//                 }
//             });
//         }, { threshold: 0.5 });
        
//         if (elements.length) {
//             elements.forEach(element => {
//                 observer.observe(element);
//             });
//         }
//     }
// }
function switchingTabs(allTabsBtns, allTabs, tabsContent) {
    if (tabsContent) {
        allTabsBtns.forEach(function(btn) {
            btn.addEventListener('click', function() {
                let serialNumber = this.getAttribute('data-tab-btn');
                let currentActiveTab = tabsContent.querySelector('[data-tab].active');

                if (currentActiveTab.getAttribute('data-tab') === serialNumber) {
                    return
                } else {
                    allTabs.forEach(function(tab) {
                        tab.classList.remove('active');
                        tab.classList.remove('show');
                        tab.classList.add('none');
                        if(tab.getAttribute('data-tab') === serialNumber) {
                            tab.classList.add('active');
                            tab.classList.remove('none');
                        }
                    });
                }
            }); 
        });
    }
} 

switchingTabs(document.querySelectorAll('.modal__panel button[data-tab-btn]'), document.querySelectorAll('.modal__tabs-item[data-tab]'), document.querySelector('.modal--register .modal__container'));
switchingTabs(document.querySelectorAll('.cabinet__account main button[data-tab-btn]'), document.querySelectorAll('.cabinet__account main[data-tab]'), document.querySelector('.cabinet__account'));
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