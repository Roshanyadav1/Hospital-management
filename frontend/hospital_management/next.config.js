/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        dirs: ['pages', 'utils'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
    },
    images: {
        domains: ['fastly.picsum.photos' , 'img.freepik.com' , 'thumbs.dreamstime.com'],
    },
}

module.exports = nextConfig
