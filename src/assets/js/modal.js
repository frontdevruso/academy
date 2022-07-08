if (document.querySelectorAll('.modal')) {
    const allModal = document.querySelectorAll('.modal');
    allModal.forEach(function(modal) {
        const closeBtn = modal.querySelector('.modal__close');

        closeBtn.addEventListener('click', function() {
            modal.classList.remove('open');
        });
    });
}
