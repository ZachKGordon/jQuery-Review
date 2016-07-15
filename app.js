
var j_overlay = $('<div id="overlay"></div>');
$("body").append(j_overlay);

// Creating a click event
$("#imageGallery a").click(function(event) {
  event.preventDefault();
  var href = $(this).attr("href");
  console.log(href);
  j_overlay.show();
});

