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
        
        if (elements.length) {
            elements.forEach(element => {
                observer.observe(element);
            });
        }
    }
}

addClassOnEyeContact(document.querySelectorAll('.modal__tabs-item[data-tab]'), 0)
addClassOnEyeContact(document.querySelectorAll('.cabinet__account main[data-tab]'), 0)