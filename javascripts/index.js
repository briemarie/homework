$(document).ready(function() {

  $('.tab').click(function(){
      $('.tab').removeClass('active');
      $(this).addClass('active');
      $('.subtab-div').css('display', 'block');

      if (this.indexOf("dashboard") > -1) {
        $('.subtab').css('visibility', 'visible');
      }
  });

});