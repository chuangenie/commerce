/**
 * Created by 97865 on 2018/10/21.
 */
$(function(){

    $('#login-btn').on('click', function(){

        var username = $.trim($("[name='username']").val());
        var password = $.trim($("[name='password']").val());

        if(!username){
            mui.toast("�������û���");
            return;
        }

        if(!password){
            mui.toast("����������");
            return;
        }

        $.ajax({
            url: '/user/login',
            type: 'post',
            data: {
                username: username,
                password: password
            },
            beforeSend: function(){
                $('#login-btn').html("���ڵ�¼...");
            },
            success: function(res){

                mui.toast("��¼�ɹ�");

                $('#login-btn').html("��¼");

                setTimeout(function(){
                    location.href = "user.html";
                }, 2000);
            }
        })

    });

});