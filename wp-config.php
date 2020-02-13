<?php

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'stem' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'TD105999.' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'muy-3pd 7Q%ub8SA?YyPxmeV-NQQmw,rzV6P{wqoE%m&3!~GT}j6nE3$5rXI ]?0' );
define( 'SECURE_AUTH_KEY',  ':6r@/By]H>k9>4&t1RgGFEa,& kzoU^qgiaVPdk*N#;Q;OwY.<bO{:ZX y](:B-(' );
define( 'LOGGED_IN_KEY',    'iH%j3b.5m`c4_; qoF~k<*Oa&=v&uKd_P}`ys2|My;ghfX5)NC#tY&@/T XmXGK(' );
define( 'NONCE_KEY',        'nos@Dv+8xKX6De@+1_+i7|XFv<OxlkEqD+1Q/wm7sf`IplP&.u>k5E@asn3f*:YI' );
define( 'AUTH_SALT',        '^bma|Cr;}MnFYU{N=k<amw&Y|sO.WJFKxmy :)D]9v=J*J 3tuZ6JI*q>{KeQ+/]' );
define( 'SECURE_AUTH_SALT', '9)Aoabr{(Yjq#lO7LspLXZn9(Jw3<2rFBQ+=7^$L8S6/Z/(G(crnE;kA$QHM;O.D' );
define( 'LOGGED_IN_SALT',   'dQyFwcK)z*~gN1a5pNYg52~8IOT}UP8{.S(6l^IonDk571I5t/318_#@G@2lM:` ' );
define( 'NONCE_SALT',       '=iuQ5o]_oc*FV7,.!o#Yp;H4OB]F<tf%aVMP]YFSFY8;u>5;RlG$Oun$UpF+.KQr' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if (!defined('ABSPATH')) {
    define('ABSPATH', dirname(__FILE__) . '/');
}

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
