jQuery(document).ready(function($) {
    function timeLine($blockName) {
        $($blockName).addClass('timeLine');

        //time line bar
        $('.timeLine').prepend('<div class ="timeline-bar"></div>');

        var timeLineHeight = $(window).height() * 0.85;
        var scrollHeight = timeLineHeight + $(window).scrollTop();
        $('.timeline-bar').css('height', scrollHeight);

        $(window).scroll(function() {
          var scrollHeight = timeLineHeight + $(window).scrollTop();
            $('.timeline-bar').css('height', scrollHeight);
        })


        //year group
    }
    timeLine('.views-block_time-line .view > .view-content');
})
