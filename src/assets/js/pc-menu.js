if (document.querySelector('.desktop-menu')) {
    const desktopMenu = document.querySelector('.desktop-menu');
    const header = document.querySelector('.header');
    const headerLinks = document.querySelector('.header__nav-links');
    const headerIcons = document.querySelector('.header__nav-icons');
    const headerConsulting = document.querySelector('.header__nav-consulting');
    const burger = document.querySelector('.burger--pc');

    function hide(element) {
        if (!element.classList.contains('none')) {
            element.classList.add('a-hide');
            setTimeout(function() {
                element.classList.add('none');
            }, 400);
        } else {
            setTimeout(function() {
                element.classList.remove('none');
            }, 400);
            setTimeout(function() {
                element.classList.remove('a-hide');
            }, 600);
        }
    }

    burger.addEventListener('click', function() {
        hide(headerLinks);
        hide(headerIcons);
        hide(headerConsulting);
        
        if (!burger.classList.contains('burger--ml')) {
            setTimeout(function() {
                burger.classList.add('burger--ml');
            }, 600);
        } else {
            setTimeout(function() {
                burger.classList.remove('burger--ml');
            }, 100);
        }

        desktopMenu.classList.toggle('show');
        header.classList.toggle('header--clean');
        if (desktopMenu.classList.contains('show')) {
            setTimeout(function() {
                desktopMenu.querySelector('.desktop-menu__container').classList.add('show');
            }, 400);
        } else { desktopMenu.querySelector('.desktop-menu__container').classList.remove('show') }
    });
}