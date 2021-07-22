(function () {
    const mousePos ={
        x:0,
        y:0
    }
    const house = document.querySelector('.house');
    const stage = document.querySelector('.stage');
    const bar = document.querySelector('.progress-bar')
    //스크롤 크기 = 화면의 100vh 니까 body의 높이에서 현재화면의 높이를 빼줌
    // let maxScrollSize = document.body.offsetHeight - window.innerHeight;
    let maxScrollSize;
    //창크기 변화에따른 스크롤 크기 재계산
    function resizeHandler() {
        maxScrollSize = document.body.offsetHeight - window.innerHeight;
    }
    window.addEventListener('scroll',function () {
        const percentScroll =pageYOffset / maxScrollSize;
        const zMove = percentScroll *970;
        //스크롤을 얼나마 내렸는지
        // console.log(pageYOffset / maxScrollSize);
        house.style.transform = 'translateZ('+(zMove-490)+'vw)';

        // console.log(window.pageYOffset);
        // console.log(document.body.offsetHeight - window.innerHeight);

        //ProgressBar
        bar.style.width=percentScroll*100+'%';
    })
    window.addEventListener('mousemove',function (e) {
        // e.clientX;
        // e.clientY;
        mousePos.x = -1 + (e.clientX/window.innerWidth)*2;
        mousePos.y = 1 - (e.clientY/window.innerHeight)*2;
        // stage.style.transform = 'rotate('+mousePos.x*30+'deg,'+mousePos.y+'deg)';
        stage.style.transform = 'rotateX('+ (mousePos.y*8) +'deg) rotateY(' + (mousePos.x*8) +'deg)';
    })
    window.addEventListener('resize',resizeHandler);
    resizeHandler()
})();