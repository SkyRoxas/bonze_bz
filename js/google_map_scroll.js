jQuery(document).ready(function($) {


    function google_map_blur() {

        var map = $('.field-name-field-map-address iframe');
        map.wrap('<div id ="google_blur"></div>');
        $('#google_blur').append('<div class ="blur-mask"></div>');
        $('#google_blur').css({
            "position": "relative",
            "overflow": "hidden"
        });
        $('#google_blur').find('.blur-mask').css({
            "position": "absolute",
            "width": "100%",
            "height": "100%",
            "left": "0px",
            "top": "0px",
            "z-index": "1000",
            "background": "rgba(255,255,255,0.1)"
        });
        $('#google_blur').click(function() {
            $('#google_blur').find('.blur-mask').fadeToggle("normal", "linear");
        });

    }





    $(document).ready(function() {
        google_map_blur();
    });



});
