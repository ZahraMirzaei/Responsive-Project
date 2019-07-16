(function($){

	var $navToggle = $('.nav_toggle'),
			$nav = $('.nav');

	// $hasSub.on('click', function(e){
	// 	$(this).find('.nav_sub').toggle();
	// })

	$navToggle.on('click', function(e){
		$nav.toggleClass('is_active');
		$(this).toggleClass('is_active');
	})

})(jQuery);