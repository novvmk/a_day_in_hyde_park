$(document).ready(function() {
  $("canvas").css("display", "none");
  $(window).scroll(function() {
    if ($(document).scrollTop() > 120) {
      $("canvas").css("display", "block");
    } else {
      $("canvas").css("display", "none");
    }
  });


});


