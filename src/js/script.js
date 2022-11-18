$(document).ready(function(){

    $(window).bind('scroll', function () {
        const num = 600;

        if ($(window).scrollTop() > num) {
            $('.navigation').addClass('navigation_fixed');
            $('.header__wrapper').addClass('header__wrapper_margin-top')
        } else {
            $('.navigation').removeClass('navigation_fixed');
            $('.header__wrapper').removeClass('header__wrapper_margin-top')
        }
    });

    $(".footer__button").on("click", function(e){
        e.preventDefault()

        $('html, body').animate({
          scrollTop: 0
        }, "slow");
    });

    $('.navigation__hamburger, .navigation__link li, .navigation__social, .navigation__phone').on('click', function(e) {
        $('.navigation').toggleClass("navigation_active");
        $('.navigation__hamburger').toggleClass("navigation__hamburger_active");
        e.preventDefault();
    });

})