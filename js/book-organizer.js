/*
 * Further customizes the look and feel for the All Words section of the site
 * 
 * @author Grant Dickie
 */

(function( $ ) {
	var page_array = {};
	
	// Put all posts in columns, making sure they fit
	var sort_columns = function() {
		// Get max height for columns
		var leftmax = parseInt($('#template-column-left').css('min-height')),
		rightmax = parseInt($('#template-column-right').css('min-height')), 
		colleft = $('#template-column-left'), colright = $('#template-column-right'), pagecount = 0, colcount = 0,
		leftfull = false;
		console.log(leftmax);	
		// Fetch post, stick it in either column, make sure we don't go over max y values
		$('#sort-az > div').each(function(i, o) {
			if (!page_array[pagecount]) {
				page_array[pagecount] = {
					'left': '',
					'right': ''
				};
			}
			
			if ( (leftfull === false) && ((colcount + $(this).height()) < leftmax) ) {
				page_array[pagecount]['left'] = page_array[pagecount]['left'] + '' + $(this).html();		
			} else if ( (leftfull === false) && ((colcount + $(this).height()) > leftmax) ) {
				leftfull = true;
				page_array[pagecount]['right'] = page_array[pagecount]['right'] + '' + $(this).html();
				colcount = 0;
			}	else if ( leftfull && ((colcount + $(this).height()) < rightmax) ) {
				page_array[pagecount]['right'] = page_array[pagecount]['right'] + '' + $(this).html();
				
			} else {
				pagecount = pagecount + 1;
				colcount = 0;
				leftfull = false;
				page_array[pagecount] = {
					'left': '' + $(this).html(),
					'right': ''
				};
			}
			colcount += $(this).height();
			console.log('colcount ' + colcount);
			
		});
		console.log('page_array');
		console.log(JSON.stringify(page_array));
	};
	
	var set_the_page = function() {
		
	};
	
	$(document).ready(function() {
		sort_columns();
		$('#template-column-left').append(page_array[0]['left']);
	});
	
})(jQuery);