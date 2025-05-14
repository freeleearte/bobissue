$(function () {
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
                <li class="on"><a href="#">잇슈존</a></li>
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
});
