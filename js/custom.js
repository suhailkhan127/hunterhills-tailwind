// @koala-prepend "plugins/popper-v2.11.5.js"
// @koala-prepend "plugins/bootstrap.js"
// @koala-prepend "plugins/jquery.validate.js"
// @koala-prepend "plugins/tio_form_2025.js"
// @koala-prepend "plugins/spam-protection-2023.js"
// @koala-prepend "plugins/datepicker.js"
// @koala-prepend "plugins/lity-v2.4.1.js"
// @koala-prepend "plugins/slick.min.js"
// @koala-prepend "plugins/resizeable.js" 
// @koala-prepend "plugins/map.js"
// @koala-prepend "plugins/fancybox.js"
// @koala-prepend "plugins/aos.js"
  
// "plugins/jquery-validation.js"
// "plugins/spam-protection.js" 


// Document.Ready Start 
$(document).ready(function () {

  // Get HTML and 
  _html_from = $('.get_html').attr('html-from');
  _html_form = $(_html_from).html(); 
  _html_to = $('.get_html').attr('html-to');
  $(_html_to).html(_html_form);
  
  //xs_mobile Sticky mobile header/Hifza udpate
  main_nav = $('ul.navigation').html();
  $('.xs_main_nav').html('<ul class="navigation">' + main_nav + '</ul>');

  lg_logo = $('.lg_logo').html();
  $('.xs_logo').html(lg_logo);

  social_icons = $('ul.social_icons').html();
  $('.static_social_icons').html('<ul class="social_icons">' + social_icons + '</ul>');

  
  // $( ".desktop_header ul.navigation li:first-child ul ul" ).each(function( index ) {
  //   if ($(this).length > 0) {
  //     $(this).parents('ul:not(.navigation)').addClass('has_mega_menu');
  //   }
  // });
  
  $('.has_collapsible').after().on('click', function () {
     $(this).toggleClass('toggled'); 
  });


  // Add extra link to mobile nav
  $('.xs_main_nav ul:first-child').append('<li><a href="/referrals">Dentist Referrals</a></li>');    //for all html
  // $('.xs_main_nav ul:first-child').append('<li><a href="/existing-patients">Existing Patients</a></li>');    
  // $('.xs_main_nav ul:first-child').append('<li><a href="/contact">Contact Us</a></li>');   
  // $('#mobile_nav ul:first-child').append($('.btns')[0].children[0]);
  //$('#mobile_nav ul:first-child a em').remove();
  //$('#mobile_nav ul:first-child a.phoneBtnClicks').remove();

  if ($(window).width() < 990) {
    $(window).on('scroll', function () {
      var y_scroll_pos = window.pageYOffset;
      //var scroll_pos_test = element_position;
      if (y_scroll_pos > 500) {
        $('.xs_header').addClass('sticky');
      } else {
        $('.xs_header').removeClass('sticky');
      }

    });

    $(document).on('click', '.humburger_menu.sticky', function (e) {
      e.preventDefault();
      $('body, html').animate({
        scrollTop: 0
      });
    });
  };
  //xs_mobile Sticky mobile header/Hifza udpate

  if ($(window).width() > 100) {
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      var tp = $(".default_sticky").attr('data-top'); 
      if (scroll >= tp) {
        $(".default_sticky").addClass("affix");
        $(".sticky_button").addClass("show");
        $("body").addClass("body_affix"); 
       // $("body").css("padding-top", tp+'px');
      } else {
        $(".default_sticky").removeClass("affix");
        $(".sticky_button").removeClass("show");
        $("body").removeClass("body_affix");
        //$("body").css("padding-top", '0px');
      }
    });
  }
  
  $(window).scroll(function(){
      if ($(this).scrollTop() > 100) {
        $('.celebrate_years').addClass('sticky_year');
      } else { 
        $('.celebrate_years').removeClass('sticky_year');
      } 
  });


  // Mobile menu function
  if ($('#mobile_nav ul ul, .xs_main_nav ul ul').length > 0) {
    $('#mobile_nav ul ul, .xs_main_nav ul ul ').before('<em class="fa fa-angle-down menu_expander"></em>')
  }
  if ($('ul.navigation ul').length > 0) {
    $('ul.navigation li > ul').parents('li').addClass('has_child');
  }

  xs_contact_us_menu = $('#contact-us-menu').html();
  $('#xs-contact-us-menu').html(xs_contact_us_menu);

  if ($(window).width() > 990) {
    _header_height = $('header').height();
    $('.syed-main-mega-menu .has_child').mouseover(function () {
      _ul_height = $(this).find('ul').height();
      _treatment_txt = $(this).find('a').first().text();
      
        $('.menu-overlay').addClass('trigged');
        if ($('.menu-overlay').hasClass('trigged')) {
            $('header.header').addClass('remove_bg');
        } 
        
    //   if(_treatment_txt == 'Treatments') {
    //     $('.menu-overlay.trigged .blackbox').height(800);
    //   } else {
    //     $('.menu-overlay.trigged .blackbox').height(_header_height+_ul_height);
    //   }
        $('.menu-overlay.trigged .blackbox').height(_header_height+_ul_height);
    });

    $('.syed-main-mega-menu').mouseleave(function () {
      $('.menu-overlay').removeClass('trigged');
      $('.menu-overlay .blackbox').height(0);
      $('header.header').removeClass('remove_bg');
    });

    $('#contact-us-menu .has_child').mouseover(function () {
      _mm_contact_us_height = $(this).find('.mm-contact-us').height();
      $('.menu-overlay').addClass('trigged');
      $('.menu-overlay.trigged .blackbox').height(_header_height+_mm_contact_us_height+30);
    });

  }

  if ($(window).width() < 990) {
    $('.xs_toggle_menu').click(function () {
      $('body').toggleClass('trigger-mm');
    });
    $('.xs_toggle_contact_menu').click(function () {
      $('body').toggleClass('trigger-mm');
    });
    if ($('.syed-main-mega-menu ul ul, .syed-main-mega-menu ul .mm-contact-us').length > 0) {
      $('.syed-main-mega-menu ul ul, .syed-main-mega-menu ul .mm-contact-us').before('<em class="menu_expander fa-solid fa-chevron-up"></em>')
    }
    // $('.syed-main-mega-menu .navigation>li.has_child').click(function () {
    //   $(this).addClass('open_first_ul');
    // });
    // $('.syed-main-mega-menu .navigation>li ul li.has_child').click(function () {
    //   $(this).addClass('open_second_ul');
    // });
  }


  $('.menu_expander').click(function () {
    $(this).next().slideToggle();
    $(this).toggleClass('toggled');
    $(this).parent().siblings().find('ul').slideUp()
    $(this).parent().siblings().find('em').removeClass('toggled')
  });

  $('.card').click(function () {
    $('.card').removeClass('active');
    $(this).addClass('active');
  });


  $('.humburger_menu').click(function () {
    $('.navigation').toggleClass('expand');
    $('.header').toggleClass('open');
  });


  //Add sticky button for Book Now
  // if ($(window).width() < 769) {
  //     $(window).on('scroll', function() {
  //         var y_scroll_pos = window.pageYOffset;
  //         //var scroll_pos_test = element_position;
  //         if (y_scroll_pos > 720) {
  //             $('#scroll-to, .humburger_menu').addClass('sticky');
  //             $('.referral .btn').addClass('hide');
  //             $('.responsive_header .header_top .top .btns>a.fixd').addClass('hide');
  //         } else {
  //             $('#scroll-to, .humburger_menu').removeClass('sticky');
  //             $('.referral .btn').removeClass('hide');
  //             $('.responsive_header .header_top .top .btns>a.fixd').removeClass('hide');
  //         }
  //     });
  //     $(document).on('click', '.humburger_menu.sticky', function(e) {
  //         e.preventDefault();
  //         $('body, html').animate({
  //             scrollTop: 0
  //         });
  //     });
  // };
  // Open/Close booking form
  $('.sticky_button').on('click', function () {
    $('.nav_form').toggleClass('open');
    $(this).hide();
    $('.datetimepicker').addClass('top-left');
  });
  $('.close_me').on('click', function () {
    $('.nav_form').toggleClass('open');
    $('.sticky_button').show();
    $('.datetimepicker').removeClass('top-left');
  });
  // Menu toggle
  $('.menu').on('click', function () {
    $('.header').toggleClass('show');
    $('.navigation').toggleClass('show');
    $(this).toggleClass('close_btn');
  });
  // Accordion: add active class to title bar.
  $('.panel-collapse').on('show.bs.collapse', function () {
    $(this).siblings('.panel-heading').addClass('active');
  });
  $('.panel-collapse').on('hide.bs.collapse', function () {
    $(this).siblings('.panel-heading').removeClass('active');
  });
  // Collapse open section
  $('#accordion').on('show.bs.collapse', function () {
    $('#accordion .in').collapse('hide');
  });
  // Go to specific ID
  $(document).on('click', '.goto', function (e) {
    var id = $(this).attr('href');
    var $id = $(id);
    if ($id.length === 0) {
      return;
    }
    e.preventDefault();
    var pos = $id.offset().top;
    $('body, html').animate({
      scrollTop: pos
    });
  });





  // Accordion
  $(".accordion_container .item h3").append("<span class=\"plusminus\"></span> ");
  $(".accordion_container .item h3").click(function () {
    $(".accordion_container .item").removeClass('active');
    $(this).parent().addClass('active');
    if ($('.accordion_body').is(':visible')) {
      $(".accordion_body").slideUp(300);
    }
    if ($(this).next(".accordion_body").is(':visible')) {
      $(this).next(".accordion_body").slideUp(300);
      $(".accordion_container .item").removeClass('active');
    } else {
      $(this).next(".accordion_body").slideDown(300);
    }
  });


  $('.update_form_data').on('click', function () {
    if ($(this).attr('thanks')) {
      var _thanks = $(this).attr('thanks');
      $('.thanks').val('');
      $('.thanks').val(_thanks);
    }
    if ($(this).attr('key')) {
      var _key = $(this).attr('key');
      $('.key').val('');
      $('.key').val(_key);
    }
    if ($(this).attr('accountid')) {
      var _accountid = $(this).attr('accountid');
      $('.accountid').val('');
      $('.accountid').val(_accountid);
    }
    if ($(this).attr('email')) {
      var _email_recipient = $(this).attr('email');
      $('.email').val('');
      $('.email').val(_email_recipient);
    }
  });


  _icons = $('#header_icons').html();
  $('#footer_icons').empty();
  $('#footer_icons').html(_icons);

  $(".nav-link,.smooth_link").click(function () {
    _target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(_target).offset().top
    }, 2000);
  });

  $('.btn_popup_expand').on('click', function () {
    $(this).hide();
  });

  $('.popup_title').on('click', function () {
    _title = $(this).attr('title');
    _target = $(this).attr('target');
    $(_target).empty();
    $(_target).html(_title);
  });

  //read more
  $('.read_more').on('click', function () {
    _target = $(this).parent('.testimonial_txt');
    $(_target).addClass('expanded');
  });

  //read less
  $('.read_less').on('click', function () {
    _target = $(this).parent('.testimonial_txt');
    $(_target).removeClass('expanded');
  });


  $(".read-btn").click(function(e){
    e.preventDefault();
    if($(".details-paragraph").hasClass("show")){
      $(".details-paragraph").removeClass("show");
      $(this).text("Read More");
    }
    else{
      $(".details-paragraph").addClass("show");
      $(this).text("Read Less");
    }
    
  })

});


