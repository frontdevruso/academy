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