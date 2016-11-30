jQuery(document).ready(function($) {
  function image_cover($element) {
    $("<img>").attr("src", $($element).find('img').attr("src")).load(function() {
      var parallax;
      var realWidth = this.width;
      var realHeight = this.height;
      $($element).find('img').css('visibility', 'hidden');
      $(document).ready(function(){
        if($(window).width() > 768) {
           parallax = 'fixed';
        }else {
           parallax = 'scroll';
        }
      });
      $($element).each(function(index, element) {
        var image_src = $(this).find('img').attr('src');
        //parallax
        var parallaxHeight = realHeight * 0.8;
        $($element).find('img').eq(index).parent().css({
          'height': parallaxHeight,
          'background' : 'url('+image_src+')',
          'background-repeat' :'no-repeat',
          'background-position' :'center',
          'background-size': 'cover',
          'background-attachment' :parallax,
          'background-origin' : 'border-box'
        });
        // switch (index) {
        //   case 1:
        //   case 2:
        //     $(this).find('img').parent().parallax({
        //       imageSrc: image_src,
        //       bleed: 10
        //     });
        //     break;
        //   default:
        //     $(this).find('img').parent().parallax({
        //       imageSrc: image_src,
        //     });
        // }
        // $(this).find('img').parent().prepend($('.parallax-mirror').eq(0));
        //cover
        // $(this).find('img').parent().css('height', realHeight);
        // $(this).find('img').parent().css({
        //   'display': 'block',
        //   'background-image': 'url(' + image_src + ')',
        //   'background-size': 'cover',
        //   'background-repeat': 'no-repeat',
        //   'background-position': 'center',
        // });
      })
    });
  }

  image_cover('.parallax-image');

})
