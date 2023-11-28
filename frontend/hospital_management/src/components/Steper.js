// "use client"
// import * as React from "react";
// import { useTheme } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import MobileStepper from "@mui/material/MobileStepper";
// import Paper from "@mui/material/Paper";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import Swiper from "swiper";
// import { autoPlay } from 'react-swiper';
// import 'swiper/css';

// const AutoPlaySwipeableViews = autoPlay(Swiper);

// const swiper = new Swiper('.swiper', {
//   // configure Swiper to use modules
//   modules: [Navigation, Pagination],

// });
// const images = [
//   {
//     imgPath:
//        "https://img.freepik.com/free-photo/doctor-with-stethoscope-hands-hospital-background_1423-1.jpg?w=1060&t=st=1699076591~exp=1699077191~hmac=d4cc8a1ca67c44d5a7bc7e64b9a10d77e081f8984863ad8d397c6086fe198b79",
//      },
//   {
//     imgPath:
//       "https://img.freepik.com/premium-photo/doctor-hold-icon-health-electronic-medical-record-interface-digital-healthcare-network_34200-712.jpg?w=1380",
//   },
//   {
//     imgPath:
//        "https://images.unsplash.com/photo-1624343285636-aba82fd5a124?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },

//   {
//     imgPath:
//       "https://img.freepik.com/premium-photo/modern-commercial-architecture-glass-steel-forum-skyscraper-reflecting-blue-sky_250132-16918.jpg?w=1060",
//   },
// ];

// function SwipeableTextMobileStepper() {
//   const theme = useTheme();
//   const [activeStep, setActiveStep] = React.useState(0);
//   const maxSteps = images.length;

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleStepChange = (step) => {
//     setActiveStep(step);
//   };

//   return (
//     <Box sx={{ maxWidth: 1500, flexGrow: 1 }}>
//       <Paper
//         square
//         elevation={0}
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           height: 50,
//           pl: 2,
//           bgcolor: "background.default",
//         }}
//       >
//         <Typography>{images[activeStep].label}</Typography>
//       </Paper>
//       <AutoPlaySwipeableViews
//         axis={theme.direction === "rtl" ? "x-reverse" : "x"}
//         index={activeStep}
//         onChangeIndex={handleStepChange}
//         enableMouseEvents
//       >
//         {images.map((step, index) => (
//           <div key={step.label}>
//             {Math.abs(activeStep - index) <= 2 ? (
//               <Box
//                 component="img"
//                 sx={{
//                   //   height:400,
//                   display: "block",
//                   maxWidth: 1500,
//                   overflow: "hidden",
//                   width: "100%",
//                   aspectRatio: 8 / 2,
//                 }}
//                 src={step.imgPath}
//                 alt={step.label}
//               />
//             ) : null}
//           </div>
//         ))}
//       </AutoPlaySwipeableViews>
//       <MobileStepper
//         steps={maxSteps}
//         position="static"
//         activeStep={activeStep}
//         nextButton={
//           <Button size="small" disabled={activeStep === maxSteps - 1}></Button>
//         }
//         backButton={
//           <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
//             {" "}
//           </Button>
//         }
//       />
//     </Box>
//   );
// }

// export default SwipeableTextMobileStepper;






// import React from 'react'
// import  { useRef, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination'
// import style from '@/styles/swiper.module.css'
// // import './styles.css';

// import { Pagination } from 'swiper/modules';
// function Steper() {
//   return (
//     <div>
//            <Swiper
//         pagination={{
//           dynamicBullets: true,
//         }}
//         modules={[Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide  className={style.swiperSlide}> 
//         <img src='/assest/hospital.jpg' alt='hospital-img' className='border p-1' />
//        <h1 className='mt-3'>Megha Dhangar</h1>
//        <p>
//         hello my name is megha dhanagr i am navalgaon 
//        </p>
//         </SwiperSlide>

//         <SwiperSlide  className={style.swiperSlide}> 
//         <img src='assest/hospital.jpg' alt='hospital-img' className='border p-1' />
//        <h1 className='mt-3'>Navin Joshi</h1>
//        <p>
//         hello my name is megha dhanagr i am navalgaon 
//        </p>
//         </SwiperSlide>

//         <SwiperSlide  className={style.swiperSlide}> 
//         <img src='assest/hospital.jpg' alt='hospital-img' className='border p-1' />
//        <h1 className='mt-3'>Megha Dhangar</h1>
//        <p>
//         hello my name is megha dhanagr i am navalgaon 
//        </p>
//         </SwiperSlide>
        
//       </Swiper>
//     </div>
//   )
// }

// export default Steper



import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import style from '@/styles/swiper.module.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Box from "@mui/material/Box";
// import './styles.css';
import { Pagination, Navigation } from 'swiper/modules';
import { Typography } from '@mui/material';

const images = [

  {
    imgPath:
      'https://img.freepik.com/premium-photo/doctor-hold-icon-health-electronic-medical-record-interface-digital-healthcare-network_34200-712.jpg?w=1380',
  },
 
  {
    imgPath:
      'https://images.unsplash.com/photo-1624343285636-aba82fd5a124?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    imgPath:
      'https://img.freepik.com/premium-photo/modern-commercial-architecture-glass-steel-forum-skyscraper-reflecting-blue-sky_250132-16918.jpg?w=1060',
  },
];
function SwipeableTextMobileStepper() {
  return(
<Swiper
        pagination={{
          // type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <Box>
        {images.map((image, index) => (
        <SwiperSlide key={index} className={style.swiperSlide}>
          <img src={image.imgPath} alt={`slide-${index}`} className="border p-1" />
          {index===0&&( 
            <div className={style.textOverImage} >
            <Typography variant='h3' > SGA Hospital Now in Sandalpur</Typography>
            <p>CARE Hospitals expands its national footprint with the acquisition of SGA Hospital,Sandalpur </p>
            </div>
         ) }
          
        </SwiperSlide>
      ))}
       </Box>
      </Swiper>

)}
export default SwipeableTextMobileStepper;
