function init() {
    window.addEventListener('scroll', function(e) {
        var distanceY = window.pageYOffset /*|| document.documentElement.scrollTop*/ ,
            shrinkOn = 300,
            logo = document.getElementById("logo-image"),
            mainNav = document.getElementById("mainNav"),
            logo2 = document.getElementById("logo-image2"),
            width = $(window).width();


        /*console.log($("#logo-image").css("width"));
        console.log($("#mainNav").css("padding"));*/

        if (distanceY > shrinkOn && width > 1124) {
            $('#logo-image').fadeTo(1, 0);
            /* $('#logo-image').css('width', '90%'); */
            $('#mainNav').css('padding-top', '10px');
            $('#mainNav').css('padding-bottom', '20px');
            /*$('#logo-image').css('visibility', 'hidden');*/

            $('#logo-image2').css('width', '60%');
            $('#logo-image2').css('visibility', 'visible');
            /* $('#logo-image2').replaceWith( $( "#logo-image2" ) );*/
        } else if (distanceY < shrinkOn) {
            /* $('#logo-image').css('width', '100%'); */
            $('#mainNav').css('padding-top', '48px');
            $('#mainNav').css('padding-bottom', '30px');
            $('#logo-image2').css('width', '50%');
            $('#logo-image').fadeTo(1, 1);
            $('#logo-image2').css('visibility', 'hidden');
        }
    });
}
window.onload = init();