// Theme functions for the Emotionary 1.0 theme

( function( $ ) {
	// Handle the Feelin It link
	$('#feelin-it').live('click', function(e) {
		e.preventDefault();
		
		if ($(this).hasClass("felt")) {
			$(this).removeClass("felt");
		} else {
			$(this).addClass("felt");
		}
	});
})( jQuery );