$(document).ready(function() {
    function widthHeight();
    var text = "";
    text += "div의 너비 : " + $("#div01").width() + "<br>";
    text += "div의 높이 : " + $("#div01").height();

        return text;

    function innerWIdthHeigjt(text) {
        text += "<p>padding 까지의 너비 : " +$("#div01Div1").innerWidth() + "</p>";
        text += "<p>padding 까지의 높이 : " +$("#div01Div1").innerHeight() + "</p>";
    return text;

    $("#btn1").on("click", function(){
        var text = widthHeigth();

    });

    $("#btn3").on("click", function(){
        var text = widthHeigth();

        $("#div01Div1").html(text);
    }); 
    
});

