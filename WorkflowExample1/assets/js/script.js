$(function () {
	
	// Menubar
	if ($(window).width() < 767) {
		$(".dropdown-contain > a").click(function () {
			if ($(this).parent().hasClass('active')) {
				$(this).parent().removeClass('active');
				$(this).next('.sub-dropdown').stop(true, true).slideUp();
			}
			else {
				
				$('.dropdown-contain').removeClass('active');
				$('.sub-dropdown').stop(true, true).slideUp();
				
				$(this).parent().addClass('active');
				$(this).next('.sub-dropdown').stop(true, true).slideDown();
			}
			return false;
		});
	}
	
	
	
	// for touch screen 
	if ($(window).width() > 767) {
		if(navigator.msMaxTouchPoints) {
			
				$(".dropdown-contain > a").click(function () {
					if ($(this).parent().hasClass('active')) {
						$(this).parent().removeClass('active');
						$(this).next('.sub-dropdown').hide();
					}
					else {
						
						$('.dropdown-contain').removeClass('active');
						$('.sub-dropdown').stop(true, true).hide();
						
						$(this).parent().addClass('active');
						$(this).next('.sub-dropdown').show();
					}
					return false;
				});
				
				// for body click
				$("html, body").click(function() {
					$('.dropdown-contain').removeClass('active');
					$('.sub-dropdown').stop(true, true).hide();
				});
		}
	}
	
	
	
	
	// header search mobile (click to show)
	$('.search-link').click(function(){
		if( $(this).hasClass('active') ){
			$(this).removeClass('active');
			$(".top-wrap").slideUp();
		}
		else{
			$(this).addClass('active');
			$(".top-wrap").slideDown();
		}
		return false;
	});
	
	
	// tabs
	$('.tabs a').click(function(){
		var newContents = $(this).attr('href').slice(1);
		$(this).parents('.tabs-wrap').find('.tabs-content').hide();
		$('#'+newContents).show();
		
		$(this).parents('.tabs-wrap').find('.tabs li').removeClass('active');
		$(this).parent().addClass('active');
		$(this).parents('.tabs').addClass('main-active');
		return false;
	});
	$('.tabs-personalize .tabs a').click(function(){
		$("#engrave-img").hide();
		$(".product-outer, .product-gallery-outer").show();
	});
	
	$('.engrave-link').click(function(){
		$(".product-outer, .product-gallery-outer").hide();
		$("#engrave-img").show();
	});
	
	
	
	
	// tabs custom
	$('.tabs-custom a').click(function(){
		var newCustomVal = $(this).attr('href').slice(1);
		$('.custom-tabs-content').hide();
		$('#'+newCustomVal).show();
		
		$('.my-profile li').removeClass('active');
		$(this).parent().addClass('active');
		return false;
	});
	
			
			
	// gallery on home page	
	$('#gallery-items a').click(function(){
		var newVal = $(this).attr('href');
		$('#large_photo').fadeOut(function(){
			$(this).attr('src', newVal).fadeIn();
		});
		
		$(".product-gallery li").removeClass('active');
		$(this).parents('li').addClass('active');
		return false;
	});
	
	// scroll-link
    $(".scroll-link").click(function () {
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
        return false;
    });
	
	// up arrow from footer
	$(window).scroll(function () {
        var windowView = $(window).height() + 500;
        if ($(this).scrollTop() >= windowView)
            $("#up-arrow").fadeIn(500);
        else
            $("#up-arrow").fadeOut(500);
    });
    $("#up-arrow").click(function () {
        $("html,body").animate({ scrollTop: 0 }, 1500);
        return false;
    });
	
	// more / less
	$('.show-more').click(function(){
		var newMore = $(this).attr('href').slice(1);
		if( $(this).hasClass('active') ){
			$(this).removeClass('active');
			$('#'+newMore).slideUp();
			$(this).children('strong').text('View More Details');
		}
		else{
			$(this).addClass('active');
			$('#'+newMore).slideDown();
			$(this).children('strong').text('View Less Details');
		}
		return false;
	});
	
	// more / less second 
	$('.view-more').click(function(){
		var viewMore = $(this).attr('href').slice(1);
		if( $(this).hasClass('active') ){
			$(this).removeClass('active');
			$('#'+viewMore).slideUp();
			$(this).children('strong').text('View More');
		}
		else{
			$(this).addClass('active');
			$('#'+viewMore).slideDown();
			$(this).children('strong').text('View Less');
		}
		return false;
	});
	
	// more only for link (not changing test)
	$('.more-option').click(function(){
		var moreOption = $(this).attr('href').slice(1);
		if( $(this).hasClass('active') ){
			$(this).removeClass('active');
			$('#'+moreOption).slideUp();
		}
		else{
			$(this).addClass('active');
			$('#'+moreOption).slideDown();
		}
		return false;
	});
});