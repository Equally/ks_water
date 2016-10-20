window.onload=function(){

//获取页面元素
    var cplbt = document.getElementById("cp-lbt");
    var cptop = cplbt.children[0];
    var ul = cptop.children[0];
    var cpmin = cplbt.children[1];
    var ol = cpmin.children[0];
    //获取ul中的所有图片
    var lisUl = ul.children;
    //获取screen的宽度，这个宽度等于图片宽
    var imgWidth = cptop.offsetWidth;
    //设置定时器
    var timer = null;

    //--------------------------点击按钮变色和移动ul效果-------------------
    //设置第一个按钮默认选中效果
    var lisOl = ol.children;
    lisOl[0].className = "current";
    //鼠标移入移出实现箭头出现与隐藏
    cptop.onmouseover=function(){
        //鼠标移入要关闭定时器，方便用户操作
        clearInterval(timer);
    };
    cptop.onmouseout=function(){
        //鼠标离开后设置定时器一定要和timer相同，
        // 要不然会产生新的定时器加到之前定时器，没法清除
        timer=setInterval(play,2000);
    };

    //给小图片设置点击按钮变色
    for (var i = 0; i < lisOl.length; i++) {
        //给每个按钮设置自定义属性，记录索引值
        lisOl[i].index = i;
        lisOl[i].onmouseout=function(){
            //鼠标离开后设置定时器一定要和timer相同，
            // 要不然会产生新的定时器加到之前定时器，没法清除
            timer=setInterval(play,2000);
        };

        //给每个小图片设置点击事件
        lisOl[i].onclick = function () {
            //判断ul当前的left值，如果当前显示的是假的第一张，我们需要让ul抽回到真的第一张，防止造成滚动
            if (ul.offsetLeft == -(ul.offsetWidth - imgWidth)) {
                //让图片抽回到第一张
                ul.style.left = 0;
            }
            //排他，清除所有人的类名，设置自己
            for (var j = 0; j < lisOl.length; j++) {
                lisOl[j].className = "";
            }
            this.className = "current";
            //让ul运动
            var target = -this.index * imgWidth;
            animate(ul, target);

            //每一次点击小图片的时候，不仅要做上面的事情，还需要同步pic的值
            pic = this.index;
        };
        lisOl[i].onmouseover = function () {
            clearInterval(timer);
            //判断ul当前的left值，如果当前显示的是假的第一张，我们需要让ul抽回到真的第一张，防止造成滚动
            if (ul.offsetLeft == -(ul.offsetWidth - imgWidth)) {
                //让图片抽回到第一张
                ul.style.left = 0;
            }
            //排他，清除所有人的类名，设置自己
            for (var j = 0; j < lisOl.length; j++) {
                lisOl[j].className = "";
            }
            this.className = "current";
            //让ul运动
            var target = -this.index * imgWidth;
            animate(ul, target);

            //每一次点击小图片的时候，不仅要做上面的事情，还需要同步pic的值
            pic = this.index;
        };

    }

    //克隆第一张图片，放到后面，当作假的第一张
    var weiFirstPic = lisUl[0].cloneNode(true);
    ul.appendChild(weiFirstPic);

    var pic = 0;

//    //-----------------------自动播放部分-----------------------
    //设置自动播放
    timer = setInterval(play, 2000);

    function play() {
        //当点击的时候，发现pic已经是lisUl.length-1了，这会儿需要进行抽回
        if (pic == lisUl.length - 1) {
            ul.style.left = 0 + "px";
            pic = 0;
        }
        pic++;
        //让ul滚动到指定位置
        var target = -pic * imgWidth;
        animate(ul, target);


        //在设置点亮之前进行排他
        for (var i = 0; i < lisOl.length; i++) {
            lisOl[i].className = "";
        }
        //如果当前滚到的是假的第一张，需要让lisOl中的第一个按钮点亮
        if (pic == lisUl.length - 1) {
            lisOl[0].className = "current";
        } else {
            //让对应按钮显示，我们发现，需要点亮的按钮的索引跟pic的值相同
            lisOl[pic].className = "current";
        }
    }



    //用于让某个东西移动到某个位置
    function animate(tag,target){
        clearInterval(tag.timer);
        tag.timer=setInterval(function(){
            var leader=tag.offsetLeft;
            var step=(target-leader)/10;
            step = step>0?Math.ceil(step):Math.floor(step);
            leader=leader+step;
            tag.style.left=leader+"px";
            if(leader==target){
                clearInterval(tag.timer);
            }
        },17);
    };


}
