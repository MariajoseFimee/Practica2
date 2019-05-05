$(function () {
    /*variables*/
    let acerca = $('#acerca').offset().top,
        info = $('#info').offset().top,
        contacto = $('#contacto').offset().top;

    window.addEventListener('resize', function(){
        let acerca= $('#acerca').offset().top,
            info = $('#info').offset().top,
            contacto = $('#contacto').offset().top;
    });

    $('#enlace-inicio').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        },600);
    });

    $('#enlace-acerca').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: acerca - 80
        },600);
    });

    $('#enlace-info').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: info - 50
        },600);
    });

    $('#enlace-contacto').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contacto -100
        },600);
    });
});