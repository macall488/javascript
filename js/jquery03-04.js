$(document).ready(function(){
// 제이쿼리를 이요한 트레버싱 (필터링)
// first() : 지정한 요소의 첫번쨰 요소를 선택
// last() : 지정한 요소의 마지막 요소를 선택
// eq() : 지정한 요소의 특정 색인 번호 번째의 요소를 선택
// filter() : 조건으로 입력한 요소를 선택
// not() : 조건으로 입력한 요소와 일치하지 않는 요소는 선택

    $("#div01 > div").first().css("background-color", "yellow");

    $("#div02 > div").last().css("background-color", "yellow");

    // eq() 사용 시 index 번호는 0부터 시작 
    $("#div03 > p").eq(1).css("background-color", "yellow")

    // 
    $("#div04 > p").filter(".intro").css("backgroud-color", "yellow");

    // not
    $("#div05 > p").not(".intro").css("background-color", "yellow");


});