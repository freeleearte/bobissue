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


  // 로그인 상태 체크 및 메뉴 변경
  function updateUserMenu() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const userName = localStorage.getItem('userName');

    if (isLoggedIn === 'true' && userName) {
      // userName별로 다른 MY잇슈 페이지 경로 설정
      let myIssueHref = './mypage_main.html'; // 기본 경로

      if (userName === '김말숙') {
        myIssueHref = './mypage_raphael.html';
      } else if (userName === '이국밥') {
        myIssueHref = './mypage_jane.html';
      } else if (userName === '박키트') {
        myIssueHref = './mypage_tom.html';
      }

      // 상단 네비 MY잇슈 메뉴 링크 변경
      $('.bot nav ul li').last().replaceWith(`< li > <a href="${myIssueHref}">MY잇슈</a></li > `);

    } else {
      // 비회원인 경우 기본 메뉴 + MY잇슈는 로그인 링크로

      $('.bot nav ul li').last().replaceWith('<li><a href="./login.html">MY잇슈</a></li>');
    }
  }

  updateUserMenu();

});