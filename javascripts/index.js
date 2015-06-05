$(document).ready(function() {

  $('.tab').click(function(){
      $('.tab').removeClass('active');
      $('.subtab-list').css('display', 'none');

      $(this).addClass('active');
      $('.subtab-div').css('display', 'block');

      if (this.innerHTML.indexOf("Dashboard") != -1){
        $('#dashboard').css('display', 'list item');
      }
      else if (this.innerHTML.indexOf("Sign In") != -1){
        $('#sign-in').css('display', 'list item');
      };
  });

});