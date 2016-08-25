$(document).ready(function () {
	smoothScroll();
});


$(window).resize(function(){	

	var WinW = $(window).width();
	var WH = $(window).height();
	
	if(WinW<=640){			
		
		$('.menusp').click(function(){
			
			var WinW = $(window).width();
			
			if(leftG == WinW+'px'){
				
				$('.sub-menu').hide();
				
				return false;
			}
		});
		$('.close-menusp').click(function(){
			
			$('.sub-menu').hide();
			return false;
		});	
	}
});
function smoothScroll(){
	$('a[href^="#"]').click(function(){
		if ( $( $(this).attr('href') ).length ) {
			var p = $( $(this).attr('href') ).offset();
			$('html,body').animate({ scrollTop: p.top}, 600);
		}
		return false;
	});
	var hash1= location.hash;
   	var $root = $('html, body');
   	if(hash1!=""){  
    	var top01 = $(hash1).offset().top;      
    	$root.animate({ scrollTop:top01}, 600);  
	}
}


//Set Height Video Tab

(function($){
	"use strict";	
	$(function(){
		$("#totop").hide();			
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#totop').fadeIn();
			} else {
				$('#totop').fadeOut();
			}
		});			
		$('#totop a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 500);
			return false;
		});			
	});
})(jQuery);