jQuery(document).ready(function($){
$('#main-bottom .region-main-bottom').children().not('.main-bottom_last-children-wrapper_append').last().wrap('<div class = "last-children-wrapper"></div>');
$('.last-children-wrapper').append($('#main-bottom .main-bottom_last-children-wrapper_append'));
})
