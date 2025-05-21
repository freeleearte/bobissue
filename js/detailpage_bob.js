$(function () {
    const params = new URLSearchParams(window.location.search);
    const productId = Number(params.get('id')); // 숫자로 변환

    const categoryMap = {
        soup: "국 / 탕 / 찌개 / 전골",
        grill: "구이 / 볶음 / 찜",
        meat: "정육 / 수산",
        snack: "분식 / 튀김",
        rice: "밥 / 면 / 반찬",
        health: "건강식품",
        western: "양식",
        '폭싹 속았수다': '폭싹 속았수다',
        '오징어 게임': '오징어 게임',
        '대환장 기안장': '대환장 기안장',
    };

    const product = window.products.find(p => p.id === productId); // 변수명 수정

    if (product) {
        // 카테고리 + 화살표는 이미지 그대로 유지
        document.querySelector(".tit span").innerHTML = `
      밥도잇슈 | ${categoryMap[product.category]}
      <img src="./asset/detailpage_bob/next_arrow.png" alt="화살표">
    `;

        // 제품명
        document.querySelector(".tit h2").textContent = product.name;

        // 가격
        document.querySelector(".tit .under p").textContent = product.salePrice.toLocaleString() + '원';
        document.querySelector(".tit .under span").textContent = product.originalPrice.toLocaleString() + '원';

        const optionSelect = document.getElementById("option");
        optionSelect.options[0].text = `${product.name}`;

        // ⭐ 총 상품 금액 설정 (기본 수량 1)
        const priceInput = document.querySelector(".price_wrap input");
        priceInput.value = `${product.salePrice.toLocaleString()}원`;
    }


    const targetMap = [
        '.check_point',  // 상품설명
        '.knowhow',      // 상세정보
        '.bobissue',     // 후기
        '.contact'       // 문의
    ];

    $('.tab_bar li').on('click', function () {
        const index = $(this).index();
        const targetSelector = targetMap[index];
        const $target = $(targetSelector);

        if ($target.length) {
            $('html, body').animate({
                scrollTop: $target.offset().top
            }, 500); // 부드러운 스크롤 (0.5초)
        }
    });

    $('.right .sc_top').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500); // 0.5초 동안 부드럽게 스크롤
    });
    /* 오른쪽 탭바 */
    const unitPrice = product.salePrice;
    const formatPrice = (num) => num.toLocaleString() + '원';

    function updatePrice($qtyInput, $priceInput) {
        const qty = parseInt($qtyInput.val());
        const total = unitPrice * qty;
        $priceInput.val(formatPrice(total));
    }

    $('.qty_wrap').each(function () {
        const $wrap = $(this);
        const $qtyInput = $wrap.find('input[type="text"]');
        const $priceInput = $('.price_wrap input');

        $wrap.find('.plus').on('click', function () {
            let qty = parseInt($qtyInput.val());
            qty++;
            $qtyInput.val(qty);
            updatePrice($qtyInput, $priceInput);
        });

        $wrap.find('.minus').on('click', function () {
            let qty = parseInt($qtyInput.val());
            if (qty > 1) {
                qty--;
                $qtyInput.val(qty);
                updatePrice($qtyInput, $priceInput);
            }
        });

        // 초기 금액 업데이트
        updatePrice($qtyInput, $priceInput);
    });

    /* 문의 팝업 */
    $('.open_modal_btn').on('click', function (e) {
        e.preventDefault();
        $('.inquiry_modal').addClass('on');
    });

    $('.cancel_btn').on('click', function (e) {
        e.preventDefault();
        $('.inquiry_modal').removeClass('on');
    });

    /* 장바구니 버튼 클릭 */
    $('.add_cart').on('click', function (e) {
        e.preventDefault();
        $('.cart_modal').addClass('on');
    });

    $('.cart_modal .yes_btn').on('click', function (e) {
        e.preventDefault();
        window.location.href = './bag.html';
    });

    $('.cart_modal .no_btn').on('click', function (e) {
        e.preventDefault();
        $('.cart_modal').removeClass('on');
    });
});