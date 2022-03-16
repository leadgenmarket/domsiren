// placeholder
$(document).ready(function(){
	//$("input, textarea").on("focus", function(){
	$("body").on("focus","input, textarea",function(){
		if($(this).attr("data") != ''){
			if($(this).val() == $(this).attr("data"))
				$(this).val("");
		}
	});
	//$("input, textarea").on("blur", function(){
	$("body").on("blur","input, textarea",function(){
		if($(this).attr("data") != ''){
			if($(this).val() == "")
				$(this).val($(this).attr("data"));
		}
	});
});


// fixed_nav
$(function(){
    $(window).scroll(function() {
        var top = $(document).scrollTop();
        var height1 = $(document).height()-$(window).height()-100;   
        var result =  $(document).scrollTop();
        if (top < 50)
        {
        	$("body").removeClass("scroll_act");
        }
        else
        {
        	$("body").addClass("scroll_act");
        }
    });
});

// mask
$(document).ready(function(){
	$("body").on("click",".in_phone",function(){$(this).inputmask("+7 (999) 999 99 99");});
});


// popup_open
$(document).ready(function(){

	$(".ht_btn_call, #pu_call .closeform, .fb_call").click(function(){
		$(".popup_rgba").fadeToggle(400);
		$("#pu_call").fadeToggle(700);
		$("body").toggleClass("overflow");
		return false;
	});

	// nav mobile
	$(".btn_nav_mobile").click(function(){
		$(this).toggleClass("btn_nav_mobile_open");
		$(".hl_nav").slideToggle(400);
		return false;
	});

});