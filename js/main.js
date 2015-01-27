$(document).ready(function(){

/*make .hide opaque, then fade in after 1s*/

/*	$(".hide.first").css("opacity", "0").delay(1000).animate({opacity:"1"}, 2000);
	$(".hide.second").css("opacity", "0").delay(1500).animate({opacity:"1"}, 2000);
	$(".hide.third").css("opacity", "0").delay(2000).animate({opacity:"1"}, 2000);
	$(".hide.fourth").css("opacity", "0").delay(2500).animate({opacity:"1"}, 2000);*/

	var timer = '500';

	$(".hide").css("opacity", "0");
	$('.hide.first').delay(timer * 2).animate({opacity:"1"}, 2000);
	$(".hide.second").delay(timer * 3).animate({opacity:"1"}, 2000);
	$(".hide.third").delay(timer * 4).animate({opacity:"1"}, 2000);
	$(".hide.fourth").delay(timer * 7).animate({opacity:"1"}, 2000);

})


