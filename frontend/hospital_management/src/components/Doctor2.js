import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Typography } from '@mui/material'
import { doctorwelcome } from '@/helpers/doctorwelcome'
import Image from 'next/image'

function DoCard() {
   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      SliderToShow: 3,
      SliderToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 2000,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }
   
   return (
      <div className=''>
         <div className=''>
         <Slider {...settings}>
            {doctorwelcome.map((result, index) => (
               <div>
                  <div>
                     <Image
                        height={250}
                        width={350}
                        src={result.image}
                        alt='image'
                     />
                  </div>

                  <div>
                     <Typography>{result.name}</Typography>
                     <Typography>{result.specialization}</Typography>
                     <button> Add Appointment</button>
                  </div>
               </div>
            ))}
             </Slider>
         </div>
    </div>   
   )
}

 export default DoCard