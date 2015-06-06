$(document).ready(function(){

  // Tab functions

  $('.tab').click(function(){
      // Undoes changes from previous clicks
      $('.tab').removeClass('active');
      $('.subtab-list').css('display', 'none');

      // Creates changes on click
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
    // Undoes changes from previous clicks
    $('.subtab-link').css('color', '#b2b2b2')
    $('.content').css('display', 'none');

    // Changes active tab color
    $(this).css('color', '#808080')

    // Displays content associated with subtab
    if (this.innerHTML.indexOf("Business Overview") != -1){
        $('#business-overview').css('display', 'block');
      }
      // Additional subtabs would continue here
  });

  // Button/link functions

  // Changes pencil button color on hover
  $('.pencil').hover(
    function(){
      $(this).css('background-color', '#fff')
    },

    function(){
      $(this).css('background-color', '#f4f4ee')
    }
  );

  // Shows and hides additional-stats
  $('.more').click(function(){
    var id = $(this).data("id")

    $('.additional-stats[data-id='+id+']').css('display', 'block');
    $(this).css('visibility', 'hidden');
  });

  $('.less').click(function(){
    var id = $(this).data("id")

    $('.additional-stats[data-id='+id+']').css('display', 'none');
    $('.more').css('visibility', 'visible');
  });

});