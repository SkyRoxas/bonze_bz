jQuery(document).ready(function($) {

    $('#content').css('minHeight', $(window).height());


    function scroll_fixed_lock($scrollFixedItem) {
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


        if ($(window).width() > 1200) {
            $($scrollFixedItem).parent().css({
                'width': $($scrollFixedItem).width(),
            })
        } else(
            $($scrollFixedItem).parent().css({
                'width': 'auto',
            })
        )

        $startItem = '#header';
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
        })

        $(window).scroll(function() {
            scrollOffset();
        })

        $(document).ready(function() {
            scrollPosition();
        })
        $(document).ready(function() {
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
    }, 2500);


    //sidebarNav button
    function sidebarNav() {
        $parent = '#main';
        $sidebars = '.region-sidebar-first';
        $content = '#content';

        $($content).before('<div class ="sidebarNav_button">nav</div>');
        $('.sidebarNav_button').css({
            'position': 'fixed',
            'z-index': '10',
        });

        $($parent).css({
            'position': 'relative',
            'overflow-x': 'hidden',
        });

        $(content).css({
            'position': 'relative',
            'left': '0',
        });



        //toggle click function
        var i = 0;
        $('.sidebarNav_button').click(function() {

            //sidebars animate

            if (i % 2 == 0) {
                if ($(window).width() > 1200) {
                    $($sidebars).parent().animate({
                        'width': '0',
                    })
                } else {
                    $($content).animate({
                        'left': $('.region-sidebar-first').innerWidth(),
                    })
                }


            } else {
                if ($(window).width() > 1200) {
                    $($sidebars).parent().animate({
                        'width': $('.region-sidebar-first').width(),
                    })
                } else {
                    $($content).animate({
                        'left': '0',
                    })
                }

            }

            //sidebarNav_button animate
            if (i % 2 == 0) {



            } else {


            }


            i++;
        })
    }

    sidebarNav();

})
