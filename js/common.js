$(function () {
    let lastScrollTop = 0;
    const $rightMenu = $('.right-menu');

    function moveMenu(to) {
        if (to === 'bot') {
            $('.bot .right-placeholder').append($rightMenu);
        } else {
            $('.mid .right-placeholder').append($rightMenu);
        }
    }

    $(window).on('scroll', function () {
        let currentScroll = $(this).scrollTop();

        if (currentScroll > lastScrollTop) {
            $('header').addClass('scroll');
            moveMenu('bot');
        } else {
            $('header').removeClass('scroll');
            moveMenu('mid');
        }

        lastScrollTop = currentScroll;
    });

    $('.search_container img').on('click', function () {
        $('.search_container').toggleClass('active');
        $('.search_input').focus();
    });

    // 초기 위치 설정
    moveMenu('mid');
});
