$(function() {
    // 1.全选 全不选功能模块
    $('.checkall').change(function() {
        // console.log($(this).prop('checked'));
        $('.j-checkbox,.checkall').prop('checked', $(this).prop('checked'));
    });
    // 2.每次点击 小按钮的时候判断被选中的个数是不是等于3,等于3 把全选按钮选上,否则不选
    $('.j-checkbox').change(function() {
        //console.log($('.j-checkbox:checked').length);
        if ($('.j-checkbox:checked').length == $('.j-checkbox').length) {
            $('.checkall').prop('checked', true);
        } else {
            $('.checkall').prop('checked', false);
        }
    });
    // 3.增减商品数量模块,首先声明一个变量,当我们点击+号(increment),就让这个值++,然后赋值给文本框
    $('.increment').click(function() {
        var n = $(this).siblings('.itxt').val();
        n++;
        $(this).siblings('.itxt').val(n);
        // console.log(n);
        // 计算小计模块 
        var p = $(this).parent().parent().siblings('.p-price').html();
        p = p.substr(1); // 截取字符串
        // console.log(p);
        var price = (p * n).toFixed(2);
        $(this).parents('.p-num').siblings('.p-sum').html('￥' + price);
        getSum();
    });
    // 4.减号
    $('.decrement').click(function() {
        var n = $(this).siblings('.itxt').val();
        if (n >= 2) {
            n--;
        }
        $(this).siblings('.itxt').val(n);
        // console.log(n);
        // 计算小计模块 
        var p = $(this).parent().parent().siblings('.p-price').html();
        p = p.substr(1); // 截取字符串
        // console.log(p);
        var price = (p * n).toFixed(2);
        $(this).parents('.p-num').siblings('.p-sum').html('￥' + price);
        getSum();
    });

    // 4.用户修改文本框的值 计算小计模块
    $('.itxt').change(function() {
        // 先得到文本框里的值 乘以 当前商品的单价
        var n = $(this).val();
        // 当前商品的单价
        var p = $(this).parents('.p-num').siblings('.p-price').html();
        p = p.substr(1);
        $(this).parents('.p-num').siblings('.p-sum').html('￥' + (p * n).toFixed(2));
        getSum();
    });
    getSum();
    // 5.所有商品总计模块(封装成一个函数)
    function getSum() {
        var count = 0; // 总件数
        var money = 0; // 总价格
        $('.itxt').each(function(i, ele) {
            count += parseInt($(ele).val());
        });
        $('.amount-sum em').text(count);

        $('.p-sum').each(function(i, ele) {
            money += parseFloat($(ele).text().substr(1));
        })
        $('.price-sum em').text('￥' + money.toFixed(2));

    }


});