var swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    grabCursor: true,
    speed: 600,
});
