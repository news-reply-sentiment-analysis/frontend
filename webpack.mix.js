const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.jsx', 'public/js/app.js').react().version();
mix.js('resources/js/landing.js', 'public/js/landing.js').version();

mix.sass('resources/sass/app.scss', 'public/css/app.css').version();
mix.sass('resources/sass/landing.scss', 'public/css/landing.css').version();