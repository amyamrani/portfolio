$('#about-link, #sub-menu-about-link').click(() => {
    $('html, body').animate({
        scrollTop: $('header').offset().top
    }, 200);
});

$('#projects-link, #sub-menu-projects-link').click(() => {
    $('html, body').animate({
        scrollTop: $('#project-section').offset().top
    }, 200);
});

$('#contact-link, #sub-menu-contact-link').click(() => {
    $('html, body').animate({
        scrollTop: $('#contact-section').offset().top
    }, 200);
});

$('.hamburger').click(() => {
    $('.sub-menu').toggleClass('active-sub-menu')
});

