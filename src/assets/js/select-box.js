function initializeSelect(selects) {
    selects.forEach(select => {
        select.addEventListener('click', function() {
            selects.forEach(function(s) {s.classList.remove('active')});
            select.classList.add('active');
        });
    });
}

initializeSelect(document.querySelectorAll('.the-title__select [data-select-item]'));


// MOBILE

document.querySelectorAll('.select-box').forEach(function(select) {
    const selected = select.querySelector(".select-box-current");
    const optionsList = select.querySelectorAll(".option");

    document.addEventListener('click', (event) => {
        let isClickInsideElement = selected.contains(event.target); 
        if (!isClickInsideElement) {
            select.classList.remove("active");
        }
    });

    selected.addEventListener("click", () => {
        select.classList.toggle("active");
        select.classList.remove('g-select-error');
    });

    optionsList.forEach(o => {
        o.addEventListener("click", () => {
            hasSelected = true;
            selected.innerHTML = o.querySelector("label").innerHTML;
            select.classList.remove("active");
        });
    });
})