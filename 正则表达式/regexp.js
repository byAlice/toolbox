// 正则表达式对象RegExp提供了两个方法：test()和exec()方法；
// test(string)功能为:测试字符串中是否包含了匹配该正则表达式的子串，是就返回true,否就是false
// exec(string)功能为：在字符串string中进行匹配搜索，并将结果保存在一个数组中返回;如果没有找到匹配的子串，那么返回null

/*验证手机号*/
function checkMobile(tel) {
    var reg = /(^1[3|4|5|7|8][0-9]{9}$)/;
    if (reg.test(tel)) {
        return true;
    } else {
        return false;
    };
}
/*验证固定电话*/
function checkTel(tel) {
    var reg = /^((\d{3,4}\-)|)\d{7,8}(|([-\u8f6c]{1}\d{1,5}))$/;
    if (reg.test(tel)) {
        return true;
    } else {
        return false;
    };
}
/*验证邮箱*/
function checkEmail(str) {
    var reg = /^([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    if (reg.test(str)) {
        return true;
    } else {
        return false;
    }
}
/*验证银行卡号*/
function checkBankcard(bankcard) {
    var reg = /^[62](\d{15}|\d{18})$/;
    if (reg.test(bankcard)) {
        return true;
    } else {
        return false;
    }
}
/*验证传真号码*/
function checkFax(fax) {
    var reg = /^(\d)[ ]?([-]?((\d)|[ ]))+$/;
    if (reg.test(fax)) {
        return true;
    } else {
        return false;
    }
}
/*验证金额是否输入正确*/
function checkMoney(money) {
    var reg = /^[1-9][0-9]*$/;
    if (reg.test(money)) {
        return true;
    } else {
        return false;
    };
}
/*验证邮政编码是否输入正确*/
function checkPostcode(postcode) {
    var reg = /[1-9]\d{5}(?!\d)/;
    if (reg.test(postcode)) {
        return true;
    } else {
        return false;
    };
}