"user strict";
new WOW().init();

$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});



 /*------------------------------- 4.Header sticky -------------------------*/
    // Hide Header on on scroll down
    var NavBar = $('.site_header ');
    var didScroll;
    var lastScrollTop = 0;
    var navbarHeight = NavBar.outerHeight();
    $(window).scroll(function(event) {
        didScroll = true;
    });
    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 100);

    function hasScrolled() {
        var st = $(this).scrollTop();
        if (st + $(window).height() < $(document).height()) {
            NavBar.addClass('sticky_header');
            if (st == 0) {
                NavBar.removeClass('sticky_header');
            }
        }
        lastScrollTop = st;
    }

/*topHeight = NavBar.height();
$('.main-content').css({  'margin-top': topHeight});*/

var swiper = new Swiper('.testimonial-slider', {
      direction: 'vertical',
      slidesPerView: 3,
       centeredSlides: true,
       loop: true,
       autoplay: {
    delay: 3000,
  },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 1,
          direction: 'horizontal',
        },
        320: {
          slidesPerView: 1,
           direction: 'horizontal',
        },
        992: {
          direction: 'horizontal',
          slidesPerView: 3,
        },
      }
    });

/*-------------- Custom File Input -------------*/ 

$('.fileInput input').each(function() {
    $(this).change(function(e){
        // Get this file input value
        var val = $(this).val();

        //alert('val')
        // if (val == ) {

        // }

        // else(){
          
        // }
        
        var filename = val.replace(/^.*[\\\/]/, '');

        // Display the filename
         $(this).siblings('span').text(filename);
    });
});

jQuery(function($) {
 var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
 $('.primary_menu li>a').each(function() {
  if (this.href === path) {
   $(this).addClass('active');
  }
 });
});


// $('.timepicker').datetimepicker({
//   format: 'LT'
// });
// $('.datepicker').datetimepicker();

setTimeout(function(){
(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  let birthday = "June 20, 2021 17:25:00",
      countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    

        let now = new Date().getTime(),
            distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
          let headline = document.getElementById("headline"),
              countdown = document.getElementById("countdown"),
              content = document.getElementById("content");
              topBanner = document.getElementById("topBanner");

         // headline.innerText = "It's my birthday!";
          countdown.style.display = "none";
          topBanner.style.display = "none";
          content.style.display = "block";

          clearInterval(x);
        }
        //seconds
      }, 0)
  }());
}, 700);

if( $(window).width() < 992){
  $(document).on('click', '.site_header a.nav-link', function(){  
    $('.navbar-toggler').click();  
  });
}