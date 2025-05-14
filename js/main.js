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

$('.txtAni1').simplyScroll({
    orientation: 'vertical',
    speed: 2,
    // pauseOnHover: false,
    // pauseOnTouch: false,
    direction: 'forwards',
    continuous: true
});

$('.txtAni2').simplyScroll({
    orientation: 'vertical',
    speed: 2,
    // pauseOnHover: false,
    // pauseOnTouch: false,
    direction: 'forwards',
    continuous: true
});

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


/* con2 */
$('.sw_btn').click(function () {
    // .move 클래스를 토글하여 애니메이션을 발생시킴
    $('.img_container').toggleClass('move');
    $('.con_container').toggleClass('move');
});

/* 두번째 캐릭터 모션 */
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
    on: {
        init: updateActiveSlide,
        slideChangeTransitionEnd: updateActiveSlide, // 애니메이션 끝난 후 호출
    },
});

function updateActiveSlide() {
    // 기존 active 클래스 제거
    $('.con3 .con3_bot ul.slide li').removeClass('active');

    // 모든 star 이미지 기본 이미지로 초기화
    $('.con3 .con3_bot ul.slide li .star img').attr('src', 'asset/star.png');

    // 현재 활성 슬라이드에 active 클래스 부여
    const $activeSlide = $('.con3 .con3_bot ul.slide li.swiper-slide-active');
    $activeSlide.addClass('active');

    // active 상태일 때 star 이미지 변경
    $activeSlide.find('.star img').attr('src', 'asset/star_active.png');
}

document.querySelectorAll('.parallax').forEach(el => {
    const speed = parseFloat(el.dataset.speed);

    gsap.to(el, {
        y: () => window.innerHeight * speed,
        ease: 'power1.out',
        scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1 // 부드럽게
        }
    });
});