$(document).ready(function() {
  
  $(window).scroll(function() {
    if ($(document).scrollTop() > 120 && $(document).scrollTop() < 160) {
      $("canvas").fadeIn();
    } else {
      $("canvas").fadeOut();
    }
  });

});