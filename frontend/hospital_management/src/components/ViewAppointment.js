'use client'
import * as React from 'react'
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
//
import { useGetAppointmentQuery } from '@/services/Query'
import { Chip, Grid } from '@mui/material'
//
export default function RecipeReviewCard() {
   const { data: appointment, isloading, error } = useGetAppointmentQuery()
   console.log(appointment?.data)
   //
   const [expanded, setExpanded] = React.useState(false)
   //
   const handleExpandClick = () => {
      setExpanded(!expanded)
   }
   //
   if (isloading) {
      return <p>Loading...</p>
   }
   if (error) {
      return <p>Error: {error.message}</p>
   } else {
      return (
         <div>
            {Array.isArray(appointment?.data) &&
               appointment?.data?.map((e, i) => (
                  <Grid container justifyContent='space-between' alignItems="center">
                     <Card key={i} sx={{ marginX: 10 }}>
                        <CardHeader
                           avatar={
                              <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
                                 {e?.doctor?.employee?.employee_name.split('')[0]}
                              </Avatar>
                           }
                           title={e?.doctor?.employee?.employee_name}
                           subheader={e.appointment_time + ' ' + e.appointment_date}
                        />
                     </Card>

                     <Chip label={e?.disease?.disease_name} />
                  </Grid>
               ))}
         </div>
      )
   }
}

// "use client"
// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
//
// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//  duration: theme.transitions.duration.shortest,
//   }),
// }));
//
// export default function RecipeReviewCard() {
//   const [expanded, setExpanded] = React.useState(false);
//
//   const handleExpandClick = () => {
//  setExpanded(!expanded);
//   };
//
//   return (
//  <Card sx={{ maxWidth: 1500 , marginX: 10 }}>
{
   /* <CardHeader */
}
//   avatar={
//  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
{
   /* R */
}
{
   /* </Avatar> */
}
//   }
//
//   title="Dr. Sumit Jain"
//   subheader="September 14, 2016"
// />
{
   /*    */
}
{
   /* </Card> */
}
//   );
// }
