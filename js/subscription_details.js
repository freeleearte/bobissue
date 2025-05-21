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

    /* 옵션 클릭시 텍스트 변환 */
    /*     $(document).on('click', '.select_options li', function () {
            const selectedText = $(this).text().trim();
            const $select = $(this).closest('.custom_select');
    
            console.log('✅ 선택한 텍스트:', selectedText);
    
            $select.find('.label').text(selectedText);
            $select.removeClass('on');
    
            // 두 번째 셀렉트인 경우
            const index = $('.custom_select').index($select);
            const $thirdSelect = $('.custom_select').eq(2);
    
            if (index === 1) {
                if (selectedText.includes('밥이슈')) {
                    $thirdSelect.addClass('disabled');
                    $thirdSelect.find('.label').text('(필수 3개)원하는 밀키트를 구성해주세요.');
                } else if (selectedText.includes('구성할래요')) {
                    $thirdSelect.removeClass('disabled');
                }
            }
        }); */





    /*     $(document).on('click', '.select_options li', function () {
            const selectedText = $(this).text().trim();
            const $select = $(this).closest('.custom_select');
            const $label = $select.find('.label');
    
            // 선택한 텍스트 반영
            $label.text(selectedText);
            $select.removeClass('on');
    
            // 두 번째 셀렉트일 경우 → 세 번째 컨트롤
            const index = $('.custom_select').index($select);
            const $thirdSelect = $('.custom_select').eq(2);
            const $thirdLabel = $thirdSelect.find('.label');
    
            if (index === 1) {
                if (selectedText.includes('밥이슈')) {
                    // 비활성화 + 안내 텍스트 초기화
                    $thirdSelect.addClass('disabled');
                    $thirdLabel.text('해당 구성 방법은 선택이 불가합니다.');
                } else if (selectedText.includes('구성할래요')) {
                    // 다시 활성화 + 원래 텍스트 복원
                    $thirdSelect.removeClass('disabled');
                    $thirdLabel.text('(필수 3개)원하는 밀키트를 구성해주세요.');
                }
            }
        });
    
        $(document).on('click', '.custom_select:eq(2) .select_options.check li', function () {
            const $clicked = $(this);
            const $list = $clicked.closest('.select_options.check');
            const $selected = $list.find('li.on');
    
            if ($clicked.hasClass('on')) {
                // 이미 선택된 항목 → 해제
                $clicked.removeClass('on');
                return;
            }
    
            if ($selected.length < 3) {
                // 아직 3개 미만 → 선택 허용
                $clicked.addClass('on');
            } else {
                // 3개 초과 선택 시 차단
                alert('최대 3개까지만 선택할 수 있어요!');
            }
        }); */

    // ✅ 셀렉트 버튼 클릭 시 드롭다운 열기/닫기
    $(document).on('click', '.select_btn', function (e) {
        e.stopPropagation();

        const $select = $(this).closest('.custom_select');
        $('.custom_select').not($select).removeClass('on'); // 다른 셀렉트 닫기

        $select.toggleClass('on'); // 클릭한 셀렉트 열기/닫기
    });


    // ✅ 일반 (1~2번째) 셀렉트: 텍스트 반영 + 닫기
    $(document).on('click', '.select_options li', function () {
        const $select = $(this).closest('.custom_select');
        const index = $('.custom_select').index($select);

        // 세 번째 셀렉트는 제외 (다중 선택 전용)
        if (index === 2) return;

        const selectedText = $(this).text().trim();
        const $label = $select.find('.label');

        $label.text(selectedText); // 텍스트 반영
        $select.removeClass('on'); // 드롭다운 닫기

        // 두 번째 셀렉트일 경우 → 세 번째 제어
        const $thirdSelect = $('.custom_select').eq(2);
        const $thirdLabel = $thirdSelect.find('.label');

        if (index === 1) {
            if (selectedText.includes('밥이슈')) {
                $thirdSelect.addClass('disabled');
                $thirdLabel.text('해당 구성 방법은 선택이 불가합니다.');
            } else if (selectedText.includes('구성할래요')) {
                $thirdSelect.removeClass('disabled');
                $thirdLabel.text('(필수 3개)원하는 밀키트를 구성해주세요.');
            }
        }
    });


    // ✅ 세 번째 셀렉트 (다중 선택 전용)
    $(document).on('click', '.custom_select:eq(2) .select_options.check li', function () {
        const $clicked = $(this);
        const $list = $clicked.closest('.select_options.check');
        const $thirdLabel = $('.custom_select').eq(2).find('.label');
        const $selected = $list.find('li.on');

        // 선택 해제
        if ($clicked.hasClass('on')) {
            $clicked.removeClass('on');
        } else {
            // 최대 3개 제한
            if ($selected.length >= 3) {
                alert('최대 3개까지만 선택할 수 있어요!');
                return;
            }
            $clicked.addClass('on');
        }

        // ✅ 선택된 항목 이름만 요약 (금액 없음)
        const selectedItems = $list.find('li.on .left').map(function () {
            return $(this).text().trim();
        }).get();

        if (selectedItems.length > 0) {
            $thirdLabel.text(selectedItems.join(', '));
        } else {
            $thirdLabel.text('(필수 3개)원하는 밀키트를 구성해주세요.');
        }
    });


    $(document).on('click', function (e) {
        const $target = $(e.target);

        // 클릭된 요소가 세 번째 custom_select 내부일 경우 무시
        if ($target.closest('.custom_select').index() === 2) {
            return;
        }

        $('.custom_select').removeClass('on');
    });



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

});