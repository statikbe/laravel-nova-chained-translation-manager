/* eslint-disable */
let mix = require("laravel-mix");
const tailwindcss = require("tailwindcss");

require('./nova.mix')

mix
  .setPublicPath('dist')
  .js('resources/js/tool.js', 'js')
  .vue({ version: 3 })
  .postCss("resources/css/tool.css", "css", [tailwindcss("./tailwind.config.js"),  'tailwindcss/nesting'])
  .nova('statikbe/laravel-nova-chained-translation-manager');
