// makes sure the whole site is loaded
$(window).load(function () {
  // will first fade out the loading animation
  $("#status").delay(200).fadeOut("slow");
  // will fade out the whole DIV that covers the website.
  $("#preloader").delay(1000).fadeOut("fast");
})