$(document).ready(function () {
  $('.update_form_data').on('click', function () {
    if ($(this).attr('thanks')) {
      var _thanks = $(this).attr('thanks');
      $('.thanks').val('');
      $('.thanks').val(_thanks);
    }
    if ($(this).attr('key')) {
      var _key = $(this).attr('key');
      $('.key').val('');
      $('.key').val(_key);
    }
    if ($(this).attr('accountid')) {
      var _accountid = $(this).attr('accountid');
      $('.accountid').val('');
      $('.accountid').val(_accountid);
    }
    if ($(this).attr('email')) {
      var _email_recipient = $(this).attr('email');
      $('.email').val('');
      $('.email').val(_email_recipient);
    }
  });
});
$(document).on('change', '.update_form_data_select', function () {
  var loc = $(this).val();
  var _rel = $(this).attr('rel');
  if ($(_rel).find('.' + loc).attr('thanks')) {
    var _thanks = $(_rel).find('.' + loc).attr('thanks');
    $('.thanks').val('');
    $('.thanks').val(_thanks);
  }
  if ($(_rel).find('.' + loc).attr('key')) {
    var _key = $(_rel).find('.' + loc).attr('key');
    $('.key').val('');
    $('.key').val(_key);
  }
  if ($(_rel).find('.' + loc).attr('accountid')) {
    var _accountid = $(_rel).find('.' + loc).attr('accountid');
    $('.accountid').val('');
    $('.accountid').val(_accountid);
  }
  if ($(_rel).find('.' + loc).attr('email')) {
    var _email = $(_rel).find('.' + loc).attr('email');
    $('.email').val('');
    $('.email').val(_email);
  }
});

