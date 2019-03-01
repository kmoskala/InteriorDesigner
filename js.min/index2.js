function isPhone() {
	var windowWidth = window.innerWidth;
	if (windowWidth < 768) {
		return true;
	} else {
		return false;
	}
}
function isMobile() {
	
	var windowWidth = window.innerWidth;
	if (windowWidth < 999) {
		return true;
	} else {
		return false;
	}
	
}
$(window).resize(function () {
	init();
});

function init() {
	goTop();
	$("#content .parlax.aboutText .image").height($("#content .parlax.aboutText .textPlace").outerHeight() +1);
	
	var height = window.innerHeight;
	$('#myLink').css("height",height);
	
	$('#myLink .owl-carousel .item').height(window.innerHeight - 200);
	
	var windowHeight = window.innerHeight;
	$("#parlax .image").height(windowHeight - $('header').outerHeight());
	
	$(".gallery .one-image").height($('.gallery .one-image').outerWidth());
	$('#content .section .circle').height($("#content .section .circle").outerWidth()/2);
	
	
	
	var mobile = isMobile();
	if (!mobile) {
		console.log("nie tel");
		if (!$('#menuNormal').is(':visible')) {
			$('#menuNormal').css('display', 'block');
		}
		$("#menuResposive").css('display', 'none');
		$('header .menuContainer').removeClass("container-fluid").addClass("container");
		$(".gallery-Menu .one-category").height($(".gallery-Menu .one-category").outerWidth()/2);
	} else {
		console.log("telef");
		if (!$('#menuResposive').is(':visible')) {
			$('#menuResposive').css('display', 'block');
		}
		$("#menuNormal").css('display', 'none');
		$('header .menuContainer').removeClass("container").addClass("container-fluid");
		$(".gallery-Menu .one-category").height();
	}
	$("#content .section .one-option, #content .section .one-option div").height($("#content .section .one-option").outerWidth());
	
}
function closeMenu(){
	$('header .menuContainer #menuResposive ul').fadeOut(350);
}
$( document ).ready(function () {
	init();
	
	$(document.body).click( function() {
		closeMenu();
	});
	
	$("header .menuContainer #menuResposive .menuIcon").on('click', function (e) {
		e.stopPropagation();
		if($("header .menuContainer #menuResposive ul").is(':visible')) {
			$("header .menuContainer #menuResposive ul").fadeOut(500);
		} else {
			$("header .menuContainer #menuResposive ul").fadeIn(500);
			
		}
	});
});