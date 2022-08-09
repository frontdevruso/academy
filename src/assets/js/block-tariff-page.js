if (document.querySelector('.--tariff-block')) {
    if (document.querySelector('.modal--tariff')) {
        const modal = document.querySelector('.modal--tariff');

        const blockingPage = () => {    
            if (window.scrollY > 50) {
                modal.classList.add('open');
                modal.classList.add('--block');
                document.querySelector('body').classList.add('m-hidden');
            }
        }
    
        blockingPage();
    
        window.addEventListener("scroll", function() {
            blockingPage();
        });
    }
}