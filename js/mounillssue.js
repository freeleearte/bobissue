$(document).ready(function () {
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
