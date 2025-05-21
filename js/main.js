$('.goto_top').click(function (e) {
    e.preventDefault(); // a 태그일 경우 기본 이벤트 방지 (여기서는 필요 없지만 습관처럼 넣기도 합니다)
    $('html, body').animate({ scrollTop: 0 }, 500); // 500ms 동안 상단으로 스크롤
});

let slideI = 0;
$('.main_visual .l_slide li').eq(0).siblings().hide();
setInterval(function () {
    if (slideI < 2) {
        slideI++;
    } else {
        slideI = 0;
    }
    $('.main_visual .l_slide li').eq(slideI).fadeIn().siblings().fadeOut();
}, 3000);

gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger 기본 설정
ScrollTrigger.defaults({
    scrub: 1
});

// GSAP 애니메이션 설정
gsap.config({
    nullTargetWarn: false,
    trialWarn: false
});

/* 메인 소스 올라가는 */
gsap.timeline({
    scrollTrigger: {
        trigger: ".main_visual",
        start: "top 20%",
        end: "bottom -20%",
        scrub: true,
        // markers: true,

    }
})
    .to(".con_bg", {
        top: -900 + 'px',
        ease: "power1.out",
    });

/* 첫번째 캐릭터 모션 */

function char1Position() {
    let windowWidth = $(window).width();

    if (windowWidth >= 834) {
        gsap.timeline({
            scrollTrigger: {
                trigger: ".char1_wrap",
                start: "top 20%",
                end: "bottom -20%",
                scrub: true,
                // markers: true,

            }
        })
            .to(".char1_wrap", {
                right: 1000 + 'px',
                top: 900 + 'px',
                ease: "power1.out",
            })
            .to(".char1_wrap", {
                right: 1900 + 'px',
                top: 1600 + 'px',
                ease: "power1.out",
            });
    } else {
        gsap.timeline({
            scrollTrigger: {
                trigger: ".char1_wrap",
                start: "top 20%",
                end: "bottom -20%",
                scrub: true,
                // markers: true,

            }
        })
            .to(".char1_wrap", {
                right: 550 + 'px',
                top: 250 + 'px',
                ease: "power1.out",
            })
            .to(".char1_wrap", {
                right: 1000 + 'px',
                top: 500 + 'px',
                ease: "power1.out",
            });
    }
}

// 초기 실행 + 리사이즈 이벤트
char1Position();
$(window).on('resize', char1Position);

$("#stopBtn").on("click", function () {
    // 모든 이미지의 애니메이션을 멈추고 top: 0으로 고정

    $(".con1 article ul li img").each(function () {
        $(this).addClass("slide-down");
    });
    setTimeout(function () {
        $(".con1 article ul li img").each(function () {
            $(this).addClass("stop-animation");
        });

        // 팝업 보이기
        $('.modal_test_wrap').addClass('on');
        $('body').addClass('no-scroll');
    }, 1500);
});

//모달
let answeredQuestions = {};
let isAnimating = false; // 중복 방지 플래그

// 테스트 시작
$('.modal_test_wrap .start button').on('click', function () {
    $('.modal_test_wrap .start').removeClass('on');
    $('.modal_test_wrap .quiz').addClass('on');
    showQuestion($('.first'));
});

// 항목 클릭 시 자동 다음 이동
$('.quiz .question .bot li').on('click', function () {
    if (isAnimating) return;
    isAnimating = true;

    const $this = $(this);
    const $current = $this.closest('.question');
    const currentIndex = $current.index();

    // 답 저장
    $current.find('li').removeClass('check');
    $this.addClass('check');

    // 저장 (index → 몇 번째 li인지)
    answeredQuestions[currentIndex] = $this.index();

    // 처음 답한 경우만 딜레이 후 check 제거하고 넘어감
    setTimeout(function () {
        const $next = $current.nextAll('.question').first();

        if ($next.length > 0) {
            $current.removeClass('on');
            showQuestion($next);
        } else {
            $current.removeClass('on');
            $('.modal_test_wrap .quiz').removeClass('on');
            $('.modal_test_wrap .result').addClass('on');
        }

        isAnimating = false;
    }, 400);
});

// 이전 버튼
$('.quiz .prev').on('click', function () {
    const $current = $(this).closest('.question');
    const $prev = $current.prevAll('.question').first();

    if ($prev.length > 0) {
        $current.removeClass('on');
        showQuestion($prev);
    }
});

// 다음 버튼
$('.quiz .next').on('click', function () {
    const $current = $(this).closest('.question');
    const $next = $current.nextAll('.question').first();

    if ($next.length > 0) {
        $current.removeClass('on');
        showQuestion($next);
    } else {
        $current.removeClass('on');
        $('.modal_test_wrap .quiz').removeClass('on');
        $('.modal_test_wrap .result').addClass('on');
        $('body').removeClass('no-scroll');
    }
});

$('.modal_test_wrap>div>span').on('click', function () {
    $('.modal_test_wrap').removeClass('on');
    $(".con1 article ul li img").each(function () {
        $(this).removeClass("stop-animation").removeClass("slide-down");
    });
    $('body').removeClass('no-scroll');
});

