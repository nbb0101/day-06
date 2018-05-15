require.config({
    paths: {
        'jquery': './libs/jquery.min',
        'swiper': './libs/swiper-3.4.2.jquery.min',
        'index': './app/index',
        'demo': './app/demo',
        'tab': './app/tab'
    }
});
require(['index']);
require(['demo']);
require(['tab']);