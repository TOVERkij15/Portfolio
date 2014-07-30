
$(".home-button").click(function() {
    $('body').animate({
        scrollTop: $(".header").offset().top
    }, 700);
});

$(".contact-button").click(function() {
    $('body').animate({
        scrollTop: $(".footer").offset().top
    }, 700);
});

$(".bio-button").click(function() {
    $('body').animate({
        scrollTop: $(".container").offset().top
    }, 700);
});

$(".projects-button").click(function() {
    $('body').animate({
        scrollTop: $(".project-container").offset().top
    }, 700);
});