//日期点击按钮处理函数
function dataClick(startTime,endTime,type){
    var day1 = new Date();
    var day2 = new Date();
    switch(type){
        case '今天':
            day1.setTime(day1.getTime()-60*60*1000);
            day2.setTime(day1.getTime()-60*60*1000);
            break;
        case '昨天':
            day1.setTime(day1.getTime()-24*60*60*1000);
            day2.setTime(day1.getTime()-24*60*60*1000);
            break;
        case '近7天':
            day1.setTime(day1.getTime()-60*60*1000);
            day2.setTime(day2.getTime()-144*60*60*1000);
            break;
        case '近30天':
            day1.setTime(day1.getTime()-60*60*1000);
            day2.setTime(day2.getTime()-696*60*60*1000);
            break;
    }
    var start_time= FormatDate(day1);
    var end_time= FormatDate(day2);
    $(startTime).val(start_time).attr("ol",start_time);
    $(endTime).val(end_time).attr("ol",end_time);
}
/*----------------------密码验证规则 必须包含一个大写字母一个小写字母 一个数字 一个特殊符号 至少九位字符----------------------*/
$(':password').on('blur', onPasswordInput);
function onPasswordInput(e) {
    var $input = $(this);
    var k = 0;
    var value = this.value,
        $rulesItems = $input.closest('.field').find('.field__rules').find('li'),
        rules = {//密码规则
            "缺少一个小写字母": /[a-z]/,
            "缺少一个大写字母": /[A-Z]/,
            "缺少一个数字": /[0-9]/,
            "缺少一个特殊字符": /[!@#$&*]/,
            "最小9个字符": /.{9,}/
        };
    $rulesItems.removeClass("pass");
    this.classList.toggle('hasValue', this.value);
    $rulesItems.each((i, elm) => {
        var valid,
            ruleName = elm.innerText.toLowerCase();
        if (rules[ruleName]) {
            valid = new RegExp(rules[ruleName]).test(value);//判断是否符合规则
            console.log(valid);
            if(valid == true){
                return k++;
            }else{//显示不符合的规则
                elm.classList.add("pass");
            }
        }
    });
    if(k==5){//验证通过
        verifyResult = 'true';
        $input.closest('.field').find('span').remove();
        $input.closest('.field').find('font').after('<span class="Validform_checktip Validform_right"></span>');
    }else{
        verifyResult = 'false';
    }
}

//展开收起 code传入的是id
function showHide(code){
    var showBody=$(code)
    var display =showBody.css('display');
    if(display == 'none'){
        $("#show_not").text("收起");
    }else{
        $("#show_not").text("展开");
    }
    showBody.slideToggle(40);
}
/*---------------------手机号码验证------------------------------------*/
function checkPhone(obj){
    $(obj).parent().find("span.tip").empty();
    var phone = $(obj).context.value;
    if(!(/^1(3|4|5|7|8)\d{9}$/.test(phone))){
        $(obj).parent().find("span.Validform_checktip").removeClass("Validform_right").addClass("Validform_wrong")
        $(obj).parent().find("span.Validform_checktip").after("<span style='color:red'class='tip'>手机号码有误，请重填</span>")
    }else{
        $(obj).parent().find("span.Validform_checktip").removeClass("Validform_wrong").addClass("Validform_right")

    }
}
/*
 * 邮箱验证
 * */
function checkEmail(obj){
    $(obj).parent().find("span.tip").empty();
    var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"); //正则表达式
    var mail = $(obj).context.value;; //要验证的对象
    if(mail === ""){ //输入不能为空
        EmailValue = false;
        $(obj).css("background-color","#ffe7e7");
        $(obj).parent().find("span.Validform_checktip").removeClass("Validform_right").addClass("Validform_wrong");
        $(obj).parent().find("span.Validform_checktip").after("<span style='color:red'class='tip'>输入不能为空!</span>");
    }else if(!reg.test(mail)){ //正则验证不通过，格式不对
        EmailValue = false;
        $(obj).css("background-color","#ffe7e7");
        $(obj).parent().find("span.Validform_checktip").removeClass("Validform_right").addClass("Validform_wrong");
        $(obj).parent().find("span.Validform_checktip").after("<span style='color:red'class='tip'>验证不通过!</span>");
    }else{
        EmailValue = true;
        $(obj).css("background-color","white");
        $(obj).parent().find("span.Validform_checktip").removeClass("Validform_wrong").addClass("Validform_right");
    }
}
/*
 * 全选反选
 * */
$("#all_no").on('click', function() {
    //当选中的长度等于checkbox的长度的时候,就让控制全选反选的checkbox设置为选中,否则就为未选中
    if($("#self_mission_list input:checkbox").length === $("#self_mission_list input:checked").length) {
        $(".self_motion_box").prop("checked", false);
    } else {
        $(".self_motion_box").prop("checked", true);
    }
});
/*
 * 移动端根元素字体大小设置
 * */
setRem();
window.addEventListener("onorientationchange" in window ? "orientationchange":"resize",function(){
    setRem();
});
function setRem(){
    var html = document.querySelector("html");
    width = html.getBoundingClientRect().width;
    html.style.fontSize = width/16 +"px";
};
/*
 * 去空函数
 * */
function Trim_udbac_shaggy(str) {
    if (str == '' || str == undefined) {
        return '';
    }
    var result = str.replace(/\s+/g, "");
    return result;
};
/*
 *时间戳转时间
 * */
function timeFormat(timestamp){
    //timestamp是整数，否则要parseInt转换,不会出现少个0的情况
    var time = new Date(timestamp);
    var year = time.getFullYear();
    var month = time.getMonth()+1;
    var date = time.getDate();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    return year+'-'+add0(month)+'-'+add0(date);
}

function add0(m){return m<10?'0'+m:m }

/*
 * 获取地址栏指定参数值的函数
 * */
function getParam(key){
    var url = location.search.replace(/^\?/,'').split('&');
    var paramsObj = {};
    for(var i = 0, iLen = url.length; i < iLen; i++){
        var param = url[i].split('=');
        paramsObj[param[0]] = param[1];
    }
    if(key){
        return paramsObj[key] || '';
    }
    return paramsObj;
};



