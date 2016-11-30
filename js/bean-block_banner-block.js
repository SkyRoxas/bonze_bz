jQuery(document).ready(function($) {

  //origin image size
  function image_cover($block) {
    $("<img>").attr("src", $($block).find('img').attr("src")).load(function() {
      var realWidth = this.width;
      var realHeight = this.height;
      //alert("Original width=" + realWidth + ", " + "Original height=" + realHeight);

      var image_src = $($block).find('img').attr('src');
      $($block).find('img').css('display', 'none');


      //parallax
      var resizeHeight;
      var parallaxHeight = 780;

      if (parallaxHeight > $(window).height()) {
        resizeHeight = $(window).height() * 0.6;
      } else {
        resizeHeight = parallaxHeight;
      }
      $($block).find('img').parent().css('height', resizeHeight);

      $(window).resize(function() {
        if (parallaxHeight > $(window).height()) {
          resizeHeight = $(window).height() * 0.6;
        } else {
          resizeHeight = parallaxHeight;
        }
        $($block).find('img').parent().css('height', resizeHeight);
      })


      $($block).find('img').parent().parallax({
        imageSrc: image_src,
      });
      $($block).find('img').parent().append($('.parallax-mirror'));


      //cover
      // $($block).find('img').parent().css('height', realHeight);
      // $($block).find('img').parent().css({
      //     'background-image': 'url(' + image_src + ')',
      //     'background-size': 'cover',
      //     'background-repeat': 'no-repeat',
      //     'background-position': 'center',
      // });


    });
  }



  image_cover('.bean-banner');
})
