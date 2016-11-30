jQuery(document).ready(function($){
  //view-mode-full與view-mode-online_mode layout
$('.view-mode-full_prepend-page-title .view-mode-full ,.view-mode-full_prepend-page-title .view-mode-online_mode').children('.field:not(".fullscreen")').wrapAll('<div class ="content-wrapper inner-page-title max-width-sm js"><div class ="wrapper"></div></div>');
$('.inner-page-title').prepend($('h1#page-title'));
})
