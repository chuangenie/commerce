/**
 * Created by 97865 on 2018/10/21.
 */
$(function () {
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick ����ϵ����ϵ��Խ�󣬹����ٶ�Խ������������ԽС��Ĭ��ֵ0.0006
    });

    $.ajax({
        url: "/category/queryTopCategory",
        type: "get",
        success: function(response){
            console.log(response);
        }
    })


























})