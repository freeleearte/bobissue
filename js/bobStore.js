$(function () {
    const products = [
        {
            id: 1,
            name: "매콤 깻잎 순대 볶음 냉장 밀키트 (2인분)",
            originalPrice: 17000,
            salePrice: 11900,
            discount: 30,
            brand: "fresheasy",
            amount: "big",
            category: "grill",
            img: "./asset/product1.png"
        },
        {
            id: 2,
            name: "백년가게 가포옛날영도집 흑산도 장어구이 229g",
            originalPrice: 15900,
            salePrice: 11900,
            discount: 25,
            brand: "fresheasy",
            amount: "big",
            category: "grill",
            img: ""
        },
        {
            id: 3,
            name: "닭꼬치 파닭 염통 모듬 수제꼬치 구이 12종",
            originalPrice: 19400,
            salePrice: 5200,
            discount: 73,
            brand: "peacock",
            amount: "small",
            category: "grill",
            img: ""
        },
        // ⚠️ 최대 48개까지 상품 추가 가능
    ];

    // 임의 상품 추가
    for (let i = 2; i <= 48; i++) {
        products.push({
            id: i,
            name: '제품 ' + i,
            img: 'https://via.placeholder.com/150',
            originalPrice: i * 1000,
            discount: 10,
            salePrice: i * 900,
            brand: i % 2 === 0 ? 'brandA' : 'brandB',
            amount: i % 3 === 0 ? '푸짐하게' : '간편하게',
            category: i % 4 === 0 ? '구이 / 볶음 / 찜' : '국 / 찌개 / 전골'
        });
    }

    const $menuList = $(".menu_list");
    const $pagination = $(".pagination");
    const itemsPerPage = 16;

    let currentPage = 1;
    let sortType = 'default';
    let selectedBrands = [];
    let selectedAmounts = [];
    let selectedCategories = [];

    function getFilteredProducts() {
        return products.filter(p => {
            const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(p.brand);
            const amountMatch = selectedAmounts.length === 0 || selectedAmounts.includes(p.amount);
            const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(p.category);
            return brandMatch && amountMatch && categoryMatch;
        });
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
        let filtered = getFilteredProducts();  // 필터된 상품
        filtered = sortProducts(filtered);  // 정렬

        const totalPages = Math.ceil(filtered.length / itemsPerPage);  // 페이지 수 계산
        const start = (currentPage - 1) * itemsPerPage;  // 시작 인덱스
        const paginated = filtered.slice(start, start + itemsPerPage);  // 페이지에 맞는 상품 목록

        $menuList.empty();  // 이전 목록 초기화

        if (filtered.length === 0) {
            // 필터링된 상품이 없을 경우 "상품이 없습니다" 메시지 출력
            $menuList.append('<li class="no-product">상품이 없습니다.</li>');
        } else {
            // 상품이 있을 경우
            paginated.forEach(p => {
                $menuList.append(`
                <li class="menu ${p.brand}">
                    <a href="#">
                        <div class="img"><img src="${p.img}" alt="${p.name}"></div>
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

    // 필터 클릭
    $(".filter_sec ul li").click(function () {
        $(this).toggleClass("on");

        selectedBrands = getFilterValues(".filter_sec:eq(1)");
        selectedAmounts = getFilterValues(".filter_sec:eq(2)");
        selectedCategories = getFilterValues(".filter_sec:eq(3)");

        const isAnyFilterSelected =
            selectedBrands.length > 0 ||
            selectedAmounts.length > 0 ||
            selectedCategories.length > 0;

        $(".filter_sec.top p").toggleClass("on", isAnyFilterSelected);

        currentPage = 1;
        renderProducts();
    });

    function getFilterValues(selector) {
        return $(selector).find("li.on").map(function () {
            return $(this).attr("class").split(" ")[1];
        }).get();
    }

    // 필터 초기화
    $(".filter_sec.top p").click(function () {
        $(".filter_sec ul li").removeClass("on");
        selectedBrands = [];
        selectedAmounts = [];
        selectedCategories = [];

        $(this).removeClass("on");

        currentPage = 1;
        renderProducts();
    });

    renderProducts();
});
