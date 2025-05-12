$(function () {
    // top → 왼쪽에서 오른쪽으로
    $('.cont_top ul').simplyScroll({
        direction: 'forwards', // ←→ 기본값: 왼→오
        speed: 2,
        pauseOnHover: false,
        frameRate: 60
    });

    // bottom → 오른쪽에서 왼쪽으로
    $('.con_bottom ul').simplyScroll({
        direction: 'backwards', // →← 반대 방향
        speed: 2,
        pauseOnHover: false,
        frameRate: 60
    });
})