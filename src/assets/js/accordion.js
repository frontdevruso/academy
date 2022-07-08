if (document.querySelectorAll('.accordion')) {
    document.querySelectorAll('.accordion').forEach(function(accordion) {
        accordion.querySelectorAll('.accordion__item').forEach(function(item) {
            item.addEventListener('click', function() {
                if (item.classList.contains('open')) {
                    item.classList.remove('open');
                } else {
                    if(item.querySelector(".accordion__item-control")) {
                        item.classList.add("open");
                    }
                    accordion.querySelectorAll('.accordion__item').forEach(i => i.classList.remove('open'));
                    item.classList.add("open");
                }
            });
        });
    });
}