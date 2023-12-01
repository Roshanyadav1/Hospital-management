/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        dirs: ['pages', 'utils'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
    },
    images: {
        domains: ['fastly.picsum.photos' , 'img.freepik.com' , 'thumbs.dreamstime.com'],
        domains:["t4.ftcdn.net","img.freepik.com","i.pinimg.com","media.istockphoto.com","cdn.create.vista.com", "thumbs.dreamstime.com"]
    },
}

module.exports = nextConfig
