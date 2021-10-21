$(function(){
    $(".ul>a").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        $(".ProductShow").eq($(this).index()).addClass("active").siblings().removeClass("active")
    })
    $(".menu_bar>a").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        if($(this).index()==1){
            $(".travel_typeTab>.active").css("display","none")
            $(".productBoxUl_box").css("display","none")
            $(".softwave_box").css("display","block")
            $(".travel_typeTab>.alpha").css("display","block")
        }else{
            $(".travel_typeTab>.alpha").css("display","none")
            $(".softwave_box").css("display","none")
            $(".travel_typeTab>.active").css("display","block")
            $(".productBoxUl_box").css("display","block")
        }
    })

    $.getJSON("../js/json/rjlcp.json",function(data){
        var $ul=$("<ul></ul>");
        $.each(data,function(k,j){
            var $li=$("<li>"+j.h3+"</li>");
            $ul.append($li);
        })
        $(".alpha").append($ul);
        $(".alpha>ul>li").eq(0).addClass("active");
        $(".alpha ul li").click(function(){
            $(this).addClass("active").siblings().removeClass("active");
            $(".softwave_box>ul>li").eq($(this).index()).css("display","block").siblings().css("display","none")
        })
    }
    );
    $.getJSON("../js/json/rjlcp.json",function(data){ 
        var $ul=$("<ul></ul>");
        $.each(data,function(k,j){
            var $li=$("<li><div class='title'>"+j.h3+"</div><div class='content'><p>"+j.p+"</p></div></li>");
            $ul.append($li);
        })
        $(".softwave_box").append($ul);
        $(".softwave_box>ul>li").eq(0).addClass("active");
    }
    );

   
})