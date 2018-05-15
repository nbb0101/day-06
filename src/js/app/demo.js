require(['jquery', 'swiper'], function($, swiper) {
    new Swiper('.main', {
        loop: false,
        pagination: '.swiper-pagination'
    })
})