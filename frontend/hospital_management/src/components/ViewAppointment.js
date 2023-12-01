"use client"
import * as React from 'react'
import { useRouter } from 'next/navigation'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { useGetAppointmentQuery } from '@/services/Query'

 function ViewAppoinment() {
    const router = useRouter();
    const { data: appointmentData } =  useGetAppointmentQuery()
   const [expanded, setExpanded] = React.useState(false)

   const handleExpandClick = () => {
      setExpanded(!expanded)
   }

   return (
      <Card sx={{ width: 1450, marginX:5}}>
         <CardHeader
            avatar={
               <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
                  R
               </Avatar>
            }
         
         
         
            title= {appointmentData?.data || []}
            subheader='September 14, 2016'
         />

         <Collapse in={expanded} timeout='auto' unmountOnExit></Collapse>
      </Card>
   )
}

export default ViewAppoinment
