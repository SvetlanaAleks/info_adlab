const Control = (function () {
  "use strict";
  const btnAccordeon = $(".js-btn-accordeon");
  const contentAccordeon = $(".js-info-accordeon");
  const linkToTarget = $(".js-scroll");
  function scroll(target) {
    const top = target.offset().top;
    $("html, body").animate(
      {
        scrollTop: top - 15,
      },
      800
    );
  }
  return {
    scrollToTarget: function () {
      linkToTarget.click(function (e) {
        e.preventDefault();
        const _this = $(this);
        const href = _this.attr("href");
        const target = $(href);

        if (_this.data("target")) {
          const target = $(_this.data("target"));
          scroll(target);
        }
        if (target.length) {
          scroll(target);
        }
      });
    },
    openFaqContent: function () {
      btnAccordeon.on("click", function (e) {
        e.preventDefault();
        const _this = $(this);

        const parent = _this.parents(".js-accordeon");
        if (!_this.hasClass("active")) {
          parent.find(contentAccordeon).slideUp();
          parent.find(btnAccordeon).removeClass("active");
        }
        _this.toggleClass("active");
        _this.next(contentAccordeon).slideToggle();
      });
    },
    init: function () {
      Control.openFaqContent();
      Control.scrollToTarget();
    },
  };
})();

export default Control;
