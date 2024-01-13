
import { Swiper, SwiperSlide } from 'swiper/react'
import style from '@/styles/swiper.module.css'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import { Autoplay, Pagination } from 'swiper/modules';

const images = [
   {
      imgPath:
         '/Slider/steper1c.jpg',
   },

   {
      imgPath:
         '/Slider/steper2.jpg',
   },
   {
      imgPath:
         '/Slider/steper3.jpg',
   },
]
function SwipeableTextMobileStepper() {
   return (
      <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      // navigation={true}
      modules={[Autoplay, Pagination,]}
      className="mySwiper"
      >
         <Box>
            {images.map((image, index) => (
               <SwiperSlide key={index} className={style.swiperSlide}>
                  <img
                     src={image.imgPath}
                     alt={`slide-${index}`}
                     className='border p-1'
                  />
                  {index === 0 && (
                     <div className={style.textOverImage}>
                        <Typography variant='h3'>
                           {' '}
                           SGA Hospital Now in Sandalpur
                        </Typography>
                        <Typography variant={'body2'}>
                           CARE Hospitals expands its national footprint with the
                           acquisition of SGA Hospital, Sandalpur{' '}
                        </Typography>
                     </div>
                  )}
               </SwiperSlide>
            ))}
         </Box>
      </Swiper>
   )
}
export default SwipeableTextMobileStepper
