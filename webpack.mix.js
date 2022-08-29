/* eslint-disable */
let mix = require("laravel-mix");
const tailwindcss = require("tailwindcss");

require('./nova.mix')

mix
  .setPublicPath('dist')
  .js('resources/js/tool.js', 'js')
  .vue({ version: 3 })
  .css('resources/css/tool.css', 'css')
  .options({
    processCssUrls: false,
    postCss: [tailwindcss('./tailwind.config.js')]
  })
  .nova('statikbe/laravel-nova-chained-translation-manager');
