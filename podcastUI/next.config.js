const withSass = require('@zeit/next-sass');
const withCSS = require("@zeit/next-css");
const withImages = require('next-images')
const withFonts = require('next-fonts');



module.exports = withCSS(withImages(withSass(withFonts({
    enableSvg: true,
    sassLoaderOptions: {}
}))));