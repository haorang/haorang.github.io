$(document).ready(function(){
		
   $('#tamcon').hover(function(){
   		$(this).css("background-image", 'url("assets/img/coloredTAM.svg")');

   },
   function(){
   		$(this).css("background-image", 'url("assets/img/fillTAM.svg")')
   });

   $('#den').hover(function(){
   		$(this).css("background-image", 'url("assets/img/coloredden.svg")');

   },
   function(){
   		$(this).css("background-image", 'url("assets/img/filledden.svg")')
   });


});