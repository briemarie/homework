$(document).ready(function() {

  $('.tab').click(function(){
      $('.tab').removeClass('active');
      $(this).addClass('active');
      $('.subtab-div').css('display', 'block')
  });

});