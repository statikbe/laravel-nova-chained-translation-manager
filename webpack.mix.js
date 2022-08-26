/* eslint-disable */
let mix = require("laravel-mix");
const tailwindcss = require("tailwindcss");

require('./nova.mix')

mix
.setPublicPath('dist')
.js('resources/js/tool.js', 'js')
.vue({ version: 3 })
.sass('resources/sass/tool.scss', 'css')
.options({
  processCssUrls: false,
  postCss: [tailwindcss('./tailwind.config.js')]
})
.nova('statikbe/nova-translation-manager');
