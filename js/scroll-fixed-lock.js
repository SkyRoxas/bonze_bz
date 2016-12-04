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

        $($scrollFixedItem).parent().css({
            'width': $($scrollFixedItem).width(),
        })

        $startItem = '#header';
        $startItemOffset = $($startItem).offset();

        $endItem = '#footer';
        $endItemOffset = $($endItem).offset();

        $(window).scroll(function() {
            if ($(window).scrollTop() > $($startItem).innerHeight() + $startItemOffset.top && $(window).scrollTop() < $endItemOffset.top - $(window).height()) {
                $($scrollFixedItem).css({
                    'position': 'fixed',
                })
            } else {
                $($scrollFixedItem).css({
                    'position': 'absolute',
                })
            }
        })

        $(window).scroll(function() {
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
        })



    }
setTimeout(function(){
  scroll_fixed_lock('.region-sidebar-first');
},2000);

$(window).resize(function(){
  scroll_fixed_lock('.region-sidebar-first');
});

})
