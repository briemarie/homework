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
    // Hides content from previous clicks
    $('.content').css('display', 'none');

    // Changes active tab color
    $(this).css('color', 'black')

    // Displays content associated with subtab
    if (this.innerHTML.indexOf("Business Overview") != -1){
        $('#business-overview').css('display', 'block');
      }
      // Additional subtabs would continue here
  });

  // Button/link functions
  $('.pencil').hover(
    function(){
      $(this).css('background-color', '#fff')
    },

    function(){
      $(this).css('background-color', '#f4f4ee')
    }
  );

  $('.more').click(function(){
    $('.additional-stats').css('display', 'block');
  });

  $('.less').click(function(){
    $('.additional-stats').css('display', 'none');
  });

});