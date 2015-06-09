$(document).ready(function(){

  // Tab functions

  $('.tab').click(function(){
      // Undoes changes from possible previous clicks
      $('.tab').removeClass('active');
      $('.subtab-list').addClass('hidden');
      $('.subtab-link').css('color', '#b2b2b2')
      $('.content').addClass('hidden');

      // Creates changes on click
      $(this).addClass('active');
      $('.subtab-div').removeClass('hidden');

      if (this.innerHTML.indexOf("Dashboard") != -1){
        $('#dashboard').removeClass('hidden');
      }
      else if (this.innerHTML.indexOf("Sign In") != -1){
        $('#sign-in').removeClass('hidden');
      };
      // Additional tabs would continue here
  });

  // Subtab functions

  $('.subtab-link').click(function(){
    // Undoes changes from possible previous clicks
    $('.subtab-link').css('color', '#b2b2b2')
    $('.content').addClass('hidden');

    // Changes active tab color
    $(this).css('color', '#808080')

    // Displays content associated with subtab
    if (this.innerHTML.indexOf("Business Overview") != -1){
        $('#business-overview').removeClass('hidden');
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
  $('.more-1').click(function(){
    var id = $(this).data("id")

    $('.additional-stats[data-id='+id+']').removeClass('hidden');
    $(this).addClass('hidden');
  });

  $('.less').click(function(){
    var id = $(this).data("id")

    $('.additional-stats[data-id='+id+']').addClass('hidden');
    $('.more-1').removeClass('hidden');
  });

});
