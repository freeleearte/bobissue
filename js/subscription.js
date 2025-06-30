$(function () {
  document.querySelectorAll('.con_top ul, .con_bottom ul').forEach(ul => {
    const items = Array.from(ul.children);
    items.forEach(item => {
      const clone = item.cloneNode(true);
      ul.appendChild(clone);
    });
  });

  const boxArticle = document.querySelector('article.box');
  const tabBox = document.querySelector('.side_tab .box');
  const tabCoupon = document.querySelector('.side_tab .coupontab');
  const character = document.querySelector('.side_character');

  console.log('boxArticle:', boxArticle);
  console.log('tabBox:', tabBox);
  console.log('tabCoupon:', tabCoupon);
  console.log('character:', character);

  const couponBoxArticle = document.querySelector('article.coupon_box');
  
  // 초기 상태: 모든 탭 비활성화
  function resetTabs() {
    tabCoupon?.classList.remove('active');
    tabBox?.classList.remove('active');
    character?.classList.remove('on');
  }
  
  // 페이지 로드 시 초기 상태 설정
  resetTabs();
  
  // 쿠폰박스와 박스 섹션 모두 관찰
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.target === couponBoxArticle) {
          if (entry.isIntersecting) {
            console.log('coupon_box is visible');
            tabCoupon.classList.add('active');
            tabBox.classList.remove('active');
            character.classList.remove('on');
          } else {
            console.log('coupon_box is NOT visible');
            tabCoupon.classList.remove('active');
          }
        } else if (entry.target === boxArticle) {
          if (entry.isIntersecting) {
            console.log('box is visible');
            tabBox.classList.add('active');
            tabCoupon.classList.remove('active');
            character.classList.add('on');
          } else {
            console.log('box is NOT visible');
            tabBox.classList.remove('active');
            character.classList.remove('on');
          }
        }
      });
    },
    {
      root: null,
      threshold: 0.3,
      rootMargin: '-20% 0px -20% 0px'
    }
  );

  // 두 섹션 모두 관찰
  if (couponBoxArticle) {
    console.log('Observing couponBoxArticle');
    observer.observe(couponBoxArticle);
  }
  
  if (boxArticle) {
    console.log('Observing boxArticle');
    observer.observe(boxArticle);
  } else {
    console.warn('boxArticle not found!');
  }

  // 쿠폰탭 클릭 시 쿠폰박스 섹션으로 이동
  document.querySelector('.tab.coupontab')?.addEventListener('click', () => {
    // 즉시 탭 상태 변경
    tabCoupon.classList.add('active');
    tabBox.classList.remove('active');
    character.classList.remove('on');
    
    const target = document.querySelector('article.coupon_box');
    if (target) {
      const headerHeight = 200; // 헤더 높이 고려
      const targetRect = target.getBoundingClientRect();
      const targetPosition = window.pageYOffset + targetRect.top - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });

  // 박스탭 클릭 시 박스 섹션으로 이동
  document.querySelector('.tab.box')?.addEventListener('click', () => {
    // 즉시 탭 상태 변경
    tabBox.classList.add('active');
    tabCoupon.classList.remove('active');
    character.classList.add('on');
    
    const target = document.querySelector('article.box');
    if (target) {
      const headerHeight = -80; // 헤더 높이 고려
      const targetRect = target.getBoundingClientRect();
      const targetPosition = window.pageYOffset + targetRect.top - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });

  // 의견작성하기 모달 관련
  $('.con5 .button a').on('click', function (e) {
    e.preventDefault();
    $('.opinion_modal').css('display', 'flex').addClass('on');
    // 배경 스크롤 막기
    $('body').addClass('modal-open');
  });

  $('.cancel_btn').on('click', function (e) {
    e.preventDefault();
    $('.opinion_modal').removeClass('on').fadeOut();
    // 배경 스크롤 복원
    $('body').removeClass('modal-open');
  });

  // 모달 배경 클릭 시 닫기
  $('.opinion_modal').on('click', function (e) {
    if (e.target === this) {
      $(this).removeClass('on').fadeOut();
      // 배경 스크롤 복원
      $('body').removeClass('modal-open');
    }
  });

  // 등록하기 버튼 클릭 시 감사 메시지 후 모달 닫기
  $('.submit_btn').on('click', function (e) {
    e.preventDefault();
    
    // 모바일 감지
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
      // 모바일에서는 토스트 메시지 스타일로 표시
      showToastMessage('소중한 의견 감사합니다');
      $('.opinion_modal').removeClass('on').fadeOut();
      // 배경 스크롤 복원
      $('body').removeClass('modal-open');
    } else {
      // 데스크톱에서는 알랏창
      alert('소중한 의견 감사합니다');
      $('.opinion_modal').removeClass('on').fadeOut();
      // 배경 스크롤 복원
      $('body').removeClass('modal-open');
    }
  });

  // 토스트 메시지 함수
  function showToastMessage(message) {
    // 기존 토스트가 있다면 제거
    $('.toast-message').remove();
    
    // 토스트 메시지 생성
    const toast = $(`
      <div class="toast-message" style="
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        font-size: 16px;
        z-index: 10000;
        opacity: 0;
        transition: opacity 0.3s ease;
      ">${message}</div>
    `);
    
    // body에 추가
    $('body').append(toast);
    
    // 애니메이션으로 표시
    setTimeout(() => {
      toast.css('opacity', '1');
    }, 10);
    
    // 2초 후 제거
    setTimeout(() => {
      toast.css('opacity', '0');
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, 2000);
  }


});