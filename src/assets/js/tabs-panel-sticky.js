if (document.querySelector('.tabs-panel')) {
    const tabsPanel = document.querySelector('.tabs-panel');
    const position = getPosition(tabsPanel).y

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
        if (window.scrollY > (position - 135)) {
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