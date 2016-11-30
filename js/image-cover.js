jQuery(document).ready(function($) {
  function image_cover($element) {
    $("<img>").attr("src", $($element).find('img').attr("src")).load(function() {
      var realWidth = this.width;
      var realHeight = this.height;
      $($element).find('img').css('visibility', 'hidden');

      $($element).each(function() {
        var image_src = $(this).find('img').attr('src');

        //cover
        $(this).find('img').parent().css('height', realHeight);
        $(this).find('img').parent().css({
          'display': 'block',
          'background-image': 'url(' + image_src + ')',
          'background-size': 'cover',
          'background-repeat': 'no-repeat',
          'background-position': 'center',
        });
      })
    });
  }

  image_cover('.cover-image');

})
