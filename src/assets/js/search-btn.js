if (document.querySelector('.search-btn')) {
    const searchBtn = document.querySelector('.search-btn');

    const headerLinks = document.querySelector('.header__nav-links');
    const headerConsulting = document.querySelector('.header__nav-consulting');
    const headerIcons = document.querySelector('.header__nav-icons');
    const burgerPc = document.querySelector('.burger--pc');

    const searchInput = document.querySelector('.header__nav-search');
    const input = document.querySelector('.header__nav-search input');
    const searchContainer = document.querySelector('.header__nav-search ul');

    input.addEventListener('focus', function() {
        showHide(searchContainer);
    });

    input.addEventListener('blur', function() {
        showHide(searchContainer);
    });

    function showHide(element) {
        if (!element.classList.contains('none')) {
            element.classList.add('a-hide');
            setTimeout(function() {
                element.classList.add('none');
            }, 200);
        } else {
            setTimeout(function() {
                element.classList.remove('none');
            }, 200);
            setTimeout(function() {
                element.classList.remove('a-hide');
            }, 400);
        }
    }

    searchBtn.addEventListener('click', function() {
        showHide(headerLinks);
        showHide(headerConsulting);
        showHide(burgerPc);
        showHide(headerIcons);
        showHide(searchInput)
    });
}