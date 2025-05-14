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
        markers: true,

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
        markers: true,

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
        markers: true,

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
    })