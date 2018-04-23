$(document).ready(function(){

   $('#fullpage').fullpage({
      scrollingSpeed: 1200,
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

   var hoverin = false;

   

		
   $('#tam').hover(function(){
   		$(this).css("background-image", 'url("assets/img/coloredTAM7.svg")');
         $(".speech-bubble").fadeOut();
         $("#dentalk").fadeOut();
         $("#tamtalk").fadeIn(400);

   },
   function(){
   		$(this).css("background-image", 'url("assets/img/tam.svg")')
         $("#tamtalk").fadeOut(400);
   });

   $('#den').hover(function(){
   		$(this).css("background-image", 'url("assets/img/coloredden4.svg")');
         $(".speech-bubble").fadeOut(400);
         $("#dentalk").fadeIn(400);
      

   },
   function(){
   		$(this).css("background-image", 'url("assets/img/den.svg")')
         $("#dentalk").fadeOut(400);
   });

   $('#sd').hover(function(){
         $(this).css("background-image", 'url("assets/img/sd5.svg")');
         $(".speech-bubble").fadeOut(400);
         $("#sdtalk").fadeIn(400);

   },
   function(){
         $(this).css("background-image", 'url("assets/img/sd.svg")')
         $("#sdtalk").fadeOut(400);
   });


  

   $('#berk').hover(function(){
        
               $("#berk").css("background-image", 'url("assets/img/coloredberk.svg")');
               $(".speech-bubble").fadeOut(400);
               $("#berktalk").fadeIn(400);


   },
   function(){
         $(this).css("background-image", 'url("assets/img/berk.svg")')
         $("#berktalk").fadeOut(400);

   });

   $('#name').hover(function(){
         setTimeout(function(){
            hoverin = true;

         }, 100);
         setTimeout(function(){
            if (hoverin){
              $('#name').css("background-image", 'url("assets/img/colorname.svg")'); 
            }
         }, 500);

   },
   function(){
         $('#name').css("background-image", 'url("assets/img/namex.svg")')
          setTimeout(function(){
            hoverin = false;

         }, 200);
         
                  //$(this).css("background-image", 'url("assets/img/namex.svg")')
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
            $("#linkedin").css("transition", '.5s');
            $("#linkedin").css("left", '-.2%');
         }, 350);       
   },
   function(){
         
        $(this).css("left", '-8%');
         setTimeout(function(){  
            
            $("#linkedin").css("transition", '0s');
         
            $("#linkedin").css("width", '4.86vw');
            $("#linkedin").css("background-image", 'url("assets/img/lit.svg")');
            $("#linkedin").css("left", '-.2%');
         }, 500);
         setTimeout(function(){  
            
            $("#linkedin").css("transition", '.3s');
            $("#linkedin").css("background-image", 'url("assets/img/linkedin.svg")')
         }, 550);
         

   });

  $('#fb').hover(function(){
         $(this).css("background-image", 'url("assets/img/fbt.svg")');
         setTimeout(function(){
            $("#fb").css("transition", '0s');
            $("#fb").css("background-image", 'url("assets/img/friendme.svg")');
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

  $('#insta').hover(function(){
         $(this).css("background-image", 'url("assets/img/instat.svg")');
         setTimeout(function(){
            $("#insta").css("transition", '0s');
            $("#insta").css("background-image", 'url("assets/img/followme.svg")');
            $("#insta").css("width", '12.7vw');
            $("#insta").css("left", '-8%');
         }, 300);
         
         setTimeout(function(){  
            $("#insta").css("transition", '.5s');
            $("#insta").css("left", '-.2%');
         }, 350);
   },
   function(){
         $(this).css("left", '-8%');
         setTimeout(function(){  
            
            $("#insta").css("transition", '0s');
         
            $("#insta").css("width", '4.86vw');
            $("#insta").css("background-image", 'url("assets/img/instat.svg")')
            $("#insta").css("left", '-.2%');
         }, 530);
         setTimeout(function(){  
            
            $("#insta").css("transition", '.3s');
            $("#insta").css("background-image", 'url("assets/img/insta.svg")')
         }, 550);
         

   });

$('#book').hover(function(){
         $(this).css("background-image", 'url("assets/img/hibook.png")');
        

   },
   function(){
         $(this).css("background-image", 'url("assets/img/book.png")')
   });


$('#razer').hover(function(){
         $(this).css("background-image", 'url("assets/img/hirazer.png")');
        

   },
   function(){
         $(this).css("background-image", 'url("assets/img/razer.png")')
   });

$('#shoe').hover(function(){
         $(this).css("background-image", 'url("assets/img/hishoe.png")');
        

   },
   function(){
         $(this).css("background-image", 'url("assets/img/shoe.png")')
   });

$('#skate').hover(function(){
         $(this).css("background-image", 'url("assets/img/hiskate.png")');
        

   },
   function(){
         $(this).css("background-image", 'url("assets/img/skate-1.png")')
   });

$('#ts').hover(function(){
         $(this).css("background-image", 'url("assets/img/hits.png")');
        

   },
   function(){
         $(this).css("background-image", 'url("assets/img/ts.png")')
   });

$('#pulp').hover(function(){
         $(this).css("background-image", 'url("assets/img/hipulp.png")');
        

   },
   function(){
         $(this).css("background-image", 'url("assets/img/pulp.png")')
   });




});








function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}