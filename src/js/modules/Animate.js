const Animate = (function () {
  "use strict";
  let timelineMap;
  return {
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
      Animate.initSlider();
    },
  };
})();

export default Animate;
