
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
  
    //About Me
    window.onload=function()
    {
      const ABOUT = document.querySelector(".About_Me");

      window.addEventListener('scroll', scrollEffect);

      function scrollEffect()
      {
        if (window.scrollY >= 500)
        {
          ABOUT.style.opacity='1';
          ABOUT.style.transform= 'translateX(0px)';
          ABOUT.style.transition= '1s ease-in-out';
        } 
        
        else
        {
          ABOUT.style.opacity='1';
          ABOUT.style.transform= 'translateY(-50px)';
        }
       
      }
      scrollEffect();
      
    }

    //work
    $( ".Grid_Container_Case_Studies" ).click(function() {
      $( "Grid_Container_Case_Studies" ).scroll();
    });
    //Contact Form
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
    