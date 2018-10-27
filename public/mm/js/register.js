/**
 * Created by 97865 on 2018/10/21.
 */
$(function(){

    /**
     * ע��
     * 1.��ע�ᰴť��ӵ���¼�
     * 2.��ȡ���û�ע�����Ϣ
     * 3.���û��������Ϣ����֤
     * 4.����ע��ӿ� ʵ��ע�Ṧ��
     * 5.������ʾ �����û��Ƿ�ע��ɹ�
     * 6.��ת����¼ҳ��
     */

    $('#register-btn').on('click', function(){

        var username = $('[name="username"]').val();
        var mobile = $('[name="mobile"]').val();
        var password = $('[name="password"]').val();
        var againPass = $('[name="againPass"]').val();
        var vCode = $('[name="vCode"]').val();

        if(!username){
            mui.toast("�������û���");
            return;
        }

        if(mobile.length < 11){
            mui.toast("������Ϸ����ֻ���");
            return;
        }

        if(password != againPass){
            mui.toast("两次输入的密码不一样");
            return;
        }

        $.ajax({
            url: '/user/register',
            type: 'post',
            data: {
                username: username,
                password: password,
                mobile: mobile,
                vCode: vCode
            },
            success: function(res){
                alert("注册成功");

                setTimeout(function(){
                    location.href = "login.html";
                }, 2000)
            }
        })



    });


    /**
     * ��ȡ��֤��
     * 1.����ȡ��֤�밴ť��ӵ���¼�
     * 2.���ýӿڻ�ȡ��֤��
     * 3.����֤�����������̨
     */

    $('#getCode').on('click', function(){

        $.ajax({
            url: '/user/vCode',
            type: 'get',
            success: function(res){
                console.log(res.vCode);
            }
        })

    });

})