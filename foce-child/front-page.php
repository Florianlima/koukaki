<?php

get_header();
?>

<main id="primary" class="site-main">
    <section class="banner">
        <video class="video-banner" autoplay muted loop poster>
            <source src="<?php echo get_theme_file_uri() . '/asset/video/video-koukaki.mp4'; ?>" type="video/mp4">
            <img src="<?php echo get_template_directory_uri() . '/assets/images/banner.png'; ?> " alt="bannière">
        </video>
        <img class="banner__logo" data-0="top:200px;" data-150="top:410px;" src="<?php echo get_template_directory_uri() . '/assets/images/logo.png'; ?> " alt="logo Fleurs d'oranger & chats errants">

    </section>
    <section id="#story" class="story">
        <h2 class="titre-wrapper">
            <div class="section-title ">L'histoire</div>
        </h2>
        <article id="" class="story__article">
            <p><?php echo get_theme_mod('story'); ?></p>
        </article>
        <?php
        $args = array(
            'post_type' => 'characters',
            'posts_per_page' => -1,
            'meta_key'  => '_main_char_field',
            'orderby'   => 'meta_value_num',

        );
        $characters_query = new WP_Query($args);
        ?>
        <article id="characters" class="">
            <div class="main-character">
                <h3>Les personnages</h3>
                <?php
                get_template_part( 'template/section-perso');
                ?>
            </div>
            <div class="other-characters">
                 <?php
                ?>
            </div>
        </article>
        <article id="place">
            <div>
                <h3>Le Lieu</h3>
                <p><?php echo get_theme_mod('place'); ?></p>
            </div>
            <div class="cloud-wrapper">
                    <div class="groupe_nuages">
                        <img class="small_cloud" src="<?php echo get_theme_file_uri() . '/asset/images/little_cloud.png'; ?> " alt="image petit nuage">
                        <img class="big_cloud" src="<?php echo get_theme_file_uri() . '/asset/images/big_cloud.png'; ?> " alt="image grand nuage">
                    </div>
                </div>
        </article>
    </section>


    <section id="studio" class="studio__section">
        <h2 class="studio-wrapper">
            <div class="studio-title ">Studio Koukaki</div>
        </h2>
        <div>
            <p>Acteur majeur de l’animation, Koukaki est un studio intégré fondé en 2012 qui créé, produit et distribue des programmes originaux dans plus de 190 pays pour les enfants et les adultes. Nous avons deux sections en activité : le long métrage et le court métrage. Nous développons des films fantastiques, principalement autour de la culture de notre pays natal, le Japon.</p>
            <p>Avec une créativité et une capacité d’innovation mondialement reconnues, une expertise éditoriale et commerciale à la pointe de son industrie, le Studio Koukaki se positionne comme un acteur incontournable dans un marché en forte croissance. Koukaki construit chaque année de véritables succès et capitalise sur de puissantes marques historiques. Cette année, il vous présente “Fleurs d’oranger et chats errants”.</p>
        </div>
    </section>
</main><!-- #main -->

<script src= 'https://cdnjs.cloudflare.com/ajax/libs/skrollr/0.6.30/skrollr.min.js'></script>
    <script>
        var s = skrollr.init();
    </script>




<?php
get_footer();
