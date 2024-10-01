<?php

/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Fleurs_d\'oranger_&_Chats_errants
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<?php wp_body_open(); ?>
	<div id="page" class="site">
		<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e('Skip to content', 'foce'); ?></a>

		<header id="mast	head" class="site-header">
			<nav id="site-navigation" class="main-navigation">

				<ul id="titreMenu">
					<li class="title-site"><a href="<?php echo esc_url(home_url('/')); ?>" rel="home"><?php bloginfo('name'); ?></a></li>
				</ul>
				<div class="burgerBtn">
					<span></span>
				</div>
			</nav>

			<div class="fullscreenMenu">
				<img class="logoFullscreen" src="<?php echo get_theme_file_uri() . '/asset/images/petit_logo.png'; ?>" alt="logo menu fullscreen">
				<img class="orchidMenu" src="<?php echo get_template_directory_uri() . '/assets/images/orchid.png'; ?>" alt="logo menu fullscreen">
				<img class="flowerMenu" src="<?php echo get_template_directory_uri() . '/assets/images/flower.png'; ?>" alt="logo menu fullscreen">
				<img class="sunflowerMenu" src="<?php echo get_template_directory_uri() . '/assets/images/sunflower.png'; ?>" alt="logo menu fullscreen">
				<img class="randomflowerMenu" src="<?php echo get_template_directory_uri() . '/assets/images/Random_flower.png'; ?>" alt="logo menu fullscreen">
				<img class="hibiscusMenu" src="<?php echo get_template_directory_uri() . '/assets/images/hibiscus_footer.png'; ?>" alt="logo menu fullscreen">
				<img class="blueCatMenu" src="<?php echo get_theme_file_uri() . '/asset/images/chat-bleu.png'; ?>" alt="logo menu fullscreen">
				<img class="orangeCatMenu" src="<?php echo get_theme_file_uri() . '/asset/images/chat-orange.png'; ?>" alt="logo menu fullscreen">
				<img class="blackCatMenu" src="<?php echo get_theme_file_uri() . '/asset/images/chat-gris.png'; ?>" alt="logo menu fullscreen">
				<ul>
					<li><a href="#story">Histoire</a></li>
					<li><a href="#characters">Personnages</a></li>
					<li><a href="#place">Lieu</a></li>
					<li><a href="#studio">Studio Koukaki</a></li>
				</ul>
				<p>studio koukaki</p>
			</div><!-- #fullscreen-menu -->
		</header><!-- #masthead -->