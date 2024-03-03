$(function () {

    $('.header .xi-bars').on('click', function (e) {
        e.preventDefault();
        $('.header .gnb').toggleClass('on');
    });

    $('.visual_slide').slick({
        arrows: true,
        dots: true,
        fade: true,
        responsive: [
            {
                breakpoint: 376,
                settings: {
                    arrows: false,
                }
            }
        ]
    });

    $('.content_wrap .left_content .tab_menu li').on('click', function (e) {
        e.preventDefault();
        const idx = $(this).index();
        $('.content_wrap .left_content .tab_menu li').removeClass('on');
        $('.content_wrap .left_content .tab_menu li').eq(idx).addClass('on');

        $('.content_wrap .right_contnet .tab_con .swiper').removeClass('on')
        $('.content_wrap .right_contnet .tab_con .swiper').eq(idx).addClass('on')
    });
    const swiper = new Swiper('.swiper', {
        loop: true,

        slidesPerView: 4,
        spaceBetween: 30,
        freeMode: true,
        autoplay: true,
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            375: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
        },
    });
});
