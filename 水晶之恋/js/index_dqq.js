/**
 * Created by dqq on 2016/7/6.
 */

$(function () {


    $(".dqq_kpds_body_imgs>div").mouseenter(function () {
        $(this).children("div").stop().animate({
            "bottom": "70px"
        }, 500);
    });
    $(".middle_imgs").mouseleave(function () {
        var share = $(".dqq_kpds_body_imgs .bottom_word");
        share.stop().animate({"bottom": 0 + "px"}, 500);
    });

});



