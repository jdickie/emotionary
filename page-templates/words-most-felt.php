<?php
/*
 * Template Name: Words Most Felt
 * 
 */

get_header();
?>

<div id="primary" class="site-content">
	<div id="content" role="main">
		<?php while (have_posts()) : the_post(); ?>
			
		
		<?php endwhile; ?>
	
	</div>
</div>

<?php
get_footer();

?>