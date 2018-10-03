$(document).ready(function(){

	$(document).mousemove(function(e) {

		$("#moveme img").offset({

			left: e.pageX-128,
			top: e.pageY-128

		});
	});

	$(document).on("click", function(){

		$(document).unbind("mousemove");

		$("#missile img").show();



				

function diff(x, y) {
    var centerItem = $('#missile img'),
        centerLoc = centerItem.offset();
    var dx = x - (centerLoc.left + (centerItem.width() / 2));
        dy = y - (centerLoc.top + (centerItem.height() / 2));
    return Math.atan2(dy, dx) * (180 / Math.PI);
}


$('body').mousemove(function(e){

    var x = e.pageX;
    var y = e.pageY;
    var correction = 90;

    var myAngle = diff(x, y)+correction;
    var rotationValue = 'rotate(' + myAngle + 'deg)';
 
    $("#missile img").css({
        '-moz-transform': rotationValue,
        '-webkit-transform': rotationValue,
        '-o-transform': rotationValue,
        '-ms-transform': rotationValue,
        'transform': rotationValue
    });

    var pos = $("#moveme img").position();


	$("#missile img").animate({left: pos.left, top: pos.top}, 500).delay(900).fadeOut(1);





	$("body").unbind("mousemove");


}); 







 
		//$("#moveme img").fadeOut(1000).fadeIn(1000);

		   });

	});
