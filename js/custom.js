$(function () {

    $('.header .xi-bars').on('click', function (e) {
        e.preventDefault();
        $('.header .gnb').toggleClass('on');
    });

    $('.visual_slide').slick({
        arrows: true,
        dots: true,
        fade: true,
    });

    $('.tab_menu li').on('click', function (e) {
        // e.preventDefault();

        // let idx = $(this).index();

        // $('.content_wrap .left_content .tab_menu li').removeClass('on');
        // $('.content_wrap .left_content .tab_menu li').eq(idx).addClass('on');

        // $('.content_wrap .right_contnet .tab_con .sub_slide').removeClass('on')
        // $('.content_wrap .right_contnet .tab_con .sub_slide').eq(idx).addClass('on')

        // $('.content_wrap .tab_con .sub_slide').slick('setPosition')
    });

    // $('.content_wrap .right_contnet .tab_con .sub_slide').slick({
    //     arrows: false,
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     centerMode: true,
    //     centerPadding: '0px',
    //     dots: true,
    // });
    $('.content_wrap .left_content .tab_menu li').on('click', function (e) {
        e.preventDefault();
        const idx = $(this).index();
        $('.content_wrap .left_content .tab_menu li').removeClass('on');
        $('.content_wrap .left_content .tab_menu li').eq(idx).addClass('on');

        $('.content_wrap .right_contnet .tab_con .swiper').removeClass('on')
        $('.content_wrap .right_contnet .tab_con .swiper').eq(idx).addClass('on')
    });

});
const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    // freeMode: true,
    // autoplay: true,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
});