
$(".home-button").click(function() {
    $('body').animate({
        scrollTop: $(".header").offset().top
    }, 800);
});

$(".contact-button").click(function() {
    $('body').animate({
        scrollTop: $(".footer").offset().top
    }, 800);
});

$(".bio-button").click(function() {
    $('body').animate({
        scrollTop: $(".container").offset().top
    }, 800);
});

$(".projects-button").click(function() {
    $('body').animate({
        scrollTop: $(".project-container").offset().top
    }, 800);
});

$(document).ready(function(){
    $('.home-button').on('click', function(){
        if($('.header').css('visibility') == 'hidden') {
            $('.header').css('visibility', 'visible');
        } else {
            $('.header').css('visibility', 'hidden');
        }
    });

    $('#close-nav').on('click', function(){
        $('.nav-display').css('visibility', 'hidden');
    });

    $(".nav-display a").bind("click", function(e){
        e.preventDefault();
        var location = $(this).attr("href");     
        $('html, body').animate({
            scrollTop: $(location).offset().top
        }, 1500);
    });

    $('.print').click(function(){
        window.print();
    });
});
