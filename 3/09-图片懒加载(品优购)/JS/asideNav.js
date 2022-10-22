$(function() {

    // 当我们点击了小li 此时不需要执行 页面滚动事件里面的li 的背景选择 添加current
    // 节流阀(互斥锁)
    // 1、侧边显示与隐藏

    var flag = true;
    toggletool();

    // 封装电梯导航函数
    function toggletool() {
        if ($(document).scrollTop() >= $(".recom").offset().top) {
            // 滚动到今日推荐recom
            $(".side_nav").fadeIn();
        } else {
            $(".side_nav").fadeOut();
        };
    }

    // 3、 页面滚动到某个区域时，左侧电梯导航li添加和删除相应类名
    $(window).scroll(function() {
        toggletool();
        $(".floor .width").each(function(i, ele) {
            if ($(document).scrollTop() >= $(ele).offset().top) {
                // console.log(i);
                if (flag) {
                    $(".side_nav li").eq(i).addClass("cureent").siblings().removeClass();
                }
            }
        })
    });

    // 2、给侧边栏li添加点击事件，是页面滚动到指定位置
    $(".side_nav li").click(function() {
        // console.log($(this).index());
        // 每次点击小li 就需要计算出页面要去往的位置
        // 选出对应索引号的内容区的盒子 计算出它的offset().top
        flag = false;
        // 右侧大盒子的当前高度
        var currentTop = $(".floor .width").eq($(this).index()).offset().top;
        $("body,html").stop().animate({
            scrollTop: currentTop
        }, function() {
            flag = true;
        });
        $(this).addClass("current").siblings().removeClass();
    })
});