


  /* Fade in content when loaded */

  /*$('.hide').css("color", "#fff");*/
/*  $('.hide').animate({
    color: "#111"
  }, 1500 );*/

/*$(document).ready(function(){
  $( ".hide" ).animate({ "color": "#111" }, "5000" );
});*/






$(document).ready(function(){



$('.hide').click(function(){
  $( this ).css( "color", "#111" );
});

  $(window).scroll(function(){
    if ($(window).width() > 700) {

      var y = $(window).scrollTop();
      var delta = 600;
      var s = 100;
      var so = 100;

      $('canvas').hide();

      if( y < 1*delta ){
        $('.canvas').fadeOut(150);
      } 
      if( y >= 1*delta && y < 2*delta ){
        $('.image1').fadeIn(s);
        $('.canvas').fadeIn(s);
      } 
      if( y >= 2*delta && y < 3*delta ){
        $('.image1').fadeOut(so);
        $('.image2').fadeOut(s); 
      }
      if( y >= 3*delta && y < 4*delta ){
        $('.image2').fadeIn(s); 
      }
       if( y >= 4*delta && y < 5*delta ){
        $('.image2').fadeOut(so);
        $('.image3').fadeOut(so);
      }
       if( y >= 5*delta && y < 6*delta ){
        $('.image3').fadeIn(s); 
      }
       if( y >= 6*delta && y < 7*delta ){
        $('.image3').fadeOut(so);
        $('.image4').fadeOut(so); 
      }
      if( y >= 7*delta && y < 8*delta ){
        $('.image4').fadeIn(s); 
      }
       if( y >= 8*delta && y < 9*delta ){
        $('.image4').fadeOut(so);
        $('.image5').fadeOut(so); 
      }
      if( y >= 9*delta && y < 10*delta ){
        $('.image5').fadeIn(s); 
      }
       if( y >= 10*delta && y < 11*delta ){
        $('.image5').fadeOut(so);
        $('.image6').fadeOut(so); 
      }
      if( y >= 11*delta && y < 12*delta ){
        $('.image6').fadeIn(s); 
      }
       if( y >= 12*delta && y < 13*delta ){
        $('.image6').fadeOut(so);
        $('.image7').fadeOut(so); 
      }

    
    }
  });
})