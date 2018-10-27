/**
 * Created by 97865 on 2018/10/26.
 */

$(function () {

    // 储存收货地址
    var address = null;

    $.ajax({
        url: '/address/queryAddress',
        type: 'get',
        success:function(res){
            //console.log(res);
            address = res;
            var html = template("addressTpl",{result:res});
            $('#address-box').html(html);
        }
    })

    // 删除功能
    $('#address-box').on('tap','.delete-btn', function () {
        var id = $(this).data('id');
        var li = this.parentNode.parentNode;
        mui.confirm('确定要删除吗',function(msg){
            //console.log(msg);
            if (msg.index) {
                $.ajax({
                    url: '/address/deleteAddress',
                    type: 'post',
                    data: {
                        id: id
                    },
                    success: function(res){
                        console.log(res);
                        if (res.success) {
                            location.reload();
                        }
                    }

                })
            } else {
                mui.swipeoutClose(li);
            }
        })
    })

    // 编辑功能
    $('#address-box').on('tap','.edit-btn', function () {
        var id = $(this).data('id');

        for (var i = 0; i < address.length; i++) {
            if (address[i].id === id) {
                localStorage.setItem('addAddressMsg',JSON.stringify(address[i]));
                break;
            }
        }

        location.href = 'addAddress.html?isEdit=1';
    })














})