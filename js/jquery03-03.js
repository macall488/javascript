$(document).ready(function(){

// 제이쿼리를 이용한 트레버싱
// 조상태그 선택자 
// parent() : 지정한 html 태그의 한단계 위의 부모 태그 선택
// parents() : 저정한 html 태그의 모든 조상 태그를 선택 (html까지)
// parentsUntil() : 2개의 html 태그를 선택하고 2개의 태그 사이에 있는 조상 태그를 선택

    $("#div01 span").parent().css({
        "color" : "red",
        "border" : "3px solid red"
    
    });

    // $("#div02 span").parents().css({
    //     "color" : "red",
    //     "border" : "3px solid red"
    // });

    $("#div03 span").parentsUntil("#div03 > div").css({
        "color" : "red",
        "border" : "3px solid red"
    });

    // 후손 태그 선택
    // children() : 지정한 태그의 한단계 아래의 자손 태그들을 선택
        // 형제 선택자 사용 시 자손 태그 중에서 하나를 선택하는 것도 가능함
    // find() : 지정한 태그의 모든 후손 태그를 선택

    // $("#div04 > div").children().css({
    //     "color" : "red",
    //     "border" : "3px solid red"
    // });

    $("#div04 > div").children("p.first").css({
        "color" : "red",
        "border" : "3px dashed red"
    });


    // $("#div05 > div").find("span").css({
    //     "color" : "red",
    //     "border" : "3px solid red"
    // });

    // find()에 *을 사숑 시모든 후손 태그를 선택함
    $("#div05 > div").find("*").css({
        "color" : "red",
        "border" : "3px solid blue"
    });

    // 형제 태그 선택
    // siblings () : 지정한 태그의 모든 형제 태그를 선택 
    // next () : 지엏나 태그의 다음 형제 태그를 선택
    // nextAll() : 지정한 태그의 다음 모든 형제 태그를 선택
    // nextUntil() : 2개의 태그를 선택 후 2개의 태그 사이에 있는 모든 형제 태그를 선택
    // prev() : 지정한 태그의 이전 형태의 태그를 선택
    // prevAll() : 지저한 태그의 이전 모든 형제 태그를 선택
    // prevUntil() : 2개의 태그를 선택 후 2개의 태그 사이에 있는 모든 형제 태그를 선택

    // $("#div06 > div > h2").siblings().css({
    //     "color" : "red",
    //     "border" : "3px solid red"
    // });
    // siblings()의 매개변수로 선택자 사용 시 형제 태그들 중에서 매개변수로 지정한 태그만 선택 됨
    $("#div06 > div > h2").siblings("p").css({
        "color" : "red",
        "border" : "3px solid red"
    });

    $("#divH2").next().css({
        "color" : "red",
        "border" : "3px solid red"
    });

    $("#div08 > div > span").nextAll().css({
        "color" : "red",
        "border" : "3px solid red"
    });

    $("#div09 > div > h2").nextUntil("#div09 > div > h6").css({
        "color" : "red",
        "border" : "3px solid red"
    })

    $("#div10 > p").prev().css({
        "color" : "red",
        "border" : "3px solid red"
    })

    $("#div11 > p").prevAll().css({
        "color" : "red",
        "border" : "3px solid red"
    })

    $("#div12 > div > h6").prevUntil("#div12 > div > span").css({
        "color" : "red",
        "border" : "3px solid red"
    })


});