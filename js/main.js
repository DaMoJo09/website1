jQuery(document).ready(function () {
  "use strict";
  $("#slider-carousel").caroufredsel({
    responsive: true,
    width: "100%",
    circular: true,
    scroll: {
      items: 1,
      duration: 500,
      pauseOnHover: true,
    },
    auto: true,
    items: {
      visible: {
        min: 1,
        max: 1,
      },
      height: "variable",
    },
    pagenation: {
      container: ".sliderpager",
      pageAnchorBuilder: false,
    },
  });
  $(window).scroll(function () {
    const top = $(window).scrollTop();
    if (top >= 60) {
      $("header").addClass("secondary");
    } else if ($("header").hasClass("secondary")) {
      $("header").removeClass("secondary");
    }
  });
});
