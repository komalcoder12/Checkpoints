/*form section */
  document.addEventListener('DOMContentLoaded', function () {
      var bookingForm = document.querySelector('form');

      bookingForm.addEventListener('submit', function (event) {
          event.preventDefault();

          if (validateForm()) {
              alert('Booking successful!');
          }
      });

      function validateForm() {
          var whereTo = document.getElementById('whereTo').value;
          var numberOfPersons = document.getElementById('numberOfPersons').value;
          var startDate = document.getElementById('startDate').value;
          var endDate = document.getElementById('endDate').value;
          var description = document.getElementById('description').value;

          
          if (whereTo && numberOfPersons && startDate && endDate && description) {
              return true;
          } else {
              alert('Please fill in all required fields.');
              return false;
          }
      }
  });
  /*slider*/

  $(document).ready(function(){

    $('.slick-slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      arrows: true,
      dots: true
    });

    $('.services-slider').slick({
    
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true,
      dots: true
    });
  });

  /*scroll*/


  $(document).ready(function(){
    // smooth scrolling
    $("a").on('click', function(event) {
      
      if (this.hash !== "") {
        // Prevent anchor
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
      
          
          window.location.hash = hash;
        });
      } 
    });
  });

//book now button
  function scrollToBookingForm() {
  
    document.querySelector('#book1').scrollIntoView({
      behavior: 'smooth'
    });
  }


  
