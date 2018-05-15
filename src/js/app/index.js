require(['jquery', 'swiper'], function($, swiper) {
    new Swiper('.banner', {
        autoplay: 2000,
        loop: true,
        pagination: '.swiper-pagination'
    })
})