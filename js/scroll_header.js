jQuery(document).ready(function($) {


    $(document).ready(function() {
        $('body').prepend($('#header').clone(true));
        $('#header').eq(0).addClass('scroll_header');
        // $(window).scroll(function() {
        //   if ($(this).scrollTop() > $('#header').height()) {
        //     $('.scroll_header').addClass("scroll_header_show");
        //   } else {
        //     $('.scroll_header').removeClass("scroll_header_show");
        //   }
        // });

        var lastScrollTop = 0;
        $(window).scroll(function() {
            var st = $(this).scrollTop();
            if (st > lastScrollTop && $(this).scrollTop() > $('#header').innerHeight()) {
                $('.scroll_header').removeClass("scroll_header_show");
            } else {
                $('.scroll_header').addClass("scroll_header_show");

            }
            lastScrollTop = st;
        });
    });

});
