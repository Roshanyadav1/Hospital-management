<<<<<<< HEAD
// import React from 'react'
// import { Grid, Card, CardContent, Typography, Button } from '@mui/material'
// import CardActions from '@mui/material/CardActions'
// import Container from '@mui/material/Container'
// import { CardActionArea, CardMedia } from '@mui/material'
// import Home from '@/app/dashboard/page'
// import { AccessAlarm, ThreeDRotation } from '@mui/icons-material'
// import { toast } from 'react-toastify'
// import { doctorwelcome } from '@/helpers/doctorwelcome'
// import { maxWidth } from '@mui/system'
// import Image from 'next/image'
// import { useEffect, useState } from 'react'
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react'
// // Import Swiper styles
// import 'swiper/css'
// import 'swiper/css/pagination'
// import 'swiper/css/navigation' // Add this line for navigation styles
// // import required modules
// import { Pagination, Navigation } from 'swiper/modules'
// import Link from 'next/link'
// import { useGetViewDoctorQuery } from '@/services/Query'
// import Chip from '@mui/material/Chip';
// function DoctorCard() {
//    const { data: getDname } = useGetViewDoctorQuery()
//    const [screenSize, setScreenSize] = useState(getInitialScreenSize())

//    useEffect(() => {
//       const handleResize = () => {
//          setScreenSize(getInitialScreenSize())
//       }
//       // Check if window is defined (i.e., we are in the browser)
//       if (typeof window !== 'undefined') {
//          // Attach the event listenerb
//          window.addEventListener('resize', handleResize)
//          // Detach the event listener on component unmount
//          return () => {
//             window.removeEventListener('resize', handleResize)
//          }
//       }
//    }, [])
//    function getInitialScreenSize() {
//       // Check if window is defined (i.e., we are in the browser)
//       if (typeof window !== 'undefined') {
//          const width = window.innerWidth
//          if (width <= 320) {
//             return 1
//          } else if (width <= 768) {
//             return 2
//          } else {
//             return 3
//          }
//       }
//    }

//    // Rest of your code...
//    const settings = {
//       dots: "true",
//       infinite: "false",
//       speed: 500,
//       slidesPerView: screenSize,
//       spaceBetween: screenSize * 10,
//    }
//    return (
//       <>
//          <Typography
//             variant='h3'
//             align='center'
//             color='primary'
//             style={{ marginTop: '50px' }}
//          >
//             Doctors
//          </Typography>
//          <Container maxWidth='lg' sx={{ padding: '3rem' }}>
//             <Swiper
//                {...settings}
//                pagination={{
//                   clickable: true,
//                   el: '.swiper-pagination-custom',
//                   justifyContent: 'center',
//                }}
//                modules={[Pagination, Navigation]}
//                className='mySwiper'
//             >
//                {getDname?.data?.results?.map((result, index) => (

//                   <Grid
//                      container
//                      direction="row"
//                      justifyContent="center"
//                      alignItems="center"
//                      key={index}
//                   >
//                      <SwiperSlide>
//                         <Grid item sx={{ minWidth: 200 }} xs={12} md={4} sm={6}>
//                            <Card
//                               sx={{
//                                  maxWidth: 350,
//                                  border: '4 px solid blue',
//                                  // margin: '15px',
//                                  // padding: 1,
//                                  padding: '20px',
//                                  textAlign: 'center',
//                                  // backgroundColor:'#A7AFB7',
//                                  boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px'
//                               }}
//                            >
//                               <Image
//                                  height={250}
//                                  width={350}
//                                  src={result.doctor_profile_picture}
//                                  //doctor_profile_picture
//                                  alt='image'
//                                  // style={{ borderRadius: '50%' }}
//                               />

//                               <Typography gutterBottom variant='h5' component='div'>
//                                  Dr.{result.employee?.employee_name}
//                                  <Typography variant='body2' color='text.secondary' paddingBottom={"3px"}>
//                                     {result.category}
//                                  </Typography>
//                                  <Chip
//                                     label={result.disease_specialist}
//                                     variant='contained'
//                                     sx={{ position: 'relative', top: '15px', backgroundColor: 'white', fontWeight: 'bold' }}
//                                  />
//                                  <Typography variant='body2' color='text.secondary'>
//                                     {result.disease}
                                    
//                                  </Typography>
//                               </Typography>
//                               <Link
//                                  style={{ textDecoration: 'none' }}
//                                  href='/doctorpage'
//                               >
//                               </Link>


