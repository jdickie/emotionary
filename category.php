<?php
/**
 * The template for displaying Category pages.
 *
 * Used to display archive-type pages for posts in a category.
 *
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Emotionary
 * @since Twenty Twelve 1.0
 */

get_header(); ?>

	<section id="primary" class="site-content">
		<div id="content" role="main">
		  <div id="book_header">
		  	<?php single_cat_title(); ?>s
			</div>
			<div id="template-book-wrapper">
				<div id="book-side">
				</div>
				<div id="inner-fix">
					<div id="book-top">
					</div>
			
					<div id="book-main">
						<div id="template-column-left">
							<div class="inner-page">
							</div>
							<div id="nav-left">
								<a href="#"><--</a>
							</div>
						</div>
						<div id="template-column-right">
							<div class="inner-page">
							</div>
							<div id="nav-right">
								<a href="#">--></a>
							</div>
						</div>
					</div>
				</div> <!-- #innerfix -->
			</div><!-- #template-book-wrapper -->
			<?php emotionary_get_az_category(); ?>
		</div><!-- #content -->
	</section><!-- #primary -->

<?php get_footer(); ?>