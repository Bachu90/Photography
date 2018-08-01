/* STICKY NAV */

$(document).ready(function() {
   var NavY = $('.nav').offset().top;
    
    var stickyNav = function() {
        var ScrollY = $(window).scrollTop();
        
        if (ScrollY > NavY) {
            $('.nav').addClass('sticky');
        } else {
            $('.nav').removeClass('sticky');
        }
    };
    
    stickyNav();
    
    $(window).scroll(function(){
      stickyNav();  
    });
    
    var openMenu = function(){
        var status = $('.desktop-nav').css('display');
        if(status == "none"){
            $('.desktop-nav').css('display', 'block');
        }else {
            $('.desktop-nav').css('display', 'none');
        };
    };
    
    $('#menu-button').click(function(){
       openMenu();
    });
    
    $(window).resize(function(){
        var windowSize = $(window).outerWidth();
        if(windowSize > 768){
            $('.desktop-nav').css('display', 'block');
        }else {
            $('.desktop-nav').css('display', 'none');
        };
    });
});