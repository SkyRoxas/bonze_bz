jQuery(document).ready(function($) {


  //for image cover

  function image_cover($element) {
    $("<img>").attr("src", $($element).find('img').attr("src")).load(function() {
      var realWidth = this.width;
      var realHeight = this.height;
      $($element).find('img').css('visibility', 'hidden');

      $($element).each(function() {
        var image_src = $(this).find('img').attr('src');
        //parallax
        var parallaxHeight = realHeight * 0.8;
        $($element).find('img').parent().css('height', parallaxHeight);
        $(this).find('img').parent().parallax({
          imageSrc: image_src,
        });
        $(this).find('img').parent().prepend($('.parallax-mirror').eq(0));

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


  $(document).ready(function() {
    if ($('.slick-parallax .slick__slide').length > 0) {
      image_cover('.slick-parallax .slick__slide');
      $('.slick-parallax').addClass('parallax-mirror-top');
    } else {
      image_cover('.slick-parallax .field-name-field-slideshow-image');
    }
  })


  //for effect
  //delay add class function
  // function delay_addclass_child($object, $child_object, $second, $event) {
  //   var delay = 0;
  //   $($object).find($child_object).each(function() {
  //     var $item = $(this);
  //     setTimeout(function() {
  //       switch ($event) {
  //         case 'addclass':
  //           $item.addClass('fadin_scale');
  //           break;
  //         case 'removeclass':
  //           $item.removeClass('fadin_scale');
  //           break;
  //         default:
  //       }
  //     }, delay += $second);
  //   })
  // }

  //
  // $(document).ready(function() {
  //   $('.views-slick_media-slideshow').find('.slick-track').find('.slick__slide').find('.field:not(".field-name-field-slideshow-media")').addClass('fadin_scale_origin');
  //   delay_addclass_child($('.views-slick_media-slideshow').find('.slick-track').find('.slick-active'), '.field:not(".field-name-field-slideshow-media")', 500, 'addclass');
  //   $('.views-slick_media-slideshow').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
  //     //next slide
  //     var NextSlideField = $('.views-slick_media-slideshow').find('.slick-track').find('.slick__slide').eq(nextSlide);
  //     //current slide
  //     var CurrentSlideField = $('.views-slick_media-slideshow').find('.slick-track').find('.slick__slide').eq(currentSlide);
  //     //addclass fadin_scale
  //     delay_addclass_child(NextSlideField, '.field:not(".field-name-field-slideshow-media")', 500, 'addclass');
  //     //removeclass fadin_scale
  //     delay_addclass_child(CurrentSlideField, '.field:not(".field-name-field-slideshow-media")', 500, 'removeclass');
  //     //console.log(currentSlide, nextSlide);
  //   });
  // })

})
