$(function () {
    $('.submit_btn').on('click', function () {
        const id = $('#id').val();
        const pw = $('#pw').val();
        const pw2 = $('#pw2').val();
        const name = $('#name').val();
        const phone = $('#phone').val();
        const address = $('#address').val();

        const allRequiredChecked = $('.terms input[required]').length === $('.terms input[required]:checked').length;

        if (
            allRequiredChecked
        ) {
            $('.wrap').addClass('on');
            $('.modal_test_wrap').addClass('on');
        } else {
            alert('입력값 또는 필수 약관 동의를 확인해주세요.');
        }
    });

    $('#all_agree').on('change', function () {
        const isChecked = $(this).is(':checked');
        // 전체동의 제외한 모든 체크박스 동기화
        $('.agreement_wrap input[type="checkbox"]').not('#all_agree').prop('checked', isChecked);
    });

    // 개별 체크박스를 하나라도 해제하면 전체 동의 체크 해제
    $('.agreement_wrap input[type="checkbox"]').not('#all_agree').on('change', function () {
        const allChecked = $('.agreement_wrap input[type="checkbox"]').not('#all_agree').length ===
            $('.agreement_wrap input[type="checkbox"]:checked').not('#all_agree').length;
        $('#all_agree').prop('checked', allChecked);
    });

    //모달
    let answeredQuestions = {};
    let isAnimating = false; // 중복 방지 플래그

    // 테스트 시작
    $('.modal_test_wrap .start button').on('click', function () {
        $('.modal_test_wrap .start').removeClass('on');
        $('.modal_test_wrap .quiz').addClass('on');
        showQuestion($('.first'));
    });

    // 항목 클릭 시 자동 다음 이동
    $('.quiz .question .bot li').on('click', function () {
        if (isAnimating) return;
        isAnimating = true;

        const $this = $(this);
        const $current = $this.closest('.question');
        const currentIndex = $current.index();

        // 답 저장
        $current.find('li').removeClass('check');
        $this.addClass('check');

        // 저장 (index → 몇 번째 li인지)
        answeredQuestions[currentIndex] = $this.index();

        // 처음 답한 경우만 딜레이 후 check 제거하고 넘어감
        setTimeout(function () {
            const $next = $current.nextAll('.question').first();

            if ($next.length > 0) {
                $current.removeClass('on');
                showQuestion($next);
            } else {
                $current.removeClass('on');
                $('.modal_test_wrap .quiz').removeClass('on');
                $('.modal_test_wrap .result').addClass('on');
            }

            isAnimating = false;
        }, 400);
    });

    // 이전 버튼
    $('.quiz .prev').on('click', function () {
        const $current = $(this).closest('.question');
        const $prev = $current.prevAll('.question').first();

        if ($prev.length > 0) {
            $current.removeClass('on');
            showQuestion($prev);
        }
    });

    // 다음 버튼
    $('.quiz .next').on('click', function () {
        const $current = $(this).closest('.question');
        const $next = $current.nextAll('.question').first();

        if ($next.length > 0) {
            $current.removeClass('on');
            showQuestion($next);
        } else {
            $current.removeClass('on');
            $('.modal_test_wrap .quiz').removeClass('on');
            $('.modal_test_wrap .result').addClass('on');
        }
    });

    // 질문 표시 함수
    function showQuestion($question) {
        $question.addClass('on').siblings('.question').removeClass('on');

        const index = $question.index();

        // 답변 복원
        const savedIndex = answeredQuestions[index];
        if (savedIndex !== undefined) {
            const $items = $question.find('.bot li');
            $items.removeClass('check');
            $items.eq(savedIndex).addClass('check');
        }

        // 이전 버튼 표시
        if ($question.hasClass('first')) {
            $question.find('.prev').hide();
        } else {
            $question.find('.prev').show();
        }

        // 다음 버튼은 이미 답한 질문일 때만 표시
        if (answeredQuestions[index] !== undefined) {
            $question.find('.next').show();
        } else {
            $question.find('.next').hide();
        }
    }
});