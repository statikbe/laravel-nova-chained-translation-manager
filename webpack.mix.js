/* eslint-disable */
let mix = require("laravel-mix");

require('./nova.mix')

mix
  .setPublicPath('dist')
  .js('resources/js/tool.js', 'js')
  .vue({ version: 3 })
  .sass('resources/css/tool.scss', 'css')
  .nova('statikbe/laravel-nova-chained-translation-manager');
