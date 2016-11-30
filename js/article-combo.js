jQuery(document).ready(function($) {

  function image_cover($block) {
    $("<img>").attr("src", $($block).find('img').attr("src")).load(function() {
      var realWidth = this.width;
      var realHeight = this.height;
      //alert("Original width=" + realWidth + ", " + "Original height=" + realHeight);
      $($block).find('img').css('visibility', 'hidden');
      for (var i = 0; i < $($block).find('img').length; i++) {
        var image_src = $($block).find('img').eq(i).attr('src');

        //parallax
        // $($block).find('img').parent().css('height', '355px');
        // $($block).find('img').eq(i).parent().parallax({
        //     imageSrc: image_src,
        // });
        // $($block).find('img').eq(i).parent().append($('.parallax-mirror'));

        //cover
        $($block).find('img').parent().css('height', realHeight);
        $($block).find('img').eq(i).parent().css({
          'display':'block',
          'background-image': 'url(' + image_src + ')',
          'background-size': 'cover',
          'background-repeat': 'no-repeat',
          'background-position': 'center',
        });
      }

    });
  }

  image_cover('.article-combo-article-combo.view-mode-full');
})
