$(function () {


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


