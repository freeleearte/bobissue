$(function () {
  let answeredQuestions = {};
  let isAnimating = false;
  let a = 0;
  let b = 0;
  let currentQuestionIndex = 0; // 현재 질문 인덱스
  let totalQuestions = $('.quiz .question').length; // 전체 질문 수

  // 테스트 시작
  $('.modal_test_wrap .start .button').on('click', function () {
    $('.modal_test_wrap .start').removeClass('on');
    $('.modal_test_wrap .quiz').addClass('on');
    showQuestion($('.first'));
    currentQuestionIndex = 1; // 첫 질문부터 시작
    updateProgressBar();
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
    answeredQuestions[currentIndex] = $this.index();

    // 점수 집계
    if ($this.index() === 0) a++;
    else if ($this.index() === 1) b++;

    // 딜레이 후 다음 질문 이동
    setTimeout(function () {
      const $next = $current.nextAll('.question').first();

      if ($next.length > 0) {
        $current.removeClass('on');
        showQuestion($next);
        currentQuestionIndex++;
        updateProgressBar(); // progress bar 업데이트
      } else {
        $current.removeClass('on');
        $('.modal_test_wrap .quiz').removeClass('on');
        showResult();
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
      currentQuestionIndex--;
      updateProgressBar();
    }
  });

  // 다음 버튼
  $('.quiz .next').on('click', function () {
    const $current = $(this).closest('.question');
    const $next = $current.nextAll('.question').first();

    if ($next.length > 0) {
      $current.removeClass('on');
      showQuestion($next);
      currentQuestionIndex++;
      updateProgressBar(); // progress bar 업데이트
    } else {
      $current.removeClass('on');
      $('.modal_test_wrap .quiz').removeClass('on');
      showResult();
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

    // 이전 버튼 표시 여부
    if ($question.hasClass('first')) {
      $question.find('.prev').hide();
    } else {
      $question.find('.prev').show();
    }

    // 다음 버튼 표시 여부
    if (answeredQuestions[index] !== undefined) {
      $question.find('.next').show();
    } else {
      $question.find('.next').hide();
    }
  }

  // 결과 보여주는 함수
  function showResult() {
    let resultType = "";
    let resultText = "";
    let resultImg = "";
    let resultAlt = "";

    if (a > 3) {
      resultType = "불밥이";
      resultText = "불같이 뜨거운 당신을 위한 매운 스토리!";
      resultImg = "../stroy.img/modal_spicy.jpg";
      resultAlt = "불밥이 이미지";
    } else if (b > 3) {
      resultType = "꿀밥이";
      resultText = "달콤한 당신을 위한 꿀 같은 스토리!";
      resultImg = "../stroy.img/modal_sweet.jpg";
      resultAlt = "꿀밥이 이미지";
    } else {
      resultType = "담밥이";
      resultText = "균형 잡힌 당신위한 담백한 이야기!";
      resultImg = "../stroy.img/modal_normal.jpg";
      resultAlt = "담밥이 이미지";
    }

    $(".modal-bg .result-modal h3 span").text(resultType);
    $(".modal-bg .result-modal p").text(resultText);
    $(".modal-bg .result-modal img").attr("src", resultImg).attr("alt", resultAlt);
    $(".modal-bg").addClass("on");
  }

  // 결과 모달 닫기
  $('.modal-bg .done').on('click', function () {
    $(".modal-bg").removeClass("on");
    $(".result").addClass("on");
  });

  // 공유 버튼 (미구현)
  $('.modal-bg .share').on('click', function () {
    alert('공유 기능은 준비 중입니다 :)');
  });

  // 프로그레스 바 업데이트 함수
  function updateProgressBar() {
    const progressPercent = (currentQuestionIndex / totalQuestions) * 100;
    $('.progress_bar .done').css('width', progressPercent + '%');
  }

  // 테스트 다시하기
  $('.re-test').on('click', function () {
    a = 0;
    b = 0;
    answeredQuestions = {};
    currentQuestionIndex = 0;

    $('.quiz .question').removeClass('on');
    $('.quiz .question li').removeClass('check');
    $('.modal-bg').removeClass('on');
    $('.modal_test_wrap .quiz').removeClass('on');
    $('.modal_test_wrap .result').removeClass('on');
    $('.result').removeClass('on');
    $('.modal_test_wrap .start').addClass('on');
    $('.progress-bar .done').css('width', '0%');
  });




  // 메뉴 토글 (클릭 시 열고 닫기)
  $('.gnb').on('click', '.menu-toggle', function (e) {
    e.preventDefault();
    $('.dropdown-menu').toggleClass('active');
  });

  // 드롭다운 항목 클릭 시 텍스트 변경 + 섹션 전환 + 닫기
  $('.gnb').on('click', '.dropdown-menu a', function (e) {
    e.preventDefault();

    const baseText = $(this).data('base');       // "스토리", "상황", "문화"
    const targetId = $(this).data('target');     // "section-story" 등

    // 텍스트 변경
    $('.menu-toggle p').text(baseText);

    // 섹션 전환
    $('.content-section').removeClass('active');
    $('#' + targetId).addClass('active');

    // 드롭다운 닫기
    $('.dropdown-menu').removeClass('active');
  });

});