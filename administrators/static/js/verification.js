function createCode() {
    var code = "";
    var codeLength=5;
    var codeChars = new Array(0,1,2,3,4,5,6,7,8,9,
        'a','b','c','d','e','f','g',
        'h','i','j','k','l','m','n',
        'o','p','q','r','s','t','u',
        'v','w','x','y','z',
        'A','B','C','D','E','F','G',
        'H','I','J','K','L','M','N',
        'O','P','Q','R','S','T','U',
        'V','W','X','Y','Z' );
    for (var i= 0; i < codeLength ;i++){
        var charNum = Math.floor(Math.random() * 52);
        code += codeChars[charNum];
    }
    return code;
}

$(function () {
   $('#codeE').text(createCode);
   $('#aChangeCode').click(function () {
       $('#codeE').text(createCode);
   });
});


/**
 * 判断输入框是否为空函数
 * @param {Object}val输入框ID值
 * @param {Object}tip输入框为空的提示信息
 * @returns {boolean}
 */
function checkNull(val ,tip) {
    var uName = $(val).val();
    if(uName.length == 0){
        $(val).tooltip({title :tip,placement:'auto'});
        $(val).tooltip('show');
        return false;
    }else{
        $(val).tooltip({title:'',placement:'auto'});
        return false;
    }
}

/**
 * 判断验证码输入框输入值与动态生成验证码标签内容是否一致
 */
function matchCode() {
    var buildCode = $('#codeE').text();
    var inputCode = $('txtCode').val();
    if(buildCode!=inputCode){
        $('#txtCode').tooltip({title:'验证码输入不正确',placement:'auto'});
        $('#txtCode').tooltip('show');
        return false;
    }else {
        $('#txtCode').tooltip({title:'',placement:'auto'});
        return true;
    }
}

/**
 * 实现表单验证
 */
$(function () {
    $('#frmLogin').submit(function () {//点击用户登录按钮进行表单验证
        checkNull('#txtUser','用户名不能为空！');
        checkNull('txtPwd','密码不能为空！');
        matchCode();
    });
    $('#txtUser').blur(function () { //焦点离开用户名输入框验证用户名是否为空
        checkNull('#txtUser','用户名不能为空！');
    });
    $('#txtPwd').blur(function () { //焦点离开密码框验证密码是否为空
        checkNull('#txtPwd','密码不能为空!');
    });
    $('#txtCode').blur(matchCode);  //焦点离开验证码输入框检查验证码是否一致
})