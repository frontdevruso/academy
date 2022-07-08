document.addEventListener("DOMContentLoaded", () => {
    const burgers = document.querySelectorAll(".burger");
    
    burgers.forEach(burger => {
        burger.addEventListener("click", (e) => {
            e.currentTarget.classList.toggle("isOpen");
        });    
    })
});