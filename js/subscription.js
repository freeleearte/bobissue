
$(function () {
  function setupInfiniteScroll(containerSelector, speed = 1, direction = 'left') {
    const container = document.querySelector(containerSelector);
    const list = container.querySelector("ul");
    let pos = 0;

    // 복제 없이, 단순하게 길이 확인
    const totalWidth = list.scrollWidth;

    function animate() {
      if (direction === 'left') {
        pos -= speed;
        if (Math.abs(pos) >= totalWidth) {
          pos = 0;
        }
      } else {
        pos += speed;
        if (pos >= totalWidth) {
          pos = 0;
        }
      }
      list.style.transform = `translateX(${pos}px)`;
      requestAnimationFrame(animate);
    }

    animate();
  }

  // 사용
  document.addEventListener("DOMContentLoaded", function () {
    setupInfiniteScroll(".con_top", 0.5, "left");     // 왼쪽 → 오른쪽
    setupInfiniteScroll(".con_bottom", 0.5, "right"); // 오른쪽 → 왼쪽
  });



  /* 클릭시 해당 섹션만 보여주는 js (ex. 쿠폰형 클릭하면 쿠폰형 내용만 보임!) */
  $('.tab_menu li a').click(function (e) {
    e.preventDefault();

    let target = $(this).attr('href');

    // 탭 메뉴 on 클래스 토글
    $('.tab_menu li').removeClass('on');
    $(this).parent().addClass('on');

    // 콘텐츠 전환
    $('.coupon_box, .box').hide();
    if (target === "") {
      $('.coupon_box').show();
    } else {
      $(target).show();
    }
  });

  // 초기 상태 설정
  $('.coupon_box').show();
  $('.box').hide();
});