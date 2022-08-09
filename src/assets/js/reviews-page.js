if (document.querySelector('.reviews-add__table')) {
    const allElements = document.querySelectorAll('.reviews-add__table li');
    allElements.forEach(function(element) {
        element.querySelector('.reviews-add-show').addEventListener('click', function() {
            element.classList.add('open');
        });
        element.querySelector('.reviews-add-hide').addEventListener('click', function() {
            element.classList.remove('open');
        });
    });
}