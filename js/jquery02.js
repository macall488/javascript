$(document).ready(function() {



// html DOM 조작을 위한 jquery 함수
// text(): 선택한 html 요소의 텍스트 내용을 설정하거나 반환함 (html코드 제외 )
    // 사용법
    // $(선택자).text(); : 텍스트 내용 가져오기
    // $(선택자).text("입력할 텍스트"); : 텍스트 내용 설정하기
// html(): 선택한 html 요소의 내용을 설정하거나 반환함(html코드 포함)(html 코드 포함)
    // 사용법
    // $(선택자).html(); : 내용 가져오기
    // $(선택자).jtml("입력할 내용"); : 내용 설정하기
// val(): 선택한html 요소의 속성값을 설정하거나 반환함 (html요소가 value 속성을 가지고 있을 경우 value 속성값을 설정하거나 반환함 )
    // 사용법
    // $(선택자).val(); : value 속성값 가져오기
    // $(선택자).val("valu값")
// attr() : 선택한 html 요소의 속성을 설정하건나 반환함
    // 사용법
    // $(선택자).attr(속성명); : 속성값 가져오기
    // $(선택자).atter(속성명, 입력할 값); : 속성값 설정하기

    $("#div01Btn1").on("click", function() {
        alert("text : " + $("#div01Test").text());
    });

    $("#div01Btn2").on("click", function() {
        alert("html : " + $("#div01Test").html());
    });

    $("#div01Btn3").on("click", function() {
        alert("value : " + $("#div01Input").val());
    });

    $("#btn01Btn4").on("click", function() {
        alert("href : " + $("#div01Link").attr("href"));
    })
// ///////////////////////////////////////////////////////

    $("#div02Btn1").on("click", function() {
        $("#div02Test1").text("text()를 실행하여 변경된 텍스트");
    });
    
    $("#div02Btn2").on("click", function() {
        $("#div02Test2").html("html()를 <b>실행하여 변경된</b> html");
    });

    $("#div02Btn3").on("click", function() {
        $("#div02Test3").val("제이쿼리 3.4.1버전 사용");
    });

    $("#div02Btn4").on("click", function() {
        $("#div02Link").attr("href", "https://www.google.co.kr");
    });
// ////////////////////////////////////////////////////////////////////////////
    $("#h01btn1").on("click", function() {
        $("#link01").attr("href", "https://www.google.co.kr");
        $("#link01").text("구글 홈페이지");
      
    });

    $("#h01btn2").on("click", function() {
        $("#link02").attr("href", "https://www.daum.net");
        $("#link02").text("다음 홈페이지");
      
    });

    $("#h01btn3").on("click", function() {
        $("#link03").attr("href", "https://naver.com");
        $("#link03").text("네이버 홈페이지");
      
    });
    
    $("#input01btn").on("click", function(){
        var link01 = "http://";
        link01 = link01 + $("#input01").val();
        var link02 = $("#input02").val();
       
        $("#link04").attr("href", link01);
        $("#link04").text(link02);
    });


});