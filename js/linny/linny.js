jQuery(document).ready(function($) {
	var container = $('#linny');
	var title = $('#linny .inner .title');
	var bg = $('#linny .inner .bg');
	var q = $('#linny .inner .quags');
	bgColor = '#ff895c';
	resize();
	$('#linny').mouseenter(function(event) {
		console.log("mouse has entered");
		TweenMax.to(container, .25, {css:{ backgroundColor:bgColor} });
		TweenMax.to(title, .5, {css:{ top:-200 }, ease:Power1.easeInOut } );
		TweenMax.to(bg, 1, {css:{ left:0 }, ease:Power1.easeInOut } );
		TweenMax.to(q, .5, {css:{ top:0 }, ease:Power1.easeInOut, delay:1} );
	});

	$('#linny').mouseleave(function(event) {

		console.log("mouse has left");
		TweenMax.to(bg, .5, {css:{ left:-480 }, ease:Power1.easeInOut,
			onComplete: function(){
				TweenMax.to(container, .25, { css:{ backgroundColor:'#000'}})
				TweenMax.to(title, .75, {css:{ top:0 }, ease:Bounce.easeInOut } )

			}

		 } );
		TweenMax.to(q, .75, {css:{ top:0 }, ease:Power1.easeInOut } );

	});
	

	$(window).resize(function() {
		//resizing
			
		
		resize();
	});


	function resize()
	{
		var w = $(container).width();
		$(title).width(w);
		$(bg).width(w);
		$(q).width(w);
		$(container).css({'min-height': w } );
	}

	});



