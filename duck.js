$(document).ready(function() {
  
  $(window).scroll(function() {
    if ($(document).scrollTop() > 540) {
      var st = $(document).scrollTop();
      console.log(st);
      $("canvas").css("display", "block");
    } else {
      $("canvas").css("display", "none");
    }
  });


});


