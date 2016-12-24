(function($) {

    function scroll_fakeScrollbar($scrollBarItem) {

        var $element = new Object;
        $element.item = $($scrollBarItem);
        $element.width = $element.item.innerWidth();
        $element.height = $element.item.innerHeight();
        $element.scrollTop = $element.item.scrollTop();
        $element.windowHeight = $element.height - $element.scrollTop;

        var $fakeScrollBar = new Object;
        $fakeScrollBar.name = "fake_scrollBar";
        $fakeScrollBar.item = $($fakeScrollBar.name);
        $fakeScrollBar.color = "#98ACC0";
        $fakeScrollBar.width = "5px";


        //hidden browserScoll
        $element.item.css('clip', 'rect(auto, ' + $element.width + 'px, auto, auto)');

        //append fake_scrollBar element
        $element.item.wrapInner('<div class ="scrollBar-wrapper wrapper"></div>');
        $element.item.children().append('<div class ="' + $fakeScrollBar.name + '"></div>');

        $element.item.children().css('position', 'relative');
        $element.item.find('.' + $fakeScrollBar.name).css({
            'position': 'absolute',
            'right': '0',
            'top': $element.scrollTop,
            'display': "block",
            'width': $fakeScrollBar.width,
            'height': ($element.height / $element.windowHeight),
            'background': $fakeScrollBar.color,
        })
        console.log($element.height / $element.windowHeight);
    }


    $(document).ready(function() {
        scroll_fakeScrollbar('.region-sidebar-first');
    })

    $('.region-sidebar-first').scroll(function(){
        scroll_fakeScrollbar('.region-sidebar-first');
    })

})(jQuery)
