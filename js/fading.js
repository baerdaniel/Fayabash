$(document).ready(function(){
  $(window).scroll(function(){
    if ($(window).width() > 820) {

      var y = $(window).scrollTop();
      var delta = 420;
      var s = 250;
      var so = 450;

      if( y < 3*delta ){
        $('.images').fadeOut(150);
      } 
      if( y >= 3*delta && y < 4*delta ){
        $('.image1').fadeIn(s); 
        $('.image2').fadeOut(so);
      } 

      
      // if( y < 3*delta ){
      //   $('.images').fadeOut(150);
      // } 
      // if( y >= 3*delta && y < 4*delta ){
      //   $('.image1').fadeIn(s); 
      //   $('.image2').fadeOut(so);
      // } 
      // if( y >= 4*delta && y < 5*delta ){
      //   $('.image2').fadeIn(s); 
      //   $('.image1').fadeOut(so); 
      //   $('.image3').fadeOut(so);
      // } 
      // if( y >= 5*delta && y < 6*delta ){
      //   $('.image3').fadeIn(s);
      //   $('.image2').fadeOut(so); 
      //   $('.image4').fadeOut(so);
      // } 
      // if( y >= 6*delta && y < 7*delta ){
      //   $('.image4').fadeIn(s); 
      //   $('.image3').fadeOut(so);
      //   $('.image5').fadeOut(so);
      // } 
      // if( y >= 7*delta && y < 8*delta ){
      //   $('.image5').fadeIn(s); 
      //   $('.image4').fadeOut(so);
      //   $('.image6').fadeOut(so);
      // } 
      // if( y >= 8*delta && y < 9*delta ){
      //   $('.image6').fadeIn(s);
      //   $('.image5').fadeOut(so); 
      //   $('.image7').fadeOut(so);
      // } 
      // if( y >= 9*delta && y < 10*delta ){
      //   $('.image7').fadeIn(s);
      //   $('.image6').fadeOut(so); 
      //   $('.image8').fadeOut(so);
      // } 
      if( y >= 10*delta && y < 11*delta ){
        $('.image8').fadeIn(s);
        $('.image7').fadeOut(so); 
      } 
    } 
  });
})