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
            
            const formPolicyCheckbox = form.querySelector('.contact-form__wrapper-form-policy input');
        
            const formAllInput = form.querySelectorAll('[data-validate-field]');
            const contactFormSubmitBtn = form.querySelector('.contact-form-submit');
            
            let hasSelected = false;

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

                    if(formMailOrNum) {
                        if (formMailOrNum.value.length === 0) {
                            formMailOrNum.parentElement.classList.add('g-input-error');
                            errCount++;
                        } else { formMailOrNum.parentElement.classList.remove('g-input-error') }
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
                        // HERE YOU CAN ADD A AJAX REQUEST TO SEND DATA
                        alert('ALL WORKS!');
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