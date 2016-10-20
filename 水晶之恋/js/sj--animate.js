/**
 * Created by lenovo on 2016/7/6.
 */

//获取元素
function huoqu(){

    var config = [

        {
            width: 450,
            top: 70,
            left: 80,
            opacity: 0.8,
            zIndex: 3
        },//1
        {
            width: 900,
            top: 120,
            left: 200,
            opacity: 1,
            zIndex: 4
        },//2
        {
            width: 450,
            top: 70,
            left: 700,
            opacity: 0.8,
            zIndex: 3
        },//3
        {
            width: 400,
            top: 20,
            left: 630,
            opacity: 0.2,
            zIndex: 2
        },//4
        {
            width: 400,
            top: 20,
            left: 170,
            opacity: 0.2,
            zIndex: 2
        }//0
    ];//其实就是一个配置单 规定了每张图片的大小位置层级透明度


    var wrap = document.getElementById("wrap");
    var slide = wrap.children[0];
    var ul = slide.children[0];
    var lis = ul.children;
    var arrow = document.getElementById("lzc-arrow");
    var arrLeft = document.getElementById("lzc-arrLeft");
    var arrRight =document.getElementById("lzc-arrRight");

//让图片自己找到位置


    for (var i = 0; i < lis.length; i++) {
        animate(lis[i],config[i]);
    }

    //        鼠标移入让箭头显示

    wrap.onmouseover = function () {
        animate(arrow, ({"opacity": 0.5}));
    }

    wrap.onmouseout = function () {
        animate(arrow, {"opacity": 0});
    }

    var flag = true;
    arrRight.onclick = function () {

        if (flag) {
            flag = false;
            config.push(config.shift());
            for (var i = 0; i < lis.length; i++) {
                animate(lis[i], config[i], function () {
                    flag = true;
                });

            }
        }

    };

    arrLeft.onclick = function () {

        if (flag) {
            flag = false;
            config.unshift(config.pop());
            for (var i = 0; i < lis.length; i++) {
                animate(lis[i], config[i], function () {
                    flag = true;
                });

            }
        }

    };

}







//动画效果函数
function getStyle(tag, attr) {
    if (tag.currentStyle) {
        return tag.currentStyle[attr];
    } else {
        return getComputedStyle(tag, null)[attr];
    }
}

function animate(tag, obj, fn) {
    clearInterval(tag.timer);
    tag.timer = setInterval(function () {
        var flag = true;
        for (var key in obj) {
            if (key == "opacity") {
                var leader = getStyle(tag, key) * 10 || 0;
                var target = obj[key] * 10;
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                tag.style[key] = leader / 10;

                if (target != leader) {
                    flag = false;
                }

            } else if (key == "zIndex") {
                tag.style[key] = obj[key];
            } else {
                var leader = parseInt(getStyle(tag, key)) || 0;
                var target = obj[key];
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                tag.style[key] = leader + "px";

                if (target != leader) {
                    flag = false;
                }
            }


        }
        if (flag) {
            clearInterval(tag.timer);
            if (fn) {
                fn();
            }
        }
    }, 17);
}

