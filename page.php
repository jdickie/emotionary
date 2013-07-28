<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 *
 * @package WordPress
 * @subpackage Emotionary
 * @since Twenty Twelve 1.0
 *
 * Editing out many components in order to match Emotionary.com's layout
 */

get_header(); ?>

	<div id="primary" class="site-content">
		<div id="content" role="main">
		<?php if ( have_posts() ) : ?>
			<?php emotionary_nav_prev( 'nav-left' ); ?>
			<?php /* Start the Loop */ ?>
			<?php while ( have_posts() ) : the_post(); ?>
				<?php get_template_part( 'content', get_post_format() ); ?>
				
			<?php endwhile; ?>

			<?php emotionary_nav_next( 'nav-right' ); ?>
		
			<?php emotionary_feelin_it(); ?>
			
			<?php 
				// Only display related emotions 
				emotionary_related_posts();
			?>

		</div><!-- #content -->
	</div><!-- #primary -->

<?php get_footer(); ?>