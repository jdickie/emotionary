// Theme functions for the Emotionary 1.0 theme

( function( $ ) {
	// Handle the Feelin It link
	$('#feelin-it').live('click', function(e) {
		e.preventDefault();
		if($(this).hasClass("alreadyfelt")) {
			console.log("already felt");
			return;
			console.log("should be dead");
		}
		
		if ($(this).hasClass("felt")) {
			// $(this).removeClass("felt");
		} else {
			$(this).addClass("felt");
			post_id = $('article').attr('id');
			post_id = post_id.replace(/^[a-z]+\-/, '');
			console.log("post_id: " + post_id);
			// Register that this is felt
			$.ajax({
				type: 'GET',
				data: {
					'IP': $('#ip-invisible').text(),
					'post_id': post_id
				}
			});
		}
	});
})( jQuery );