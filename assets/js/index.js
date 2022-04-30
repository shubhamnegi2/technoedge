$(function(){

	$(window).scroll(function() {
		var hT = $('.logs').offset().top,
			hH = $('.logs').outerHeight(),
			wH = $(window).height(),
			wS = $(this).scrollTop();
		if (wS >= (hT+hH-wH)-100){			
			$('.increment').css({
				width: '90%',
				transition: 'all 2s ease'
			});
			$('.number').css({
				left: '90%',
				transition: 'all 2s ease'
			});			
			$('.per').css({
				left: '93%',
				transition: 'all 2s ease'
			});			
		}
	 });
	
});
$('.number').counterUp({
	delay: 10,
	time: 1200
});

$('.testimonials-slider').owlCarousel({
	loop: true,
	margin: 0,
	nav: false,
	dots: false,
	autoplay: true,
	autoplayTimeout: 2000,
	autoplayHoverPause: false,
	smartSpeed: 1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})