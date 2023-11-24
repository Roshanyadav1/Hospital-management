/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        dirs: ['pages', 'utils'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
    },
    images: {
<<<<<<< HEAD
        domains: ['fastly.picsum.photos' , 'www.carehospitals.com', 't4.ftcdn.net','media.istockphoto.com', 'medlinkstaffing.com', 'getwallpapers.com', 'www.stockvault.net','www.pngitem.com','thumbs.dreamstime.com' ,'img.freepik.com','_helpers_welcome__WEBPACK_IMPORTED_MODULE_3___default']
=======
        domains: ['fastly.picsum.photos' , 'img.freepik.com' , 'thumbs.dreamstime.com'],
>>>>>>> 1e0500cb69beacdbbfb9f63444c2076348e3e937
    },
}

module.exports = nextConfig
