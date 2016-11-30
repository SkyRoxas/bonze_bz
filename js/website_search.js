jQuery(document).ready(function($) {
  function search($target) {
    var Switch = false;
    $($target).find('.fake-search-button').on('click.open_close',function(){
      if(Switch===false){
        $($target).find('.fake-search-button').css('color','black');
        Switch =true;
      }else {
        $($target).find('.fake-search-button').css('color','');
        Switch =false;
      }
      if($($target).find('.text-search-box').val() == ''){
          $($target).find('.text-search-box').toggleClass('show_text');
      }else {
        $('.fake-search-button').find('.search-button').get(0).click();
      }
    })
  }

  search('#block-search-form');
})
