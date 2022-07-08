function initializeTabsPanel(selects) {
    selects.forEach(select => {
        select.addEventListener('click', function() {
            selects.forEach(function(s) {s.classList.remove('active')});
            select.classList.add('active');
        });
    });
}

initializeTabsPanel(document.querySelectorAll('.tabs-panel a'));