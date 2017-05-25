
//run instantly and then run repeatedly after setInterval timeout length

// scroll down in 45 seconds
$("html, body").animate({ scrollTop: $(document).height() }, 45000);

// scroll up after waiting 5 seconds
// take 45 seconds to get to top
setTimeout(function() {
   $('html, body').animate({scrollTop:0}, 45000);
},5000);

// wait 5 seconds then repeat
setInterval(function(){
  $("html, body").animate({ scrollTop: $(document).height() }, 45000);
  setTimeout(function() {
     $('html, body').animate({scrollTop:0}, 45000);
  },5000);
},5000);
