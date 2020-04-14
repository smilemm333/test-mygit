$(function() { 
  $("html").css({'font-size':100/750*$(window).width()+'px'});
  $(window).resize(function(){  
    $("html").css({'font-size':100/750*$(window).width()+'px'});
  });
  
  $('.tab li,.nav li').click(function () {		
		$(this).addClass("on");
    $(this).siblings("li").removeClass("on");	
	});
  
$(".show").click(function(){
  $(".alertBox").show();
});
$(".show2").click(function(){
  $(".alertBox2").show();
});
$(".close").click(function(){
  $(".alertBox").hide();
  $(".alertBox2").hide();
});

})


