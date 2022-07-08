function addClassOnEyeContactDelay(elements, timeout) {
    if (elements) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(function(entry, index) {
                if (entry.isIntersecting) {
                    setTimeout(function() {
                        entry.target.classList.add('show');
                    }, timeout * (index + 1));
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

addClassOnEyeContactDelay(document.querySelectorAll('.achievements__bubbles-item'), 500);