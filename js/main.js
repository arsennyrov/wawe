$(function () {

  $('.slider-blog__inner').slick({
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false
        }
      },
    ]
  });

  $('.menu__btn, .menu a').on('click', function () {
    $('.header__top-inner').toggleClass('header__top-inner--active');
  });

  var mixer = mixitup('.portfolio__content');

});