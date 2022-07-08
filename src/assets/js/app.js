const reviewsComment = document.querySelectorAll('.reviews__slider ul li p');
const mainSliderComment = document.querySelectorAll('.main-slider__info-wrapper-description p');

if (reviewsComment) {
    reviewsComment.forEach(function(item) {
        item.style.setProperty("-webkit-box-orient", "vertical");
    })
}

if (mainSliderComment) {
    mainSliderComment.forEach(function(item) {
        item.style.setProperty("-webkit-box-orient", "vertical");
    })
}