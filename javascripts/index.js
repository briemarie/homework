$(document).ready(function(){

  // Tab functions
  $('.tab').click(function(){
      $('.tab').removeClass('active');
      $('.subtab-list').css('display', 'none');

      $(this).addClass('active');
      $('.subtab-div').css('display', 'block');

      if (this.innerHTML.indexOf("Dashboard") != -1){
        $('#dashboard').css('display', 'inline-flex');
      }
      else if (this.innerHTML.indexOf("Sign In") != -1){
        $('#sign-in').css('display', 'inline-flex');
      };
      // Additional tabs would continue here
  });

  // Subtab functions
  $('.subtab-link').click(function(){
    if (this.innerHTML.indexOf("Business Overview") != -1){
        $('#business-overview').css('display', 'block');
      }
  });

  // Button/link functions
  $('.more').click(function(){
    $('.additional-stats').css('display', 'block');
  });

  $('.less').click(function(){
    $('.additional-stats').css('display', 'none');
  });

});