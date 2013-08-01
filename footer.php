<?php
/**
 * The template for displaying the footer.
 *
 * Contains footer content and the closing of the
 * #main and #page div elements.
 *
 * @package WordPress
 * @subpackage Emotionary
 * @since Twenty Twelve 1.0
 */
?>
	</div><!-- #main .wrapper -->
	<footer id="colophon" role="contentinfo">
		<div class="line-clear long">&nbsp;</div>
		<nav id="site-navigation" class="main-navigation" role="navigation">
			<h3 class="menu-toggle"><?php _e( 'Menu', 'twentytwelve' ); ?></h3>
			<a class="assistive-text" href="#content" title="<?php esc_attr_e( 'Skip to content', 'twentytwelve' ); ?>"><?php _e( 'Skip to content', 'twentytwelve' ); ?></a>
			<?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu_class' => 'nav-menu' ) ); ?>
		</nav><!-- #site-navigation -->
		<div class="line-clear long">&nbsp;</div>
		<div class="site-info">
			<span class="copyright">&copy; <?php printf( __( '%s Created by Eden Sher, ' ), the_time('Y') ); 
			print __('Illustrations by ') . "<a href=\"http://elizabethgraeber.com\">Elizabeth Graeber</a>";
			print __(', Coded by ') . "<a href=\"http://grantdickie.com\">Grant Dickie</a>"; ?></span>
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>
</body>
</html>