// 질문 표시 함수
function showQuestion($question) {
    $question.addClass('on').siblings('.question').removeClass('on');

    const index = $question.index();

    // 답변 복원
    const savedIndex = answeredQuestions[index];
    if (savedIndex !== undefined) {
        const $items = $question.find('.bot li');
        $items.removeClass('check');
        $items.eq(savedIndex).addClass('check');
    }

    // 이전 버튼 표시
    if ($question.hasClass('first')) {
        $question.find('.prev').hide();
    } else {
        $question.find('.prev').show();
    }

    // 다음 버튼은 이미 답한 질문일 때만 표시
    if (answeredQuestions[index] !== undefined) {
        $question.find('.next').show();
    } else {
        $question.find('.next').hide();
    }
}


// $("#closePopup").on("click", function () {
//     $("#popup").fadeOut();
// });

/* con2 */
$('.sw_btn').click(function () {
    // .move 클래스를 토글하여 애니메이션을 발생시킴
    $('.img_container').toggleClass('move');
    $('.con_container').toggleClass('move');
});

/* 두번째 캐릭터 모션 */


function char2Position() {
    let windowWidth = $(window).width();

    if (windowWidth >= 834) {
        gsap.timeline({
            scrollTrigger: {
                trigger: ".char2_wrap",
                start: "top 40%",
                end: "bottom -160%",
                scrub: true,
                // markers: true,

            }
        })
            .to(".char2_wrap", {
                left: 1000 + 'px',
                top: 300 + 'px',
                ease: "power1.out",
            })
            .to(".char2_wrap", {
                left: 1900 + 'px',
                top: 1000 + 'px',
                ease: "power1.out",
            })
            .to(".char2_wrap", {
                left: 1300 + 'px',
                top: 1600 + 'px',
                scale: 0.6,
                ease: "power1.out",
            })
            .to(".char2_wrap", {
                left: 1900 + 'px',
                top: 2300 + 'px',
                scale: 0.3,
                ease: "power1.out",
            });
    } else {
        gsap.timeline({
            scrollTrigger: {
                trigger: ".char2_wrap",
                start: "top 60%",
                end: "bottom -160%",
                scrub: true,
                // markers: true,

            }
        })
            .to(".char2_wrap", {
                left: 450 + 'px',
                top: 100 + 'px',
                ease: "power1.out",
            })
            .to(".char2_wrap", {
                left: 900 + 'px',
                top: 600 + 'px',
                ease: "power1.out",
            })
            .to(".char2_wrap", {
                left: 500 + 'px',
                top: 500 + 'px',
                scale: 0.6,
                ease: "power1.out",
            })
            .to(".char2_wrap", {
                left: 900 + 'px',
                top: 700 + 'px',
                scale: 0.3,
                ease: "power1.out",
            });
    }
}

// 초기 실행 + 리사이즈 이벤트
char2Position();
$(window).on('resize', char2Position);

let topSwiper = new Swiper(".con3_top", {
    loop: true,
    navigation: {
        nextEl: ".con3 .lr_btn .right_btn",
        prevEl: ".con3 .lr_btn .left_btn",
    },
});

let botSwiper = new Swiper(".con3_bot", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 55,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    on: {
        init: function () {
            setTimeout(updateActiveSlide, 50);
        },
        slideChangeTransitionEnd: function () {
            updateActiveSlide();
        },
    },
});

function updateActiveSlide() {
    // 기존 active 제거
    $('.con3 .con3_bot ul.slide li').removeClass('active');
    $('.con3 .con3_bot ul.slide li .star img').attr('src', 'asset/star.png');

    // 가운데 슬라이드에 active 부여
    const $centerSlide = $('.con3 .con3_bot ul.slide li.swiper-slide-active');
    $centerSlide.addClass('active');
    $centerSlide.find('.star img').attr('src', 'asset/star_active.png');
}

document.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.querySelector(".con3_bot .swiper-wrapper");
    wrapper.innerHTML = document.querySelector(".ver1").innerHTML;
    botSwiper.update();

    setTimeout(updateActiveSlide, 50);
});

topSwiper.on("slideChange", function () {
    const index = topSwiper.realIndex;
    const wrapper = document.querySelector(".con3_bot .swiper-wrapper");

    if (index === 0) {
        wrapper.innerHTML = document.querySelector(".ver1").innerHTML;
    } else if (index === 1) {
        wrapper.innerHTML = document.querySelector(".ver2").innerHTML;
    } else if (index === 2) {
        wrapper.innerHTML = document.querySelector(".ver3").innerHTML;
    }

    botSwiper.update();

    setTimeout(updateActiveSlide, 50);
});


const parallaxEls = document.querySelectorAll('.parallax');

ScrollTrigger.matchMedia({
    // 데스크탑 (1900px 이하)
    "(min-width: 835px)": function () {
        const speeds = [-0.7, -0.6, -0.4, -0.9, -0.7, -0.9];

        parallaxEls.forEach((el, index) => {
            gsap.to(el, {
                y: () => window.innerHeight * speeds[index],
                ease: 'power1.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1
                }
            });
        });
    },

    // 태블릿 (834px 이하)
    "(max-width: 834px)": function () {
        const speeds = [-0.5, -0.5, -0.7, -0.7, -0.9, -0.9];

        parallaxEls.forEach((el, index) => {
            gsap.to(el, {
                y: () => window.innerHeight * speeds[index],
                ease: 'power1.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1
                }
            });
        });
    },

    // 모바일 (375px 이하)
    "(max-width: 375px)": function () {
        const speeds = [-0.5, -0.5, -0.5, -0.5, -0.5, -0.5];

        parallaxEls.forEach((el, index) => {
            gsap.to(el, {
                y: () => window.innerHeight * speeds[index],
                ease: 'power1.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1
                }
            });
        });
    }
});