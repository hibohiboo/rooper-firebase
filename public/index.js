$(function() {
  $("img.lazy").lazyload();
  const $j_screen = $(".rotage_alert");
  $j_screen.on("click", e => {
    $j_screen.remove();
  });

  $(window).bind("load orientationchange", function() {
    if (Math.abs(window.orientation) === 90 || this.screen.availWidth > 1023) {
      $j_screen.remove();
    } else {
      $j_screen.show();
    }
  });

  window.addEventListener("load", function() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(function(registration) {
          console.log("serviceWorker registed.");
        })
        .catch(function(error) {
          console.warn("serviceWorker error.", error);
        });
    }
  });
});
