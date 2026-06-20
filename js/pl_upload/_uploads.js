var path = 'https://'+window.location.host+'/';


var file_uploads = new plupload.Uploader({
  runtimes : 'html5',
  browse_button : 'pick_files', 
  url : path+'application/themes/_uploads.php',
filters: {
    max_file_size: 1000000000
  },
  init: {
    PostInit: function() {
      
    },

    FilesAdded: function(up, files) {
        $('.loader_one').css('display','inline');
        file_uploads.start();
    },

    UploadProgress: function(up, file) {
        //document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = '<span>' + file.percent + "%</span>";
        $('.loader_one').css('display','inline');
    },

    FileUploaded: function(up, file, info) {
        var json_ = $.parseJSON(info.response);
        populate_file_fields(json_.realName, json_.fName);
    },
    
    UploadComplete: function(up, files) {
      $('.loader_one').hide();
    },

  }
});
file_uploads.bind('Error', function(Up, ErrorObj) {
 
     if (ErrorObj.code == plupload.FILE_SIZE_ERROR) {
        alert('Maximum file upload size limit is 10MB');
     }

});
file_uploads.init();

$(function() {
  $('.btn_del_one').click(function(e) {
      e.stopPropagation();
      $('#doc_files [type="hidden"]').removeAttr('value');
      $('#doc_files .file_names').empty();
      $('#doc_files_two .file_names').empty();
      $('.btn_del_one').hide();
  });
});

// Second Uploader
var file_uploads_2 = new plupload.Uploader({ 
  runtimes : 'html5,flash,silverlight,html4',
  browse_button : 'pick_files_2',
  url : path+'application/themes/_uploads.php',
  flash_swf_url : path+'application/themes/_uploads/Moxie.swf',
  silverlight_xap_url : path+'application/themes/_uploads/Moxie.xap',
  filters: {
    max_file_size: 10000000
  },

  init: {
    PostInit: function() {
    },

    FilesAdded: function(up, files) {
        $('.loader').css('display','inline');
        file_uploads_2.start();
    },

    UploadProgress: function(up, file) {
        //document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = '<span>' + file.percent + "%</span>";
        $('.loader').css('display','inline');
    },

    FileUploaded: function(up, file, info) {
        var json_ = $.parseJSON(info.response);
        populate_file_fields_2(json_.realName, json_.fName);
    },

    UploadComplete: function(up, files) {
      $('.loader').hide();
    },

  }
});
file_uploads_2.bind('Error', function(Up, ErrorObj) {

     if (ErrorObj.code == plupload.FILE_SIZE_ERROR) {
        alert('Maximum file upload size limit is 10MB');
     }

});
file_uploads_2.init();

var x = 1;

function populate_file_fields(rName, fName) {
  console.log(x);
  file_full_path = path+'application/themes/_uploads/'+fName;
  file_full_path = file_full_path.replace('www.','https://');
  $('#doc_files .file_names').append(rName+', ');
  $('#doc_'+x).val(file_full_path);
  $('#doc_files .btn_del_one').show();
  $('#doc_files').addClass('animate_lbl');
  x++;
}

var y = 6;
function populate_file_fields_2(rName, fName) {
  console.log(y)
  $('#doc_files_2 .file_names').append(rName+', ');
  $('#doc_'+y).val(path+'application/themes/_uploads/'+fName);
  $('#doc_files_2 .btn_del').show();
  $('#file_validate_2').val(rName);
  y++;
}




$(function() {
    $('.btn_del_one').click(function(e) {
        e.stopPropagation();
        $('#doc_files [type="hidden"]').removeAttr('value');
        $('#doc_files_two .file_names').empty();
        $('.btn_del_one').hide();
    });
});


// Custom validation for images
// function checkImgs(field, rules, i, options){
// var num = 0;
// $('.input_files input[type="hidden"]').each(function(){
//    if($(this).val()!=''){
//       num ++;
//       //return false;
//     }
//  });
//   if (num < 8) {
//      // this allows the use of i18 for the error msgs
//      return options.allrules.validate_imgs.alertText;
//   }
// };

//validate_imgs:{alertText: "* There should be 8 photos, 3 facials and 5 infra-oral."},




var file_uploads_two = new plupload.Uploader({
  runtimes : 'html5',
  browse_button : 'pick_files_two', 
  url : path+'application/themes/_uploads.php',
filters: {
    max_file_size: 1000000000
  },
  init: {
    PostInit: function() {
      
    },

    FilesAdded: function(up, files) {
        $('.loader_two').css('display','inline');
        file_uploads_two.start();
    },

    UploadProgress: function(up, file) {
        //document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = '<span>' + file.percent + "%</span>";
        $('.loader_two').css('display','inline');
    },

    FileUploaded: function(up, file, info) {
        var json_ = $.parseJSON(info.response);
        populate_file_fields_two(json_.realName, json_.fName);
    },
    
    UploadComplete: function(up, files) {
      $('.loader_two').hide();
    },

  }
});
file_uploads_two.bind('Error', function(Up, ErrorObj) {
 
     if (ErrorObj.code == plupload.FILE_SIZE_ERROR) {
        alert('Maximum file upload size limit is 10MB');
     }

});
file_uploads_two.init();

var z = 1;

function populate_file_fields_two(rName, fName) {
  console.log(z);
  file_full_path_two = path+'application/themes/_uploads/'+fName;
  file_full_path_two = file_full_path_two.replace('www.','https://');
  $('#doc_files_two .file_names').append(rName+', ');
  $('#doc_two_'+z).val(file_full_path_two);
  $('#doc_files_two .btn_del_two').show();
  $('#doc_files_two').addClass('animate_lbl');
  z++;
}



$(function() {
    $('.btn_del_two').click(function(e) {
        e.stopPropagation();
        $('#doc_files_two [type="hidden"]').removeAttr('value');
        $('#doc_files_two .file_names').empty();
        $('.btn_del_two').hide();
    });
});