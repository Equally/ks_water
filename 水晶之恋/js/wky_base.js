/**
 * Created by StyleYi on 2016/7/6.
 */
$(function () {
    //找到头部定位的右浮动盒子的ul,wky_hrul,添加滑入滑出效果
    $("#wky_hrul>li").mouseenter(function () {
        $(this).children("a").stop().animate({
            "top":"-72px"
        },300);
    })
    $("#wky_hrul>li").mouseleave(function () {
        $(this).children("a").stop().animate({
            "top":"0px"
        },150);
    });
    $(".wky_nav li").mouseenter(function () {
        $(this).addClass("wky_color");
        if($(".wky_nav li").eq(3).hasClass("wky_color")){
            $(".wky_nav li").eq(3).removeClass("wky_color");
            $(".wky_nav li").eq(3).siblings().removeClass("wky_color");
        }else{
            $(this).siblings().removeClass("wky_color");
        }

    });
    $(".wky_nav li").mouseleave(function () {
        $(this).removeClass("wky_color");
        //$(".wky_nav>ul>li").eq(0).addClass("wky_color").siblings().removeClass("wky_color");
    })
    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();
        var topHeight = $(".wky_nav").height();
        //console.log(topHeight);
        if(scrollTop > topHeight){
            $("#wky").addClass("wky_headerfixed");
            //fixed定位后navbar会脱离标准了，不占位置，所以要设置css样式
            //给mainPart添加marginTop值将位置顶开
            $(".wky_nav").css({"marginTop":$(".wky_box").height()+"px"})
        }else{
            $("#wky").removeClass("wky_headerfixed");
            $(".wky_nav").css({"marginTop":"0px"})

        }
    });

});
