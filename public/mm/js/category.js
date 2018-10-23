/**
 * Created by 97865 on 2018/10/21.
 */
$(function () {
    // 初始化滚动效果
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
    // 添加移动端点击事件
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