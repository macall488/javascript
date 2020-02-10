$(document).ready(function() {
    var prependListcount = 0;
    var appendListCount = 0;
    
    $("#btn01").on("click", function() {
        var text = "<li> "+ $("#input01").val()  +" </li>";
        $("#ul01").append(text);
        $("#input01").val(""); // 기존에 입력된 input 태그의 calue 값으 모두 삭제
        $("#input01").focus(); // 버튼에 주어진포커스르 textbox로 이동
       
    });

    $("#Btn01").on("click", function(){
        $("#div02 > p").addClass("fontSize");
    });

    $("#Btn02").on("click", function(){
        $("#div02 > p").addClass("fontColor")
    });

    $("#Btn03").on("click", function(){
        $("#div02 > p").addClass("fontWeight");
    });

    $("#Btn04").on("click", function(){
        $("#div02 > p").removeClass("fontSize", "fontColor", "fontWeight");
        $("#div02 > p").removeClass(); //적용된 모든 class 삭제
      
    });
});