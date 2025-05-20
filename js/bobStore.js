$(function () {
    window.products = [
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
            amount: "small",
            category: "grill",
            img: "./asset/product2.png"
        },
        {
            id: 3,
            name: "닭꼬치 파닭 염통 모듬 수제꼬치 구이 12종",
            originalPrice: 19400,
            salePrice: 5200,
            discount: 73,
            brand: "bs100",
            amount: "small",
            category: "grill",
            img: "./asset/product3.png"
        },
        {
            id: 4,
            name: "스지 바지락 전골 밀키트",
            originalPrice: 23630,
            salePrice: 18900,
            discount: 20,
            brand: "bs100",
            amount: "big",
            category: "soup",
            img: "./asset/product4.png"
        },
        {
            id: 5,
            name: "장칼국수 냉장 밀키트 2인분",
            originalPrice: 15000,
            salePrice: 8900,
            discount: 40,
            brand: "fresheasy",
            amount: "big",
            category: "rice",
            img: "./asset/product5.png"
        },
        {
            id: 6,
            name: "횡성축협한우 두번 구운 한돈 한우 직화 떡갈비 160g",
            originalPrice: 4100,
            salePrice: 3900,
            discount: 4,
            brand: "fresheasy",
            amount: "small",
            category: "meat",
            img: "./asset/product6.png"
        },
        {
            id: 7,
            name: "the EASY 매콤 제육볶음 밀키트 260g",
            originalPrice: 12000,
            salePrice: 7990,
            discount: 33,
            brand: "fresheasy",
            amount: "small",
            category: "grill",
            img: "./asset/product7.png"
        },
        {
            id: 8,
            name: "소고기 버섯 잡채 냉장 밀키트 2인분",
            originalPrice: 17000,
            salePrice: 13900,
            discount: 18,
            brand: "fresheasy",
            amount: "big",
            category: "rice",
            img: "./asset/product8.png"
        },
        {
            id: 9,
            name: "탱글한 생면과 도톰한 삼겹 차슈 돈코츠 라멘 밀키트 200g 1개",
            originalPrice: 12000,
            salePrice: 7900,
            discount: 34,
            brand: "fresheasy",
            amount: "small",
            category: "rice",
            img: "./asset/product9.png"
        },
        {
            id: 10,
            name: "심퍼티쿠시 고추 오일 명란 크림 파스타 밀키트 308g",
            originalPrice: 12900,
            salePrice: 9990,
            discount: 22,
            brand: "fresheasy",
            amount: "small",
            category: "western",
            img: "./asset/product10.png"
        },
        {
            id: 11,
            name: "할머니가 말아주시는 손말이고기 밀키트",
            originalPrice: 33000,
            salePrice: 16900,
            discount: 48,
            brand: "bs100",
            amount: "big",
            category: "grill",
            img: "./asset/product11.png"
        },
        {
            id: 12,
            name: "곱이 꽉찬 소곱창 대창 막창 염통 밀키트",
            originalPrice: 18010,
            salePrice: 9900,
            discount: 45,
            brand: "bs100",
            amount: "small",
            category: "grill",
            img: "./asset/product7.png"
        },
        {
            id: 13,
            name: "기사식당 돼지불고기 냉장 밀키트 2인분",
            originalPrice: 12900,
            salePrice: 10900,
            discount: 15,
            brand: "fresheasy",
            amount: "big",
            category: "grill",
            img: "./asset/product13.png"
        },
        {
            id: 14,
            name: "the EASY 광양식 소불고기 밀키트 261g 1팩",
            originalPrice: 13000,
            salePrice: 9900,
            discount: 23,
            brand: "fresheasy",
            amount: "small",
            category: "meat",
            img: "./asset/product14.png"
        },
        {
            id: 15,
            name: "차돌박이 숙주볶음 냉장 밀키트 2인분",
            originalPrice: 21000,
            salePrice: 14900,
            discount: 29,
            brand: "fresheasy",
            amount: "big",
            category: "grill",
            img: "./asset/product15.png"
        },
        {
            id: 16,
            name: "횡성축협 한우 불고기 300g",
            originalPrice: 21000,
            salePrice: 15900,
            discount: 24,
            brand: "fresheasy",
            amount: "small",
            category: "meat",
            img: "./asset/product16.png"
        },
        {
            id: 17,
            name: "심퍼티쿠시 우삼겹 고사리 파스타 밀키트 259g",
            originalPrice: 12900,
            discount: 14,
            salePrice: 10990,
            brand: "fresheasy",
            amount: "small",
            category: "western",
            img: "./asset/product17.png"
        },
        {
            id: 18,
            name: "바르다김선생 찹쌀 치즈볼 310g",
            originalPrice: 12000,
            discount: 42,
            salePrice: 6900,
            brand: "fresheasy",
            amount: "small",
            category: "snack",
            img: "./asset/product18.png"
        },
        {
            id: 19,
            name: "바르다김선생 광천김말이 300g ",
            originalPrice: 8000,
            discount: 46,
            salePrice: 4300,
            brand: "fresheasy",
            amount: "small",
            category: "snack",
            img: "./asset/product19.png"
        },
        {
            id: 20,
            name: "까르보나라 떡볶이 황금레시피 밀키트 880g",
            originalPrice: 20000,
            discount: 40,
            salePrice: 11900,
            brand: "fresheasy",
            amount: "big",
            category: "snack",
            img: "./asset/product20.png"
        },
        {
            id: 21,
            name: "노릇노릇하게 구운 냉동 고등어 구이 100g x 5팩",
            originalPrice: 45000,
            discount: 46,
            salePrice: 23900,
            brand: "fresheasy",
            amount: "small",
            category: "meat",
            img: "./asset/product21.png"
        },
        {
            id: 22,
            name: "노릇노릇하게 구운 냉동 삼치 구이 70g",
            originalPrice: 9000,
            discount: 45,
            salePrice: 4900,
            brand: "fresheasy",
            amount: "small",
            category: "meat",
            img: "./asset/product22.png"
        },
        {
            id: 23,
            name: "노릇노릇하게 구운 냉동 갈치 구이 100g",
            originalPrice: 12000,
            discount: 42,
            salePrice: 6900,
            brand: "fresheasy",
            amount: "small",
            category: "meat",
            img: "./asset/product23.png"
        },
        {
            id: 24,
            name: "노릇노릇하게 구운 냉동 가자미 구이 130g",
            originalPrice: 9000,
            discount: 45,
            salePrice: 4900,
            brand: "fresheasy",
            amount: "small",
            category: "meat",
            img: "./asset/product24.png"
        },
        {
            id: 25,
            name: "홍게 어묵 꼬치 오뎅 밀키트 10개입",
            originalPrice: 16130,
            discount: 20,
            salePrice: 12900,
            brand: "bs100",
            amount: "small",
            category: "soup",
            img: "./asset/product25.png"
        },
        {
            id: 26,
            name: "쫀득한 돼지꼬리 꼬리족발 밀키트 300g",
            originalPrice: 9750,
            discount: 20,
            salePrice: 7800,
            brand: "bs100",
            amount: "small",
            category: "grill",
            img: "./asset/product26.png"
        },
        {
            id: 27,
            name: "아롱사태 스지 야채팩 수육 전골 밀키트",
            originalPrice: 56000,
            discount: 60,
            salePrice: 21900,
            brand: "bs100",
            amount: "big",
            category: "soup",
            img: "./asset/product27.png"
        },
        {
            id: 28,
            name: "소꼬리 찜 수육(소) 밀키트",
            originalPrice: 49840,
            discount: 40,
            salePrice: 29900,
            brand: "bs100",
            amount: "small",
            category: "grill",
            img: "./asset/product28.png"
        },
        {
            id: 29,
            name: "학교앞 떡볶이 황금레시피 밀키트 360g",
            originalPrice: 8000,
            discount: 38,
            salePrice: 4900,
            brand: "fresheasy",
            amount: "small",
            category: "snack",
            img: "./asset/product29.png"
        },
        {
            id: 30,
            name: "고구마 떡볶이 황금레시피 밀키트 565g",
            originalPrice: 15000,
            discount: 40,
            salePrice: 8900,
            brand: "fresheasy",
            amount: "big",
            category: "snack",
            img: "./asset/product30.png"
        },
        {
            id: 31,
            name: "달콤 밀떡볶이 황금레시피 밀키트 515g",
            originalPrice: 15000,
            discount: 40,
            salePrice: 8900,
            brand: "fresheasy",
            amount: "big",
            category: "snack",
            img: "./asset/product31.png"
        },
        {
            id: 32,
            name: "감칠맛 누들 떡볶이 황금레시피 밀키트 415g",
            originalPrice: 13000,
            discount: 39,
            salePrice: 7900,
            brand: "fresheasy",
            amount: "small",
            category: "snack",
            img: "./asset/product32.png"
        },
        {
            id: 33,
            name: "우삼겹 된장찌개 밀키트",
            originalPrice: 19800,
            discount: 50,
            salePrice: 9900,
            brand: "bs100",
            amount: "small",
            category: "soup",
            img: "./asset/product33.png"
        },
        {
            id: 34,
            name: "돼지껍데기 보다 더 쫄깃한 꼬리겁데기 소금구이 300g",
            originalPrice: 13630,
            discount: 20,
            salePrice: 10900,
            brand: "bs100",
            amount: "small",
            category: "grill",
            img: "./asset/product34.png"
        },
        {
            id: 35,
            name: "전주식 오징어 콩나물 김치 국밥 밀키트",
            originalPrice: 6130,
            discount: 20,
            salePrice: 4900,
            brand: "bs100",
            amount: "small",
            category: "soup",
            img: "./asset/product35.png"
        },
        {
            id: 36,
            name: "48시간 숙성 간장 수제 쪽갈비 구이 밀키트",
            originalPrice: 22380,
            discount: 20,
            salePrice: 17900,
            brand: "bs100",
            amount: "big",
            category: "grill",
            img: "./asset/product36.png"
        },
        {
            id: 37,
            name: "신림동 백순대볶음 냉장 밀키트 (2인분)",
            originalPrice: 17000,
            discount: 35,
            salePrice: 10900,
            brand: "fresheasy",
            amount: "big",
            category: "grill",
            img: "./asset/product37.png"
        },
        {
            id: 38,
            name: "소고기 야끼소바 냉장 밀키트 (2인분)",
            originalPrice: 17000,
            discount: 21,
            salePrice: 13400,
            brand: "fresheasy",
            amount: "big",
            category: "western",
            img: "./asset/product38.png"
        },
        {
            id: 39,
            name: "캠핑포차 김치 어묵 우동전골 밀키트 2인분 1.08kg, 1개",
            originalPrice: 17000,
            discount: 12,
            salePrice: 14900,
            brand: "fresheasy",
            amount: "big",
            category: "rice",
            img: "./asset/product39.png"
        },
        {
            id: 40,
            name: "캠핑포차 육칼전골 밀키트 (2인분)",
            originalPrice: 20000,
            discount: 25,
            salePrice: 14900,
            brand: "fresheasy",
            amount: "big",
            category: "rice",
            img: "./asset/product40.png"
        },
        {
            id: 41,
            name: "호로록 우삼겹 떡볶이 냉장 밀키트 (2인분)",
            originalPrice: 21000,
            discount: 33,
            salePrice: 13900,
            brand: "fresheasy",
            amount: "big",
            category: "snack",
            img: "./asset/product41.png"
        },
        {
            id: 42,
            name: "호로록 로제 떡볶이 냉장 밀키트 (2인분)",
            originalPrice: 21000,
            discount: 14,
            salePrice: 17900,
            brand: "fresheasy",
            amount: "big",
            category: "snack",
            img: "./asset/product42.png"
        },
        {
            id: 43,
            name: "고래사 어묵탕 밀키트 320g",
            originalPrice: 15000,
            discount: 20,
            salePrice: 11900,
            brand: "fresheasy",
            amount: "small",
            category: "soup",
            img: "./asset/product43.png"
        },
        {
            id: 44,
            name: "캠핑포차 무뼈 국물 닭발 직화용기 밀키트 380g",
            originalPrice: 17000,
            discount: 35,
            salePrice: 10900,
            brand: "fresheasy",
            amount: "small",
            category: "grill",
            img: "./asset/product44.png"
        },
        {
            id: 45,
            name: "얼큰 김치우동 밀키트",
            originalPrice: 9880,
            discount: 20,
            salePrice: 7900,
            brand: "bs100",
            amount: "small",
            category: "rice",
            img: "./asset/product45.png"
        },
        {
            id: 46,
            name: "얼큰 우삼겹 버섯 칼제비 칼국수 수제비 밀키트",
            originalPrice: 11130,
            discount: 20,
            salePrice: 8900,
            brand: "bs100",
            amount: "small",
            category: "rice",
            img: "./asset/product46.png"
        },
        {
            id: 47,
            name: "오븐 초벌막창 대구 색막창 400g 밀키트",
            originalPrice: 16130,
            discount: 20,
            salePrice: 12900,
            brand: "bs100",
            amount: "small",
            category: "grill",
            img: "./asset/product47.png"
        },
        {
            id: 48,
            name: "매운 오돌불갈비 200g 돼지 양념갈비 밀키트",
            originalPrice: 14000,
            discount: 29,
            salePrice: 9900,
            brand: "bs100",
            amount: "small",
            category: "grill",
            img: "./asset/product48.png"
        },
        {
            id: 1001,
            name: "애순이 가리비 구이 키트",
            originalPrice: 14000,
            salePrice: 9900,
            category: "폭싹 속았수다",
        },
        {
            id: 1002,
            name: "완두콩 도시락 키트",
            originalPrice: 15900,
            salePrice: 11900,
            category: "폭싹 속았수다",
        },
        {
            id: 1003,
            name: "애순이 오징어뭇국 키트",
            originalPrice: 19400,
            salePrice: 5200,
            category: "폭싹 속았수다",
        },
        {
            id: 1007,
            name: "한우 소고기 미역국",
            originalPrice: 12000,
            salePrice: 7990,
            category: "오징어 게임",
        },
        {
            id: 1008,
            name: "추억의 옛날 도시락 키트",
            originalPrice: 17000,
            salePrice: 13900,
            category: "오징어 게임",
        },
        {
            id: 1009,
            name: "갈치 구이 키트",
            originalPrice: 12000,
            salePrice: 7900,
            category: "오징어 게임",
        },
        {
            id: 10013,
            name: "맨손 짜자장 키트",
            originalPrice: 12900,
            salePrice: 10900,
            category: "대환장 기안장",
        },
        {
            id: 10014,
            name: "기안표 북한식 두부밥",
            originalPrice: 13000,
            salePrice: 9900,
            category: "대환장 기안장",
        },
        {
            id: 10015,
            name: "울릉도 가득 물회 키트",
            originalPrice: 21000,
            salePrice: 14900,
            category: "대환장 기안장",
        },
    ];

    // 임의 상품 추가
    // for (let i = 2; i <= 48; i++) {
    //     products.push({
    //         id: i,
    //         name: '제품 ' + i,
    //         img: 'https://via.placeholder.com/150',
    //         originalPrice: i * 1000,
    //         discount: 10,
    //         salePrice: i * 900,
    //         brand: i % 2 === 0 ? 'brandA' : 'brandB',
    //         amount: i % 3 === 0 ? '푸짐하게' : '간편하게',
    //         category: i % 4 === 0 ? '구이 / 볶음 / 찜' : '국 / 찌개 / 전골'
    //     });
    // }

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
            const idValid = p.id < 1000;

            return brandMatch && amountMatch && categoryMatch && idValid;
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
        const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

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
                const isWished = wishlist.includes(p.id);  // 찜 여부 체크
                const heartImg = isWished ? './asset/heart_item_on.png' : './asset/heart_item.png';
                $menuList.append(`
                <li class="menu ${p.brand}">
                    <a href="./detailpage_bob.html?id=${p.id}">
                        <div class="img">
                        <img src="${p.img}" alt="${p.name}">
                        <button class="heart-btn" data-id="${p.id}">
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

    $(document).on('click', '.heart-btn', function (e) {
        e.preventDefault();
        const $img = $(this).find('img');
        const src = $img.attr('src');
        const productId = $(this).data('id'); // data-id 가져오기

        // 기존에 저장된 찜 리스트 가져오기
        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

        if (src.includes('heart_item_on.png')) {
            alert("찜을 취소 하셨습니다!");
            $img.attr('src', './asset/heart_item.png');

            // localStorage에서 제거
            wishlist = wishlist.filter(id => id !== productId);
        } else {
            alert("찜을 하셨습니다!");
            $img.attr('src', './asset/heart_item_on.png');

            // localStorage에 추가 (중복 방지)
            if (!wishlist.includes(productId)) {
                wishlist.push(productId);
            }
        }

        // localStorage에 저장
        localStorage.setItem('wishlist', JSON.stringify(wishlist));

        console.log("현재 찜 리스트:", wishlist);
    });

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
