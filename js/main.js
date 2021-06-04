$(document).ready(function(){
    $('.brands__mobile').slick({
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: false,
        // centerMode: true
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.receipts__mobile').slick({
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: false,
        // centerMode: true
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.season__mobile').slick({
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: true,
        centerMode: false,
        responsive: [
            {
                breakpoint: 830,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});