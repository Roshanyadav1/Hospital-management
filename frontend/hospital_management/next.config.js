/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        dirs: ['pages', 'utils'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
    },
    images: {
        domains: ['fastly.picsum.photos' , 'img.freepik.com' , 'thumbs.dreamstime.com'],
        domains: ['fastly.picsum.photos' , 'www.carehospitals.com', 't4.ftcdn.net','media.istockphoto.com', 'medlinkstaffing.com', 'getwallpapers.com', 'www.stockvault.net','www.pngitem.com','thumbs.dreamstime.com' ,'img.freepik.com','_helpers_welcome__WEBPACK_IMPORTED_MODULE_3___default']
    },
}

module.exports = nextConfig
