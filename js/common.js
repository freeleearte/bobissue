$(function () {
  /* Header */
  const headerHtml = `
        <div class="top">
          <div class="inner">
            <ul>
              <li><a href="./new.html">회원가입</a></li>
              <li><a href="./login.html">로그인</a></li>
            </ul>
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
            <nav>
              <ul>
                <li><a href="#">브랜드</a></li>
                <li><a href="./storyissue.html">스토리잇슈</a></li>
                <li><a href="./bobStore.html">밥도잇슈</a></li>
                <li><a href="https://www.figma.com/proto/Hbi0RZMjxnfJkaKX9yRAug/3%EC%A1%B0?page-id=1117%3A40662&node-id=1173-14385&viewport=-2664%2C-107%2C0.31&t=CDBOkWN5F84eSZGZ-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1173%3A14385&show-proto-sidebar=1" target="_blank">뭔일잇슈</a></li>
                <li><a href="https://www.figma.com/proto/Hbi0RZMjxnfJkaKX9yRAug/3%EC%A1%B0?page-id=1117%3A40662&node-id=1117-51200&viewport=-2664%2C-107%2C0.31&t=CDBOkWN5F84eSZGZ-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1117%3A51200&show-proto-sidebar=1" target="_blank">MY잇슈</a></li>
              </ul>
            </nav>
            <div class="right-placeholder"></div>
          </div>
        </div>
        <ul class="right-menu">
          <li class="search_container"><input type="search" class="search_input" placeholder="검색어를 입력해주세요." /><img src="asset/search.png" alt="search"></li>
          <li><a href="#"><img src="asset/heart.png" alt="heart"></a></li>
          <li><a href="#"><img src="asset/bag.png" alt="bag"></a></li>
        </ul>
      `;

  $("#mainHeader").html(headerHtml);

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

  $('.search_container img').on('click', function () {
    $('.search_container').toggleClass('active');
    $('.search_input').focus();
  });

  // 초기 위치 설정
  moveMenu('mid');

  /* Footer */
  const footerHtml = `
  <div class="inner">
    <div class="f_top">
      <div class="f_left">
        <div class="logo"><img src="asset/f_logo.png" alt="밥잇슈"></div>
        <div class="info">
          <div class="qr_txt">
            <strong>APP</strong>
            <p>밥잇슈 앱을 설치하고<br>
              더 편리하게 이용하세요.</p>
          </div>
          <img src="asset/footer_qr.png" alt="App QR">
            <div class="time_num">
              <strong>0000-0000</strong>
              <i>평일<span>09:00~18:00</span></i>
              <i>점심시간<span>12:00~13:00</span></i>
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
