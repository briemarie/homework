$(document).ready(function() {

  $('.tab').click(function(){
      $('.tab').removeClass('active');
      $(this).addClass('active');
      $('.subtab-div').css('display', 'block');

      console.log(this)

      if (this.innerHTML.indexOf("Dashboard") != -1){
        $('.subtab').css('visibility', 'visible');
      }

  });

});