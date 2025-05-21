$(function () {
    $('.subscription-types .item').click(function () {
        const type = $(this).data('type'); // "box" 또는 "cupon"

        // 탭에서 on 클래스 토글
        $('.subscription-types .item').removeClass('on');
        $(this).addClass('on');

        // 각 타입 박스에 on 클래스 토글
        if (type === 'box') {
            $('.box_type').addClass('on');
            $('.cupon_type').removeClass('on');
        } else if (type === 'cupon') {
            $('.cupon_type').addClass('on');
            $('.box_type').removeClass('on');
        }
    });

    $('#box_type .type_box').click(function () {
        // 선택된 박스에만 active 클래스 추가
        $('#box_type .type_box').removeClass('on');
        $(this).addClass('on');
    });

    const $calendarCells = $('.calendar_table td');

    $calendarCells.each(function () {
        const $cell = $(this);
        const text = $cell.text().trim();

        // 숫자 감싸기 (중복 방지)
        if (text !== '' && $cell.find('span.day-text').length === 0) {
            $cell.html(`<span class="day-text">${text}</span>`);
        }
    });

    $calendarCells.click(function () {
        const $cell = $(this);
        const text = $cell.text().trim();
        if (!text) return;

        if ($cell.hasClass('selected')) {
            $cell.removeClass('selected');
        } else {
            $calendarCells.removeClass('selected');
            $cell.addClass('selected');
        }
    });

    $('.coupon_wrapper .coupon').click(function () {
        $('.coupon_wrapper .coupon').removeClass('on');
        // 모든 쿠폰에서 on 제거
        $(this).addClass('on');
        // 클릭한 쿠폰에 on 추가
    });

    $('#subscribeBtn').click(function (e) {
        e.preventDefault();

        const selectedType = $('.subscription-types .item.on .text').text();

        alert(`${selectedType} 유형을 구독하셨습니다!`);

        // alert 확인 후 페이지 이동
        window.location.href = 'mypage_main.html';
    });
});