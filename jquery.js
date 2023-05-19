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
        console.log(next_name);
        e.preventDefault();
    });



});


