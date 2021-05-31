var height = $('#header').height();
$(window).scroll(function () {
    if($(this).scrollTop() > height) {
        $('.wrap-navbar').addClass('fixed');
    }else{
        $('.wrap-navbar').removeClass('fixed');
    }
});

function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu__button');
    let links = menu.find('.burger-menu__link');
    let overlay = menu.find('.burger-menu__overlay');

    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });

    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());

    function toggleMenu() {
        menu.toggleClass('burger-menu__active');

        if(menu.hasClass('burger-menu__active')) {
            $('body').css('overflow', 'visible');
        }else{
            $('body').css('overflow', 'visible');
        }
    }
}

burgerMenu('.burger-menu');