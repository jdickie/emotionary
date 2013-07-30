/*
 * Further customizes the look and feel for the All Words section of the site
 * 
 * @author Grant Dickie
 */

(function( $ ) {
	var page_array = {},
	cur_page = 0;
	
	// Adds up total column height
	var get_max = function(id) {
		return $(id).height();
	}
	
	// Returned full outer html
	var clone_div = function(el) {
		// recreate the outer html - no other real solution that's not hacky
		return '<div id="' + el.attr('id') + '" class="' + el.attr('class') + '">' +
			el.html() + '</div>';
	}
	
	// get width of each column - set by percentages so we factor it here
	var get_width = function() {
		return ($('#inner-fix').width() - parseInt($('#inner-fix').css('padding'),10));
	}
	
	// Put all posts in page_array after inserting in div
	var sort_columns = function() {
		// Get max height for columns
		var leftmax = get_max('#template-column-left'),
		rightmax = get_max('#template-column-right'), 
		colleft = $('#template-column-left .inner-page'), colright = $('#template-column-right .inner-page'),
		colcount = 0,
		leftfull = false, h, colwidth = get_width(), cur_el = null;
		
		console.log('sort columns');
		console.log($('#sort-az > div').length);
		
		// Fetch post, stick it in either column, make sure we don't go over max y values
		$('#sort-az > div').each(function(i, o) {
			if (!page_array[cur_page]) {
				page_array[cur_page] = {
					'left': '',
					'right': ''
				};
			} 
			
			// Insert into left or right
			if (leftfull === false) {
				$(o).appendTo(colleft);
				h = $(o).height() + parseInt($(o).css('margin-bottom'),10);
				
			} else {
				$(o).appendTo(colright);
				h = $(o).height() + parseInt($(o).css('margin-bottom'),10);
			}
			if ( (leftfull === false) && ((colcount + h) < leftmax) ) {
				page_array[cur_page]['left'] = page_array[cur_page]['left'] + '' + clone_div($(o));
			} else if ( (leftfull === false) && ((colcount + h) >= leftmax) ) {
				leftfull = true;
				// remove cur_el and put in right column
				$(o).appendTo(colright);
				page_array[cur_page]['right'] = page_array[cur_page]['right'] + '' + clone_div($(o));
				colcount = 0;
			}	else if ( leftfull && ((colcount + h) < rightmax) ) {
				page_array[cur_page]['right'] = page_array[cur_page]['right'] + '' + clone_div($(o));
				
			} else {
				$(o).prependTo('#sort-az');
				return;
			}
			colcount = colcount + h;
		});
	};
	
	var turn_page = function(dir) {
		if (dir === 'back') {
			cur_page = cur_page - 1;
			if ( cur_page < 0 ) {
				cur_page = 0;
				check_pages();
				return;
			}
			if (!page_array[cur_page]) {
				sort_columns();
				check_pages();
			} else {
				$('#template-column-left .inner-page').empty().append(page_array[cur_page]['left']);
				$('#template-column-right .inner-page').empty().append(page_array[cur_page]['right']);
				check_pages();
			}
			return;
		} else if (dir === 'next') {
			cur_page = cur_page + 1;
			if ( (!page_array[cur_page]) && ($('#sort-az div').length === 0) ) {
				cur_page = cur_page - 1;
				check_pages();
				return;
			} else if( !page_array[cur_page]) {
				$('#template-column-left .inner-page').empty();
				$('#template-column-right .inner-page').empty();
				sort_columns();
				
				check_pages();
				
				return;
			} 
			
			$('#template-column-left .inner-page').empty().append(page_array[cur_page]['left']);
			$('#template-column-right .inner-page').empty().append(page_array[cur_page]['right']);
			check_pages();
		}
	};
	
	var check_pages = function() {
		$( '#nav-right' ).hide(); $( '#nav-left' ).hide();
		var next = ( cur_page + 1 ), prev = ( cur_page - 1 );
		if( page_array[next] || ($('#sort-az > div').length > 0) ) {
			// another page forward
			$( '#nav-right' ).show();
		} 
		
		if( page_array[prev] ) {
			$( '#nav-left' ).show();
		} 
	};
	
	$(document).ready(function() {
		sort_columns();
		
		$('#nav-left a').click(function(e) {
			e.preventDefault();
			turn_page('back');
			
		});
		
		if ( (!page_array[cur_page]) && ($('#sort-az div').length === 0) ) {
			cur_page = cur_page - 1;
			$('#nav-right').hide();
			return;
		}
		$('#nav-right a').click(function(e) {
			e.preventDefault();
			turn_page('next');
		});
		cbeck_pages();
	});
	
})(jQuery);