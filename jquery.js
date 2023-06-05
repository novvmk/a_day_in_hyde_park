$(document).ready(function() {


    var link = $("a.link");

    $(link).click( function(e){
        var link_name = $(this).attr('alt');
        $('#' + link_name).slideToggle();
        e.preventDefault();
    });

    var next = $("a#pageNext");

    $(next).click( function(e){
        var next_name = $(this).attr('alt');
        $('#' + next_name).slideToggle();
        e.preventDefault();
    });

    var sketch = $("a.sketch");

    $(sketch).click( function(e){
        var canvas = $("canvas");
        $(canvas).toggle();
        e.preventDefault();
    });

    var lastScrollTop = 0;

    $(window).on('scroll', function() {
      $("#hScroll").css("left", -$(window).scrollTop());

      var scrollTop = $(this).scrollTop();
        var scrollDirection;

        if (scrollTop > lastScrollTop) {
            /* forward */
            $("#hScroll > div:nth-child(3n+1)").addClass("onscroll1");
            $("#hScroll > div:nth-child(3n+2)").addClass("onscroll2");
            $("#hScroll > div:nth-child(3n+3)").addClass("onscroll3");
        } else {
            /* backward */
            $("#hScroll > div:nth-child(3n+1)").removeClass("onscroll1");
            $("#hScroll > div:nth-child(3n+2)").removeClass("onscroll2");
            $("#hScroll > div:nth-child(3n+3)").removeClass("onscroll3");
        }

        lastScrollTop = scrollTop;
    });


});


