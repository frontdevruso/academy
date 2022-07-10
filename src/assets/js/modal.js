if (document.querySelectorAll('.modal')) {
    const allModal = document.querySelectorAll('.modal');

    const allModalConsultationBtns = document.querySelectorAll('.btn-modal-consultation');
    const allModalHelpBtns = document.querySelectorAll('.btn-modal-help');
    const allModalLoginBtns = document.querySelectorAll('.btn-modal-login');
    const allModalMakePasswordBtns = document.querySelectorAll('.btn-modal-make-password');
    const allModalPayBtns = document.querySelectorAll('.btn-modal-pay');
    const allModalRecoveryBtns = document.querySelectorAll('.btn-modal-recovery');
    const allModalRegisterSmsBtns = document.querySelectorAll('.btn-modal-register-sms');
    const allModalRegisterBtns = document.querySelectorAll('.btn-modal-register');
    const allModalSuccessPasswordBtns = document.querySelectorAll('.btn-modal-success-password');
    const allModalSuccessRegisterBtns = document.querySelectorAll('.btn-modal-success-register');

    const modalConsultation = document.querySelector('.modal--consultation');
    const modalHelp = document.querySelector('.modal--help');
    const modalLogin = document.querySelector('.modal--login');
    const modalMakePassword = document.querySelector('.modal--make-password');
    const modalPay = document.querySelector('.modal--pay');
    const modalRecovery = document.querySelector('.modal--recovery');
    const modalRegisterSms = document.querySelector('.modal--register-sms');
    const modalRegister = document.querySelector('.modal--register');
    const modalSuccessPassword = document.querySelector('.modal--success-password');
    const modalSuccessRegister = document.querySelector('.modal--success-register');

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

    allModal.forEach(function(modal) {
        const closeBtn = modal.querySelector('.modal__close');
        closeBtn.addEventListener('click', function() {
            modal.classList.remove('open');
            document.querySelector('body').classList.toggle('m-hidden');
        });
    });

    allModalConsultationBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            modalConsultation.classList.toggle('open');
            document.querySelector('body').classList.toggle('m-hidden');
        });
    });

    allModalHelpBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            modalHelp.classList.toggle('open');
            document.querySelector('body').classList.toggle('m-hidden');
        });
    });

    allModalLoginBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            modalLogin.classList.toggle('open');
            document.querySelector('body').classList.toggle('m-hidden');
        });
    });

    allModalMakePasswordBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            modalMakePassword.classList.toggle('open');
            document.querySelector('body').classList.toggle('m-hidden');
        });
    });

    allModalPayBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            modalPay.classList.toggle('open');
            document.querySelector('body').classList.toggle('m-hidden');
        });
    });

    allModalRecoveryBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            modalRecovery.classList.toggle('open');
            document.querySelector('body').classList.toggle('m-hidden');
        });
    });

    allModalRegisterSmsBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            modalRegisterSms.classList.toggle('open');
            document.querySelector('body').classList.toggle('m-hidden');
            timerInit(modalRegisterSms.querySelectorAll('.modal__timer'))
        });
    });

    allModalRegisterBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            modalRegister.classList.toggle('open');
            document.querySelector('body').classList.toggle('m-hidden');
        });
    });

    allModalSuccessPasswordBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            modalSuccessPassword.classList.toggle('open');
            document.querySelector('body').classList.toggle('m-hidden');
        });
    });

    allModalSuccessRegisterBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            modalSuccessRegister.classList.toggle('open');
            document.querySelector('body').classList.toggle('m-hidden');
        });
    });
}
