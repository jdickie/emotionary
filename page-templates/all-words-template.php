<?php
/* 
 * Template Name: All Words
 *  
 * Template for all words page 
 */

get_header(); ?>

	<div id="primary" class="site-content">
		<div id="content" role="main">
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
						</div>
						<div id="template-column-right">
							<div class="inner-page">
							</div>
						</div>
						<div id="template-nav-bottom">
							<div id="nav-left">
								<a href='#'>&nbsp;</a>
							</div>
							<div id="nav-right">
								<a href='#'>&nbsp;</a>
							</div>
						</div>
					</div>
				</div> <!-- #innerfix -->
			</div><!-- #template-book-wrapper -->
			<?php emotionary_get_az(); ?>
		</div><!-- #content -->
	</div><!-- #primary -->

<?php get_footer(); ?>

?>