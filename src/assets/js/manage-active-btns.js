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

manangeActiveBtns(document.querySelectorAll('.modal--register .modal__panel button'));
manangeActiveBtns(document.querySelectorAll('.modal--recovery .modal__panel button'));
manangeActiveBtns(document.querySelectorAll('.modal--tariff .modal__tariffs-item'));