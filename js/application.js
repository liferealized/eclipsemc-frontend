(function($) {

	$(document).on('click', '#info-bar .switch-link', function(e) {
	
		var   $this = $(this)
			, $containerOff = $this.parent().parents('div').first()
			, $containerOn = $('#' + $this.data().on);
		
		$containerOff.hide();
		$containerOn.show();
	});

})(jQuery);