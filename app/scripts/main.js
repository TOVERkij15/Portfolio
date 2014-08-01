
//navigation buttons

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

$(".work-button").click(function() {
    $('body').animate({
        scrollTop: $(".experience-container").offset().top
    }, 800);
});


