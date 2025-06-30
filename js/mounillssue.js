$(document).ready(function () {
  /* li 복제하기 */
  const $ul = $('.bobissue ul');
  const $clone = $ul.clone();
  $ul.append($clone.children());

  /*     $('.faq_question').click(function () {
          const $item = $(this).closest('.faq_item');
  
          if ($item.hasClass('on')) {
              // 이미 열려있으면 닫기
              $item.removeClass('on');
          } else {
              // 다른 열려있는 거 닫고 클릭한 항목만 열기
              $('.faq_item.on').removeClass('on');
              $item.addClass('on');
          }
      }); */
  const items = document.querySelectorAll('.faq_item');

  items.forEach(item => {
    const question = item.querySelector('.faq_question');
    question.addEventListener('click', () => {
      const answer = item.querySelector('.faq_answer');

      if (item.classList.contains('on')) {
        item.classList.remove('on');
        answer.style.maxHeight = '0px';
      } else {
        // 기존 열림 상태 닫기
        items.forEach(i => {
          i.classList.remove('on');
          i.querySelector('.faq_answer').style.maxHeight = '0px';
        });

        item.classList.add('on');
        answer.style.maxHeight = answer.scrollHeight + 'px'; // 자동 높이 설정
      }
    });
  });

  // NOTICE 아코디언
  $('.question').click(function () {
    const $item = $(this).closest('.notice_item');
    const isAlreadyOn = $item.hasClass('on');

    // 모든 아이템에서 on 클래스 제거
    $('.notice_item').removeClass('on');

    // 클릭된 항목만 다시 on 추가
    if (!isAlreadyOn) {
      $item.addClass('on');
    }
  });



});
