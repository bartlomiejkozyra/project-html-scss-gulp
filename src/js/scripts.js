$(document).ready(function () {
    // object-fit fix
    var userAgent, ieReg, ie;
    userAgent = window.navigator.userAgent;
    ieReg = /msie|Trident.*rv[ :]*11\./gi;
    ie = ieReg.test(userAgent);

    if (ie) {
        $(".ie-fit").each(function () {
            var $container = $(this),
                imgUrl = $container.find("img").prop("src");
            if (imgUrl) {
                $container.css("backgroundImage", 'url(' + imgUrl + ')').addClass("custom-object-fit");
            }
        });
    }

    // slick slider
    $('.slider').slick({
        draggable: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        fade: true,
        speed: 900,
        infinite: true,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        touchThreshold: 100
    })

    // menu-icon
    $('#button-hamburger').click(function () {
        $(this).toggleClass('open');
    });

    $("#button-hamburger").on("click", function () {
        $("#navbar-menu").toggleClass('show');
    });

    // section title animate
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $( "#button-hamburger" ).trigger( "click" );
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1500, 'linear');
    });

    // scroll animate
    $(window).scroll(function () {
        $('.section-title').each(function (i) {
            var top_of_element = $(this).position().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > top_of_element) {
                $(this).animate({
                    'opacity': '1',
                    'bottom': '0',
                }, 1500);
            }
        });
    });

    $('.scroll-top').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 2500, 'swing');
    });

});
