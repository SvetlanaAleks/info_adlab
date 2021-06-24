import "slick-carousel";
const Sliders = (function () {
  ("use strict");
  let isRTL2 = false;

  return {
    initAboutSlider: function () {
      $(".js-about-slider-for").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: ".js-about-slider-nav",
        draggable: false,
      });
      $(".js-about-slider-nav").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: ".js-about-slider-for",
        dots: false,
        arrows: false,
        draggable: false,
        focusOnSelect: true,
        variableWidth: true,
      });
    },

    init: function () {
      Sliders.initAboutSlider();
    },
  };
})();

export default Sliders;
