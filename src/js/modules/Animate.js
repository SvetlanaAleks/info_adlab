const Animate = (function () {
  "use strict";
  let timelineMap;
  const btnSlider = $(".js-slider-btn");
  const infoSlider = $(".js-slider-info");
  const progress = $("#progress");
  const listDescMap = $("#js-slider");
  // const element = new Hammer(listDescMap[0]);
  return {
    touchList: function () {
      element.on("swipeleft", function (e) {
        timelineMap.kill();
        progress.css("width", "100%");
        progress.removeClass("animate");

        if ($("#desc1").hasClass("active")) {
          $("#desc1").removeClass("active");
          $("#dot1").removeClass("active");
          $("#desc2").addClass("active");
          $("#dot2").addClass("active");
        } else if ($("#desc2").hasClass("active")) {
          $("#desc2").removeClass("active");
          $("#dot2").removeClass("active");
          $("#desc3").addClass("active");
          $("#dot3").addClass("active");
        } else {
          $("#desc3").removeClass("active");
          $("#dot3").removeClass("active");
          $("#desc1").addClass("active");
          $("#dot1").addClass("active");
        }
      });
      element.on("swiperight", function (e) {
        timelineMap.kill();
        progress.css("width", "100%");
        progress.removeClass("animate");

        if ($("#desc1").hasClass("active")) {
          $("#desc1").removeClass("active");
          $("#dot1").removeClass("active");
          $("#desc3").addClass("active");
          $("#dot3").addClass("active");
        } else if ($("#desc2").hasClass("active")) {
          $("#desc2").removeClass("active");
          $("#dot2").removeClass("active");
          $("#desc1").addClass("active");
          $("#dot1").addClass("active");
        } else {
          $("#desc3").removeClass("active");
          $("#dot3").removeClass("active");
          $("#desc2").addClass("active");
          $("#dot2").addClass("active");
        }
      });
    },
    showContent: function () {
      btnSlider.click(function (e) {
        e.preventDefault();
        btnSlider.removeClass("show");
        const _this = $(this);
        const target = $(_this.data("target"));
        timelineMap.kill();

        const parent = _this.parents("#js-slider");

        parent.find(btnSlider).removeClass("animate");

        if (_this.hasClass("slide-nav")) {
          progress.css("width", "0%");
          progress.removeClass("animate");
        }

        parent.find(btnSlider).removeClass("active");
        _this.addClass("active");

        parent.find(infoSlider).removeClass("active");
        target.addClass("active");
      });
    },
    initSlider: function () {
      const controller = new ScrollMagic.Controller();
      timelineMap = new TimelineMax({ repeat: -1 });
      timelineMap
        .to("#progress", 0, { className: "+=animate" })
        .to("#dot1", 0, { className: "+=active" })
        .to("#desc1", 0, { className: "+=active" })
        .to("#dot1", 0, { className: "-=active", delay: 7 })
        .to("#desc1", 0, { className: "-=active" })
        .to("#dot1", 0, { className: "+=show" })
        .to("#dot2", 0, { className: "+=active" })
        .to("#desc2", 0, { className: "+=active" })
        .to("#dot2", 0, { className: "-=active", delay: 10 })
        .to("#dot2", 0, { className: "+=show" })
        .to("#desc2", 0, { className: "-=active" })
        .to("#dot3", 0, { className: "+=active" })
        .to("#desc3", 0, { className: "+=active" })
        .to("#dot3", 0, { className: "-=active", delay: 7 })
        .to("#desc3", 0, { className: "-=active" })
        .to("#dot3", 0, { className: "+=show" })
        .to("#progress", 0, { className: "-=animate" });
      new ScrollMagic.Scene({
        triggerElement: "#slider",
        reverse: false,
      })
        .setTween(timelineMap)
        .addTo(controller);
    },
    init: function () {
      // Animate.touchList();
      Animate.showContent();
      Animate.initSlider();
    },
  };
})();

export default Animate;
