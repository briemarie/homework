$(document).ready(function() {

  $('.tab').click(function(){
      $('.tab').removeClass('active');
      $('.subtab').css('visibility', 'hidden');

      $(this).addClass('active');
      $('.subtab-div').css('display', 'block');

      if (this.innerHTML.indexOf("Dashboard") != -1){
        $('#dashboard').css('visibility', 'visible');
      }
      else if (this.innerHTML.indexOf("Sign In") != -1){
        $('#sign-in').css('visibility', 'visible');
      };
  });

});