(function($) {

    function scroll_fakeScrollbar($scrollBarItem) {

        var $element = new Object;
        $element.item = $($scrollBarItem);
        $element.scrollHeight = $element.item[0].scrollHeight;
        $element.width = $element.item.innerWidth();
        $element.height = $element.item.innerHeight();

        $(window).resize(function() {
            $element.scrollHeight = $element.item[0].scrollHeight;
            $element.width = $element.item.innerWidth();
            $element.height = $element.item.innerHeight();
        })

        var $fakeScrollBar = new Object;
        $fakeScrollBar.name = "fake_scrollBar";
        $fakeScrollBar.item = $($fakeScrollBar.name);
        $fakeScrollBar.barColor = "rgba(0,0,0,0)";
        $fakeScrollBar.navColor = "#98ACC0";
        $fakeScrollBar.width = "5px";

        var $browserScoll = new Object;
        $browserScoll.width = 15;


        //hidden browserScoll
        $element.item.css('clip', 'rect(auto, ' + ($element.width - $browserScoll.width) + 'px, auto, auto)');

        $(window).resize(function() {
            $element.item.css('clip', 'rect(auto, ' + ($element.width - $browserScoll.width) + 'px, auto, auto)');
        })


        //append fake_scrollBar element

        $element.item.append('<div class ="' + $fakeScrollBar.name + '"><div class ="wrapper"><div class ="scroll-nav"></div></div></div>');

        //$element.item.wrapInner('<div class ="scrollBar-wrapper wrapper"></div>');
        //$element.item.children().css('position', 'relative');


        //scrollbar
        $element.item.find('.' + $fakeScrollBar.name).css({
            'position': 'absolute',
            'right': '0',
            'top': $element.item.scrollTop(),
            'display': "block",
            'width': $fakeScrollBar.width,
            'height': $element.height,
            'background': $fakeScrollBar.barColor,
        })

        $element.item.find('.' + $fakeScrollBar.name).children().css({
            'position': 'relative',
            'display': 'block',
            'width': '100%',
            'height': '100%',
        })

        //scroll nav
        $element.item.find('.' + $fakeScrollBar.name).children().children().css({
            'position': 'absolute',
            'right': '0',
            'top': $element.item.scrollTop(),
            'display': "block",
            'width': '100%',
            'height': ($element.height / $element.scrollHeight) * 100 + "%",
            'background': $fakeScrollBar.navColor,
        })

        //resize evevt
        $(window).resize(function() {
            //scrollbar
            $element.item.find('.' + $fakeScrollBar.name).css({
                    'height': $element.height,
                })
            //scroll nav
            $element.item.find('.' + $fakeScrollBar.name).children().children().css({
                'height': ($element.height / $element.scrollHeight) * 100 + "%",
            })
        })

        $($element.item).scroll(function() {
            $element.item.find('.' + $fakeScrollBar.name).css({
                'top': $element.item.scrollTop(),
            })
            if (($element.item.scrollTop() + $element.height) !== $element.scrollHeight) {
                $element.item.find('.' + $fakeScrollBar.name).children().children().css({
                    'top': ($element.height / $element.scrollHeight) * $element.item.scrollTop(),
                })
            }
            //console.log(($element.item.scrollTop() + $(window).height()), $element.scrollHeight);
        })

    }


    $(document).ready(function() {
        setTimeout(function() {
            scroll_fakeScrollbar('.region-sidebar-first');
        }, 100)
    })



})(jQuery)
