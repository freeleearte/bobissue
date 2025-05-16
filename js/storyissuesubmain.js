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
                    brand: '[프레시지]',
                    name: '뜨끈 뜨끈 후루룩 <br>우동 키트',
                    price: '18,500원',
                    discountRate: '27%',
                    discounted: '16,980원',
                    img: 'asset/storyissuesubmain_img/비오는날/gnb1-2.jpg'
                },
                {
                    brand: '[프레시지]',
                    name: '캠핑포차 옛날 감자<br>엄마 손맛 수제비 키트',
                    price: '18,500원',
                    discountRate: '27%',
                    discounted: '16,980원',
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
    } else if (story === 'squid') {
        /* 제목 */
        $('.txt h2 span').text('');
        $('.txt h2 em').text('');
        $('.txt img').attr('src', '')
            .attr('alt', '');

        /* 버튼 텍스트 및 이미지 */
        $('.gnb_item').eq(0).find('button').text('');
        $('.gnb_item').eq(0).find('.gnb_content img')
            .attr('src', '')
            .attr('alt', '');

        $('.gnb_item').eq(1).find('button').text('');
        $('.gnb_item').eq(1).find('.gnb_content img')
            .attr('src', '')
            .attr('alt', '');

        $('.gnb_item').eq(2).find('button').text('');
        $('.gnb_item').eq(2).find('.gnb_content img')
            .attr('src', '')
            .attr('alt', '');

        const productList = [
            // .first
            [
                {
                    brand: '',
                    name: '',
                    price: '',
                    discountRate: '',
                    discounted: '',
                    img: ''
                },
                {
                    brand: '',
                    name: '',
                    price: '',
                    discountRate: '',
                    discounted: '',
                    img: ''
                },
                {
                    brand: '',
                    name: '',
                    price: '',
                    discountRate: '',
                    discounted: '',
                    img: ''
                }
            ],
            // .second
            [
                {
                    brand: '',
                    name: '',
                    price: '',
                    discountRate: '',
                    discounted: '',
                    img: ''
                },
                {
                    brand: '',
                    name: '',
                    price: '',
                    discountRate: '',
                    discounted: '',
                    img: ''
                },
                {
                    brand: '',
                    name: '',
                    price: '',
                    discountRate: '',
                    discounted: '',
                    img: ''
                }
            ],
            // .three
            [
                {
                    brand: '',
                    name: '',
                    price: '',
                    discountRate: '',
                    discounted: '',
                    img: ''
                },
                {
                    brand: '',
                    name: '',
                    price: '',
                    discountRate: '',
                    discounted: '',
                    img: ''
                },
                {
                    brand: '',
                    name: '',
                    price: '',
                    discountRate: '',
                    discounted: '',
                    img: ''
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
    } else if (story === '') {
        /* 제목 */
        $('.txt h2 span').text('');
        $('.txt h2 em').text('');
        $('.txt img').attr('src', '')
            .attr('alt', '');

        /* 버튼 텍스트 및 이미지 */
        $('.gnb_item').eq(0).find('button').text('');
        $('.gnb_item').eq(0).find('.gnb_content img')
            .attr('src', '')
            .attr('alt', '');

        $('.gnb_item').eq(1).find('button').text('');
        $('.gnb_item').eq(1).find('.gnb_content img')
            .attr('src', '')
            .attr('alt', '');

        $('.gnb_item').eq(2).find('button').text('');
        $('.gnb_item').eq(2).find('.gnb_content img')
            .attr('src', '')
            .attr('alt', '');

        const productList = [
            // .first
            [
                {
                    brand: '',
                    name: '',
                    price: '',
                    discountRate: '',
                    discounted: '',
                    img: ''
                },
                {
                    brand: '',
                    name: '',
                    price: '',
                    discountRate: '',
                    discounted: '',
                    img: ''
                },
                {
                    brand: '',
                    name: '',
                    price: '',
                    discountRate: '',
                    discounted: '',
                    img: ''
                }
            ],
            // .second
            [
                {
                    brand: '',
                    name: '',
                    price: '',
                    discountRate: '',
                    discounted: '',
                    img: ''
                },
                {
                    brand: '',
                    name: '',
                    price: '',
                    discountRate: '',
                    discounted: '',
                    img: ''
                },
                {
                    brand: '',
                    name: '',
                    price: '',
                    discountRate: '',
                    discounted: '',
                    img: ''
                }
            ],
            // .three
            [
                {
                    brand: '',
                    name: '',
                    price: '',
                    discountRate: '',
                    discounted: '',
                    img: ''
                },
                {
                    brand: '',
                    name: '',
                    price: '',
                    discountRate: '',
                    discounted: '',
                    img: ''
                },
                {
                    brand: '',
                    name: '',
                    price: '',
                    discountRate: '',
                    discounted: '',
                    img: ''
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