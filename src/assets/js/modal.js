if (document.querySelectorAll('.modal')) {
    const allModal = document.querySelectorAll('.modal');
    const allModalBtns = document.querySelectorAll('[data-modal-btn]');

    function timerInit(allCounters) {
        if (allCounters) {
            allCounters.forEach(function(counter) {
                let btnLink = counter.parentElement.querySelector('.modal__timer-link');
                btnLink.classList.remove('active');
                function countdown() {
                    var seconds = 60;
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
                document.querySelector('body').classList.add('m-hidden');
                if (modal.getAttribute('data-modal') === btnModalTag) {
                    modal.classList.add('open');
                    document.querySelector('body').classList.add('m-hidden');
                    if (btnModalTag === 'confirm-sms') {
                        timerInit(modal.querySelectorAll('.modal__timer'))
                    }
                    modal.querySelectorAll('.g-input input').forEach(function(input, index) {
                        if (index === 0) { input.focus() }
                    });
                }
            });
        });
    })

    allModal.forEach(function(modal) {
        const closeBtn = modal.querySelector('.modal__close');
        
        modal.addEventListener('click', function(event) {
            if(!modal.classList.contains('--block')) {
                if (event.target == modal) {
                    modal.classList.remove('open');
                    document.querySelector('body').classList.remove('m-hidden');
                }
            }
        })

        if (closeBtn) {
            closeBtn.addEventListener('click', function() {
                modal.classList.remove('open');
                document.querySelector('body').classList.toggle('m-hidden');
            });
        }
    });
}
