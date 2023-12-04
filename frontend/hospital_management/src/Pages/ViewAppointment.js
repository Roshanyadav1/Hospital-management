// 'use client'
// import * as React from 'react'
// // import { styled } from '@mui/material/styles'
// import Card from '@mui/material/Card'
// import CardHeader from '@mui/material/CardHeader'
// // import CardMedia from '@mui/material/CardMedia'
// // import CardContent from '@mui/material/CardContent'
// // import CardActions from '@mui/material/CardActions'
// // import Collapse from '@mui/material/Collapse'
// // import Avatar from '@mui/material/Avatar'
// // import IconButton from '@mui/material/IconButton'
// // import Typography from '@mui/material/Typography'
// // import { red } from '@mui/material/colors'
// // import FavoriteIcon from '@mui/icons-material/Favorite'
// // import ShareIcon from '@mui/icons-material/Share'
// // import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
// // import MoreVertIcon from '@mui/icons-material/MoreVert'

// import { useGetAppointmentQuery } from '@/services/Query'
// import { Chip, Grid } from '@mui/material'
// //
// export default function RecipeReviewCard() {
//    const { data: appointment, isloading, error } = useGetAppointmentQuery()
//    console.log(appointment?.data)
//    //
//    const [expanded, setExpanded] = React.useState(false)
//    //
//    const handleExpandClick = () => {
//       setExpanded(!expanded)
//    }
//    //
//    if (isloading) {
//       return <p>Loading...</p>
//    }
//    if (error) {
//       return <p>Error: {error.message}</p>
//    } else {
//       return (
//          <div>
//             {Array.isArray(appointment?.data) &&
//                appointment?.data?.map((e, i) => (
//                   <Grid container justifyContent='space-between' alignItems="center">
//                      <Card key={i} sx={{width:700 , marginX: 10 }}>
//                         <CardHeader
//                            avatar={
//                               <Avatar sx={{ bgcolor:'#13293D' }} aria-label='recipe'>
//                                  {e?.doctor?.employee?.employee_name.split('')[0]}
//                               </Avatar>
//                            }
//                            title={e?.doctor?.employee?.employee_name}
//                            subheader={e.appointment_time + '   ' + e.appointment_date}
                           
//                         />
//                         <Chip label={e?.disease?.disease_name} />
//                      </Card>

//                      {/* <Chip label={e?.disease?.disease_name} /> */}
//                   </Grid>
//                ))}
//          </div>
//       )
//    }
// }

