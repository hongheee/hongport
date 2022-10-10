$(function(){

    //about을 누르면 화면의 제일 위로 부드럽게 올라감

    $('#about').click(function(){
        $('html,body').animate({scrollTop:0}, 300);
    });

    $('#work').click(function(){
        $('html,body').animate({scrollTop:650}, 300);
    });

    //ability computer img change

    $('.computer').mouseover(function(){
        $('.computer img').attr({'src':'img/comp_2.png','alt':'open'});
    })

    $('.computer').mouseleave(function(){
        $('.computer img').attr({'src':'img/comp.png','alt':'close'});
    })

    $('.workwork > a').mouseover(function(){
        $(this).animate({transition:translateX(1000)}, 2000)
    })

    $('.button_go > a').mouseover(function(){
        $('.flower').css('display','inline-block');
    });

    $('.button_go > a').mouseleave(function(){
        $('.flower').css('display','none');
    });

    $('.close').click(function(){
        $('.popup').css('display','none');
    });

    $('.contact').click(function(){
        $('.popup').css('display','inline-block')
    })

    


    //header에 있는 버튼을 누르면 해당 section으로 부드럽게 이동

    // function scrTp(sss){
    //     var Section_offsetTop = sss.offset().top; //각 section = sss의 위치값
    //     $('html,body').animate({scrollTop:Section_offsetTop}, 500);
    // }

    // var menuItem = $('.main_list > ul > li > a'); //메뉴를 변수로 만듦

    // menuItem.click(function(){

    //     $(this).parent().siblings('.main_list > ul > li').removeClass('.active');
    //     $(this).parent().addclass('.actj=ooõ')
    //     var el = $(this).attr('href');  //클릭한 a의 href 속성의 속성값을 변수에 넣음
    //     console.log(el);
    //     var $el = $(el); //제이쿼리의 선탤자 형태로 전환

    //     scrTp($el); //함수 실행
    // })



});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 20,
    freeMode: true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    });

/*
    A.eq(B)  -B와 같은 순서의 A
    A.offset().top - A가 브라우저의 제일 위에서부터 얼마나 떨어져있냐
    A.attr - 요소 A에 속성값을 가져온다
*/



