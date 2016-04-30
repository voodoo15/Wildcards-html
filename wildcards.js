$(document).ready(function() {
    //Options for Slick carousel plugin
    $('.carousel').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: true
    })
    //Initialize slack table for schedule
    $('#table').stacktable();
});
