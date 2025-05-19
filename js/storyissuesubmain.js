$(document).ready(function () {
    const params = new URLSearchParams(window.location.search);
    const story = params.get('story');
    const situation = params.get('situation');
    const culture = params.get('culture');

    if (situation === 'rainy') {
        /* 제목 */
        $('.txt h2 span').text('비오는 날,');
        $('.txt h2 em').text('어떤 음식을 드시나요?');
        $('.txt img').attr('src', 'asset/storyissuesubmain_img/비오는날/icon.png')
            .attr('alt', '비오는날 밥이');

        /* 버튼 텍스트 및 이미지 */
        $('.gnb_item').eq(0).find('button').text('비 오는 날엔 전이슈');
        $('.gnb_item').eq(0).find('.gnb_content img')
            .attr('src', 'asset/storyissuesubmain_img/비오는날/gnb1.jpg')
            .attr('alt', '비오는 날 전 이미지');

        $('.gnb_item').eq(1).find('button').text('젖은 날엔 얼큰이슈');
        $('.gnb_item').eq(1).find('.gnb_content img')
            .attr('src', 'asset/storyissuesubmain_img/비오는날/gnb2.jpg')
            .attr('alt', '비오는 날 전 이미지');

        $('.gnb_item').eq(2).find('button').text('젖은 날엔 얼큰 이슈');
        $('.gnb_item').eq(2).find('.gnb_content img')
            .attr('src', 'asset/storyissuesubmain_img/비오는날/gnb3.jpg')
            .attr('alt', '비오는 날 전 이미지');

        const productList = [
            // .first
            [
                {
                    brand: '[프레시지]',
                    name: '국물 진한<br>감자탕 2인분 1,080g',
                    price: '18,500원',
                    discountRate: '27%',
                    discounted: '16,980원',
                    img: 'asset/storyissuesubmain_img/비오는날/gnb1-1.jpg'
                },
                {
                    brand: '[백년밥상]',
                    name: '뜨끈 뜨끈 후루룩 <br>우동 키트',
                    price: '28,500원',
                    discountRate: '18%',
                    discounted: '23,370원',
                    img: 'asset/storyissuesubmain_img/비오는날/gnb1-2.jpg'
                },
                {
                    brand: '[프레시지]',
                    name: '캠핑포차 옛날 감자<br>엄마 손맛 수제비 키트',
                    price: '36,000원',
                    discountRate: '5%',
                    discounted: '34,200원',
                    img: 'asset/storyissuesubmain_img/비오는날/gnb1-3.jpg'
                }
            ],
            // .second
            [
                {
                    brand: '[프레시지]',
                    name: '겉바속촉 <br>부추 부침개 키트',
                    price: '18,500원',
                    discountRate: '27%',
                    discounted: '16,980원',
                    img: 'asset/storyissuesubmain_img/비오는날/gnb2-1.jpg'
                },
                {
                    brand: '[프레시지]',
                    name: '해물듬뿍<br>해물 김치전 키트',
                    price: '18,500원',
                    discountRate: '27%',
                    discounted: '16,980원',
                    img: 'asset/storyissuesubmain_img/비오는날/gnb2-2.jpg'
                },
                {
                    brand: '[프레시지]',
                    name: '1인분 한 입 <br>감자전 키트',
                    price: '18,500원',
                    discountRate: '27%',
                    discounted: '16,980원',
                    img: 'asset/storyissuesubmain_img/비오는날/gnb2-3.jpg'
                }
            ],
            // .three
            [
                {
                    brand: '[프레시지]',
                    name: '캠핑포차 김치어묵<Br>우동전골 2인분 1,080g',
                    price: '18,500원',
                    discountRate: '27%',
                    discounted: '16,980원',
                    img: 'asset/storyissuesubmain_img/비오는날/gnb3-1.jpg'
                },
                {
                    brand: '[프레시지]',
                    name: '캠핑포차 등갈비 <br>통김치찜 2인분 1,080g',
                    price: '18,500원',
                    discountRate: '27%',
                    discounted: '16,980원',
                    img: 'asset/storyissuesubmain_img/비오는날/gnb3-2.jpg'
                },
                {
                    brand: '[프레시지]',
                    name: '캠핑포차 매콤감자 <br>짜글이 키트',
                    price: '18,500원',
                    discountRate: '27%',
                    discounted: '16,980원',
                    img: 'asset/storyissuesubmain_img/비오는날/gnb3-3.jpg'
                }
            ]
        ];

        /* 적용 */
        $('.right > div').each(function (groupIdx) {
            $(this).find('ul li').each(function (itemIdx) {
                const data = productList[groupIdx][itemIdx];
                $(this).find('img.food')
                    .attr('src', `${data.img}`)
                    .attr('alt', `${data.name}`);
                $(this).find('.top_txt span').html(data.brand);
                $(this).find('.top_txt p').html(data.name);
                $(this).find('.bottom_txt > span').text(data.price);
                $(this).find('.b_t strong').text(data.discountRate);
                $(this).find('.b_t p').text(data.discounted);
            });
        });
    } else if (story === 'ozing') {
        /* 제목 */
        $('.txt h2 span').text('오징어게임,');
        $('.txt h2 em').text('그 장면 속 한상');
        $('.txt img').attr('src', '')
            .attr('alt', '오징어게임의 밥이');

        /* 버튼 텍스트 및 이미지 */
        $('.gnb_item').eq(0).find('button').text('첫 장면! 기훈이 어머니 밥상 ');
        $('.gnb_item').eq(0).find('.gnb_content img')
            .attr('src', 'asset/storyissuesubmain_img/스토리/오징어/gnb1.jpg')
            .attr('alt', '오징어게임 이미지');

        $('.gnb_item').eq(1).find('button').text('오징어게임의 옛날 도시락');
        $('.gnb_item').eq(1).find('.gnb_content img')
            .attr('src', 'asset/storyissuesubmain_img/스토리/오징어/gnb2.jpg')
            .attr('alt', '오징어게임 이미지');

        $('.gnb_item').eq(2).find('button').text('파이널 최후의 만찬!');
        $('.gnb_item').eq(2).find('.gnb_content img')
            .attr('src', 'asset/storyissuesubmain_img/스토리/오징어/gnb3.jpg')
            .attr('alt', '오징어게임 이미지');

        const productList = [
            // .first
            [
                {
                    brand: '[백년밥상]',
                    name: '한우 듬뿍 미역국<br>간편 키트 2인분',
                    price: '18,500원',
                    discountRate: '27%',
                    discounted: '16,980원',
                    img: 'asset/storyissuesubmain_img/스토리/오징어/gnb1-1.jpg'
                },
                {
                    brand: '[백년밥상]',
                    name: '초간편 산나물 반찬 밀키트<br>데친 부지깽이 260g',
                    price: '19,500원',
                    discountRate: '27%',
                    discounted: '16,980원',
                    img: 'asset/storyissuesubmain_img/스토리/오징어/gnb1-2.jpg'
                },
                {
                    brand: '[피코크]',
                    name: '기훈이 집 특별식<br>특 갈치 구이 1인분 키트',
                    price: '18,500원',
                    discountRate: '27%',
                    discounted: '16,980원',
                    img: 'asset/storyissuesubmain_img/스토리/오징어/gnb1-3.jpg'
                }
            ],
            // .second
            [
                {
                    brand: '[프레시지]',
                    name: '추억의 옛날 도시락<br>분홍 소시지전 키트',
                    price: '12,900원',
                    discountRate: '16%',
                    discounted: '10,900원',
                    img: 'asset/storyissuesubmain_img/스토리/오징어/gnb2-1.jpg'
                },
                {
                    brand: '[피코크]',
                    name: '추억의 옛날 도시락<br>간단 메추리 장조림 350g ',
                    price: '15,500원',
                    discountRate: '16%',
                    discounted: '12,990원',
                    img: 'asset/storyissuesubmain_img/스토리/오징어/gnb2-2.jpg'
                },
                {
                    brand: '[백년밥상]',
                    name: '추억의 옛날 도시락<br>견과루 가득 멸치볶음 키트',
                    price: '13,800원',
                    discountRate: '5%',
                    discounted: '13,110원',
                    img: 'asset/storyissuesubmain_img/스토리/오징어/gnb2-3.jpg'
                }
            ],
            // .three
            [
                {
                    brand: '[피코크]',
                    name: '드라이 에이징<br>채끝살 스테이크 세트',
                    price: '39,800원',
                    discountRate: '19%',
                    discounted: '24,137원',
                    img: 'asset/storyissuesubmain_img/스토리/오징어/gnb3-1.jpg'
                },
                {
                    brand: '[백년밥상]',
                    name: '바로 구워먹는<br>가리비 치즈 버터구이 키트',
                    price: '32,500원',
                    discountRate: '15%',
                    discounted: '27,625원',
                    img: 'asset/storyissuesubmain_img/스토리/오징어/gnb3-2.jpg'
                },
                {
                    brand: '[프레시지]',
                    name: '고급 야채구이<br> 모듬 세트 2인분 540g',
                    price: '28,300원',
                    discountRate: '17%',
                    discounted: '23,300원',
                    img: 'asset/storyissuesubmain_img/스토리/오징어/gnb3-3.jpg'
                }
            ],
        ];
 
         /* 적용 */
        $('.right > div').each(function (groupIdx) {
            $(this).find('ul li').each(function (itemIdx) {
                const data = productList[groupIdx][itemIdx];
                $(this).find('img.food')
                    .attr('src', `${data.img}`)
                    .attr('alt', `${data.name}`);
                $(this).find('.top_txt span').html(data.brand);
                $(this).find('.top_txt p').html(data.name);
                $(this).find('.bottom_txt > span').text(data.price);
                $(this).find('.b_t strong').text(data.discountRate);
                $(this).find('.b_t p').text(data.discounted);
            });
        });
    } else if (story === 'pocksak') {
        /* 제목 */
        $('.txt h2 span').text('오징어게임,');
        $('.txt h2 em').text('그 장면 속 한상');
        $('.txt img').attr('src', '')
            .attr('alt', '오징어게임의 밥이');

        /* 버튼 텍스트 및 이미지 */
        $('.gnb_item').eq(0).find('button').text('첫 장면! 기훈이 어머니 밥상 ');
        $('.gnb_item').eq(0).find('.gnb_content img')
            .attr('src', 'asset/storyissuesubmain_img/스토리/오징어/gnb1.jpg')
            .attr('alt', '오징어게임 이미지');

        $('.gnb_item').eq(1).find('button').text('오징어게임의 옛날 도시락');
        $('.gnb_item').eq(1).find('.gnb_content img')
            .attr('src', 'asset/storyissuesubmain_img/스토리/오징어/gnb2.jpg')
            .attr('alt', '오징어게임 이미지');

        $('.gnb_item').eq(2).find('button').text('파이널 최후의 만찬!');
        $('.gnb_item').eq(2).find('.gnb_content img')
            .attr('src', 'asset/storyissuesubmain_img/스토리/오징어/gnb3.jpg')
            .attr('alt', '오징어게임 이미지');

        const productList = [
            // .first
            [
                {
                    brand: '[백년밥상]',
                    name: '한우 듬뿍 미역국<br>간편 키트 2인분',
                    price: '18,500원',
                    discountRate: '27%',
                    discounted: '16,980원',
                    img: 'asset/storyissuesubmain_img/스토리/오징어/gnb1-1.jpg'
                },
                {
                    brand: '[백년밥상]',
                    name: '초간편 산나물 반찬 밀키트<br>데친 부지깽이 260g',
                    price: '19,500원',
                    discountRate: '27%',
                    discounted: '16,980원',
                    img: 'asset/storyissuesubmain_img/스토리/오징어/gnb1-2.jpg'
                },
                {
                    brand: '[피코크]',
                    name: '기훈이 집 특별식<br>특 갈치 구이 1인분 키트',
                    price: '18,500원',
                    discountRate: '27%',
                    discounted: '16,980원',
                    img: 'asset/storyissuesubmain_img/스토리/오징어/gnb1-3.jpg'
                }
            ],
            // .second
            [
                {
                    brand: '[프레시지]',
                    name: '추억의 옛날 도시락<br>분홍 소시지전 키트',
                    price: '12,900원',
                    discountRate: '16%',
                    discounted: '10,900원',
                    img: 'asset/storyissuesubmain_img/스토리/오징어/gnb2-1.jpg'
                },
                {
                    brand: '[피코크]',
                    name: '추억의 옛날 도시락<br>간단 메추리 장조림 350g ',
                    price: '15,500원',
                    discountRate: '16%',
                    discounted: '12,990원',
                    img: 'asset/storyissuesubmain_img/스토리/오징어/gnb2-2.jpg'
                },
                {
                    brand: '[백년밥상]',
                    name: '추억의 옛날 도시락<br>견과루 가득 멸치볶음 키트',
                    price: '13,800원',
                    discountRate: '5%',
                    discounted: '13,110원',
                    img: 'asset/storyissuesubmain_img/스토리/오징어/gnb2-3.jpg'
                }
            ],
            // .three
            [
                {
                    brand: '[피코크]',
                    name: '드라이 에이징<br>채끝살 스테이크 세트',
                    price: '39,800원',
                    discountRate: '19%',
                    discounted: '24,137원',
                    img: 'asset/storyissuesubmain_img/스토리/오징어/gnb3-1.jpg'
                },
                {
                    brand: '[백년밥상]',
                    name: '바로 구워먹는<br>가리비 치즈 버터구이 키트',
                    price: '32,500원',
                    discountRate: '15%',
                    discounted: '27,625원',
                    img: 'asset/storyissuesubmain_img/스토리/오징어/gnb3-2.jpg'
                },
                {
                    brand: '[프레시지]',
                    name: '고급 야채구이<br> 모듬 세트 2인분 540g',
                    price: '28,300원',
                    discountRate: '17%',
                    discounted: '23,300원',
                    img: 'asset/storyissuesubmain_img/스토리/오징어/gnb3-3.jpg'
                }
            ],
        ];
                /* 적용 */
        $('.right > div').each(function (groupIdx) {
            $(this).find('ul li').each(function (itemIdx) {
                const data = productList[groupIdx][itemIdx];
                $(this).find('img.food')
                    .attr('src', `${data.img}`)
                    .attr('alt', `${data.name}`);
                $(this).find('.top_txt span').html(data.brand);
                $(this).find('.top_txt p').html(data.name);
                $(this).find('.bottom_txt > span').text(data.price);
                $(this).find('.b_t strong').text(data.discountRate);
                $(this).find('.b_t p').text(data.discounted);
            });
        });
    } else if (story === 'gianjang') {
        /* 제목 */
        $('.txt h2 span').text('오징어게임,');
        $('.txt h2 em').text('그 장면 속 한상');
        $('.txt img').attr('src', '')
            .attr('alt', '오징어게임의 밥이');

        /* 버튼 텍스트 및 이미지 */
        $('.gnb_item').eq(0).find('button').text('첫 장면! 기훈이 어머니 밥상 ');
        $('.gnb_item').eq(0).find('.gnb_content img')
            .attr('src', 'asset/storyissuesubmain_img/스토리/오징어/gnb1.jpg')
            .attr('alt', '오징어게임 이미지');

        $('.gnb_item').eq(1).find('button').text('오징어게임의 옛날 도시락');
        $('.gnb_item').eq(1).find('.gnb_content img')
            .attr('src', 'asset/storyissuesubmain_img/스토리/오징어/gnb2.jpg')
            .attr('alt', '오징어게임 이미지');

        $('.gnb_item').eq(2).find('button').text('파이널 최후의 만찬!');
        $('.gnb_item').eq(2).find('.gnb_content img')
            .attr('src', 'asset/storyissuesubmain_img/스토리/오징어/gnb3.jpg')
            .attr('alt', '오징어게임 이미지');

        const productList = [
            // .first
            [
                {
                    brand: '[백년밥상]',
                    name: '한우 듬뿍 미역국<br>간편 키트 2인분',
                    price: '18,500원',
                    discountRate: '27%',
                    discounted: '16,980원',
                    img: 'asset/storyissuesubmain_img/스토리/오징어/gnb1-1.jpg'
                },
                {
                    brand: '[백년밥상]',
                    name: '초간편 산나물 반찬 밀키트<br>데친 부지깽이 260g',
                    price: '19,500원',
                    discountRate: '27%',
                    discounted: '16,980원',
                    img: 'asset/storyissuesubmain_img/스토리/오징어/gnb1-2.jpg'
                },
                {
                    brand: '[피코크]',
                    name: '기훈이 집 특별식<br>특 갈치 구이 1인분 키트',
                    price: '18,500원',
                    discountRate: '27%',
                    discounted: '16,980원',
                    img: 'asset/storyissuesubmain_img/스토리/오징어/gnb1-3.jpg'
                }
            ],
            // .second
            [
                {
                    brand: '[프레시지]',
                    name: '추억의 옛날 도시락<br>분홍 소시지전 키트',
                    price: '12,900원',
                    discountRate: '16%',
                    discounted: '10,900원',
                    img: 'asset/storyissuesubmain_img/스토리/오징어/gnb2-1.jpg'
                },
                {
                    brand: '[피코크]',
                    name: '추억의 옛날 도시락<br>간단 메추리 장조림 350g ',
                    price: '15,500원',
                    discountRate: '16%',
                    discounted: '12,990원',
                    img: 'asset/storyissuesubmain_img/스토리/오징어/gnb2-2.jpg'
                },
                {
                    brand: '[백년밥상]',
                    name: '추억의 옛날 도시락<br>견과루 가득 멸치볶음 키트',
                    price: '13,800원',
                    discountRate: '5%',
                    discounted: '13,110원',
                    img: 'asset/storyissuesubmain_img/스토리/오징어/gnb2-3.jpg'
                }
            ],
            // .three
            [
                {
                    brand: '[피코크]',
                    name: '드라이 에이징<br>채끝살 스테이크 세트',
                    price: '39,800원',
                    discountRate: '19%',
                    discounted: '24,137원',
                    img: 'asset/storyissuesubmain_img/스토리/오징어/gnb3-1.jpg'
                },
                {
                    brand: '[백년밥상]',
                    name: '바로 구워먹는<br>가리비 치즈 버터구이 키트',
                    price: '32,500원',
                    discountRate: '15%',
                    discounted: '27,625원',
                    img: 'asset/storyissuesubmain_img/스토리/오징어/gnb3-2.jpg'
                },
                {
                    brand: '[프레시지]',
                    name: '고급 야채구이<br> 모듬 세트 2인분 540g',
                    price: '28,300원',
                    discountRate: '17%',
                    discounted: '23,300원',
                    img: 'asset/storyissuesubmain_img/스토리/오징어/gnb3-3.jpg'
                }
            ],
        ];
                /* 적용 */
        $('.right > div').each(function (groupIdx) {
            $(this).find('ul li').each(function (itemIdx) {
                const data = productList[groupIdx][itemIdx];
                $(this).find('img.food')
                    .attr('src', `${data.img}`)
                    .attr('alt', `${data.name}`);
                $(this).find('.top_txt span').html(data.brand);
                $(this).find('.top_txt p').html(data.name);
                $(this).find('.bottom_txt > span').text(data.price);
                $(this).find('.b_t strong').text(data.discountRate);
                $(this).find('.b_t p').text(data.discounted);
            });
        });
    } else if (story === 'blackand') {
        /* 제목 */
        $('.txt h2 span').text('오징어게임,');
        $('.txt h2 em').text('그 장면 속 한상');
        $('.txt img').attr('src', '')
            .attr('alt', '오징어게임의 밥이');

        /* 버튼 텍스트 및 이미지 */
        $('.gnb_item').eq(0).find('button').text('첫 장면! 기훈이 어머니 밥상 ');
        $('.gnb_item').eq(0).find('.gnb_content img')
            .attr('src', 'asset/storyissuesubmain_img/스토리/오징어/gnb1.jpg')
            .attr('alt', '오징어게임 이미지');

        $('.gnb_item').eq(1).find('button').text('오징어게임의 옛날 도시락');
        $('.gnb_item').eq(1).find('.gnb_content img')
            .attr('src', 'asset/storyissuesubmain_img/스토리/오징어/gnb2.jpg')
            .attr('alt', '오징어게임 이미지');

        $('.gnb_item').eq(2).find('button').text('파이널 최후의 만찬!');
        $('.gnb_item').eq(2).find('.gnb_content img')
            .attr('src', 'asset/storyissuesubmain_img/스토리/오징어/gnb3.jpg')
            .attr('alt', '오징어게임 이미지');

        const productList = [
            // .first
            [
                {
                    brand: '[백년밥상]',
                    name: '한우 듬뿍 미역국<br>간편 키트 2인분',
                    price: '18,500원',
                    discountRate: '27%',
                    discounted: '16,980원',
                    img: 'asset/storyissuesubmain_img/스토리/오징어/gnb1-1.jpg'
                },
                {
                    brand: '[백년밥상]',
                    name: '초간편 산나물 반찬 밀키트<br>데친 부지깽이 260g',
                    price: '19,500원',
                    discountRate: '27%',
                    discounted: '16,980원',
                    img: 'asset/storyissuesubmain_img/스토리/오징어/gnb1-2.jpg'
                },
                {
                    brand: '[피코크]',
                    name: '기훈이 집 특별식<br>특 갈치 구이 1인분 키트',
                    price: '18,500원',
                    discountRate: '27%',
                    discounted: '16,980원',
                    img: 'asset/storyissuesubmain_img/스토리/오징어/gnb1-3.jpg'
                }
            ],
            // .second
            [
                {
                    brand: '[프레시지]',
                    name: '추억의 옛날 도시락<br>분홍 소시지전 키트',
                    price: '12,900원',
                    discountRate: '16%',
                    discounted: '10,900원',
                    img: 'asset/storyissuesubmain_img/스토리/오징어/gnb2-1.jpg'
                },
                {
                    brand: '[피코크]',
                    name: '추억의 옛날 도시락<br>간단 메추리 장조림 350g ',
                    price: '15,500원',
                    discountRate: '16%',
                    discounted: '12,990원',
                    img: 'asset/storyissuesubmain_img/스토리/오징어/gnb2-2.jpg'
                },
                {
                    brand: '[백년밥상]',
                    name: '추억의 옛날 도시락<br>견과루 가득 멸치볶음 키트',
                    price: '13,800원',
                    discountRate: '5%',
                    discounted: '13,110원',
                    img: 'asset/storyissuesubmain_img/스토리/오징어/gnb2-3.jpg'
                }
            ],
            // .three
            [
                {
                    brand: '[피코크]',
                    name: '드라이 에이징<br>채끝살 스테이크 세트',
                    price: '39,800원',
                    discountRate: '19%',
                    discounted: '24,137원',
                    img: 'asset/storyissuesubmain_img/스토리/오징어/gnb3-1.jpg'
                },
                {
                    brand: '[백년밥상]',
                    name: '바로 구워먹는<br>가리비 치즈 버터구이 키트',
                    price: '32,500원',
                    discountRate: '15%',
                    discounted: '27,625원',
                    img: 'asset/storyissuesubmain_img/스토리/오징어/gnb3-2.jpg'
                },
                {
                    brand: '[프레시지]',
                    name: '고급 야채구이<br> 모듬 세트 2인분 540g',
                    price: '28,300원',
                    discountRate: '17%',
                    discounted: '23,300원',
                    img: 'asset/storyissuesubmain_img/스토리/오징어/gnb3-3.jpg'
                }
            ],
        ];
                /* 적용 */
        $('.right > div').each(function (groupIdx) {
            $(this).find('ul li').each(function (itemIdx) {
                const data = productList[groupIdx][itemIdx];
                $(this).find('img.food')
                    .attr('src', `${data.img}`)
                    .attr('alt', `${data.name}`);
                $(this).find('.top_txt span').html(data.brand);
                $(this).find('.top_txt p').html(data.name);
                $(this).find('.bottom_txt > span').text(data.price);
                $(this).find('.b_t strong').text(data.discountRate);
                $(this).find('.b_t p').text(data.discounted);
            });
        });
    } else if (story === 'star1') {
        /* 제목 */
        $('.txt h2 span').text('오징어게임,');
        $('.txt h2 em').text('그 장면 속 한상');
        $('.txt img').attr('src', '')
            .attr('alt', '오징어게임의 밥이');

        /* 버튼 텍스트 및 이미지 */
        $('.gnb_item').eq(0).find('button').text('첫 장면! 기훈이 어머니 밥상 ');
        $('.gnb_item').eq(0).find('.gnb_content img')
            .attr('src', 'asset/storyissuesubmain_img/스토리/오징어/gnb1.jpg')
            .attr('alt', '오징어게임 이미지');

        $('.gnb_item').eq(1).find('button').text('오징어게임의 옛날 도시락');
        $('.gnb_item').eq(1).find('.gnb_content img')
            .attr('src', 'asset/storyissuesubmain_img/스토리/오징어/gnb2.jpg')
            .attr('alt', '오징어게임 이미지');

        $('.gnb_item').eq(2).find('button').text('파이널 최후의 만찬!');
        $('.gnb_item').eq(2).find('.gnb_content img')
            .attr('src', 'asset/storyissuesubmain_img/스토리/오징어/gnb3.jpg')
            .attr('alt', '오징어게임 이미지');

        const productList = [
            // .first
            [
                {
                    brand: '[백년밥상]',
                    name: '한우 듬뿍 미역국<br>간편 키트 2인분',
                    price: '18,500원',
                    discountRate: '27%',
                    discounted: '16,980원',
                    img: 'asset/storyissuesubmain_img/스토리/오징어/gnb1-1.jpg'
                },
                {
                    brand: '[백년밥상]',
                    name: '초간편 산나물 반찬 밀키트<br>데친 부지깽이 260g',
                    price: '19,500원',
                    discountRate: '27%',
                    discounted: '16,980원',
                    img: 'asset/storyissuesubmain_img/스토리/오징어/gnb1-2.jpg'
                },
                {
                    brand: '[피코크]',
                    name: '기훈이 집 특별식<br>특 갈치 구이 1인분 키트',
                    price: '18,500원',
                    discountRate: '27%',
                    discounted: '16,980원',
                    img: 'asset/storyissuesubmain_img/스토리/오징어/gnb1-3.jpg'
                }
            ],
            // .second
            [
                {
                    brand: '[프레시지]',
                    name: '추억의 옛날 도시락<br>분홍 소시지전 키트',
                    price: '12,900원',
                    discountRate: '16%',
                    discounted: '10,900원',
                    img: 'asset/storyissuesubmain_img/스토리/오징어/gnb2-1.jpg'
                },
                {
                    brand: '[피코크]',
                    name: '추억의 옛날 도시락<br>간단 메추리 장조림 350g ',
                    price: '15,500원',
                    discountRate: '16%',
                    discounted: '12,990원',
                    img: 'asset/storyissuesubmain_img/스토리/오징어/gnb2-2.jpg'
                },
                {
                    brand: '[백년밥상]',
                    name: '추억의 옛날 도시락<br>견과루 가득 멸치볶음 키트',
                    price: '13,800원',
                    discountRate: '5%',
                    discounted: '13,110원',
                    img: 'asset/storyissuesubmain_img/스토리/오징어/gnb2-3.jpg'
                }
            ],
            // .three
            [
                {
                    brand: '[피코크]',
                    name: '드라이 에이징<br>채끝살 스테이크 세트',
                    price: '39,800원',
                    discountRate: '19%',
                    discounted: '24,137원',
                    img: 'asset/storyissuesubmain_img/스토리/오징어/gnb3-1.jpg'
                },
                {
                    brand: '[백년밥상]',
                    name: '바로 구워먹는<br>가리비 치즈 버터구이 키트',
                    price: '32,500원',
                    discountRate: '15%',
                    discounted: '27,625원',
                    img: 'asset/storyissuesubmain_img/스토리/오징어/gnb3-2.jpg'
                },
                {
                    brand: '[프레시지]',
                    name: '고급 야채구이<br> 모듬 세트 2인분 540g',
                    price: '28,300원',
                    discountRate: '17%',
                    discounted: '23,300원',
                    img: 'asset/storyissuesubmain_img/스토리/오징어/gnb3-3.jpg'
                }
            ],
        ];
                /* 적용 */
        $('.right > div').each(function (groupIdx) {
            $(this).find('ul li').each(function (itemIdx) {
                const data = productList[groupIdx][itemIdx];
                $(this).find('img.food')
                    .attr('src', `${data.img}`)
                    .attr('alt', `${data.name}`);
                $(this).find('.top_txt span').html(data.brand);
                $(this).find('.top_txt p').html(data.name);
                $(this).find('.bottom_txt > span').text(data.price);
                $(this).find('.b_t strong').text(data.discountRate);
                $(this).find('.b_t p').text(data.discounted);
            });
        });
    } else if (story === 'star2') {
        /* 제목 */
        $('.txt h2 span').text('오징어게임,');
        $('.txt h2 em').text('그 장면 속 한상');
        $('.txt img').attr('src', '')
            .attr('alt', '오징어게임의 밥이');

        /* 버튼 텍스트 및 이미지 */
        $('.gnb_item').eq(0).find('button').text('첫 장면! 기훈이 어머니 밥상 ');
        $('.gnb_item').eq(0).find('.gnb_content img')
            .attr('src', 'asset/storyissuesubmain_img/스토리/오징어/gnb1.jpg')
            .attr('alt', '오징어게임 이미지');

        $('.gnb_item').eq(1).find('button').text('오징어게임의 옛날 도시락');
        $('.gnb_item').eq(1).find('.gnb_content img')
            .attr('src', 'asset/storyissuesubmain_img/스토리/오징어/gnb2.jpg')
            .attr('alt', '오징어게임 이미지');

        $('.gnb_item').eq(2).find('button').text('파이널 최후의 만찬!');
        $('.gnb_item').eq(2).find('.gnb_content img')
            .attr('src', 'asset/storyissuesubmain_img/스토리/오징어/gnb3.jpg')
            .attr('alt', '오징어게임 이미지');

        const productList = [
            // .first
            [
                {
                    brand: '[백년밥상]',
                    name: '한우 듬뿍 미역국<br>간편 키트 2인분',
                    price: '18,500원',
                    discountRate: '27%',
                    discounted: '16,980원',
                    img: 'asset/storyissuesubmain_img/스토리/오징어/gnb1-1.jpg'
                },
                {
                    brand: '[백년밥상]',
                    name: '초간편 산나물 반찬 밀키트<br>데친 부지깽이 260g',
                    price: '19,500원',
                    discountRate: '27%',
                    discounted: '16,980원',
                    img: 'asset/storyissuesubmain_img/스토리/오징어/gnb1-2.jpg'
                },
                {
                    brand: '[피코크]',
                    name: '기훈이 집 특별식<br>특 갈치 구이 1인분 키트',
                    price: '18,500원',
                    discountRate: '27%',
                    discounted: '16,980원',
                    img: 'asset/storyissuesubmain_img/스토리/오징어/gnb1-3.jpg'
                }
            ],
            // .second
            [
                {
                    brand: '[프레시지]',
                    name: '추억의 옛날 도시락<br>분홍 소시지전 키트',
                    price: '12,900원',
                    discountRate: '16%',
                    discounted: '10,900원',
                    img: 'asset/storyissuesubmain_img/스토리/오징어/gnb2-1.jpg'
                },
                {
                    brand: '[피코크]',
                    name: '추억의 옛날 도시락<br>간단 메추리 장조림 350g ',
                    price: '15,500원',
                    discountRate: '16%',
                    discounted: '12,990원',
                    img: 'asset/storyissuesubmain_img/스토리/오징어/gnb2-2.jpg'
                },
                {
                    brand: '[백년밥상]',
                    name: '추억의 옛날 도시락<br>견과루 가득 멸치볶음 키트',
                    price: '13,800원',
                    discountRate: '5%',
                    discounted: '13,110원',
                    img: 'asset/storyissuesubmain_img/스토리/오징어/gnb2-3.jpg'
                }
            ],
            // .three
            [
                {
                    brand: '[피코크]',
                    name: '드라이 에이징<br>채끝살 스테이크 세트',
                    price: '39,800원',
                    discountRate: '19%',
                    discounted: '24,137원',
                    img: 'asset/storyissuesubmain_img/스토리/오징어/gnb3-1.jpg'
                },
                {
                    brand: '[백년밥상]',
                    name: '바로 구워먹는<br>가리비 치즈 버터구이 키트',
                    price: '32,500원',
                    discountRate: '15%',
                    discounted: '27,625원',
                    img: 'asset/storyissuesubmain_img/스토리/오징어/gnb3-2.jpg'
                },
                {
                    brand: '[프레시지]',
                    name: '고급 야채구이<br> 모듬 세트 2인분 540g',
                    price: '28,300원',
                    discountRate: '17%',
                    discounted: '23,300원',
                    img: 'asset/storyissuesubmain_img/스토리/오징어/gnb3-3.jpg'
                }
            ],
        ];
        /* 적용 */
        $('.right > div').each(function (groupIdx) {
            $(this).find('ul li').each(function (itemIdx) {
                const data = productList[groupIdx][itemIdx];
                $(this).find('img.food')
                    .attr('src', `${data.img}`)
                    .attr('alt', `${data.name}`);
                $(this).find('.top_txt span').html(data.brand);
                $(this).find('.top_txt p').html(data.name);
                $(this).find('.bottom_txt > span').text(data.price);
                $(this).find('.b_t strong').text(data.discountRate);
                $(this).find('.b_t p').text(data.discounted);
            });
        });
    } else if (culture === 'danjang') {
        /* 제목 */
        $('.txt h2 span').text('된장과 어울린,');
        $('.txt h2 em').text(' 어떤 음식을 드시나요?');
        $('.txt img').attr('src', '')
            .attr('alt', '된장의 밥이');

        /* 버튼 텍스트 및 이미지 */
        $('.gnb_item').eq(0).find('button').text('엄마표 된장요리');
        $('.gnb_item').eq(0).find('.gnb_content img')
            .attr('src', 'asset/storyissuesubmain_img/된장/gnb1.jpg')
            .attr('alt', '된장 이미지');

        $('.gnb_item').eq(1).find('button').text('항암효과 듬뿍 자연식');
        $('.gnb_item').eq(1).find('.gnb_content img')
            .attr('src', 'asset/storyissuesubmain_img/된장/gnb2.jpg')
            .attr('alt', '된장 이미지');

        $('.gnb_item').eq(2).find('button').text('된장의 유혹');
        $('.gnb_item').eq(2).find('.gnb_content img')
            .attr('src', 'asset/storyissuesubmain_img/된장/gnb3.jpg')
            .attr('alt', '된장 이미지');

        const productList = [
            // .first
            [
                {
                    brand: '[피코크]',
                    name: '엄마 손맛<br>애호박 된장찌개 키트',
                    price: '18,000원',
                    discountRate: '15%',
                    discounted: '15,300원',
                    img: 'asset/storyissuesubmain_img/된장/gnb1-1.jpg'
                },
                {
                    brand: '[백년밥상]',
                    name: '시금치 듬뿍<br>잡채 1인분 키트',
                    price: '24,000원',
                    discountRate: '20%',
                    discounted: '19,200원',
                    img: 'asset/storyissuesubmain_img/된장/gnb1-2.jpg'
                },
                {
                    brand: '[피코크]',
                    name: '국내산 돼지고기<br>                    제육 불고기 2-3인분',
                    price: '30,000원',
                    discountRate: '10%',
                    discounted: '27,000',
                    img: 'asset/storyissuesubmain_img/된장/gnb1-3.jpg'
                }
            ],
            // .second
            [
                {
                    brand: '[프레시지]',
                    name: '구수한 냄새<br>간편한 청국장 찌개 740g',
                    price: '21,000원',
                    discountRate: '25%',
                    discounted: '15,750원',
                    img: 'asset/storyissuesubmain_img/된장/gnb2-1.jpg'
                },
                {
                    brand: '[백년밥상]',
                    name: '국내산 케일 <br>쌈밥 키트 2-3인분',
                    price: '26,000원',
                    discountRate: '12%',
                    discounted: '22,880원',
                    img: 'asset/storyissuesubmain_img/된장/gnb2-2.jpg'
                },
                {
                    brand: '[프레시지]',
                    name: '항암에 좋은<br>양념 듬뿍 장어구이 모듬 세트',
                    price: '17,000원',
                    discountRate: '18%',
                    discounted: '13,940원',
                    img: 'asset/storyissuesubmain_img/된장/gnb2-3.jpg'
                }
            ],
            // .three
            [
                {
                    brand: '[프레시지]',
                    name: '한우 된장<br>두부 덮밥 키트 1인분',
                    price: '19,500원',
                    discountRate: '22%',
                    discounted: '15,210원',
                    img: 'asset/storyissuesubmain_img/된장/gnb3-1.jpg'
                },
                {
                    brand: '[피코크]',
                    name: '된장이 들어간<br>가지 된장 그라탕 키트',
                    price: '27,000원',
                    discountRate: '30%',
                    discounted: '18,900',
                    img: 'asset/storyissuesubmain_img/된장/gnb3-2.jpg'
                },
                {
                    brand: '[백년밥상]',
                    name: '바지락이 들어간<br>된장 크림 리조토 2-3인분',
                    price: '22,500원',
                    discountRate: '16%',
                    discounted: '18,900원',
                    img: 'asset/storyissuesubmain_img/된장/gnb3-3.jpg'
                }
            ],
        ];

        /* 적용 */
        $('.right > div').each(function (groupIdx) {
            $(this).find('ul li').each(function (itemIdx) {
                const data = productList[groupIdx][itemIdx];
                $(this).find('img.food')
                    .attr('src', `${data.img}`)
                    .attr('alt', `${data.name}`);
                $(this).find('.top_txt span').html(data.brand);
                $(this).find('.top_txt p').html(data.name);
                $(this).find('.bottom_txt > span').text(data.price);
                $(this).find('.b_t strong').text(data.discountRate);
                $(this).find('.b_t p').text(data.discounted);
            });
        });
    }

    /* ******************************************************** */

    // 처음에 필요한 컨텐츠만 보여주기 (첫 번째 탭 활성화)
    $('.gnb_item').removeClass('on').eq(0).addClass('on');
    $('.right > div').hide().eq(0).show();

    $('.gnb_item button').on('click', function () {
        const index = $(this).parent().index(); // 현재 클릭된 버튼의 li 인덱스

        // 탭 버튼 활성화 처리
        $('.gnb_item').removeClass('on');
        $(this).parent().addClass('on');

        // 콘텐츠 표시
        $('.right > div').hide().eq(index).fadeIn(300); // 부드럽게 나타나도록 설정
    });


});