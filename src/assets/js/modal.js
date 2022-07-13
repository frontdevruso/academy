if (document.querySelectorAll('.modal')) {
    const allModal = document.querySelectorAll('.modal');
    const allModalBtns = document.querySelectorAll('[data-modal-btn]');

    function timerInit(allCounters) {
        if (allCounters) {
            allCounters.forEach(function(counter) {
                let btnLink = counter.parentElement.querySelector('.modal__timer-link');
                function countdown() {
                    var seconds = 4;
                    function tick() {
                        seconds--;
                        counter.innerHTML =
                        "0:" + (seconds < 10 ? "0" : "") + String(seconds);
                        if (seconds > 0) {
                            setTimeout(tick, 1000);
                        } else {
                            btnLink.classList.add('active');
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
                modal.classList.remove('open');
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
        
        modal.addEventListener('click', function(event) {
            if (event.target == modal) {
                modal.classList.remove('open');
                document.querySelector('body').classList.toggle('m-hidden');
            }
        })

        closeBtn.addEventListener('click', function() {
            modal.classList.remove('open');
            document.querySelector('body').classList.toggle('m-hidden');
        });
    });
}
