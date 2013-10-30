jQuery(document).ready(function($) {

	var total = $('#gallery img').length;
	var current = 1;
	TweenMax.to($('.meta') , .1, { css:{autoAlpha:0, bottom:'-80px'} });
	
	//init the gallery
    $("#gallery").slidesjs({
        width: 640,
        height: 420,
        pagination: {
   		active: false,
    },
    callback: {
      loaded: function(number) {
        // Do something awesome!
        // Passes start slide number
        update(number);
      },
      start: function(number) {
        // Do something awesome!
        // Passes slide number at start of animation
	TweenMax.to($('.meta') , .5, { css:{autoAlpha:0, bottom:'-80px'} });
      },
      complete: function(number) {
        // Do something awesome!
        // Passes slide number at end of animation
        update(number);
      }
    }
      });

function update(number) {
        $('#status').html( number + '/' + total);
        var cap = $('#gallery img').eq(number-1).data('caption');
        	TweenMax.to($('.meta') , .50, { css:{autoAlpha:1, bottom:'0px'}, ease:Quad.easeInOut });

}


});