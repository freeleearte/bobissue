$(function () {
    const $menuList = $(".menu_list");
    const $pagination = $(".pagination");
    const itemsPerPage = 16;

    let currentPage = 1;
    let sortType = 'default';

    // ✅ localStorage에서 찜한 상품 ID 목록 가져오기
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    function getWishlistProducts() {
        return products.filter(p => wishlist.includes(p.id));
    }

    function sortProducts(filtered) {
        switch (sortType) {
            case '신상품순':
                return filtered.sort((a, b) => b.id - a.id);
            case '낮은 가격순':
                return filtered.sort((a, b) => a.salePrice - b.salePrice);
            case '높은 가격순':
                return filtered.sort((a, b) => b.salePrice - a.salePrice);
            default:
                return filtered; // 기본 정렬
        }
    }

    function renderProducts() {
        let filtered = getWishlistProducts();  // ✅ 찜한 상품만 가져오기
        filtered = sortProducts(filtered);     // 정렬

        const totalPages = Math.ceil(filtered.length / itemsPerPage);  // 페이지 수 계산
        const start = (currentPage - 1) * itemsPerPage;  // 시작 인덱스
        const paginated = filtered.slice(start, start + itemsPerPage);  // 페이지에 맞는 상품 목록

        $menuList.empty();  // 이전 목록 초기화

        if (filtered.length === 0) {
            // 필터링된 상품이 없을 경우 "상품이 없습니다" 메시지 출력
            $menuList.append('<li class="no-product">찜한 상품이 없습니다.</li>');
        } else {
            // 상품이 있을 경우
            paginated.forEach(p => {
                const isWished = wishlist.includes(p.id); // 찜 여부 확인
                const heartImg = isWished ? './asset/heart_item_on.png' : './asset/heart_item.png';

                $menuList.append(`
                <li class="menu ${p.brand}">
                    <a href="./detailpage_bob.html?id=${p.id}">
                        <div class="img">
                        <img src="${p.img}" alt="${p.name}">
                        <button class="heart-btn">
                        <img src="${heartImg}" alt="찜하기">
                        </button>
                        </div>
                        <div class="info">
                            <div class="top_txt">
                                <i></i>
                                <strong>${p.name}</strong>
                            </div>
                            <div class="bottom_txt">
                                <span>${p.originalPrice.toLocaleString()}원</span>
                                <p>${p.discount}%<em>${p.salePrice.toLocaleString()}원</em></p>
                            </div>
                        </div>
                    </a>
                </li>
            `);
            });
        }

        renderPagination(totalPages);  // 페이지네이션 렌더링
    }

    function renderPagination(totalPages) {
        $pagination.find('.page-btn').remove();

        for (let i = 1; i <= totalPages; i++) {
            $(`<li class="page-btn ${i === currentPage ? 'on' : ''}" data-page="${i}">${i}</li>`)
                .insertBefore(".right_btn");
        }
    }

    $(document).on('mouseenter', '.menu a', function () {
        $(this).addClass('menu-hover');
    });

    $(document).on('mouseleave', '.menu a', function () {
        $(this).removeClass('menu-hover');
    });

    $(document).on('mouseenter', '.menu .img button', function () {
        $(this).closest('.menu a').removeClass('menu-hover').addClass('menu-heart-hover');
    });

    $(document).on('mouseleave', '.menu .img button', function () {
        $(this).closest('.menu a').removeClass('menu-heart-hover').addClass('menu-hover');
    });

    // 페이지 이동
    $pagination.on("click", ".page-btn", function () {
        currentPage = Number($(this).data("page"));
        renderProducts();
    });

    $(".left_btn").click(function () {
        if (currentPage > 1) {
            currentPage--;
            renderProducts();
        }
    });

    $(".right_btn").click(function () {
        const totalPages = Math.ceil(getFilteredProducts().length / itemsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            renderProducts();
        }
    });

    // 정렬 클릭
    $(".sort li").click(function () {
        $(".sort li").removeClass("on");
        $(this).addClass("on");
        sortType = $(this).text().trim();
        currentPage = 1;
        renderProducts();
    });

    $(document).on('click', '.heart-btn', function (e) {
        e.preventDefault();       // 기본 버튼 클릭 동작 방지 (a 태그 이동 등)
        e.stopPropagation();      // 이벤트 버블링 방지

        const $menuItem = $(this).closest('li.menu');
        const productId = Number($menuItem.find('a').attr('href').split('id=')[1]);

        // 찜 목록에서 해당 ID 제거
        const index = wishlist.indexOf(productId);
        if (index > -1) {
            wishlist.splice(index, 1);
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
        }

        // 화면 다시 렌더링 (찜 목록에서 제거됐으므로 다시 불러옴)
        renderProducts();
    });

    renderProducts();
});
