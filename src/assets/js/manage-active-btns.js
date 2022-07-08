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