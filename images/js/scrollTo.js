function init() {
    $("#expertise").click(function() {
        $('html,body').animate({
                scrollTop: $(".featureBlock-wrapper").offset().top
            },
            'slow');
    });
    $("#tools").click(function() {
        $('html,body').animate({
                scrollTop: $(".featureBlock-darker").offset().top
            },
            'slow');
    });
    $("#work").click(function() {
        $('html,body').animate({
                scrollTop: $(".spotLight-wrapper").offset().top
            },
            'slow');
    });
    $("#contact").click(function() {
        $('html,body').animate({
                scrollTop: $(".contact-wrapper").offset().top
            },
            'slow');
    });
}

window.onload = init();