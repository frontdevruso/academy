if (document.querySelectorAll('[data-link-section]')) {
    const allLinks = document.querySelectorAll('[data-link-section]');
    const allSections = document.querySelectorAll('[data-section]');

    function initActiveClass() {
        window.addEventListener('scroll', () => {
            let current = '';
            allSections.forEach(function(section) {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                if (window.pageYOffset >= sectionTop) {
                    current = section.getAttribute('id');
                }
            });
            
            allLinks.forEach(function(link) {
                if (current === link.getAttribute('href').substring(1)) {
                    allLinks.forEach(function(l) { l.classList.remove('active') })
                    link.classList.add('active');
                }
            });
        });
    }

    initActiveClass();
}