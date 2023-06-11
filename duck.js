$(document).ready(function() {
  
  $(window).scroll(function() {
    if ($(document).scrollTop() > 200) {
      console.log(scrollTop);
      $("canvas").css("display", "block");
    } else {
      $("canvas").css("display", "none");
    }
  });


});


