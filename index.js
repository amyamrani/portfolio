$('#about-link').click(() => {
    $('html, body').animate({
        scrollTop: $('header').offset().top
    }, 200);
});

$('#projects-link').click(() => {
    $('html, body').animate({
        scrollTop: $('#project-section').offset().top
    }, 200);
});

$('#contact-link').click(() => {
    $('html, body').animate({
        scrollTop: $('#contact-section').offset().top
    }, 200);
});