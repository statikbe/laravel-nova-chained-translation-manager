/* eslint-disable */
let mix = require("laravel-mix");
const {VueLoaderPlugin} = require('vue-loader');
const tailwindcss = require("tailwindcss");

mix
  .setPublicPath("dist")
  .js("resources/js/tool.js", "js").vue()
  .sass("resources/sass/tool.scss", "css")
  .options({
    processCssUrls: false,
    postCss: [tailwindcss("./tailwind.config.js")],
  });
