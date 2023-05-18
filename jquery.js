$(document).ready(function() {

    // var pageTitle = $(".header_tit").attr("title");
    // console.log( pageTitle );
	// $(window).scroll(function() {

    //     if ($(document).scrollTop() > $(window).height() /1.5 ) {
    //         console.log( $(document).scrollTop() );
    //     } else {
          
    //     }
    //   });


    var link = $("a.link");
    var link_class = $("span.link_txt").index();

    $(link).click( function(){
        var link_name = $(this).attr('alt');
        console.log(link_name);
        $('#' + link_name).slideToggle();
    });




});


