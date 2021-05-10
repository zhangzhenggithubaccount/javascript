let idx = 0;
onload = function() {

    let swipers = $(".swiper-slide");
    let bullets = $(".swiper-pagination-bullet");

    let prevs = $(".prev")[0];
    let nexts = $(".next")[0];

    prevs.onclick = function() {
        prev(swipers, bullets);
    }

    nexts.onclick = function() {
        next(swipers, bullets);
    }

    for(let i = 0; i < bullets.length; i++) {
        bullets[i].blt = i;
        bullets[i].onclick = function() {
            idx = this.blt;
            show(swipers, bullets, idx)
        }
    }

}
function $(selector) {
    return document.querySelectorAll(selector);
}
function show(swiper, bullet, idx) {
    for(let i = 0; i < swiper.length; i++) {
        swiper[i].classList.remove("swiper-active");
        bullet[i].classList.remove("bullet-active");
    }
    swiper[idx].classList.add("swiper-active");
    bullet[idx].classList.add("bullet-active");
}
function prev(swiper, bullet) {
    console.log(idx);
    if(idx === 0) {
        idx = swiper.length - 1;
    }else {
        idx--;
    }
    show(swiper, bullet, idx)
}
function next(swiper, bullet) {
    if(idx === (swiper.length - 1)) {
        idx = 0;
    }else {
        idx++;
    }
    show(swiper, bullet, idx)
}
