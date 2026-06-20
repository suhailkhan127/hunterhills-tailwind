// 2022 validation 
$(document).ready(function () {
    _tio_form = 'form.tio_form';

    $(_tio_form + " input").focus(function () {
        if(!$(this).val()){
            $(this).parents('.anim_lbl').addClass('animate_lbl');
        }
    });
    $(_tio_form + " input").blur(function () {
        if(!$(this).val()){
            $(this).parents('.anim_lbl').removeClass('animate_lbl');
        }
    }); 

    $(document).on('change', _tio_form + " select", function () {
        if($(this).val() != ''){
            $(this).parents('.anim_lbl').addClass('animate_lbl');
        }
    });

    $(_tio_form + " textarea").focus(function () { 
        if(!$(this).val()){
            //$(this).parents('.anim_lbl').addClass('animate_lbl_2');
        }
    });
    $(_tio_form + " textarea").blur(function () {
        if(!$(this).val()){
            //$(this).parents('.anim_lbl').removeClass('animate_lbl_2');
        }
    });

    $(_tio_form + " textarea").focus(function () {
        if(!$(this).val()){
            $(this).parents('.anim_lbl').addClass('animate_lbl');
        }
    });
    $(_tio_form + " textarea").blur(function () {
        if(!$(this).val()){
            $(this).parents('.anim_lbl').removeClass('animate_lbl');
        }
    });

    $(_tio_form + " .form_date").blur(function () {
        //alert($(this).html().length);
        if(!$(this).val()){
            $(this).parents('.anim_lbl').addClass('animate_lbl');
        }
    });

    $(_tio_form).each(function(index,_tio_form_element){


        
        
        var validator = $(_tio_form_element).validate({
            wrapper: "span",
            errorElement: "em",
            rules: { email: { email: true } },
            highlight: function(element) {
                $(element).parents('.form-group').addClass("error_box")
            },
            unhighlight: function(element) {
                $(element).parents('.form-group').removeClass("error_box")
            },
            invalidHandler: function(form, validator) {
                $(_tio_form_element).animate({ scrollTop: 200 }, 'slow');
            },
            submitHandler: function(form) {
                var dataString = $(_tio_form_element).serialize();
                console.log(dataString);
                var thanks = $(_tio_form_element).find('.thanks').val();
                var action_path = $(_tio_form_element).find('.action_path').val();
                console.log(action_path);
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
    
    
    
    
    });
    // 2022 validation 
