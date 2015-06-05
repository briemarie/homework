$(document).ready(function() {

  $('.tab').click(function(){
      console.log("hello")
      $(this).attr('id', 'active');
  });

});