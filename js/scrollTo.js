$(function(){

    // По нажатию на якорную ссылку едем к якорю и потом оттягиваемся на 100px вверх
    $("a[href*=#]:not([href=#])").bind('click', function (event) {

        var thisHash = this.hash;
        var targetOffset = $(thisHash).offset().top;
        $("html,body").stop().animate({
            scrollTop: targetOffset -80
        }, 600 );
//            .animate({
//                scrollTop: targetOffset -100
//            }, 1100 );
        location.hash = thisHash;
        event.preventDefault();
    });


    $(window).scroll(function() {
        var top = $(document).scrollTop();

        if (top == 0) {
            $('#up_button').css('display', 'none');
        } else {
            $('#up_button').css('display', 'block');
        }
    });

});