
"use client"
import { Grid, Card, Typography, Button } from '@mui/material'
import Container from '@mui/material/Container'
import { toast } from 'react-toastify'
import { doctorwelcome } from '@/helpers/doctorwelcome'
import Image from 'next/image'
import {useGetViewDoctorQuery} from '@/services/Query'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
// import required modules
import { Pagination, Navigation } from 'swiper/modules'
import Link from 'next/link'

function DoctorCard() {
   const {data:getDname,isLoding} = useGetViewDoctorQuery();
   console.log('Doctor name',getDname);
   const [screenSize, setScreenSize] = useState(getInitialScreenSize())
   const showWarningToast = () => {
      toast.warning('Warning Example', { autoClose: false })
   }
   console.log('This works', screenSize)

   useEffect(() => {
      const handleResize = () => {
         setScreenSize(getInitialScreenSize())
      }
      console.log(window, 'window')
      if (typeof window !== 'undefined') {
         // Attach the event listener
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

         console.log('width', width)
         if (width <= 320) {
            return 1
         } else if (width <= 768) {
            return 2
         } else {
            return 3
         }
      }
   }

   console.log(getInitialScreenSize(), 'getInitialScreenSize')

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
         <Typography variant='h3' align='center' style={{ marginTop: '50px' }}>
            Our Doctors
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
               {doctorwelcome.map((result, index) => (
                  <Grid key={index} container spacing={1} marginY={1}>
                     <SwiperSlide>
                        <Grid item sx={{ minWidth: 400 }} xs={12} md={4} sm={6}>
                              <Card
                                 sx={{
                                    maxWidth: 350,
                                    border: '1 px solid',
                                    margin: '10px',
                                    padding: 2,
                                    textAlign: 'center',
                                 }}
                              >
                                 <Image
                                    height={250}
                                    width={350}
                                    src={result.image}
                                    alt='image'
                                 />
                                 <Typography
                                    gutterBottom
                                    variant='h5'
                                    component='div'
                                 >
                                    {result.name}
                                    <Typography
                                       variant='body2'
                                       color='text.secondary'
                                    >
                                       {result.specialization}
                                       <Typography
                                          variant='body3'
                                          color='text.secondary'
                                       >
                                          {result.category}
                                       </Typography>
                                    </Typography>
                                 </Typography>
                                 <Link href={`/doctorpage`} passHref>
                                 <Button
                                    onClick={showWarningToast}
                                    size='small'
                                    sx={{
                                       border: '1px solid',
                                       '&:hover': {
                                          backgroundColor: '#13293d',
                                          color: '#fff', 
                                       },
                                    }}
                                 >
                                    Book Appointment
                                 </Button>
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
