/**
 * Created by Administrator on 2016/7/6.
 */
//登录框验证
var email=document.getElementById("box-tel");
console.log(email.value);
var inpTel = /^(13[0-9]|14[57]|15[0-9]|17[078]|18[0-9])\d{8}$/;
var inpEmail=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
var password=document.getElementById("pw");
var swlspan=document.getElementById("swl-span");
var swlbtn=document.getElementById("box-dl");


check(email,inpTel,inpEmail);
function check(email, regEx1,regEx2) {
    email.onblur = function () {
        if (regEx1.test(this.value)||regEx2.test(this.value)) {
            this.nextElementSibling.innerHTML = "输入正确";
        } else {
            this.nextElementSibling.innerHTML = "输入错误";
        }

    }
    email.onfocus=function(){
        if(this.value===""){
            this.nextElementSibling.innerHTML="";
        }
    }
}

//password.onfocus=function(){
//  if(this.value==""){
//      swlspan.value="输入错误";
//  }
//};
//淡化效果
var main = document.getElementById("dl-banner");
var ul = main.children[0];
var lis = ul.children;

var flag = true;
setInterval(function () {
    if (flag) {
        flag = false;
        animate(lis[1], {"opacity": 0.5}, function () {
            lis[0].style.display = "block";
            lis[1].style.display = "none"
        });
    } else {
        flag = true;
        animate(lis[0], {"opacity": 0.3}, function () {
            lis[1].style.display = "block";
            animate(lis[1], {"opacity": 1});
            lis[0].style.display = "none";
            animate(lis[0], {"opacity": 1});
        });
    }

}, 2500);

function animate(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;//定义一个数来记录每一项的完成情况
        for (var k in json) {
            if (k === "opacity") {
                //透明度没有单位，是0-1之间的小数，所以不用使用parseInt和0
                //透明度的值比较小，为了达到效果，我们先将他的值放大100倍，之后再变回原来的值
                var leader = getStyle(obj, k) * 100;
                var target = json[k] * 100;
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                //判断有问题，只要有一个达到了就清理定时器
                leader = leader + step;
                obj.style[k] = leader / 100;//注意透明度没有单位
            } else if (k === "zIndex") {
                obj.style.zIndex = json[k];
            } else {
                var leader = getStyle(obj, k) || 0;
                var target = json[k];
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                //判断有问题，只要有一个达到了就清理定时器
                leader = leader + step;
                obj.style[k] = leader + "px";
            }

            if (leader != target) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }
        }

    }, 15);
}

//获取计算后的样式属性
function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return window.getComputedStyle(obj, null)[attr];
    }


};

//登录跳转
swlbtn.onclick=function(){
    if(email.value=="18611134048" && password.value=="000000"){
        window.open("index.html");
    }

};



