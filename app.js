
//Building the overlay
var $overlay = $('<div id="overlay"></div>');
$('body').append($overlay);

var $image = $('<img>');
$overlay.append($image);

// Creating a click event
$('#imageGallery a').click(function(event) {
  event.preventDefault();
  var href = $(this).attr('href');
  $image.attr('src',href);
  $overlay.show();
});

//Exit from picture
$overlay.click(function(){
  $overlay.hide();
});
