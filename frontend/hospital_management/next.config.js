/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        dirs: ['pages', 'utils'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
    },
    images: {
        domains:[' _services_Query__WEBPACK_IMPORTED_MODULE_12__.useGetViewDoctorQuery'],
        domains:['fastly.picsum.photos' , 'img.freepik.com' , 'thumbs.dreamstime.com','next.config.js','img.freepik.com','png.pngtree.com','www.carehospitals.com','www.carehospitals.com','img.freepik.com','t4.ftcdn.net','i.pinimg.com','media.istockphoto.com','cdn.create.vista.com','0 , _services_Query__WEBPACK_IMPORTED_MODULE_2__.useGetAppointmentQuery','hospital0000.s3.ap-south-1.amazonaws.com',],
        domains:[ '0 , _services_Query__WEBPACK_IMPORTED_MODULE_3__.useSpecialistDoctorMutation',"www.carehospitals.com",'img.freepik.com',"t4.ftcdn.net","t4.ftcdn.net","i.pinimg.com","media.istockphoto.com","cdn.create.vista.com","png.pngtree.com",'0 , _services_Query__WEBPACK_IMPORTED_MODULE_2__.useGetAddAppointmentMutation '],
    },
}

module.exports = nextConfig
