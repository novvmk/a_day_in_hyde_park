$(document).ready(function() {
  
  $(window).scroll(function() {
    if ($(document).scrollTop() > 120) {
      $("canvas").fadeIn();
    } else {
      $("canvas").fadeOut();
    }
  });

});