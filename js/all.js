$(document).ready(function() {
 
     
   // $(".popup__container-scroll").mCustomScrollbar();
   var $hamburger = $(".hamburger");
   $hamburger.on("click", function(e) {
     $hamburger.toggleClass("is-active");
     $(".header__nav").toggleClass("nav_active");
     // $(".header").toggleClass("header_active");
   });
   
    $(".an").on("click","a", function (event) {
       event.preventDefault();
       var id  = $(this).attr('href'),
           top = $(id).offset().top;
           top1 = top - $("div.header").height();
           console.log(id);
       $('body,html').animate({scrollTop: top1}, 1500);
       $hamburger.removeClass("is-active");
       $(".header__nav").removeClass("nav_active");
   });
    var nav = $('.header');
  var banner = $("div.banner").height();
  $(window).scroll(function () {
    if ($(this).scrollTop() > banner - $("div.header").height()) {
      nav.addClass("f-nav");
    } else {
      nav.removeClass("f-nav");
    }
  });
  $(".header__link_language").click(function () {
     $(".header__drop").toggleClass("active");
     $(".header__link_language").toggleClass("active");
   });
  setTimeout(function() { $('.a1').addClass('animated fadeInUp block'); }, 300);

})



