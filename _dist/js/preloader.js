// makes sure the whole site is loaded
$(window).load(function () {
  // will first fade out the loading animation
  $("#status").delay(200).fadeOut("fast");
  // will fade out the whole DIV that covers the website.
  $("#preloader").delay(600).fadeOut("fast");
})
