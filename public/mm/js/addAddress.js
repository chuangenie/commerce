/**
 * Created by 97865 on 2018/10/26.
 */

$(function () {
    var isEdit = Number(getParamsByUrl(location.href,'isEdit'));
    //console.log(isEdit)
    if (isEdit) {
        if (localStorage.getItem('addAddressMsg')) {
            var address = JSON.parse(localStorage.getItem('addAddressMsg'));
            var html = template("editTpl",address);
            $('#editForm').html(html);
        }
        $('.mui-title').html('编辑收货地址');
    } else {
        var html = template("editTpl",{});
        //console.log(html);
        $('#editForm').html(html);
    }

    // 创建picker选择器
    var picker = new mui.PopPicker({
        layer: 3
    });
    // 给picker对象添加数据
    picker.setData(cityData);
    $('#selectCity').on('tap',function(){
        picker.show(function(SelectedItem) {
            //console.log(SelectedItem);
            $('#selectCity').val(SelectedItem[0].text + SelectedItem[1].text + SelectedItem[2].text);
        })
    })


    $('#addAddress').on('click',function(){
        var username = $.trim($('[name="username"]').val());
        var postCode = $.trim($('[name="postCode"]').val());
        var city = $.trim($('[name="city"]').val());
        var detail = $.trim($('[name="detail"]').val());

        if (!username) {
            mui.toast('请输入用户名');
            return;
        }
        if (!postCode) {
            mui.toast('请输入邮政编码');
            return;
        }

        var data = {
            address: city,
            addressDetail: detail,
            recipients: username,
            postcode: postCode
        }

        if (isEdit) {
            // 编辑地址
            data.id = address.id;
            var url = '/address/updateAddress';
        } else {
            // 添加地址
            var url = "/address/addAddress";
        }

        $.ajax({
            url: url,
            type: 'post',
            data: data,
            success:function(res){
                if (res.success) {
                    mui.toast("编辑地址成功");
                } else {
                    mui.toast("地址添加成功");
                }
                setTimeout(function () {
                    location.href = "address.html";
                },2000)
            }
        })

    })












})