$(document).ready(function(){

   $('#fullpage').fullpage({
      scrollingSpeed: 1200,
      parralax: true,
      navigation: true,
      afterLoad: function(anchorLink, index){
      var loadedSection = $(this);

      //using index
      if(index == 2 || index == 3 ){
         $('#framecon').fadeOut();
         
      }
      else{
          $("#framecon").fadeIn();
      }
      }

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
         $("#tamtalk").css("display", "flex");
         $("#tamtalk").fadeIn(400);

   },
   function(){
   		$(this).css("background-image", 'url("assets/img/tam.svg")')
         $("#tamtalk").fadeOut(400);
   });

   $('#den').hover(function(){
   		$(this).css("background-image", 'url("assets/img/coloredden4.svg")');
         $(".speech-bubble").fadeOut(400);
         $("#dentalk").css("display", "flex");
         $("#dentalk").fadeIn(400);
      

   },
   function(){
   		$(this).css("background-image", 'url("assets/img/den.svg")')
         $("#dentalk").fadeOut(400);
   });

   $('#sd').hover(function(){
         $(this).css("background-image", 'url("assets/img/sd5.svg")');
         $(".speech-bubble").fadeOut(400);
         $("#sdtalk").css("display", "flex");
         $("#sdtalk").fadeIn(400);

   },
   function(){
         $(this).css("background-image", 'url("assets/img/sd.svg")')
         $("#sdtalk").fadeOut(400);
   });


  

   $('#berk').hover(function(){
        
               $("#berk").css("background-image", 'url("assets/img/coloredberk.svg")');
               $(".speech-bubble").fadeOut(400);
               $("#berktalk").css("display", "flex");
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
         $("#booktalk").fadeIn();

   },
   function(){
         $(this).css("background-image", 'url("assets/img/book.png")')
         $("#booktalk").fadeOut();
   });


$('#razer').hover(function(){
         $(this).css("background-image", 'url("assets/img/hirazer.png")');
         $("#razertalk").fadeIn();

   },
   function(){
         $(this).css("background-image", 'url("assets/img/razer.png")')
         $("#razertalk").fadeOut();
   });

$('#shoe').hover(function(){
         $(this).css("background-image", 'url("assets/img/hishoe.png")');
         $("#shoetalk").fadeIn();
        

   },
   function(){
         $(this).css("background-image", 'url("assets/img/shoe.png")')
         $("#shoetalk").fadeOut();
   });

$('#skate').hover(function(){
         $(this).css("background-image", 'url("assets/img/hiskate.png")');
         $("#skatetalk").fadeIn();
        

   },
   function(){
         $(this).css("background-image", 'url("assets/img/skate-1.png")')
         $("#skatetalk").fadeOut();
   });

$('#ts').hover(function(){
         $(this).css("background-image", 'url("assets/img/hits.png")');
         $("#tstalk").fadeIn();  
   },
   function(){
         $(this).css("background-image", 'url("assets/img/ts.png")')
         $("#tstalk").fadeOut();
   });

$('#pulp').hover(function(){
         $(this).css("background-image", 'url("assets/img/hipulp.png")');
         $("#pulptalk").fadeIn();

   },
   function(){
         $(this).css("background-image", 'url("assets/img/pulp.png")')
         $("#pulptalk").fadeOut();
   });

$('#lamp').hover(function(){
         $(this).css("background-image", 'url("assets/img/hilamp.png")');
         $("#lamptalk").fadeIn();
        

   },
   function(){
         $(this).css("background-image", 'url("assets/img/lamp.png")')
         $("#lamptalk").fadeOut();
   });

$('#window').hover(function(){
         $(this).css("background-image", 'url("assets/img/hiwindow.png")');
         $("#windowtalk").fadeIn();
        

   },
   function(){
         $(this).css("background-image", 'url("assets/img/window.png")')
         $("#windowtalk").fadeOut();
   });

$('#ball').hover(function(){
         $(this).css("background-image", 'url("assets/img/hiball.png")');
         $("#balltalk").fadeIn();
        

   },
   function(){
         $(this).css("background-image", 'url("assets/img/ball.png")')
         $("#balltalk").fadeOut();
   });




$( "#search" ).bind('keypress', function(e) {
    if(e.keyCode==13){
        var search = $("#search").val().toLowerCase();
        if (search == "skill" || search == "skills"){
         console.log("skills");
         $("#skills").css("left", "0%");
         $("#search").val("");
         $("#search").hide();
        }

        else if (search == "education"){

        }
        else if (search == "project" || search == "projects"){
         $("#projects").css("left", "0%");
         $("#search").val("");
         $("#search").hide();
        }
        else if (search == "experiences" || search == "experience" || search == "exp"){
         console.log("mem");
         $("#exp").css("left", "0%");
         $("#search").val("");
         $("#search").hide();
        }
        else{

        }
    }
});

$(".back").click(function(){
   var par = $(this).parent()
   $(par).css("left", "-100%");
    setTimeout(function(){  
            $(par).hide();
            $(par).css("left", "200%");
         }, 1300);

    setTimeout(function(){  
            $(par).show();
         }, 2300);
  
   $("#search").show();
});

});





function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}

function opensec(sec){
   $(sec).css("left", "0%");
   $("#search").val("");
   $("#search").hide();
}