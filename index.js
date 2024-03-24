






var swiper = new Swiper(".mySwiper", {
	slidesPerView: 1,
	spaceBetween: 80,
	freeMode: true,
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	},
  });



ScrollReveal().reveal('h1', 
{ 
	origin : 'left',
  delay    : 100,
  distance : '120px',
  easing   : 'ease-in-out',

 });

 ScrollReveal().reveal('h2,h3,h4', 
{ 
	origin : 'right',
  delay    : 200,
  distance : '120px',
  easing   : 'ease-in',

 });

 ScrollReveal().reveal('p1,p2,p3', 
 { 
	delay:300,
    scale      : 1,
    distance   : '5px',
	reset: false,
    origin     : 'left',
    easing     : 'ease-out',
    viewFactor : 1,
 
  });
 
  ScrollReveal().reveal('p1,p2,p3', 
  { 
   delay:300,
     scale      : 1,
     distance   : '5px',
   reset:'false',
     origin     : 'left',
     easing     : 'ease-out',
     viewFactor : 1,
  
   });
  
   
    
    $(document).ready(function(){
      $("#stevo").click(function(){
        $(".toggle-nav").toggle();
      });
    });
       
$(document).ready(function(){
  $(".stevo").click(function(){
    $(".toggle-nav").animate({left: '20px'}, "slow");
  });
});


    
    
   
    
   
