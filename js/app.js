$(".slick-banner").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    // arrows: false,
    autoplaySpeed: 2000,
    fade: true
    // dots: true
})

// $(".slick-abouts").slick({
//     dots: true,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//       // You can unslick at a given breakpoint now by adding:
//       // settings: "unslick"
//       // instead of a settings object
//     ]
// })

$(document).ready(function() {
    AOS.init()
})

$('ul.menu').find('a').click(function() {
    var $href = $(this).attr('href');
    // alert($href)
    var $anchor = $($href).offset();
    $('body,html').animate({ scrollTop: $anchor.top - 40 }, 500);
    $("#navbarCollapse").removeClass("show");
    // return false;
});

$(document).ready(function() {
    $('ul.menu li a').click(function() {
        $('li a').removeClass("active");
        $(this).addClass("active");
    });
});