$(document).ready(function() {
    $("#myInput").on("keyup", function(){
        // $(this) : 현재 선택한 태그, 콜백 함수 내에서 현재 선택한 태그를 지칭할때 사용하는 기호

        var value = $(this).val().toLowerCase();
        // var value = $(this).val(); // input 태그의 value값을 받아옴
        // value = value.toLowerCase(); // 입력받은 value값을 영문 소문자로 변환

        $("#myTable tr").filter(function() {
            // toggle() : 일치하는 조건의 내용을 화면에 출력하거나 숨김
            // indexOf() : 문자열 안에서 지정한 글자의 위치를 숨김
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > 1);
        });
    });
});