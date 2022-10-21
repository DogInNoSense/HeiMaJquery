window.onload = function() {
    var reg_name = /^[\u4e00-\u9fa5]{2,8}$/;
    var uname = document.querySelector('#uname');

    var reg_tel = /^1[3|4|5|7|8]\d{9}$/;
    var tel = document.querySelector('#tel');

    var reg_massege = /^\d{6}$/;
    var massege = document.querySelector('#massege');

    var reg_code = /^[A-Z]\w{6,16}$/;
    var code = document.querySelector('#code')

    var surepassword = document.querySelector('#surepassword');
    inputcheck(uname, reg_name);
    inputcheck(tel, reg_tel);
    inputcheck(massege, reg_massege);
    inputcheck(code, reg_code);

    function inputcheck(ele, reg) {
        ele.onblur = function() {
            if (this.value.length > 0) {
                if (reg.test(this.value)) {
                    this.nextElementSibling.className = 'right';
                    this.nextElementSibling.innerHTML = '<i class="right_font"></i>恭喜您输入正确!';
                } else {
                    this.nextElementSibling.className = 'wrong';
                    this.nextElementSibling.innerHTML = '<i class="wrong_font"></i>输入有误，请重新输入';
                }
            } else {
                this.nextElementSibling.style.display = 'none';
            }

        }
    }
    surepassword.onblur = function() {
        if (this.value == code.value) {
            this.nextElementSibling.className = 'right';
            this.nextElementSibling.innerHTML = '<i class="right_font"></i>恭喜您输入正确!';
        } else {
            this.nextElementSibling.className = 'wrong';
            this.nextElementSibling.innerHTML = '<i class="wrong_font"></i>你输入的密码不匹配';
        }
    }
}