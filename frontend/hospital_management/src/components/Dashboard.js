"use client"
import { useRouter } from 'next/navigation'
import AddIcon from '@mui/icons-material/Add';
import './container.css'
import BgImage from '../assest/background-image.jpg'
import { Fab, Tooltip } from '@mui/material';
import DataGridTable from './DataGridTable';
import { useViewAppointmentQuery } from '@/services/Query';
import { columns1 } from '@/data/ColumnData';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';
import CardActions from "@mui/material/CardActions";
import { CardActionArea, CardMedia } from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const customStyles = `
  .MuiDataGrid-root .MuiDataGrid-row:nth-child(even) {
    background-color: #E6E8F0;
  }
  .MuiDataGrid-root .MuiDataGrid-row:nth-child(odd) {
    background-color: #f0f2fa;
  }

  .header1 {
    background-color: #aee3f0 !important;
  }

  .header2 {
    background-color: #35cff4 !important;
  }

  .header34 {
    background-color: #006494 !important;
    color: white;
  }

  .header5 {
    background-color: #13293d !important;
    color: white;
  }

  .column-line {
    border-right: 2px solid #13293D !important; // Adjust the color as needed
    padding-right: 8px; // Add padding to separate the text from the line
  }
  .MuiDataGrid-root .MuiDataGrid-colCell:not(.MuiDataGrid-colCellCheckbox):not(.MuiDataGrid-colCellSorted):not(.MuiDataGrid-colCellMoving) .MuiDataGrid-columnSeparator,
  .MuiDataGrid-root .MuiDataGrid-colCell:not(.MuiDataGrid-colCellCheckbox):not(.MuiDataGrid-colCellSorted):not(.MuiDataGrid-colCellMoving) .MuiDataGrid-sortIcon {
    display: none !important;
  }
`;




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
        <Grid item>
          <Grid container spacing={2}>
            <Grid item xs={12}  >
              <Card sx={{ maxWidth: 1500 }}>
                <CardActionArea>
                  <Image src={BgImage} alt="dashboard-Image" height= {250} width = {1200} />

                </CardActionArea>
                <CardContent>
                  Hello Its working
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card sx={{ maxWidth: 1500 , height:150 }}>
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
          <style>{customStyles}</style>
          
          <DataGridTable data={Appointments ||[]} columns={columns1} />
        </Grid>
       
          
</Grid>



    </div>
  )
}

export default Dashboard;