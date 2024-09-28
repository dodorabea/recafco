(function ($) {
  "use strict";
  /*====Dom is loaded==== */
  var $loader = document.querySelector('#preloader-background');
  
  window.onload = function() {
    setTimeout(function() {
      $loader.remove(); 
    }); 
  };
  // sticky menu
  var header = $('.menu-sticky');
  var search = $('.accordion-item.desktop-only');
  var win = $(window);
  win.on('scroll', function() {
     var scroll = win.scrollTop();
     if (scroll < 300) {
         header.removeClass("sticky");
         search.removeClass("position");
     } else {
         header.addClass("sticky");
         search.addClass("position");
     }
  });
  /*=====AOS animation=====*/
  AOS.init({
    // Global settings:
    duration: 900,
    easing: 'ease-in-cubic',
    disable: 'mobile',
  });
  AOS.refresh();
 
  /*==========Counter=========*/
  $(window).on('scroll', function() {
    $('.counting').each(function() {
      var $this = $(this),
          countTo = $this.attr('data-count');
      
      if ($this.offset().top <= $(window).scrollTop() + $(window).height()) {
        $({ countNum: $this.text() }).animate({
          countNum: countTo
        }, {
          duration: 1500,
          easing: 'linear',
          step: function() {
            var decimal = countTo.split('.')[1];
            if(decimal) {
              $this.text(parseFloat(this.countNum).toFixed(1));
            } else {
              $this.text(Math.floor(this.countNum));
            }
          },
          complete: function() {
            $this.text(this.countNum);
          }
        });
      }
    });
  });

  /* */
  
})(jQuery);