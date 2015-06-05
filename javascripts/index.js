$(document).ready(function() {

  $('.tab').click(function(){
      // Undoes previous clicks changes
      $('.tab').removeClass('active');
      $('.subtab').css('visibility', 'hidden');

      $(this).addClass('active');
      $('.subtab-div').css('display', 'block');

      if (this.innerHTML.indexOf("Dashboard") != -1){
        $('.subtab').css('visibility', 'visible');
      }

  });

});