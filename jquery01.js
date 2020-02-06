
$(document).ready(function() {
    
// jquery 효과
// hide/show/toggle : jquery에서 미리 만들어 놓은 CSS 효과
// hide() : 지정한 html 태그를 숨김(display : none 과 같음 )
    // $(선택자).hide(속도, 콜백함수)
    // 1/1000 초로 계산함
// show() : 숨겨진 html 태그를 보여줌
    // $(선택자).hide(속도, 콜백함수)
// toggle() : hide()/swhow()의 기능을 돌아가며 실행
    // $(선택자).hide(속도, 콜백함수)

    $("#btnHide").on("click", function() {
        // $("#div01p").hide(); : 기본함수

        $("#div01p").hide(300, function() {
            alert("hide() 가 실행되었습니다.");
        });
    });

    $("#btnShow").on("click", function() {
        $("#div01p").show(300, function() {
            alert("show() 가 실행되었습니다.");
        });
    });

    $("#btnToggle").on("click", function() {
        $("#div01p").toggle(1000, function() {
            alert("toggle이 실행되었습니다.");
        });
    });
    // 슬라이드 효과
    // slideDown() : 지정한 html 요소를 아래로 스라이드 함 
        // $(선택자).slideDown(속도, 콜백);
        // 속도는 slow, fast, 숫자(1/1000 초)로 입력
    // slideup() : 지정한 html 요소를 위로 슬라이드함
    // slideToggle() : 지정한 html 요소를 아래로/위로 슬라이드를 돌아가며 동작
    $("#div02flip1").on("click", function() {
        $("#div02panel1").slideDown(300);
    // 콜백함수 사용
        // $("#div02panel1").slideDown(300, function() {
        // alert("slideToggle() 실행 후 콜백 함수 동작")
    });

    $("#div02flip2").on("click", function() {
        $("#div02panel2").slideUp();
    });

    $("#div02flip3").on("click", function() {
        $("#div02panel3").slideToggle();
    });


// 애니메이션 효과
// animate() : 사용자 정의 애니매이션을 작성하 수 있음
// $(선택자).animate({옵션}, 속도, 콜백);
    // 옵션 : CSS 속성을 입력 , object 형을 사용하기 떄문에 CSS여러 가지 기능을 사용할수 있다.
        // 컬러 관련 CSS 속성은 jQuery.Color 플러그인을 추가 설치해야함
        // 현재 적용된 값에 증가/감소 값을 넣어서 상대값으로 표현이 가능함
    // 속도 : 1/1000 chfh rPtks
    // 콜백 : animate()가 실행된 이후 동작할 작업
    // 애니메이션을 연속 여러개 실행할 수 있음
        // animate()를 여러개 입력 시 입력딘 순서에 따라 차례대로 실행 됨
    $("#div03btn1").on("click", function() {
        // $("#div03div").animate({left: "250px"});
         // $("#div03div").animate({left: "250px"},2000);
        //   $("#div03div").animate({left: "250px"}, 2000, function() {
        //       alert("animate() 사용");
        //   });
        // 여러가지 옵션 동시에 적용하기
        // $("#div03div").animate({
        //     left: "250px",
        //     height: "400px",
        //     width: "400px",    
        //     backgroundColor: jQuery.Color("red")
        // });
                // $("#div03div").animate({left: "250px"});
        
        // $("#div03div").animate({left: "500px"});
        // $("#div03div").animate({width: "400px"});
        // $("#div03div").animate({height: "400px"});
        // $("#div03div").animate({backgroundColor: jQuery.Color("red")});
        
        var div = $("#div03div");
        // div.animate({left: "500px"});
        // div.animate({width: "400px"});
        // div.animate({height: "400px"});
        // div.animate({backgroundColor: jQuery.Color("red")});
        div.animate({left: "500px"}).animate({width: "400px"}).animate({height: "400px"})
        .animate({backgroundColor: jQuery.Color("red")});

    });

    // jquery 애미메이션 효과 멈추기
    // stop() : 애니메이션이나 제이쿼리 효과를 끝나기 전에 중기시킴
        // $(선택자).stop(전체멈춤, goToEnd)
        // stopAll : 기본값 false, 연속된 효과가 있을 경우 모두 중지
        // goToEnd : 기본값 false, 해당 효과의 끝으로 이동
        // 애니메이션 효과를 여러개 사용했을 경우 stop() 기본형을 사용 시 현재 동작중인 애니메이션 효과만
        // 중시지킴
        // 나머지 애니메이션이 바로 자동으로 시작됨
        


    $("#div04btn1").on("click", function() {
        $("#div04panel").stop();
    });
    
    $("#div04btn2").on("click", function() {
        $("#div04div1").stop();
    });
    $("#div04btn3").on("click", function() {
        $("#div04div2").stop();
    });

     $("#div04flip").on("click", function() {
        $("#div04panel").slideDown(5000);
    });

    $("#div04div1").on("click", function() {
        $("#div04div1").fadeOut(5000);
    });

    $("#div04div2").on("click", function() {
        $("#div04div2").animate({left: "500px"}, 5000);
    });

    $("#div04btn4").on("click", function() {
        // $("#div04div3").stop(); 기본형
        $("#div04div3").stop(false, true);
        // stopAll : false, goToEnd : true 애니메이션 효과의 끝부분으로 이동함
        // stopAll : true, goToEnd : false : 애니메이션이 여러개 있을 경우 모두 정지
    })

    $("#div04div3").on("click", function() {
        // $("#div04div3").animate({left: "500px"}, 5000);
        var div = $("#div04div3");
        div.animate({left: "500px"}, 4000);
        div.animate({height: "400px"}, 5000);
    });

    // 제이쿼리 콜백함수 
    // 제이쿼리 함수를 사용 시 해당 함수가 완전히 실행 완료가 된 후 자동으로 호출되는 함수

    $("#div05btn1").on("click", function() {
        $("#div05 > h3").hide("slow");
        alert("콜백함수 미사용 ")
    });

    $("#div05btn2").on("click", function() {
        $("#div05 > h3").hide("slow", function() {
            alert("콜백함수 사용");
        });
    });

    // 제이쿼리 체인
    // 제이쿼리 함수 사용 시 여러개의 함수를 한번에 연ㄱㄹ해서 입력하는 방식
    // 제이쿼리 체인 기능을 사용 시 선택자를 통해서 2번이사 같은 html요소를 찾을 필요가 없음
    // $(선택자).함수1().함수2().함수3()....

    $("#div06btn").on("click", function(){
    //     $("#div06 > h3").css("color", "red").slideUp(2000).slideDown(2000).fadeOut(2000).fadeIn(2000);
    // });
    $("#div06 > h3").css("color", "red")
        .slideUp(2000)
        .slideDown(2000)
        .fadeOut(2000).
        fadeIn(2000);
    });



});     


    