$(document).ready(function(){


/*make .hide transparent*/
	/*$('.hide').css("opacity", "0");*/
	

/*WORKING: make .hide opaque 1s*/

/*  	$(".hide").click(function(){
    	$(".hide").animate({opacity:"1"}, 1000);
  	});*/

/*make .hide opaque, then fade in after 1s*/

	$(".hide").css("opacity", "0").delay(100).animate({opacity:"1"}, 2000);

})