$(document).ready(function () {
  $('.change_practice_logo').on('click', function () {

    _target = $(this).attr('target');
    _source = $(this).attr('rel');
    $(_target).attr('src', _source);

  });
}); 



$(document).ready(function () {
  $('.update_form_data').on('click', function () {
    if ($(this).attr('thanks')) {
      var _thanks = $(this).attr('thanks');
      $('.thanks').val('');
      $('.thanks').val(_thanks);
    }
    if ($(this).attr('key')) {
      var _key = $(this).attr('key');
      $('.key').val('');
      $('.key').val(_key);
    }
    if ($(this).attr('accountid')) {
      var _accountid = $(this).attr('accountid');
      $('.accountid').val('');
      $('.accountid').val(_accountid);
    }
    if ($(this).attr('email')) {
      var _email_recipient = $(this).attr('email');
      $('.email').val('');
      $('.email').val(_email_recipient);
    }
  });
});
$(document).on('change', '.update_form_data_select', function () {
  var loc = $(this).val();
  var _rel = $(this).attr('rel');
  if ($(_rel).find('.' + loc).attr('thanks')) {
    var _thanks = $(_rel).find('.' + loc).attr('thanks');
    $('.thanks').val('');
    $('.thanks').val(_thanks);
  }
  if ($(_rel).find('.' + loc).attr('key')) {
    var _key = $(_rel).find('.' + loc).attr('key');
    $('.key').val('');
    $('.key').val(_key);
  }
  if ($(_rel).find('.' + loc).attr('accountid')) {
    var _accountid = $(_rel).find('.' + loc).attr('accountid');
    $('.accountid').val('');
    $('.accountid').val(_accountid);
  }
  if ($(_rel).find('.' + loc).attr('email')) {
    var _email = $(_rel).find('.' + loc).attr('email');
    $('.email').val('');
    $('.email').val(_email);
  }
});

