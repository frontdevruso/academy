if (document.querySelector('.desktop-menu')) {
    const mobileMenu = document.querySelector('.mobile-menu');
    const burger = document.querySelector('.burger--mb');
    const header = document.querySelector('.header');

    const body = document.body
    const page = document.querySelector('.page');

    burger.addEventListener('click', function() {
        body.classList.toggle('m-open');
        header.classList.remove('header--floating');
        mobileMenu.classList.toggle('show');

        page.classList.toggle('hide');
    });
}