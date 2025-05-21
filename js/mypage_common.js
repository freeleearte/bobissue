$(function () {
  /* tab 메뉴 */
  const tabMenuHtml = `
    <img src="asset/마이페이지/tap_bar_icon.png" alt="탭바 아이콘">
      <div class="left_tab">
        <div class="sticky_box">
          <div class="tab_sec">
            <em>쇼핑</em>
            <ul>
              <li><a href="./mypage_orderlist.html">주문내역잇슈</a></li>
              <li><a href="./mypage_like.html">찜햇슈</a></li>
              <li><a href="./mypage_order_cancellist.html">취소 및 반품내역</a></li>
              <li><a href="./mypage_contact.html">문의햇슈</a></li>
            </ul>
          </div><!-- //.tab_sec -->
          <div class="tab_sec">
            <em>정보관리</em>
            <ul>
              <li><a href="./mypage_member.html">회원정보</a></li>
              <li><a href="./mypage_delivery.html">배송지관리</a></li>
              <li><a href="./mypage_payment.html">결제수단</a></li>
            </ul>
          </div><!-- //.tab_sec -->
          <div class="tab_sec list">
            <em>구독관리</em>
            <ul>
              <li><a href="">구독정보</a></li>
              <li><a href="./mypage_subscription_add.html">구독신청</a></li>
            </ul>
          </div><!-- //.tab_sec -->
        </div>
      </div><!-- //.left_tab -->
      `;

  $("#myTab").html(tabMenuHtml);

  function addOnClassStyles() {
    const style = `
    .left_tab .sticky_box .tab_sec ul li.on {
      font: var(--pre-20-b);
      color: var(--sub-color-1);
    }
  `;
    const styleTag = document.createElement('style');
    styleTag.innerHTML = style;
    document.head.appendChild(styleTag);
  }

  function highlightCurrentMenu() {
    const currentPath = window.location.pathname.split("/").pop();

    $('#myTab .tab_sec ul li a').each(function () {
      const linkPath = $(this).attr('href').replace('./', '');

      if (linkPath === currentPath) {
        $(this).parent('li').addClass('on');
      }
    });
  }

  function updateUserMenu() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const userName = localStorage.getItem('userName');

    if (isLoggedIn === 'true' && userName) {
      // userName별로 다른 MY잇슈 페이지 경로 설정
      let mySubInfoHref = './mypage_subscription_add.html'; // 기본 경로

      if (userName === '김말숙') {
        mySubInfoHref = './mypage_subscription_info_main_box.html';
      } else if (userName === '이국밥') {
        mySubInfoHref = './mypage_subscription_info_main_cupon.html';
      } else if (userName === '박키트') {
        mySubInfoHref = './mypage_subscription_info_main.html';
      }

      // 상단 네비 MY잇슈 메뉴 링크 변경
      $('.list ul li').first().replaceWith(`<li> <a href="${mySubInfoHref}">구독정보</a></li> `);

      // $('.con1 .tit .profile-name').replaceWith(`<strong>${userName}</strong>`);
    } else {
      // 비회원인 경우 기본 메뉴 + MY잇슈는 로그인 링크로
      $('.list ul li').first().replaceWith(`<li> <a href="./mypage_subscription_add.html">구독정보</a></li> `);
    }
  }

  function updateProfileSection() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const userName = localStorage.getItem('userName');
    const $nameEl = $('.con1 .tit .profile-name');
    const $gradeEl = $('.con1 .tit .profile-grade');

    if (isLoggedIn === 'true' && userName) {
      // 프로필 이름 설정
      $nameEl.text(`${userName}님`);

      // (선택) userName별로 등급을 다르게 지정하고 싶으면 매핑하세요
      const gradeMap = {
        '김말숙': 'VIP',
        '이국밥': 'Gold',
        '박키트': 'Platinum'
      };
      const grade = gradeMap[userName] || 'Basic';
      $gradeEl.text(grade);
    }
  }
  updateUserMenu();
  updateProfileSection();
  highlightCurrentMenu();
  addOnClassStyles();

  $('#backButton').on('click', function (e) {
    e.preventDefault();
    window.history.back();
  });
});