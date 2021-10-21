$(document).ready(function () {
    $(function () {
        $("#top").children("img").eq(1).hide()
        $(window).scroll(function () {
            if ($(window).scrollTop() > 200) {
                $("#top").css("bottom", "50px");
            } else {
                $("#top").css("bottom", "-100px");
            }
        });
        $("#top").hover(function(){
            $(this).children("img").eq(0).css("display","none").siblings("img").fadeIn(300)
        },function(){
            $(this).children("img").eq(1).css("display","none").siblings("img").fadeIn(300)
        })
        $("#top").click(function () {
            $('body,html').animate({
                    scrollTop: 0
                },
                500);
            return false;
        });
    });
});