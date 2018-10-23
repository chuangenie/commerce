/**
 * Created by 97865 on 2018/10/21.
 */
$(function () {
    // ��ʼ������Ч��
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick ����ϵ����ϵ��Խ�󣬹����ٶ�Խ������������ԽС��Ĭ��ֵ0.0006
    });
    // ����ƶ��˵���¼�
    mui('.my-footer').on('tap','a',function(){
        window.top.location.href=this.href;
    });

    $.ajax({
        url: '/category/queryTopCategory',
        type: 'get',
        success: function(response){
            var html = template('category-first',{result:response.rows});
            $('#links').html(html);
            if (response.rows) {
                $('#links').find('a').eq(0).addClass('mui-active');
                var id = response.rows[0].id;
                getSecond(id);
            }
        }
    });

    $('#links').on('click','a',function(){
        var id = $(this).data('id');
        $(this).addClass('mui-active').siblings().removeClass('mui-active');
        getSecond(id);
    })

    function getSecond(id) {
        $.ajax({
            url: '/category/querySecondCategory',
            type:'get',
            data: {
                id:id
            },
            success: function(response) {
                var html = template('category-second',{result:response.rows});
                $('.brand-list').html(html);
            }
        })
    }


























})