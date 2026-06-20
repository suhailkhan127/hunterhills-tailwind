// 2022 validation 
$(document).ready(function () {
    _ajax_form = 'form.ajax_form';
    
    $(_ajax_form + " input").focus(function () {
        if(!$(this).val()){
            $(this).parents('.anim_lbl').addClass('animate_lbl');
        }
    });
    $(_ajax_form + " input").blur(function () {
        if(!$(this).val()){
            $(this).parents('.anim_lbl').removeClass('animate_lbl');
        }
    }); 

    $(document).on('change', _ajax_form + " select", function () {
        if($(this).val() != ''){
            $(this).parents('.anim_lbl').addClass('animate_lbl');
        }
    });

    $(_ajax_form + " textarea").focus(function () { 
        if(!$(this).val()){
            //$(this).parents('.anim_lbl').addClass('animate_lbl_2');
        }
    });
    $(_ajax_form + " textarea").blur(function () {
        if(!$(this).val()){
            //$(this).parents('.anim_lbl').removeClass('animate_lbl_2');
        }
    });

    $(_ajax_form + " textarea").focus(function () {
        if(!$(this).val()){
            $(this).parents('.anim_lbl').addClass('animate_lbl');
        }
    });
    $(_ajax_form + " textarea").blur(function () {
        if(!$(this).val()){
            $(this).parents('.anim_lbl').removeClass('animate_lbl');
        }
    });

    $(_ajax_form + " .form_date").blur(function () {
        //alert($(this).html().length);
        if(!$(this).val()){
            $(this).parents('.anim_lbl').addClass('animate_lbl');
        }
    });
    
    var validator = $(_ajax_form).validate({
        wrapper: "span",
        errorElement: "em",
        rules: { email: { email: true }, phone: { number: true } },
        highlight: function(element) {
            $(element).parents('.form-group').addClass("error_box")
        },
        unhighlight: function(element) {
            $(element).parents('.form-group').removeClass("error_box")
        },
        invalidHandler: function(form, validator) {
            $(_ajax_form).animate({ scrollTop: 200 }, 'slow');
        },
        submitHandler: function(form) {
            var dataString = $(_ajax_form).serialize();
            //console.log(dataString);
            var thanks = $(_ajax_form).find('.thanks').val();
            var action_path = $(_ajax_form).find('.action_path').val();
            //console.log(action_path);
            $.ajax({
                url: action_path,
                type: 'post',
                data: dataString,
                success  : function (data) {
                    window.location = thanks;
                }
            });
        }
    });
    
    });
    // 2022 validation 