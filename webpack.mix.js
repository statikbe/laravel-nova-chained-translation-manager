/* eslint-disable */
let mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix
  .setPublicPath('dist')
  .js('resources/js/tool.js', 'js')
  .vue({ version: 2 })
  .sass('resources/sass/tool.scss', 'css')
  .options({
    processCssUrls: false,
    postCss: [tailwindcss('./tailwind.config.js')]
  });
