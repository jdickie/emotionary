<?php
/*
 * Used for registering felt emotions 
 *
 */ 
	
if ( isset($_GET['IP']) && isset($_GET['post_id']) ) {
	if ( (preg_match('/[A-Za-z<>\/]+/', $_GET['IP']) == 0) && (preg_match( '/[A-Za-z<>\/\.]+/', $_GET['post_id'] ) == 0) ) {
		// clean
		$postid = $_GET['post_id'];
		$ip = $_GET['IP'];
		
		update_post_meta( $postid, $ip, 'felt' );
	} else {
		die('Error - code invalid');
	}
}


?>