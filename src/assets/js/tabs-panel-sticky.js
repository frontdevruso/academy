if (document.querySelector('.tabs-panel')) {
    const tabsPanel = document.querySelector('.tabs-panel');
    const position = getPosition(tabsPanel).y
    const headerPadding = document.querySelector('.header').clientHeight * 2;

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

    const checkingTabPosition = () => {    
        if (window.scrollY > (position - headerPadding)) {
            tabsPanel.classList.add('tabs-panel--floating');
        } else {
            tabsPanel.classList.remove('tabs-panel--floating');
        }
    }
    
    checkingTabPosition()
    
    window.addEventListener("scroll", function() {
        checkingTabPosition();
    });
}

// function detectCertainElement(elements, timeout) {
//     if (elements) {
//         const observer = new IntersectionObserver(entries => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     setTimeout(function() {
//                         console.log(entry.target)
//                         document.querySelector('.tabs-panel').classList.add('tabs-panel--fx-bottom');
//                     }, timeout);
//                 }
//             });
//         }, { threshold: 0.5 });
        
//         if (elements.length) {
//             elements.forEach(element => {
//                 observer.observe(element);
//             });
//         }
//     }
// }