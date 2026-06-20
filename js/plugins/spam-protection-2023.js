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

    $(_ajax_form).each(function(index,_ajax_form_element){


        
        
        var validator = $(_ajax_form_element).validate({
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
                $(_ajax_form_element).animate({ scrollTop: 200 }, 'slow');
            },
            submitHandler: function(form) {
                var dataString = $(_ajax_form_element).serialize();
                $('.progress,._progress').show();
                console.log(dataString);
                var thanks = $(_ajax_form_element).find('.thanks').val();
                var action_path = $(_ajax_form_element).find('.action_path').val();
                console.log(action_path);
                $.ajax({
                    url: action_path,
                    type: 'post',
                    data: dataString,
                    success  : function (data) {
                        $('.progress').hide();
                        window.location = thanks;
                    }
                });
            }
        });


    });
    
    
    
    
    });
    // 2022 validation 


    $(document).ready(function () {
        _pdf_gen_2023 = 'form.pdf_gen_2023';
        
        $(_pdf_gen_2023 + " input").focus(function () {
            if(!$(this).val()){
                $(this).parents('.anim_lbl').addClass('animate_lbl');
            }
        });
        $(_pdf_gen_2023 + " input").blur(function () {
            if(!$(this).val()){
                $(this).parents('.anim_lbl').removeClass('animate_lbl');
            }
        }); 
        
        $(document).on('change', _pdf_gen_2023 + " select", function () {
            if($(this).val() != ''){
                $(this).parents('.anim_lbl').addClass('animate_lbl');
            }
        });
        
        $(_pdf_gen_2023 + " textarea").focus(function () { 
            if(!$(this).val()){
                //$(this).parents('.anim_lbl').addClass('animate_lbl_2');
            }
        });
        $(_pdf_gen_2023 + " textarea").blur(function () {
            if(!$(this).val()){
                //$(this).parents('.anim_lbl').removeClass('animate_lbl_2');
            }
        });
        
        $(_pdf_gen_2023 + " textarea").focus(function () {
            if(!$(this).val()){
                $(this).parents('.anim_lbl').addClass('animate_lbl');
            }
        });
        $(_pdf_gen_2023 + " textarea").blur(function () {
            if(!$(this).val()){
                $(this).parents('.anim_lbl').removeClass('animate_lbl');
            }
        });
        
        $(_pdf_gen_2023 + " .form_date").blur(function () {
            //alert($(this).html().length);
            if(!$(this).val()){
                $(this).parents('.anim_lbl').addClass('animate_lbl');
            }
        });
        
        var _pdf_validator = $(_pdf_gen_2023).validate({
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
                $(_pdf_gen_2023).animate({ scrollTop: 200 }, 'slow');
            },
            submitHandler: function(form) {
                var _pdf_dataString = $(_pdf_gen_2023).serialize();
                var _pdf_thanks = $(_pdf_gen_2023).find('.thanks').val();
                var _pdf_action_path = $(_pdf_gen_2023).find('.action_path').val();
                $.ajax({
                    url: _pdf_action_path,
                    type: 'post',
                    data: _pdf_dataString,
                    success  : function (data) {
                        window.location = _pdf_thanks;
                    }
                });
            }
        });
        
        });
        
    // PDF Form validation 