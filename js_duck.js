$(document).ready(function() {
  
  $(window).scroll(function() {
    if ($(document).scrollTop() > 540) {
      $("canvas").css("display", "block");
    } else {
      $("canvas").css("display", "none");
    }
  });

});


