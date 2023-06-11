$(document).ready(function() {
  
  $(window).scroll(function() {
    if ($(document).scrollTop() > 150 && $(document).scrollTop() < 260) {
      $("canvas").fadeIn();
    } else {
      $("canvas").fadeOut();
    }
  });

});