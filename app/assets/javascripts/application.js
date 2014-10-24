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

// IIFE to ensure safe use of $
//PARALLAX SCROLLING

    (function($) {

        var $container = $(".parallax");
        var $divs = $container.find("div.parallax-background");
        var thingBeingScrolled = document.body;
        var liHeight = $divs.eq(0).closest("li").height();
        var diffHeight = $divs.eq(0).height() - liHeight;
        var len = $divs.length;

        var i, div,li,offset,scroll,top,transform;

        // cache 
        var offsets = $divs.get().map(function(div, d) {
            return $(div).offset();
        });

        var render = function() {

            top = thingBeingScrolled.scrollTop;

            for(i=0;i<len;i++) {

                div = $divs[i];

                //the offset
                offset = top - offsets[i].top;

                // The transform string
                scroll = ~~(offset / liHeight * diffHeight);

                 // The transform string
                transform = 'translate3d(0px, ' + scroll + 'px, 0px)';

                div.style.webkitTransform = transform;
                div.style.MozTransform = transform;
                div.style.msTransform = transform;
                div.style.OTransform = transform;
                div.style.Transform = transform;            
            }

        };

        (function loop(){
            requestAnimationFrame(loop);
            render();
        })();

        (function() {
                var lastTime = 0;
                var vendors = ['webkit', 'moz'];
                for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
                    window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
                    window.cancelAnimationFrame =
                      window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
                }

                if (!window.requestAnimationFrame)
                    window.requestAnimationFrame = function(callback, element) {
                        var currTime = new Date().getTime();
                        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                        var id = window.setTimeout(function() { callback(currTime + timeToCall); },
                          timeToCall);
                        lastTime = currTime + timeToCall;
                        return id;
                    };

                if (!window.cancelAnimationFrame)
                    window.cancelAnimationFrame = function(id) {
                        clearTimeout(id);
                    };
            }());

    })(jQuery);


//BACK TO TOP
$(document).ready(function() {
    $('.nav-ruby').click(function(){
        $('html, body').animate({scrollTop:$('#ruby').position().top}, 'fast');
        return false;
    });
});


//STICKY NAVIAGTION ON SCROLL
var stickyOffset = $('.navigation').offset().top;

$(window).scroll(function(){
  var sticky = $('.navigation'),
      scroll = $(window).scrollTop();

  if (scroll >= stickyOffset) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});





//Create an overlay with the large image - lightbox
(function($) {

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
  var imageLocation = $(this).attr("href");
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


})(jQuery);









