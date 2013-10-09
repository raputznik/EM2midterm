jQuery(document).ready(function($) {
	
	var container = $('#quagmire');
	var title = $('#quagmire .inner .title');
	var bg = $('#quagmire .inner .bg');
	var q = $('#quagmire .inner .quags');
	var bgColour = '#dbb019';

	// TweenMax.to(container, .01, {height:0, alpha:0});
	// TweenMax.to(container, 1, {alpha:1, delay:.5, height:474, rotation:"1.25rad"});



	resize();

	$('#quagmire').mouseenter(function(event) {
		/* Act on the event */
		console.log("mouse has entered");
		TweenMax.to(container, .25, { css:{ backgroundColor:bgColour } } );


		TweenMax.to(title, .5, { css:{ top:-200 }, ease:Power1.easeInOut } );
		TweenMax.to(bg, 1, { css:{ left:0 }, ease:Power1.easeInOut } );
		TweenMax.to(q, 1, { css:{ top:0 }, ease:Power1.easeInOut, delay:0} );

	});

	$('#quagmire').mouseleave(function(event) {
		/* Act on the event */
		console.log("mouse has left");
		
		TweenMax.to(bg, .5, { css:{ left:480 }, ease:Power1.easeInOut, 
			onComplete: function(){
				TweenMax.to(container, .25, { css:{ backgroundColor:"#000" } } );
				TweenMax.to(title, .75, { css:{ top:0 }, ease:Bounce.easeOut, delay:.25} );		
			}
		} );
		TweenMax.to(q, .5, { css:{ top:480}, ease:Power1.easeInOut} );



	});

	$(window).resize(function() {
  	//resize just happened, pixels changed
  		resize();
  		


	});
	

	function resize()
	{
		var w = $(container).width();
  		$(title).width(w);
  		$(bg).width(w);
  		$(q).width(w);
  		// $(container).height(w);

  		$(container).css( { 'min-height': w } );
	}









});














