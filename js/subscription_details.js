$(function () {



    // 버튼 클릭 시 열기/닫기
    $('.select_btn').on('click', function (e) {
        e.stopPropagation(); // 이벤트 전파 방지
        const $select = $(this).closest('.custom_select');

        // 다른 셀렉트 닫기
        $('.custom_select').not($select).removeClass('on');

        // 현재 셀렉트 토글
        $select.toggleClass('on');
    });

    // ✅ 셀렉트 버튼 클릭 시 열기/닫기
    $(document).on('click', '.select_btn', function (e) {
        e.stopPropagation();

        const $select = $(this).closest('.custom_select');
        // 다른 셀렉트 닫기 (단, 다중 선택 중엔 닫히지 않게 필터링)
        $('.custom_select').not($select).removeClass('on');
        $select.toggleClass('on');
    });

    // ✅ 1, 2번째 셀렉트 (단일 선택)
    $(document).on('click', '.custom_select:not(:has(.select_options.check)) .select_options li', function () {
        const $li = $(this);
        const $select = $li.closest('.custom_select');
        const $label = $select.find('.label');
        const selectedText = $li.text().trim();

        $label.text(selectedText);
        $select.removeClass('on');

        // 두 번째 셀렉트 → 세 번째 제어
        const index = $('.custom_select').index($select);
        const $third = $('.custom_select').eq(index + 1); // 보통 다음 형제
        const $thirdLabel = $third.find('.label');

        if (selectedText.includes('밥이슈')) {
            $third.addClass('disabled');
            $thirdLabel.text('해당 구성 방법은 선택이 불가합니다.');
        } else if (selectedText.includes('구성할래요')) {
            $third.removeClass('disabled');
            $thirdLabel.text('(필수 3개)원하는 밀키트를 구성해주세요.');
        }
    });

    // ✅ 3번째 셀렉트 (다중 선택)
    $(document).on('click', '.custom_select .select_options.check li', function (e) {
        e.stopPropagation(); // ✅ 닫힘 방지

        const $clicked = $(this);
        const $select = $clicked.closest('.custom_select');
        const $list = $select.find('.select_options.check');
        const $label = $select.find('.label');
        const $selected = $list.find('li.on');

        if ($clicked.hasClass('on')) {
            $clicked.removeClass('on');
        } else {
            if ($selected.length >= 3) {
                alert('최대 3개까지만 선택할 수 있어요!');
                return;
            }
            $clicked.addClass('on');
        }

        const selectedItems = $list.find('li.on .left').map(function () {
            return $(this).text().trim();
        }).get();

        $label.text(selectedItems.length > 0 ? selectedItems.join(', ') : '(필수 3개)원하는 밀키트를 구성해주세요.');
    });

    // ✅ 셀렉트 외부 클릭 시 닫기 (단, 다중 선택 클릭은 유지)
    $(document).on('click', function (e) {
        const $target = $(e.target);

        // 다중 선택 영역 안이면 닫기 금지
        if ($target.closest('.select_options.check').length > 0 || $target.closest('.custom_select').length > 0) {
            return;
        }

        $('.custom_select').removeClass('on');
    });




    // 열기
    $('.option_bar_before button').on('click', function () {
        $('.option_overlay').addClass('active');
    });

    // 닫기 - 엑스버튼
    $('.option_overlay .cancle').on('click', function () {
        $('.option_overlay').removeClass('active');
    });

    // 닫기 - 바깥 클릭 시 (option_bar 외부 클릭)
    $(document).on('click', function (e) {
        if ($(e.target).hasClass('option_overlay')) {
            $('.option_overlay').removeClass('active');
        }
    });



    /* 아코디언 */
    $('.con .banner .accordion').click(function () {
        const $clicked = $(this);
        const $target = $clicked.closest('.banner').siblings('.hidden');
        const isVisible = $target.is(':visible');
        const $all = $('.hidden');

        // 모든 콘텐츠 닫기
        $all.stop(true, true).slideUp(300);

        if (!isVisible) {
            // 클릭한 콘텐츠 열기 (스크롤 보정 없이)
            $target.stop(true, true).slideDown(300);
        }
    });
    /* 스와이퍼 */

    // 모든 .acodian, .acodian_2 슬라이더 개별 초기화
    document.querySelectorAll('.acodian').forEach((swiperContainer) => {
        new Swiper(swiperContainer, {
            slidesPerView: 'auto',
            spaceBetween: 16,
            centeredSlides: true,
            slidesOffsetAfter: 20,
            pagination: {
                el: swiperContainer.querySelector('.swiper-pagination'),
                clickable: true,
            },
        });
    });

    document.querySelectorAll('.acodian_2').forEach((swiperContainer) => {
        new Swiper(swiperContainer, {
            slidesPerView: 'auto',
            spaceBetween: 16,
            centeredSlides: true,
            slidesOffsetAfter: 20,
            pagination: {
                el: swiperContainer.querySelector('.swiper-pagination2'),
                clickable: true,
            },
        });
    });
});