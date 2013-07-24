<?php
/*
 * Template Name: Submit A Word
 *
 * Template for the submit form for Emotionary
 * @since Emotionary 1.0
 */

 
get_header(); ?>

	<div id="primary" class="site-content">
		<div id="content" role="main">
			<?php while ( have_posts() ) : the_post(); ?>
				<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
					<div class="entry-content">
						<div id="emotionary-form-wrapper">
							<?php the_content(); ?>
						</div>
					<footer class="entry-meta">
						<?php edit_post_link( __( 'Edit', 'twentytwelve' ), '<span class="edit-link">', '</span>' ); ?>
					</footer><!-- .entry-meta -->
				</article><!-- #post -->
			<?php endwhile; ?>
		</div><!-- #content -->
	</div><!-- #primary -->

<?php get_footer(); ?>


?>