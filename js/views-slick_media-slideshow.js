jQuery(document).ready(function($) {


  //auto play viedo
  $(document).ready(function() {
    var videoIndex = [];
    $('.slick-slide').each(function() {
      $(this).find('video')[0] !== undefined ? videoIndex.push($(this).attr('data-slick-index')) : '';
    });
    if ($.inArray('0', videoIndex) != -1) {
      var v = $('.slide--0').find('video')[0];
      v.paused == true ? v.play() : v.pause();
    }
    $(".slick").on('beforeChange', function(event, slick, currentSlide, nextSlide) {
      if ($.inArray(currentSlide + '', videoIndex) != -1) {
        var v = $('.slide--' + currentSlide).find('video')[0];
        v.paused == true ? v.play() : v.pause();
      }
      if ($.inArray(nextSlide + '', videoIndex) != -1) {
        var v = $('.slide--' + nextSlide).find('video')[0];
        v.paused == true ? v.play() : v.pause();
      }
    });
  });

  //for image cover

  function item_image_cover($block) {
    var block = $($block);
    for (var i = 0; i < block.find('img').length; i++) {
      var image_src = block.find('img').eq(i).attr('src');
      block.find('img').css('display', 'none');
      block.find('img').eq(i).parent().css({
        'background-image': 'url(' + image_src + ')',
        'background-size': 'cover',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
      });
    }
  }
  item_image_cover('.views-slick_media-slideshow');



  $(document).ready(function() {
    var slide_heigh = $(window).height() - $('#header').innerHeight();
    $('.views-slick_media-slideshow img').parent().css('height', slide_heigh);
    $('.views-slick_media-slideshow video').parent().css('height', slide_heigh);
  });

  $(window).resize(function() {
    var slide_heigh = $(window).height() - $('#header').innerHeight();
    $('.views-slick_media-slideshow img').parent().css('height', slide_heigh);
  });


  //for effect
  //delay add class function
  function delay_addclass_child($object, $child_object, $second, $event) {
    var delay = 0;
    $($object).find($child_object).each(function() {
      var $item = $(this);
      setTimeout(function() {
        switch ($event) {
          case 'addclass':
            $item.addClass('fadin_scale');
            break;
          case 'removeclass':
            $item.removeClass('fadin_scale');
            break;
          default:
        }
      }, delay += $second);
    })
  }


  $(document).ready(function() {
    $('.views-slick_media-slideshow').find('.slick-track').find('.slick__slide').find('.field:not(".field-name-field-slideshow-media")').addClass('fadin_scale_origin');
    delay_addclass_child($('.views-slick_media-slideshow').find('.slick-track').find('.slick-active'), '.field:not(".field-name-field-slideshow-media")', 500, 'addclass');
    $('.views-slick_media-slideshow').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
      //next slide
      var NextSlideField = $('.views-slick_media-slideshow').find('.slick-track').find('.slick__slide').eq(nextSlide);
      //current slide
      var CurrentSlideField = $('.views-slick_media-slideshow').find('.slick-track').find('.slick__slide').eq(currentSlide);
      //addclass fadin_scale
      delay_addclass_child(NextSlideField, '.field:not(".field-name-field-slideshow-media")', 500, 'addclass');
      //removeclass fadin_scale
      delay_addclass_child(CurrentSlideField, '.field:not(".field-name-field-slideshow-media")', 500, 'removeclass');
      //console.log(currentSlide, nextSlide);
    });
  })

})
