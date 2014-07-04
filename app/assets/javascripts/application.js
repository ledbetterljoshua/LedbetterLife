// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require jquery.turbolinks
//= require turbolinks
//= require masonry/jquery.masonry
//= require_tree .
/*

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");


//An image to overlay
$overlay.append($image);

// A caption to overlay
$overlay.append($caption);

// Add overlay
$("body").append($overlay);

//Capture the click event on a link to an image
$("#imageGallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("src");
  //Update overlay with the image linked in the link
  $image.attr("src", imageLocation);

	// Show the overlay
	$overlay.show("slow");

	// Get child's alt attribute and set caption
   var captionText = $(this).children("img").attr("alt");
    $caption.text(captionText);

});

// When overlay is clicked
	$overlay.click(function(){
// Hide the overlay
	$overlay.hide("fast");
});

*/

