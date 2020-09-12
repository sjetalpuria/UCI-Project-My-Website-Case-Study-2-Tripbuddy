
function fade() {
  $('.preloader').fadeOut("slow");
  }
  setTimeout(fade, 3000);
 
// Nav animation */
var main = function() {
    $('.fa-bars').click(function() {
      $('.nav-screen').animate({
        right: "0px"
      }, 200);

      $('body').animate({
        right: "285px"
      }, 200);
    });

    // Then push them back */
    $('.fa-times').click(function() {
        $('.nav-screen').animate({
          right: "-285px"
        }, 200);
  
        $('body').animate({
          right: "0px"
        }, 200);
      });
  
      $('.nav-links a').click(function() {
        $('.nav-screen').animate({
          right: "-285px"
        }, 500);
  
        $('body').animate({
          right: "0px"
        }, 500);
      });
    };
  
    $("#myImage").on("", function(){
      console.log("You clicked on myImage");
     
    });

    //contact animation
    $('.contact-form').find('.form-control').each(function() {
      var targetItem = $(this).parent();
      if ($(this).val()) {
        $(targetItem).find('label').css({
          'top': '10px',
          'fontSize': '14px'
          
        });
      }
    })
    $('.Contact').find('.form-control').focus(function() {
      $(this).parent('.input-block').addClass('focus');
      $(this).parent().find('label').animate({
        'top': '10px',
        'fontSize': '14px'
      }, 300);
    })
    $('.contact-form').find('.form-control').blur(function() {
      if ($(this).val().length == 0) {
        $(this).parent('.input-block').removeClass('focus');
        $(this).parent().find('label').animate({
          'top': '25px',
          'fontSize': '18px'
        }, 300);
      }
    })

     // Get the form.
     var form = $('#ajax-contact');

     // Get the messages div.
     var formMessages = $('#form-messages');
 
     // Set up an event listener for the contact form.
     $(form).submit(function() {
       // Stop the browser from submitting the form.
       
 
       // Serialize the form data.
       var formData = $(form).serialize();
 
       // Submit the form using AJAX.
       $.ajax({
         type: 'POST',
         url: $(form).attr('action'),
         data: formData
       })
       .done(function(response) {
         // Make sure that the formMessages div has the 'success' class.
         $(formMessages).removeClass('error');
         $(formMessages).addClass('success');
 
         // Set the message text.
         $(formMessages).text(response);
 
         // Clear the form.
         $('#name').val('');
         $('#email').val('');
         $('#message').val('');
       })
       .fail(function(data) {
         // Make sure that the formMessages div has the 'error' class.
         $(formMessages).removeClass('success');
         $(formMessages).addClass('error');
 
         // Set the message text.
         if (data.responseText !== '') {
           $(formMessages).text(data.responseText);
         } else {
           $(formMessages).text('Oops! An error occured and your message could not be sent.');
         }
       });
 
     });
  
  
    //
    