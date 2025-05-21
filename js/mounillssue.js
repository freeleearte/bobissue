$(document).ready(function () {
    $('.notice_answer').hide(); // 초기에는 모두 숨김

    $('.notice_item .question').on('click', function () {
        var $clickedAnswer = $(this).next('.notice_answer');

        if ($clickedAnswer.is(':visible')) {
            $clickedAnswer.stop().slideUp(400);
            $(this).find('.arrow img').removeClass('rotate');
        } else {
            $('.notice_answer').stop().slideUp(400); // 다른 열려 있는 것 닫기
            $('.arrow img').removeClass('rotate');

            $clickedAnswer.stop().slideDown(400);
            $(this).find('.arrow img').addClass('rotate');
        }
    });

    /* li 복제하기 */
    const $ul = $('.bobissue ul');
    const $clone = $ul.clone();
    $ul.append($clone.children());

    $('.faq_question').click(function () {
        const $item = $(this).closest('.faq_item');

        if ($item.hasClass('on')) {
            // 이미 열려있으면 닫기
            $item.removeClass('on');
        } else {
            // 다른 열려있는 거 닫고 클릭한 항목만 열기
            $('.faq_item.on').removeClass('on');
            $item.addClass('on');
        }
    });
});
