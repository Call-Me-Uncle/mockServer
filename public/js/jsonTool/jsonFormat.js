/**
 * Created by yuzhibin on 16/2/2.
 */

$(function(){
    var current_json = '';
    var current_json_str = '';

    $('.json-src').keyup(function(){
        var content = $.trim($(this).val());
        var result = '';
        if (content != '') {
            //如果是xml,那么转换为json
            if (content.substr(0,1) === '<' && content.substr(-1,1) === '>') {
                try{
                    var json_obj = $.xml2json(content);
                    content = JSON.stringify(json_obj);
                }catch(e){
                    result = '解析错误：<span style="color: #f1592a;font-weight:bold;">' + e.message + '</span>';
                    current_json_str = result;
                    $('.json-target').html(result);
                    return false;
                }
            }
            try{
                current_json = jsonlint.parse(content);
                current_json_str = JSON.stringify(current_json);
                //current_json = JSON.parse(content);
                result = new JSONFormat(content,4).toString();
            }catch(e){
                result = '<span style="color: #f1592a;font-weight:bold;">' + e + '</span>';
                current_json_str = result;
            }

            //$('.json-target').html(result);
            $(this).parent().next().find('.json-target').html(result);

        }else{
            $(this).parent().next().find('.json-target').html('');
        }

    });

    $('.json-src').keyup();     //默认keyup
});
