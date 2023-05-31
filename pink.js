$(document).ready(function() {

  $(window).scroll(function() {
    if ($(document).scrollTop() > 120) {
      $("#header").addClass("pink");
      $(".hf_style").addClass("pink");
      $(".header_title").addClass("pink");
      $("#pageP").addClass("pink");
      $("#pageP > a").addClass("pink");
      $("#pageP #pageNext").addClass("pink");
      $(".conf-cont").addClass("pink");
    } else {
      $("#header").removeClass("pink");
      $(".hf_style").removeClass("pink");
      $(".header_title").removeClass("pink");
      $("#pageP").removeClass("pink");
      $("#pageP > a").removeClass("pink");
      $("#pageP #pageNext").removeClass("pink");
      $(".conf-cont").removeClass("pink");
    }
  });


});


