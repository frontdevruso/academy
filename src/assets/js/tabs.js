function switchingTabs(allTabsBtns, allTabs, tabsContent) {
    if (tabsContent) {
        console.log(allTabsBtns)
        allTabsBtns.forEach(function(btn) {
            btn.addEventListener('click', function() {
                let serialNumber = this.getAttribute('data-tab-btn');
                let currentActiveTab = tabsContent.querySelector('[data-tab].active');

                if (currentActiveTab.getAttribute('data-tab') === serialNumber) {
                    return
                } else {
                    allTabs.forEach(function(tab) {
                        tab.classList.remove('active');
                        tab.classList.remove('show');
                        tab.classList.add('none');
                        if(tab.getAttribute('data-tab') === serialNumber) {
                            tab.classList.add('active');
                            tab.classList.remove('none');
                        }
                    });
                }
            }); 
        });
    }
} 

switchingTabs(document.querySelectorAll('.modal__panel button[data-tab-btn]'), document.querySelectorAll('.modal__tabs-item[data-tab]'), document.querySelector('.modal--register .modal__container'));