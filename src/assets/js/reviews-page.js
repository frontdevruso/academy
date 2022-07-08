if (document.querySelector('.reviews-add__table')) {
    const allElements = document.querySelectorAll('.reviews-add__table li');
    allElements.forEach(function(element) {
        element.querySelector('button').addEventListener('click', function() {
            element.classList.add('open');
        });
    });
}