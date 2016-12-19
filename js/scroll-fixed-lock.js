jQuery(document).ready(function($) {

    $('#content').css('minHeight', $(window).height()*1.1);


    //sidebar lock
    function scroll_fixed_lock($scrollFixedItem) {

        //style
        $($scrollFixedItem).css('maxHeight', $(window).height());
        $($scrollFixedItem).parent().parent().css({
            'position': 'relative',
        })

        $($scrollFixedItem).css({
            'position': 'absolute',
            'top': '0',
            'bottom': 'auto',
            'height': '100%',
            'overflow-y': 'scroll',
        })

        if ($($scrollFixedItem).innerHeight() > $(window).width()) {
            $($scrollFixedItem).css({
                'width': "70%",
            })
        } else {
            $($scrollFixedItem).css({
                'width': "auto",
            })
        }


        if ($(window).width() > 1200) {
            $($scrollFixedItem).parent().css({
                'width': $($scrollFixedItem).width(),
            })
        } else(
            $($scrollFixedItem).parent().css({
                'width': 'auto',
            })
        )

        $startItem = '#banner';
        $startItemOffset = $($startItem).offset();

        $endItem = '#footer';
        $endItemOffset = $($endItem).offset();


        function scrollPosition() {
            if ($(window).scrollTop() > $($startItem).innerHeight() + $startItemOffset.top && $(window).scrollTop() < $endItemOffset.top - $(window).height()) {
                $($scrollFixedItem).css({
                    'position': 'fixed',
                })
            } else {
                $($scrollFixedItem).css({
                    'position': 'absolute',
                })
            }
        }

        function scrollOffset() {
            if ($(window).scrollTop() < $endItemOffset.top - $(window).height()) {
                $($scrollFixedItem).css({
                    'top': '0',
                    'bottom': 'auto',
                })
            } else {
                $($scrollFixedItem).css({
                    'top': 'auto',
                    'bottom': '0',
                })
            }
        }

        $(window).scroll(function() {
            scrollPosition();
            scrollOffset();
        })


        $(document).ready(function() {
            scrollPosition();
            scrollOffset();
        })

    }

    //執行fscroll_fixed_lock function
    scroll_fixed_lock('.region-sidebar-first');

    setTimeout(function() {
        scroll_fixed_lock('.region-sidebar-first');
    }, 1500);


    $(window).resize(function() {
        scroll_fixed_lock('.region-sidebar-first');
    });

    //防呆 disqus 後面 loading出的高
    setTimeout(function() {
        if ($('#disqus_thread').length > 0) {
            scroll_fixed_lock('.region-sidebar-first');
        }
    }, 5000);







    //sidebarNav button
    function sidebarNav() {
        $parent = '#main';
        $sidebars = '.region-sidebar-first';
        $content = '#content';


        $($parent).css({
            'position': 'relative',
            'overflow-x': 'hidden',
        });

        $(content).css({
            'position': 'relative',
            'left': '0',
        });


        //sidebarNav_button style
        $($content).prepend('<div class ="sidebarNav_button"><a href ="javascript:;">></a></div>');
        $('.sidebarNav_button').css({
            'position': 'absolute',
            'z-index': '10',
            'left': '0',
        });


        //sidebarNav_button top animate
        function scrollOffsetNav() {
            if ($(window).scrollTop() + $($startItem).innerHeight() + $startItemOffset.top < $('#main').innerHeight()) {
                $('.sidebarNav_button').css({
                    'top': $(window).scrollTop() + 40,
                })
            }
        }

        $(window).scroll(function() {

            scrollOffsetNav();
        })

        $(document).ready(function() {

            scrollOffsetNav();
        })



        //toggle click function


        var i = 0;

        //responsive 切換時,防呆
        $(window).resize(function() {
            if ($(window).width() > 1200) {
                i = 0;
                $($content).css({
                    'left': '0',
                })
            }
        })


        $('.sidebarNav_button').click(function() {
            //sidebars animate

            if (i % 2 == 0) {
                if ($(window).width() > 1200) {
                    $($sidebars).parent().animate({
                        'width': '0',
                    },300)
                } else {
                    $($content).animate({
                        'left': $('.region-sidebar-first').innerWidth(),
                    },300)
                }


            } else {
                if ($(window).width() > 1200) {
                    $($sidebars).parent().animate({
                        'width': $('.region-sidebar-first').width(),
                    },300)
                } else {
                    $($content).animate({
                        'left': '0',
                    },300)
                }

            }
            i++;
        })
    }

    sidebarNav();

})
