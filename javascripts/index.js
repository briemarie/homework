$(document).ready(function() {

  $('.tab').click(function(){
      $('.tab').removeClass('active');
      $(this).addClass('active');
      $('.subtab-div').css('display', 'block');

      console.log(this)

      var tabChecker = this.toString();
      if (tabChecker.indexOf('dashboard') > -1) {
        $('.subtab').css('visibility', 'visible');
      }

      console.log(tabChecker)
  });

});