//                            </Card>
//                         </Grid>
//                      </SwiperSlide>
//                   </Grid>
//                ))}
//             </Swiper>
//             <div
//                className='swiper-pagination-custom'
//                style={{
//                   marginTop: '30px',
//                   display: 'flex',
//                   justifyContent: 'center',
//                }}
//             ></div>
//          </Container>
//       </>
//    )
// }
// export default DoctorCard
























import { Grid, Card, Typography } from '@mui/material'
=======
import React from 'react'
import { Grid, Card, CardContent, Typography, Button } from '@mui/material'
import CardActions from '@mui/material/CardActions'
>>>>>>> 5da58078055850f4474fe228ba283cbd66522ee4
import Container from '@mui/material/Container'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper/modules'
import Link from 'next/link'
import { useGetViewDoctorQuery } from '@/services/Query'
import Chip from '@mui/material/Chip';
function DoctorCard() {
   const { data: getDname } = useGetViewDoctorQuery()
   const [screenSize, setScreenSize] = useState(getInitialScreenSize())

   useEffect(() => {
      const handleResize = () => {
         setScreenSize(getInitialScreenSize())
      }
      // Check if window is defined (i.e., we are in the browser)
      if (typeof window !== 'undefined') {
         // Attach the event listenerb
         window.addEventListener('resize', handleResize)
         // Detach the event listener on component unmount
         return () => {
            window.removeEventListener('resize', handleResize)
         }
      }
   }, [])
   function getInitialScreenSize() {
      // Check if window is defined (i.e., we are in the browser)
      if (typeof window !== 'undefined') {
         const width = window.innerWidth
         if (width <= 320) {
            return 1
         } else if (width <= 768) {
            return 2
         } else {
            return 3
         }
      }
   }

   // Rest of your code...
   const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesPerView: screenSize,
      spaceBetween: screenSize * 10,
   }
   return (
      <>
         <Typography
            variant='h3'
            align='center'
            color='primary'
            style={{ marginTop: '50px' }}
         >
            Doctors
         </Typography>
         <Container maxWidth='lg' sx={{ padding: '3rem' }}>
            <Swiper
               {...settings}
               pagination={{
                  clickable: true,
                  el: '.swiper-pagination-custom',
                  justifyContent: 'center',
               }}
               modules={[Pagination, Navigation]}
               className='mySwiper'
            >
               {getDname?.data?.results?.map((result, index) => (
                <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                key={index}
              >
                     <SwiperSlide>
                        <Grid item sx={{ minWidth: 400 }} xs={12} md={4} sm={6}>
                           <Card
                              sx={{
                                 maxWidth: 350,
                                 border: '4 px solid',
                                 // margin: '15px',
                                 // padding: 1,
                                 textAlign: 'center',
                              }}
                           >
                              <Image
                                 height={250}
                                 width={350}
                                 src={result.doctor_profile_picture}
                                 //doctor_profile_picture
                                 alt='image'
                              />
                              <Typography gutterBottom variant='h5' component='div'>
                                 
                                <Typography variant='body1'sx={{display:'inline', bgcolor:'#fff' ,position:"absolute",right:'80px',left:'80px',  bottom:"2rem", justifyContent:'center',boxShadow:'0' }}>
                               {result.disease_specialist} 
                                 </Typography>
                                 
                                    
                                     {/* <Chip label={result.disease_specialist}  variant="contained" sx={{position:"absolute", right:"7rem",  bottom:"3rem" , backgroundColor: "white"}}/> */}
                                 
                                 Dr.{result.employee?.employee_name}
                                 <Typography variant='body2' color='text.secondary'paddingBottom={"3px"}>
                                    {result.category}
                                 </Typography>
                              </Typography>
                              <Link
                                 style={{ textDecoration: 'none' }}
                                 href='/doctorpage'
                              >
                                 {/* <Button
                                    sx={{
                                       border: '1px solid',
                                       '&:hover': {
                                          backgroundColor: '#13293D',
                                          color: '#fff', 
                                       },
                                    }}
                                 >
                                    Book Appointment
                                 </Button> */}
                              </Link>
                           </Card>
                        </Grid>
                     </SwiperSlide>
                  </Grid>
               ))}
            </Swiper>
            <div
               className='swiper-pagination-custom'
               style={{
                  marginTop: '30px',
                  display: 'flex',
                  justifyContent: 'center',
               }}
            ></div>
         </Container>
      </>
   )
}
export default DoctorCard
