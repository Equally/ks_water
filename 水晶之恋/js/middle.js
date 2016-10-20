/**
 * Created by lu on 2016/7/6.
 */
/*移动函数  新版   开始*/

function animate(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;//true表示可以清理
        for (var k in json) {
            //k:v
            //k:json[k]
            //属性名:属性目标值
            if (k == "opacity") {
                var leader = getStyle(obj, k) * 100;
                //虽然getStyle获取到的是字符串类型 但是参与运算后会自动转换
                var target = json[k] * 100;
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                obj.style[k] = (leader + step) / 100;
            } else if (k == "zIndex") {
                obj.style[k] = json[k];
            } else {
                var leader = parseInt(getStyle(obj, k)) || 0;
                var target = json[k];
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                obj.style[k] = leader + step + "px";
            }
            if (leader != target) {
                flag = false;//告诉标记 我这个值还没达到不要清理
            }

        }
        //遍历完成之后再检查
        if (flag) {
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }
        }
    }, 15)
}

function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return window.getComputedStyle(obj, null)[attr];
    }
}


//盒子一特效 开始
//function heziY() {
//    var screen = document.getElementById("screen");
//    var ul = document.getElementById("zsl-0")
//    var timer = null;
//     timer  = setInterval(function () {
//        //leader = leader +step;
//        var leader = ul.offsetLeft;
//        var step = -100;
//        leader = leader + step;
//        if (leader > -(ul.offsetWidth - ul.children[0].offsetWidth)) {
//
//            ul.style.left = leader + "px";
//        } else {
//            //01 ul.style.left = step + "px";
//            ul.style.left = 0 + "px";
//        }
//    }, 1000);
//}
//盒子一特效 结束


//盒子二特效 开始
function heziR() {
    $(document).ready(function () {
        //找人，找li
        $(".zsl2 li").mouseenter(function () {
            //设置鼠标移入事件opacity是1，其他的为0.4
            $(this).css("opacity", 1).siblings().css("opacity", 0.4);
        });
        //设置盒子.wrap的鼠标移出事件，所有盒子点亮
        $(".zsl2").mouseleave(function () {
            $(this).find("li").css("opacity", 1);
        });
    });


}
//盒子二特效 结束


