$(document).ready(function(){

   $('#fullpage').fullpage({
      scrollingSpeed: 1000,
      parralax: true,
      navigation: true
   });


   $(document).on("mousemove", function(event){
      var xpos = event.clientX;
      var ypos = event.clientY;
      var unitw = $(window).width()/5;
      var unith = $(window).height()/6;
      var xind = Math.floor(xpos/unitw);
      var yind = Math.floor(ypos/unith)
      console.log(xind, yind);
   });

		
   $('#tam').hover(function(){
   		$(this).css("background-image", 'url("assets/img/coloredTAM7.svg")');
         $(".speech-bubble").fadeOut();
         $("#dentalk").fadeOut();
         $("#tamtalk").fadeIn(700);

   },
   function(){
   		$(this).css("background-image", 'url("assets/img/tam.svg")')
         $("#tamtalk").fadeOut(700);
   });

   $('#den').hover(function(){
   		$(this).css("background-image", 'url("assets/img/coloredden4.svg")');
         $(".speech-bubble").fadeOut(700);
         $("#dentalk").fadeIn(700);
      

   },
   function(){
   		$(this).css("background-image", 'url("assets/img/den.svg")')
         $("#dentalk").fadeOut(700);
   });

   $('#sd').hover(function(){
         $(this).css("background-image", 'url("assets/img/sd5.svg")');
         $(".speech-bubble").fadeOut(700);
         $("#sdtalk").fadeIn(700);

   },
   function(){
         $(this).css("background-image", 'url("assets/img/sd.svg")')
         $("#sdtalk").fadeOut(700);
   });

  

   $('#berk').hover(function(){
         $(this).css("background-image", 'url("assets/img/coloredberk.svg")');
         $(".speech-bubble").fadeOut(700);
         $("#berktalk").fadeIn(700);

   },
   function(){
         $(this).css("background-image", 'url("assets/img/berk.svg")')
         $("#berktalk").fadeOut(700);
   });

   $('#name').hover(function(){
         $(this).css("background-image", 'url("assets/img/colorname.svg")');
       

   },
   function(){
         $(this).css("background-image", 'url("assets/img/namex.svg")')
   });

  $('#linkedin').hover(function(){
         $(this).css("background-image", 'url("assets/img/lit.svg")');
         setTimeout(function(){
            $("#linkedin").css("transition", '0s');
            $("#linkedin").css("background-image", 'url("assets/img/connect.svg")');
            $("#linkedin").css("width", '12.7vw');
            $("#linkedin").css("left", '-8%');
         }, 300);
         
         setTimeout(function(){  
            console.log("yugegay");
            $("#linkedin").css("transition", '.5s');
            $("#linkedin").css("left", '-.2%');
         }, 320);
   },
   function(){
         $(this).css("left", '-8%');
         setTimeout(function(){  
            
            $("#linkedin").css("transition", '0s');
         
            $("#linkedin").css("width", '4.86vw');
            $("#linkedin").css("background-image", 'url("assets/img/lit.svg")')
            $("#linkedin").css("left", '-.2%');
         }, 510);
         setTimeout(function(){  
            
            $("#linkedin").css("transition", '.3s');
            $("#linkedin").css("background-image", 'url("assets/img/linkedin.svg")')
         }, 550);
         

   });

  $('#fb').hover(function(){
         $(this).css("background-image", 'url("assets/img/fbt.svg")');
         setTimeout(function(){
            $("#fb").css("transition", '0s');
            $("#fb").css("background-image", 'url("assets/img/addme.svg")');
            $("#fb").css("width", '12.7vw');
            $("#fb").css("left", '-8%');
         }, 300);
         
         setTimeout(function(){  
            $("#fb").css("transition", '.5s');
            $("#fb").css("left", '-.2%');
         }, 350);
   },
   function(){
         $(this).css("left", '-8%');
         setTimeout(function(){  
            
            $("#fb").css("transition", '0s');
         
            $("#fb").css("width", '4.86vw');
            $("#fb").css("background-image", 'url("assets/img/fbt.svg")')
            $("#fb").css("left", '-.2%');
         }, 530);
         setTimeout(function(){  
            
            $("#fb").css("transition", '.3s');
            $("#fb").css("background-image", 'url("assets/img/fb.svg")')
         }, 550);
         

   });


});

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}