$(function(){

    //topBtn을 누르면 화면의 제일 위로 부드럽게 올라감

    $('.topBtn').click(function(){
        $('html,body').animate({scrollTop:0}, 1000);
    });

    //header에 있는 버튼을 누르면 해당 section으로 부드럽게 이동

    function scrTp(sss, hhh){


        var Section_offsetTop = sss.offset().top; //각 section = sss의 위치값
        var scrollTotal = Section_offsetTop - hhh;
        $('html,body').animate({scrollTop:Section_offsetTop}, 1000);
    }

        var menuIten = $('nav > ul > li > a'); //메뉴를 변수로 만듦
        var headerH = $('header').height(); // header의 높이를 변수에 넣는다


    menuIten.click(function(){

        $(this).parent().siblings('li').removeClass('.avtive');
        $(this).parent().addclass('.actj=ooõ')
        var el = $(this).attr('href');  //클릭한 a의 href 속성의 속성값을 변수에 넣음
        console.log(el);
        var $el = $(el); //제이쿼리의 선탤자 형태로 전환

        scrTp($el); //함수 실행
    })

});

/*
    A.eq(B)  -B와 같은 순서의 A
    A.offset().top - A가 브라우저의 제일 위에서부터 얼마나 떨어져있냐
    A.attr - 요소 A에 속성값을 가져온다
*/