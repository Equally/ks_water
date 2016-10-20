/**
 * Created by lenovo on 2016/7/6.
 */

    $(function () {
        //$(".sf-ul .sf-one").css("marginTop",80+"px");
        $(".sf-ul .sf-1").css("marginTop",80+"px");

        $(".sf-one").show();

        $(".sf-li").mouseenter(function () {
            $(this).children().children().children().next().slideDown().parent().parent().parent().siblings().children().children().children().next().hide();
            //$(this).parent().parent().parent().siblings().children().children().children().next().slideUp();


        });
       $(".sf-one").mouseenter(function () {
           $(this).children().children().children().next().slideDown().parent().parent().parent().siblings().children().children().children().next().hide();
       })

    });


