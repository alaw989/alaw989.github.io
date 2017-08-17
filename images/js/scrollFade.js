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

        if (distanceY > shrinkOn /*&& width > 1124*/) {
            /*$('#logo-image').fadeTo(1, 0);*/
            /* $('#logo-image').css('width', '90%'); */
           
            $('.clearfix').css('background', '#6699cc');
            
            
          
       
            $('.li-hook').css('color', 'white');
            
            /* $('#logo-image2').replaceWith( $( "#logo-image2" ) );*/
        } else if (distanceY < shrinkOn) {
            /* $('#logo-image').css('width', '100%'); */
           
            $('.clearfix').css('background', 'rgba(0,0,0,0)');
           
            $('#logo-image1').css('visibility', 'hidden');
            $('#logo-image2').css('visibility', 'visible');
        }
    });
}

window.onload = init();