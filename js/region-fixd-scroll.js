//full screen為前題
jQuery(document).ready(function($) {

  
  $('.full-screen #main-bottom,.full-screen #footer').wrapAll('<div class ="fix-scroll"></div>');
  $('.fix-scroll').before('<div class ="fix-scroll-tool"></div>');


  function fixed_scroll() {
    if ($(window).height() > $('.fix-scroll').outerHeight(true)) {
      $('.fix-scroll').css({
        'position': 'fixed',
        'left': '0px',
        'bottom': '0px',
        'width': '100%',
      })
      $('.fix-scroll-tool').css({
        'height': $('.fix-scroll').outerHeight(true),
        'visibility': 'hidden',
        'width': '100%',
        'display': 'block',
      })
    } else {
      $('.fix-scroll').css({
        'position': 'static',
      })
      $('.fix-scroll-tool').css({
        'height': $('.fix-scroll').outerHeight(true),
        'display': 'none',
      })
    }
  }

  $(window).load(function() {
    fixed_scroll();

  })

  $(window).resize(function() {
    fixed_scroll();

  })

  //手機防呆
  // if ($(window).scrollTop() <= $(document).height() - $('.fix-scroll-tool').offset().top) {
  //   $('.fix-scroll').css({
  //     'visibility': 'hidden',
  //   })
  // } else {
  //   $('.fix-scroll').css({
  //     'visibility': 'visible',
  //   })
  // }
  // $(window).scroll(function() {
  //   if ($(window).scrollTop() <= $(document).height() - $('.fix-scroll-tool').offset().top) {
  //     $('.fix-scroll').css({
  //       'visibility': 'hidden',
  //     })
  //   } else {
  //     $('.fix-scroll').css({
  //       'visibility': 'visible',
  //     })
  //   }
  // })






})
