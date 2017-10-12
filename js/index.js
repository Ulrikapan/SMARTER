$(window).scroll(function(e){
  if ($(this).scrollTop()>30){
    $('nav').addClass('ScrollDown')
  }
  else{
    $('nav').removeClass('ScrollDown')
  };
  
})

// skrollr初始值
var s = skrollr.init();





// ----------------
// 調整點選選單後，以滑動的方式到錨點定位(copied)
$(document).on('click','a',function(e){
  e.preventDefault();
  // var target= $(this).attr("href");
  var target= $(e.target).attr("href");
  $('html,body').animate({
    scrollTop: $(target).offset().top
  },1000);
  
});



// -----------------
  // 手機版選單
var MobileMenu = $('.custom_navbar'),
    MobileNavToggleBtn = $('.custom_navbar-toggle');

MobileNavToggleBtn.on('click', function(){
  MobileMenu.toggleClass('toggle_open');
  MobileNavToggleBtn.toggleClass('toggle_open');
})



MobileMenu.find('li').on('click', function(){
  if(MobileMenu.hasClass('toggle_open')){
    MobileMenu.removeClass('toggle_open');
    MobileNavToggleBtn.removeClass('toggle_open');
  }
})

  // 點選選單後收回
