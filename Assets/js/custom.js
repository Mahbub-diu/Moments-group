document.addEventListener("DOMContentLoaded", function(){
 
  document.querySelectorAll('.dropdown-menu').forEach(function(element){
    element.addEventListener('click', function (e) {
      e.stopPropagation();
    });
  })
}); 

// sticky navbar 
document.addEventListener("DOMContentLoaded", function(){
      
  window.addEventListener('scroll', function() {
       
    if (window.scrollY > 200) {
      document.getElementById('navbar_top').classList.add('fixed-top');
  
      // add padding top to show content behind navbar
      navbar_height = document.querySelector('.navbar').offsetHeight;
      document.body.style.paddingTop = navbar_height + 'px';
    } else {
       document.getElementById('navbar_top').classList.remove('fixed-top');
       // remove padding top from body
      document.body.style.paddingTop = '0';
    } 
  });
}); 

/****Dropdown toggle ****/
$(".selectbox-title").click(function() {
  $(".selectbox-content").slideToggle("slow");
});

/***Dynamic Checkbox generate***/
var initial = 0;
var maxlength = 100000;
for (i = 0; i <= 10; i++) {
  $('.ul-list').append('<li><input class="checkbox-custom" name="checkAll" type="checkbox" id="test' + i + '" /><label for="test' + i + '" class="checkbox-custom-label checkbox">Checkbox '+ i +'</label></li>');
}

/***Add Checkboxes on load more button***/
function buttonclick() {
        for (var i = initial; i < initial + 500; i++) {
            $('.ul-list').append('<li><input class="checkbox-custom" name="checkAll" type="checkbox" id="test' + i + '" /><label for="test' + i + '" class="checkbox-custom-label checkbox">Checkbox</label></li>');
        }
        initial = initial + 500;
    }

$('#box').keyup(function () {
        var valThis = $(this).val().toLowerCase();
        if (valThis == "") {
            $('.ul-list > li').show();
        } else {
            $('.ul-list > li').each(function () {
                var text = $(this).text().toLowerCase();
                (text.indexOf(valThis) >= 0) ? $(this).show() : $(this).hide();
            });
        };
    });
$('.fa-close').click(function () {
        // Selects all elements of type text and clear all
        $('#box').val('');
    });

/***Count Length of checkbox***/
var $checkboxes = $('.ul-list input[type="checkbox"]');

$checkboxes.change(function() {
  var countCheckedCheckboxes = $checkboxes.filter(':checked').length;
  $('#edit-count-checked-checkboxes').text(countCheckedCheckboxes);
});

if (countCheckedCheckboxes > 0) {
            $('.plzselect').css('display', 'none');
            $('#edit-count-checked-checkboxes').css('display', 'inline-block');
            $('.selected').css('display', 'inline-block');
        }
        else {
            $('.plzselect').css('display', 'block');
            $('#edit-count-checked-checkboxes').css('display', 'none');
            $('.selected').css('display', 'none');
        }

