const smoothLinks = document.querySelectorAll('a[href^="#"]');
if (smoothLinks) {
    for (let smoothLink of smoothLinks) {
        smoothLink.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = e.currentTarget.getAttribute("href") === "#" || "" ? "#page" : e.currentTarget.getAttribute("href");
            const headerHeight = document.querySelector('.header') ? document.querySelector('.header').clientHeight : 0;
            
            function getPosition(element) {
                var xPosition = 0;
                var yPosition = 0;
            
                while(element) {
                    xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
                    yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
                    element = element.offsetParent;
                }
            
                return { x: xPosition, y: yPosition };
            }

            if (targetId) {
                window.scrollTo(0, getPosition(document.querySelector(targetId)).y - headerHeight);
            }
        });
    };
}