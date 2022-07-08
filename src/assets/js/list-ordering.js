function changingOrderList(items, itemsContainer) {
    const itemsCount = items.length;
    if(itemsContainer) {
        if (itemsCount % 2 == 0) {
            itemsContainer.style.gridTemplateRows = `repeat(${itemsCount / 2}, auto)`;
        } else {
            itemsContainer.style.gridTemplateRows = `repeat(${Math.round(itemsCount / 2)}, auto)`;
        }
    }
}

changingOrderList(document.querySelectorAll('.client-hook__info-list li'), document.querySelector('.client-hook__info-list'));
