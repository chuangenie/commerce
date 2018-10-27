/**
 * Created by 97865 on 2018/10/27.
 */

$(function () {
    $('#modify-btn').on('tap', function(){

        // 原密码
        var originPass = $.trim($("[name='originPass']").val());
        // 新密码
        var newPass = $.trim($("[name='newPass']").val());
        // 确认新密码
        var confirmNewPass = $.trim($("[name='confirmNewPass']").val());
        // 认证码
        var vCode = $.trim($("[name='vCode']").val());

        if(!originPass){

            mui.toast('请输入原密码');

            return;

        }

        if(newPass != confirmNewPass){

            mui.toast('两次输入的密码不一致');

            return;

        }

        // 发送修改密码请求
        $.ajax({
            url: '/user/updatePassword',
            type: 'post',
            data: {
                oldPassword: originPass,
                newPassword: newPass,
                vCode: vCode
            },
            success: function(res){

                if(res.success){

                    mui.toast("修改密码成功");

                    setTimeout(function(){
                        location.href = "login.html";
                    },2000)

                }

            }
        })

    });


    // 获取验证码
    $('#getCode').on('tap', function(){

        $.ajax({
            url: '/user/vCodeForUpdatePassword',
            type: 'get',
            success: function(res){
                // 将认证码显示在控制台中
                console.log(res.vCode);
            }
        })

    });



})