$('.hero_form input').focus(function () {
  $(this).parents('.form-group').addClass('focus');
})

$('.hero_form input').blur(function () {
  if (!$(this).val()) {
    $(this).parents('.form-group').removeClass('focus');
  }
})


// Slick SLIDERS 
$(document).ready(function () {

  // Fixed slider refresh in tabs
  $('a[data-toggle="pill"]').on('shown.bs.tab', function (e) {
    //$('.result_slider').slick('refresh');
  });
 
  // Slick Sliders

  // slider create on mobile
  if ($(window).width() < 990) {  

  }

  $(".ctas-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1, 
    dots: false,
    swipe: true,
    infinite: false,
    arrows: true,
    // centerMode: true,
    // centerPadding: '280px',
    // autoplay:true,
    // variableWidth: true,
    speed: 2000,
    autoplaySpeed: 1000,
    appendArrows: '.ctas-arrows',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2, 
          // centerPadding: '100px',
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          // centerPadding: '50px',
          autoplay: false,

        }
      }]
  });
 
  $(".ba_slider").slick({
    slidesToShow: 2.5,
    slidesToScroll: 1, 
    infinite: false,
    dots: false,
    swipe: false,
    arrows: true,
    
    appendArrows: '.ba-arrows',
    responsive: [

      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,

        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1.000,
          adaptiveHeight: true, 
        }
      }]
  });

  $(".reviews_slider").slick({   
    slidesToShow: 3,  
    dots: false,
    arrows: true, 
    infinite: false,
    autoplay: false,
    appendArrows: '.reviews-arrows',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          swipe: true,

        }
      },

      {
        breakpoint: 767, 
        settings: {
          adaptiveHeight: true,
          slidesToShow: 1,

        }

      }

    ]

  });
  

  $(".logo-slider").slick({
    slidesToShow: 5, 
    slidesToScroll: 1,
    dots: false,
    swipe: true,
    infinite: true,
    arrows: false,
    autoplay: true, 
    autoplaySpeed: 1000,
    draggable: true,
    pauseOnHover: true,
    responsive: [

      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3, 
          
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          autoplay: true, 
          autoplaySpeed: 2000,
        }
      }]
  });


  $(".insta_post").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    swipe: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    appendArrows: '.insta-arrows',
    responsive: [

      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,

        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2.5,

        }
      },
      {
        breakpoint: 767, 
        settings: {
          slidesToShow: 1.17, 
          autoplay: true,
          // variableWidth: true,  
          // arrows: false,
        }
      }]
  });


});



// Humber menu animation
$(document).ready(function () {
  $('.icon-humburger').click(function () {
    $(this).toggleClass('open');
  });
});




 // Add Patient on Dentist referral Form
 $('#add_patient').click(function() {  
  $('#patient_details_2').toggleClass('active');
  $('#add_patient i').toggleClass('fa-minus');
});


// Extra field show/hide onclick of radio buttons
$(document).ready(function() { 
    $('.moreOption').click(function(){
        var target = $(this).data('target-id');
        $('.extra_option[data-target="'+target+'"]').addClass('remove_overlay');
    });
    $('.noOption').click(function(){
        var target = $(this).data('target-id');
        $('.extra_option[data-target="'+target+'"]').removeClass('remove_overlay');
        $('.extra_option[data-target="'+target+'"] textarea').val('');
        $('.extra_option[data-target="'+target+'"] input').val('');
    }); 

}); 

$(window).on("load", function () {
  AOS.init({
    disable: window.innerWidth < 768,
    once: true
  });
});

AOS.refresh();

