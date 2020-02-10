$(document).ready(function() {
    // 제이쿼리를이용하여 새로운 html 태글 추가 
    // append() : 선택한 html 요소의 가장 끝에 추가 
    // perpend() : 선택한 html 요소의 가장 앞에 추가 
    // after() : 선택한 html 요소의 바로 뒤에 추가 
    // before() : 선택한 html 요소의 바로 앞에 추가

    // 사용방법
    // $(선택자).append(추가할 내용) : 추가할 내용은 html 코드 사용 가능
    // $(선택자).perpend

    var prependTextCount = 0;
    var prependListCount = 0;
    var appendTextCount = 0;
    var appendListCount = 0;

    $("#div01Btn1").on("click", function() {
        var text = "<b>prepend "+ prependTextCount +" </b>";
        $("#div01p1").prepend(text);
        prependTextCount++;
    });

    $("#div01Btn2").on("click", function() {
        var text = "<b>before "+ appendTextCount +"</b>";
        $("#div01p1").append(text);
        appendTextCount++;
    });

    $("#div01Btn3").on("click", function() {
        var text = "<li>prepend item "+ prependListCount +"</li>";
        $("#div01ol1").prepend(text);
        prependListCount++;
    
    });

    $("#div01Btn4").on("click", function() {
        var text = "<li>append item "+ appendListCount +"</li>";
        $("#div01ol1").append(text);
        appendListCount++;
    });

    var beforeTextCount = 0;
    var afterTexCount = 0;

    $("#div01Btn5").on("clock", function() {
        var text = "<b> before " + beforeTextCount + "</b>";
        $("div01img1").before(text);
        beforeTextCount++;
    })

    $("#div01Btn6").on("clock", function() {
        var text = "<b> after " + afterTexCount + "</b>";
        $("div01img1").after(text);
        afterTexCount++;
    })

// 제이쿼리를 이용하여 html 요솔ㄹ 삭제하기 
// remove() : 선택한 요소 및 하위 요소를 모두 제거  
// empty() : 선택한 요소의 하위 요소를 제거 

    $("#div02Btn1").on("click", function() {
        $("#div02div1").remove();
    });

    $("#div02Btn2").on("click", function() {
        $("#div02div2").empty();
    });


});