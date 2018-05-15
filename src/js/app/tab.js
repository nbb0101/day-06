require(['jquery'], function($) {
    $('footer').on('click', '.btn', function() {
        $(this).addClass('active').siblings().removeClass('active');
        var index = $(this).index();
        $('.boxs .box').eq(index).show().siblings().hide();
    });
})