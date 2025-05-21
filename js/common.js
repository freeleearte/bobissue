$(function () {
  /* Header */
  const headerHtml = `
<div class="top">
    <div class="inner">
        <div class="user-placeholder"></div>
    </div>
</div>
<div class="mid">
    <div class="inner">
        <div class="left">
            <h1><a href="./index.html"><img src="asset/logo.png" alt="밥잇슈"></a></h1>
            <ul>
                <li class=""><a href="./index.html">잇슈존</a></li>
                <li><a href="./subscription.html">구독잇슈</a></li>
            </ul>
            <div class="sub_ad">
                <img src="asset/sub_ad.png" alt="구독할인">
            </div>
        </div>
        <div class="right-placeholder"></div>
    </div>
</div>
<div class="bot">
    <div class="inner">
        <nav class="nav-placeholder"></nav>
        <div class="right-placeholder"></div>
    </div>
</div>
<ul class="user-menu">
    <li><a href="./new.html">회원가입</a></li>
    <li><a href="./login.html">로그인</a></li>
</ul>
<ul class="nav-menu">
    <li><a href=" #">브랜드</a></li>
    <li><a href="./storyissue.html">스토리잇슈</a></li>
    <li><a href="./bobStore.html">밥도잇슈</a></li>
    <li><a href="./mounillssue.html">뭔일잇슈</a></li>
    <li><a href="">MY잇슈</a></li>
</ul>
<ul class="right-menu">
    <li class="search_container"><input type="search" class="search_input" placeholder="검색어를 입력해주세요." /><img
            src="asset/search.png" alt="search"></li>
    <li class="heart_icon"><a href="./mypage_like.html"><img src="asset/heart.png" alt="heart"></a></li>
    <li><a href="./bag.html"><img src="asset/bag.png" alt="bag"></a></li>
    <li class="menu-open"><a href="#"><img src="asset/ham_menu.png" alt="탭바 메뉴"></a></li>
</ul>
<div class="header_tap_menu_wrap">
<div class="header_tap_menu">
<img src="asset/tab_X.png" alt="닫기" class="menu-close">
    <div class="user-placeholder"></div>
    <div class="tab_banner">
        <img src="asset/h_tab_logo.png" alt="밥이 로고">
        <p>지금 구독하면<br>다양한 혜택이 기다리고있어요 !</p>
    </div>
    <nav class="nav-placeholder"></nav>
</div>
</div>
      `;

  $("#mainHeader").html(headerHtml);

  // 로그인 상태 체크 및 메뉴 변경
  function updateUserMenu() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const userName = localStorage.getItem('userName');

    const $userMenu = $('.user-menu');

    if (isLoggedIn === 'true' && userName) {
      // userName별로 다른 MY잇슈 페이지 경로 설정
      let myIssueHref = './mypage_main.html'; // 기본 경로
      let myLikeHref = './mypage_like.html';
      let myBagHref = './bag.html';

      // if (userName === '김말숙') {
      //   myIssueHref = './mypage_main.html?김말숙';
      // } else if (userName === '이국밥') {
      //   myIssueHref = './mypage_main.html?이국밥';
      // } else if (userName === '박키트') {
      //   myIssueHref = './mypage_main.html?박키트';
      // }

      $userMenu.html(`
      <li><span><em>${userName}님</em> 환영합니다</span></li>
      <li><button id="logoutBtn">로그아웃</button></li>
    `);

      // 상단 네비 MY잇슈 메뉴 링크 변경
      $('.nav-menu li').last().replaceWith(`<li><a href="${myIssueHref}">MY잇슈</a></li>`);
      $('.right-menu li').eq(1).replaceWith(`<li class="heart_icon"><a href="${myLikeHref}"><img src="asset/heart.png" alt="heart"></a></li>`);
      $('.right-menu li').eq(2).replaceWith(`<li><a href="${myBagHref}"><img src="asset/bag.png" alt="bag"></a></li>`);
    } else {
      // 비회원인 경우 기본 메뉴 + MY잇슈는 로그인 링크로
      $userMenu.html(`
      <li><a href="./new.html">회원가입</a></li>
      <li><a href="./login.html">로그인</a></li>
    `);

      $('.bot nav ul li').last().replaceWith('<li><a href="./login.html">MY잇슈</a></li>');
      $('.right-menu li').eq(1).replaceWith(`<li class="heart_icon"><a href="./login.html"><img src="asset/heart.png" alt="heart"></a></li>`);
      $('.right-menu li').eq(2).replaceWith(`<li><a href="./bag_none.html"><img src="asset/bag.png" alt="bag"></a></li>`);
    }
  }

  updateUserMenu();

  // 로그아웃 버튼 클릭 이벤트
  $(document).on('click', '#logoutBtn', function () {
    localStorage.clear();
    updateUserMenu();
    location.href = 'index.html'; // 로그아웃 후 이동 페이지
  });

  // 현재 URL 경로 얻기
  const path = window.location.pathname;

  // 해당 경로에 따라 on 클래스 설정
  if (path.includes("subscription.html")) {
    $('.mid .left ul li').eq(1).addClass('on');
  } else {
    $('.mid .left ul li').eq(0).addClass('on');
  }

  let lastScrollTop = 0;
  const $rightMenu = $('.right-menu');

  function moveMenu(to) {
    if (to === 'bot') {
      $('.bot .right-placeholder').append($rightMenu);
    } else {
      $('.mid .right-placeholder').append($rightMenu);
    }
  }

  $(window).on('scroll', function () {
    let currentScroll = $(this).scrollTop();

    if (currentScroll > lastScrollTop) {
      $('header').addClass('scroll');
      moveMenu('bot');
    } else {
      $('header').removeClass('scroll');
      moveMenu('mid');
    }

    lastScrollTop = currentScroll;
  });

  $('.menu-open').on('click', function (e) {
    e.preventDefault();
    $('.header_tap_menu_wrap').fadeIn();
    $('.header_tap_menu').addClass('on');
  });

  // 메뉴 닫기
  $('.menu-close').on('click', function () {
    $('.header_tap_menu_wrap').fadeOut();
    $('.header_tap_menu').removeClass('on');
  });

  /* 반응형 */
  const $navMenu = $('.nav-menu');
  const $userMenu = $('.user-menu');

  function moveNavMenu(to) {
    if (to === 'bot') {
      $('.bot .nav-placeholder').append($navMenu);
    } else {
      $('.header_tap_menu .nav-placeholder').append($navMenu);
    }
  }

  function moveUserMenu(to) {
    if (to === 'top') {
      $('.top .user-placeholder').append($userMenu);
    } else {
      $('.header_tap_menu .user-placeholder').append($userMenu);
    }
  }
  // 가로 폭에 따른 메뉴 위치 조정
  function checkMenuPosition() {
    let windowWidth = $(window).width();

    if (windowWidth >= 834) {
      moveNavMenu('bot');
      moveUserMenu('top');
    } else {
      moveNavMenu('header_tap_menu');
      moveUserMenu('header_tap_menu');
    }
  }

  // 초기 실행 + 리사이즈 이벤트
  checkMenuPosition();
  $(window).on('resize', checkMenuPosition);

  function highlightText(searchTerm) {
    $('.menu_list .menu strong').each(function () {
      const $this = $(this);
      const text = $this.text();
      const regex = new RegExp(`(${searchTerm})`, 'gi');

      if (searchTerm) {
        const newHtml = text.replace(regex, '<span class="highlight">$1</span>');
        $this.html(newHtml);
      } else {
        // 검색어 없으면 원래대로
        $this.html(text);
      }
    });
  }

  $('.search_container img').on('click', function () {
    const $container = $('.search_container');
    const $input = $('.search_input');
    const inputVal = $input.val().trim();

    if (!$container.hasClass('active')) {
      $container.addClass('active');
      $input.focus();
    } else {
      if (inputVal !== '') {
        window.location.href = `./bobStore.html`;
        highlightText(inputVal); // 하이라이트 실행
      } else {
        $container.removeClass('active');
        highlightText(""); // 하이라이트 제거
      }
    }
  });


  // 초기 위치 설정
  moveMenu('mid');

  $('.heart_icon a img').hover(
    function () {
      // 마우스를 올렸을 때
      $(this).attr('src', 'asset/heart_item_on.png').css('padding', '10%');
    },
    function () {
      // 마우스를 뗐을 때
      $(this).attr('src', 'asset/heart.png').css('padding', '0%');
    }
  );

  /* Footer */
  const footerHtml = `
  <div class="inner">
    <div class="f_top">
      <div class="f_left">
        <div class="logo"><img src="asset/f_logo.png" alt="밥잇슈"></div>
        <div class="info">
        <div class="group">
          <div class="qr_txt">
            <strong>APP</strong>
            <p>밥잇슈 앱을 설치하고<br>
              더 편리하게 이용하세요.</p>
          </div>
          <img src="asset/footer_qr.png" alt="App QR" class="appQR">
            <div class="time_num">
              <strong>0000-0000</strong>
              <i>평일<span>09:00~18:00</span></i>
              <i>점심시간<span>12:00~13:00</span></i>
            </div>
            </div>
            <ul class="f_nav">
              <li><a href="#">이용약관</a></li>
              <li><a href="#">개인정보처리방침</a></li>
              <li><a href="#">사업자정보</a></li>
              <li><a href="#">공지사항</a></li>
              <li><a href="#">oem/odm 1:1상담</a></li>
            </ul>
        </div> <!-- //.info -->
      </div>
      <div class="f_right">
        <ul class="sns">
          <li><a href="#"><img src="asset/instagram.png" alt="인스타그램"></a></li>
          <li><a href="#"><img src="asset/facebook.png" alt="페이스북"></a></li>
          <li><a href="#"><img src="asset/youtube.png" alt="유튜브"></a></li>
          <li><a href="#"><img src="asset/send.png" alt=""></a></li>
        </ul>
      </div>
    </div>
    <span>BOBISSUE @ 2025. All rights reserved.</span>
  </div>
  `;

  $("#mainFooter").html(footerHtml);
});
