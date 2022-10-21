window.addEventListener('load', function() {
    // 2020.09.11
    var focus = document.querySelector('.focus');
    var arr_r = document.querySelector('.arr_r');
    var arr_l = document.querySelector('.arr_l');
    var ul = focus.querySelector('ul');
    var lis = ul.querySelectorAll('li');
    var copyLi = lis[0].cloneNode();
    var ol = document.querySelector('ol');

    //生成导航小圆圈
    for (var i = 0; i < lis.length; i++) {
        var ol_li = document.createElement('li');

        ol.appendChild(ol_li);
    }
    //圆圈随图片变颜色
    function change(target) {
        for (var i = 0; i < circles.length; i++) {
            circles[i].style.backgroundColor = '';
        }
        target.style.backgroundColor = 'red';
    }

    var circles = ol.querySelectorAll('li');
    for (var i = 0; i < circles.length; i++) {
        circles[i].setAttribute('index', i);
        circles[i].onclick = function() {
            change(this)
            n = this.getAttribute('index');
            animate(ul, -n * focus.offsetWidth);
            num = n;
        }
    }
    //第一个原点默认选中
    circles[0].click();

    // 将ul中的第一张图片复制至ul的末尾，使循环图片时达到无缝往返的效果
    copyLi.innerHTML = ' <img src="upload/focus4.jpg" alt="">'
    ul.appendChild(copyLi, ul.lastChild)
        // 1、鼠标经过显示箭头按钮
    focus.addEventListener('mouseover', function() {
        arr_r.style.display = 'block';
        arr_l.style.display = 'block';
    });
    focus.addEventListener('mouseleave', function() {
        arr_r.style.display = 'none';
        arr_l.style.display = 'none';
    });
    // 2、鼠标点击左右箭头移动图片ul(整体移动);
    var num = 0;

    var flag = true;
    arr_r.addEventListener('click', function() {

        if (flag) {
            num++;
            flag = false;
        };
        if (num <= lis.length) {
            animate(ul, -num * focus.offsetWidth, function() {
                flag = true;
            });
            if (num == lis.length) {
                change(circles[0])
                return;
            }
        } else {
            ul.style.left = 0;
            num = 1;
            animate(ul, -num * focus.offsetWidth, function() {
                flag = true;
            });
        }
        change(circles[num])
    });
    arr_l.addEventListener('click', function() {
        if (flag) {
            num--;
            flag = false;
        }
        if (num < 0) {
            ul.style.left = -(lis.length) * focus.offsetWidth + 'px';
            num = lis.length - 1;
            animate(ul, -num * focus.offsetWidth, function() {
                flag = true;
            });

        } else {
            animate(ul, -num * focus.offsetWidth, function() {
                flag = true;
            });
        };
        change(circles[num])
    })

    //自动播放
    setInterval(function() {
        arr_r.click();
    }, 1500)
})