"use strict";
$(function () {
  $(document)
    .on("click", ".password-show-hide", function () {
      return !1;
    })
    .on("mousedown", ".password-show-hide", function () {
      return (
        $(this)
          .closest(".form-icon-wrapper")
          .find("input")
          .prop("type", "text"),
        !1
      );
    })
    .on("mouseup", ".password-show-hide", function () {
      return (
        $(this)
          .closest(".form-icon-wrapper")
          .find("input")
          .prop("type", "password"),
        !1
      );
    });
});
