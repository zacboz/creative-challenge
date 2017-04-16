$(document).ready(function(){
  // $('#newsletter').removeClass('show-newsletter-nav');

  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 100) {
      $('#newsletter').addClass('show-newsletter-nav');
    }
  });

  $('.close-newsletter').on('click', function() {
    $('#newsletter').addClass('hide-newsletter-nav');
  });

  $('.open-newsletter').on('click', function() {
    $('.newsletter-wrapper').removeClass('hide-newsletter-popup');
    $('#newsletter').addClass('hide-newsletter-nav');
  });

  $('.newsletter-popup-close').on('click', function() {
    $('.newsletter-wrapper').addClass('hide-newsletter-popup');
  });

  $('.sign-up-success').on('click', function() {
    $('.newsletter-wrapper').addClass('hide-newsletter-popup');
  });

});
