window.addEventListener('load', function() {
    var focus = document.querySelector('.focus');
    var ul = focus.querySelector('ul');
    var ol = document.querySelector('ol');
    var lis = ul.querySelectorAll('li');
    var arr_r = focus.querySelector('.arr_r');
    var arr_l = focus.querySelector('.arr_l');

    // 1、鼠标经过显示隐藏按钮
    focus.addEventListener('mouseover', function() {
        arr_r.style.display = 'block';
        arr_l.style.display = 'block';
        clearInterval(timer);
        timer = null;
    });

    focus.addEventListener('mouseout', function() {
            arr_r.style.display = 'none';
            arr_l.style.display = 'none';
            timer = setInterval(function() {
                arr_r.click();
            }, 2000);
        })
        // 2、小圆圈数量
    for (var i = 0; i < lis.length; i++) {
        var ol_li = document.createElement('li');
        ol.appendChild(ol_li);
        ol_li.setAttribute('index', i)
            // console.log(ol_li.getAttribute('index'));

    };
    var circle = ol.querySelectorAll('li');
    // 3、点击效果效果，排他法


    for (var i = 0; i < circle.length; i++) {
        circle[i].addEventListener('click', function() {

            for (var i = 0; i < circle.length; i++) {
                circle[i].style.backgroundColor = '#fff';
            }
            this.style.backgroundColor = 'red';
            // 4、根据小圆圈索引号控制图片移动距离
            var index = this.getAttribute('index')
            animate(ul, -focus.offsetWidth * index);
            num = cc = index;
        })
    };

    circle[0].style.backgroundColor = 'red';
    // 5 \点击右箭头移动图片
    var clone = lis[0].cloneNode(true)
    ul.appendChild(clone);
    var num = 0;
    // 6\\小圆点跟右侧按钮运动
    var cc = 0;
    var flag = true;

    arr_r.addEventListener('click', function() {
        if (flag) {
            flag = false;
            if (num == lis.length) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * focus.offsetWidth, function() {
                flag = true;
            });
            cc++;
            // 如果cc==4,说明走到最后克隆的那张图片了,让他回到0值就可以了
            if (cc == 4) {
                cc = 0;
            }
            circle_change();
        }
    });

    // 7.左侧按钮的做法
    arr_l.addEventListener('click', function() {
        if (flag) {
            flag = false;
            if (num == 0) {
                num = lis.length;
                ul.style.left = -num * focus.offsetWidth + 'px';

            }
            num--;
            animate(ul, -num * focus.offsetWidth, function() {
                flag = true;
            });
            cc--;
            // 如果cc==4,说明走到最后克隆的那张图片了,让他回到0值就可以了
            /* if (cc < 0) {
                cc = lis.length - 1;
            } */
            cc = cc < 0 ? lis.length - 1 : cc;
            circle_change();
        }
    });

    function circle_change() {
        for (var i = 0; i < circle.length; i++) {
            circle[i].style.backgroundColor = '#fff';
        }
        circle[cc].style.backgroundColor = 'red';
    };


    // 自动播放功能
    var timer = setInterval(function() {
        arr_r.click();
    }, 2000);
    alert(11);
});