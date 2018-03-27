$(document).ready(function(){
		
   $('#tam').hover(function(){
   		$(this).css("background-image", 'url("assets/img/coloredTAM5.svg")');

   },
   function(){
   		$(this).css("background-image", 'url("assets/img/tam.svg")')
   });

   $('#den').hover(function(){
   		$(this).css("background-image", 'url("assets/img/coloredden2.svg")');

   },
   function(){
   		$(this).css("background-image", 'url("assets/img/den.svg")')
   });

   $('#sd').hover(function(){
         $(this).css("background-image", 'url("assets/img/sd2.svg")');

   },
   function(){
         $(this).css("background-image", 'url("assets/img/sd.svg")')
   });


});