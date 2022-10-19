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
    })
});