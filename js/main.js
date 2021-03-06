$(document).ready(function() {

    $('.header-slider--saree, .header-slider--gown, .header-slider--suit').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            991: {
                items: 1
            }
        }
    })

    $('.header-mem-plan').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            991: {
                items: 1
            }
        }
    })

    $('.combo-slider, .trending-slider, .recent-slider, .similar-products').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2
            },
            750: {
                items: 3,
                nav: true
            },
            1000: {
                items: 5,
                nav: true
            }
        }
    })

    $('.nav-main > ul > li.dropdown').hover(function (event) {
        event.preventDefault();
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
    }, function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
    });
    $('.header-menu .btn-group').hover(function (event) {
        event.preventDefault();
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
    }, function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
    });
});

//Example where thumbs go before main image
var instance = $('.xzoom, .xzoom-gallery').xzoom({
    lensCollision:true,
    openOnSmall: false,
    defaultScale: -0.5,
    Xoffset: 16,
    scroll: true,
    tint: '#652d91'
}); //<-- your options here
// $('.xzoom-gallery').each(function(){
//     instance.xappend($(this));
// });
