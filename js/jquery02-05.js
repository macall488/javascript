$(document).ready(function() {
    // 제이쿼리를 이용하여 html 태그의 크기 설정 및 반환
    // width() : html 태그의 컨텐츠 영역의 너비
    // height() : html 태그의 컨텐츠 영역의 높이
    // innerWidth() : html 태그의 padding 영영의 높이 
    // innerHeight() : html 태그의 padding 영역까지의 높이 
    // outerWidth() : html  태그의 border 영역까지의 너비
    // ouerHeight() :  html 태그의 border 영역까지의 높이
    // outerWidth(true) : html  태그의 border 영역까지의 너비
    // ouerHeight(true) :  html 태그의 border 영역까지의 높이

    $("#div01Btn1").on("click", function() {
        var text = "";
        text += "div의 너비 : " + $("#div01Div1").width() + "<br>";
        text += "div의 높이 : " + $("#div01Div1").height();
        $("#div01Div1").html(text); //html 태그를 번역해서 사용 
        // $("#div01Div1").html(text); 태그를 문자로 인식
    });


});