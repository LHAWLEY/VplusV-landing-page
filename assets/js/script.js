$(document).ready(function () {

  $(window).scroll(function() {
    var topOfViewport = $(this).scrollTop(),
        topOfPage = $('.header').height();

    if (topOfViewport > topOfPage) {
      $('.nav').addClass('nav-scrolled');
    } else {
      $('.nav').removeClass('nav-scrolled');
    }
  });

  $('.arrow_down').on('click', function() {
    var topOfNav = $('.nav').offset().top;

    $('html, body').animate({ scrollTop: topOfNav }, 1000);
  });

  function bounce() {
    $(this).toggleClass('bounce');
  }

  $('.arrow-container').on('mouseenter', bounce);
  $('.arrow-container').on('mouseleave', bounce);
});