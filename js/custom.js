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




    // $(".tab_menu li").click(function (e) {
    //     e.preventDefault();
    //     var index = $(this).index();
    //     $(".sub_slide").removeClass("active");
    //     $(".sub_slide:eq(" + index + ")").addClass("active");
    //     $(".tab_menu li").removeClass("on");
    //     $(this).addClass("on");
    // });
    // $('.tab_menu li').on('click', function (e) {
    //     let idx = $(this).parent().index();

    //     $('.content_wrap .tab_con .sub_slide').removeClass('on');
    //     $('.content_wrap .tab_con .sub_slide').eq(idx).addClass('on');

    //     $('.content_wrap .tab_con .sub_slide').removeClass('on')
    //     $('.content_wrap .tab_con .sub_slide').eq(idx).addClass('on')
    // });

    // $('.tab_menu li').click(function (e) {
    //     var index = $(this).index();
    //     $(".tab_menu li").toggleClass("on");
    // });

    // $('.content_wrap .tab_menu li').on('click', function (e) {
    //     e.preventDefault();

    //     let idx = $(this).index();

    //     $('.content_wrap .tab_menu li').removeClass('on');
    //     $('.content_wrap .tab_menu li').eq(idx).addClass('on');

    //     $('.content_wrap .tab_con .sub_slide').removeClass('on')
    //     $('.content_wrap .tab_con .sub_slide').eq(idx).addClass('on')
    // });

    // $('.content_wrap .tab_con .sub_slide').slick({
    //     arrows: false,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    // });
    // $('.slider').slick('setPosition');


    // 특정 위치로 슬라이더 이동

    // 지피티방법
    // $('.content_wrap .tab_menu li').on('click', function (e) {
    //     e.preventDefault();

    //     let idx = $(this).index();

    //     $('.content_wrap .tab_menu li').removeClass('on');
    //     $('.content_wrap .tab_menu li').eq(idx).addClass('on');

    //     $('.content_wrap .tab_con .sub_slide').removeClass('on');
    //     $('.content_wrap .tab_con .sub_slide').eq(idx).addClass('on');

    //     // 슬라이더의 높이를 정확하게 계산하기 위해 refresh 메소드 호출
    //     $('.content_wrap .tab_con .sub_slide.on').slick('refresh');

    //     // 특정 위치의 슬라이드로 이동
    //     $('.content_wrap .tab_con .sub_slide.on').slick('slickGoTo', 0); // 0은 이동하려는 슬라이드의 인덱스입니다.
    // });
    // $('.content_wrap .tab_con .sub_slide').slick({
    //     arrows: false,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    // });
    //정인방법
    $('.tab_menu li').on('click', function (e) {
        e.preventDefault();

        let idx = $(this).index();

        $('.content_wrap .tab_menu li').removeClass('on');
        $('.content_wrap .tab_menu li').eq(idx).addClass('on');

        $('.content_wrap .tab_con .sub_slide').removeClass('on')
        $('.content_wrap .tab_con .sub_slide').eq(idx).addClass('on')

        // $('.content_wrap .tab_con .sub_slide').slick('setPosition')
    });
    // $('.content_wrap .tab_con .sub_slide').slick({
    //     arrows: false,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     dots: true,
    // });
    $('.content_wrap .tab_con .sub_slide').slick({
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        dots: true,
    });
});