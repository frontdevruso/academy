if (document.querySelector('.loading-screen')) {
    document.querySelector('body').classList.add('b-hidden');
    const loadingScreen = document.querySelector('.loading-screen');
    const loadingScreenCircle = document.querySelector('.loading-screen__circle');

    document.addEventListener('DOMContentLoaded', function() {
        loadingScreen.querySelector('.loading-screen__container').classList.add('show');
        setTimeout(function() {
            document.querySelector('.page').classList.remove('show');
            loadingScreenCircle.classList.add('l40');
            setTimeout(function() {
                loadingScreenCircle.classList.add('l70');
                setTimeout(function() {
                    document.querySelector('.page').classList.remove('show');
                    loadingScreenCircle.classList.add('l100');
                    setTimeout(function() {
                        loadingScreen.classList.add('hide');
                        setTimeout(function() {
                            document.querySelector('.page').classList.add('show');
                            document.querySelector('body').classList.remove('b-hidden');
                            loadingScreen.classList.add('none');
                        }, 600);
                    }, 1000);
                }, 1400);
            }, 1400);
        }, 100);
    });
} 