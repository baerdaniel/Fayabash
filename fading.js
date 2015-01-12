$(document).ready(function(){
  $(window).scroll(function(){
    if ($(window).width() > 820) {

      var y = $(window).scrollTop();
      var delta = 420;
      var s = 250;
      var so = 450;
      if( y < 3*delta ){
        $('.sites').fadeOut(150);
      } 
      if( y >= 3*delta && y < 4*delta ){
        $('.site1').fadeIn(s); 
        $('.site2').fadeOut(so);
      } 
      if( y >= 4*delta && y < 5*delta ){
        $('.site2').fadeIn(s); 
        $('.site1').fadeOut(so); 
        $('.site3').fadeOut(so);
      } 
      if( y >= 5*delta && y < 6*delta ){
        $('.site3').fadeIn(s);
        $('.site2').fadeOut(so); 
        $('.site4').fadeOut(so);
      } 
      if( y >= 6*delta && y < 7*delta ){
        $('.site4').fadeIn(s); 
        $('.site3').fadeOut(so);
        $('.site5').fadeOut(so);
      } 
      if( y >= 7*delta && y < 8*delta ){
        $('.site5').fadeIn(s); 
        $('.site4').fadeOut(so);
        $('.site6').fadeOut(so);
      } 
      if( y >= 8*delta && y < 9*delta ){
        $('.site6').fadeIn(s);
        $('.site5').fadeOut(so); 
        $('.site7').fadeOut(so);
      } 
      if( y >= 9*delta && y < 10*delta ){
        $('.site7').fadeIn(s);
        $('.site6').fadeOut(so); 
        $('.site8').fadeOut(so);
      } 
      if( y >= 10*delta && y < 11*delta ){
        $('.site8').fadeIn(s);
        $('.site7').fadeOut(so); 
      } 
    } 
  });
})