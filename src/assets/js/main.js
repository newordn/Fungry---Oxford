export const Bulma = () => {
        
                  
        // $(window).scroll(function(){                          
        //     if ($(this).scrollTop() > 300) {
                
        //         $('#sticky-nav').fadeIn(300);
        //         $('#sticky-nav').removeClass('.hidden');
        //     } else {
        //         $('#sticky-nav').fadeOut(300);
        //     }
      
          
        

        
        
        
// var dropdown = document.querySelector('.modal');
// dropdown.addEventListener('click', function(event) {
//   event.stopPropagation();
//   dropdown.classList.toggle('is-active');
// });        
 
        
        
    //});
    

 
    // $('#tab_header ul li.item').on('click', function() {
    //   var number = $(this).data('option');
    //   $('#tab_header ul li.item').removeClass('is-active');
    //   $(this).addClass('is-active');
    //   $('#tab_container .container_item').removeClass('is-active');
    //   $('div[data-item="' + number + '"]').addClass('is-active');
    // });
  
         



document.addEventListener('DOMContentLoaded', function () {

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});







}
