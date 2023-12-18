import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Grid, Container } from '@mui/material'
import dayjs from 'dayjs'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'

function PatientProfile() {
   const [value, setValue] = React.useState(dayjs('2022-04-17'))

   return (
      <div>
         <Container maxWidth='md' p={2} sx={{ marginTop: 3 }}>
            <Grid container>
               <Grid item xs={12} sm={5}>
                  <Card sx={{ maxWidth: 345, maxHeight: 600 }}>
                     <CardMedia
                        sx={{ height: 140 }}
                        image='/static/images/cards/contemplative-reptile.jpg'
                        title='green iguana'
                     />
                     <CardContent>
                        <Typography gutterBottom variant='h5' component='div'>
                           Lizard
                        </Typography>
                        <Typography variant='body2' color='text.secondary'>
                           Lizards are a widespread group of squamate reptiles, with
                           over 6,000 species, ranging across all continents except
                           Antarctica
                        </Typography>
                     </CardContent>
                     <CardActions>
                        <Button size='small'>Share</Button>
                        <Button size='small'>Learn More</Button>
                     </CardActions>
                  </Card>
               </Grid>
               <Grid item xs={12} sm={7}>
                  <LocalizationProvider dateAdapter={AdapterDayjs} >
                     <DemoContainer components={['DateCalendar', 'DateCalendar']}>
                        
                        <DemoItem  >
                           <DateCalendar
                              value={value}
                              onChange={(newValue) => setValue(newValue)}
                              style={{
                                width: '490px',
                                height: '150px',
                                boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.3)',
                              }}
                           />
                        </DemoItem>
                     </DemoContainer>
                  </LocalizationProvider>
               </Grid>
            </Grid>
         </Container>
      </div>
   )
}

export default PatientProfile
