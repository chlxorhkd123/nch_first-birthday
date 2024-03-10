$(document).ready(function() {
	$('.gallery-list').width(580);
	var winWidth = $(window).width();
	if(winWidth < 420) {
			$('.gallery-list').width(360);
			col = 2;
		} else if(winWidth < 480) {
			$('.gallery-list').width(400);
			col = 2;
		} else if(winWidth < 580) {
			$('.gallery-list').width(500);
			col = 2;
		} else if(winWidth < 1920) {
			$('.gallery-list').width(500);
			col = 2;
		}

	//blocksit define
	$(window).load( function() {
		$('.gallery-list').BlocksIt({
			numOfCol: col,
			offsetX: 5,
			offsetY: 5
		});
	});
	
	//window resize
	var currentWidth = 580;
	$(window).resize(function() {
		var winWidth = $(window).width();
		var conWidth;
		if(winWidth < 420) {
			conWidth = 360;
			col = 2
		} else if(winWidth < 480) {
			conWidth = 400;
			col = 2
		} else if(winWidth < 580) {
			conWidth = 500;
			col = 2
		} else if(winWidth < 1920) {
			conWidth = 500;
			col = 2
		}
		
		if(conWidth != currentWidth) {
			currentWidth = conWidth;
			$('.gallery-list').width(conWidth);
			$('.gallery-list').BlocksIt({
				numOfCol: col,
				offsetX: 5,
				offsetY: 5
			});
		}
	});
});