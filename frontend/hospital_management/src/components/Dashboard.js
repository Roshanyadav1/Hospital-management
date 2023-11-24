"use client"
import { useRouter } from 'next/navigation'
import AddIcon from '@mui/icons-material/Add';
import './container.css'
import { Fab, Tooltip } from '@mui/material';

import DataGridTable from './DataGridTable';
import { useViewAppointmentQuery } from '@/services/Query';
import { columns } from '@/data/ColumnData';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';
import CardActions from "@mui/material/CardActions";
import { CardActionArea, CardMedia } from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));




function Dashboard() {
  const router = useRouter()
  const { data: Appointments } = useViewAppointmentQuery()

  return (
    <div className="img_container" >
      {/* <div>
        <DataGridTable data={empData?.data || []} columns={columns} />
       </div>
      <Tooltip title="Create Empoloyee" arrow placement="right">
      <Fab color="red" aria-label="add"  sx={{ 
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 1000,
      }}>
        <AddIcon onClick={''} />
      </Fab>
    </Tooltip> */}
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Grid container spacing={2}>
            <Grid item xs={12}  >
              <Card sx={{ maxWidth: 1000 }}>
                <CardActionArea>
                  <CardMedia
                    sx={{ height: 50, width: 1000, height: 250 }}
                    image="../../public/background-image.jpg"

                  //  image="https://img.freepik.com/free-vector/medical-technology-science-background-vector-blue-with-blank-space_53876-117739.jpg?w=1060&t=st=1700733301~exp=1700733901~hmac=4e146c4e7c60889a8056f8bd338b7dd9f99a7751c0909f14f8da3ef88b869210"
                  //   title="green iguana"
                  />

                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card sx={{ maxWidth: 1000 , height:150 }}>
                <Grid container>
                  <Grid item xs={4} >
                    <Grid container sx = {{mx:3, py: 5}}>
                      <Grid item xs={6}>
                        <CalendarMonthIcon sx = {{fontSize: 40, mx: 4} }/>
                      </Grid>
                      <Grid item xs={6} sx= {{mx: -2}} >
                        Appointments

                      </Grid>
                    </Grid>

                  </Grid>
                  <Grid item xs={4}>
                    <Grid container sx = {{mx:3, py: 5}}>
                      <Grid item xs={6}>

                        <CalendarMonthIcon sx = {{fontSize: 40} }/>
                      </Grid>
                      <Grid item xs={6}  sx= {{mx: -2}}>
                        Appointments

                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={4}>
                    <Grid container sx = {{mx:3, py: 5}}>
                      <Grid item xs={6}>

                        <CalendarMonthIcon sx = {{fontSize: 40} }/>
                      </Grid>
                      <Grid item xs={6}  sx= {{mx: -2}}>
                        Appointments

                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
<Grid item xs = {12}>
</Grid>
          </Grid>

        </Grid>
        <Grid item xs={4}>
            <Card sx={{ maxWidth: 700 }}>
              <CardActionArea>
                <CardMedia
                  sx={{ height: 140, width: 400, height: 700}}

                  image="https://thumbs.dreamstime.com/b/doctor-portrait-21332357.jpg"
                //   title="green iguana"
                />

              </CardActionArea>
            </Card>
          </Grid>
</Grid>



    </div>
  )
}

export default Dashboard;