$(document).ready(function() {
  
  $(window).scroll(function() {
    if ($(document).scrollTop() > 540) {
      $("canvas").fadeIn();
    } else {
      $("canvas").fadeOut();
    }
  });

});