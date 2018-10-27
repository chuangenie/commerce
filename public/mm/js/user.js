/**
 * Created by 97865 on 2018/10/21.
 */
// �����û���Ϣ
var userInfo = null;

$.ajax({
    url: '/user/queryUserMessage',
    type: 'get',
    // ͬ��
    async: false,
    success: function(res){
        console.log(res);

        // �û�û�е�¼
        if(res.error && res.error == 400){

            location.href = "login.html";

        }

        userInfo = res;

    }
});

$(function(){

    /**
     * �˳���¼
     * 1.��ȡ���˳���¼��ť����ӵ���¼�
     * 2.�����˳���¼�ӿ�ʵ�� �˳���¼
     * 3.����˳��ɹ� ��ת����ҳ
     */

    $('#logout').on('click', function(){

        $.ajax({
            url: '/user/logout',
            type: 'get',
            success: function(res){

                if(res.success){
                    mui.toast("退出登录成功");
                    setTimeout(function(){
                        location.href = "index.html";
                    },2000)
                }

            }
        })

    });


    /**
     * ��ȡ�û���Ϣ ����Ҫ�����û�δ��¼������
     */

    // ƴ��ģ��
    var html = template('userTpl', userInfo);

    // չʾ�û���Ϣ
    $('#userInfoBox').html(html);

});