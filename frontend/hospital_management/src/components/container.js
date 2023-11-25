import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Grid, Typography, Button } from "@mui/material";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import container from '@/components/container'
export default function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />

      <Container
        sx={{
          width: "150%",
          height:'12%',
          marginTop:'2rem',
         textAlign: "center",
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          
        >
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              padding: 2,
              backgroundColor: "#13293d",
              color: "white",
            }}
          >
            <MedicalServicesIcon sx={{ fontSize: 48 }}/>
            <Typography variant="h6" sx={{ padding: 3 }}>
              Book an Appoinment{" "}
            </Typography>
             <Typography variant="body" sx={{ padding: 3}}>
             +9876543467 <br></br><br></br>
             </Typography>
            <Typography variant="body" sx={{ padding: 1 }}>
              OPD TIMING <br></br>{" "}
            </Typography>
            <Typography variant="body2" sx={{ padding: 1 }}>
              10:00AM to 12:30PM
            </Typography>
            <Typography variant="body2">05:00PM to 07:00PM</Typography>

            <Button
              variant="contained"
              sx={{
                marginTop: 6,
                backgroundColor: "white",
                color: "#13293d",
                padding:'10px',
                "&:hover": {
                  backgroundColor: "#A7AFB7",
                  
                },
              }}
            >
              Reach Us
            </Button>

          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              padding: 2,
              backgroundColor: "#A7AFB7",
              color: "white",
            }}
          >
            <VolunteerActivismIcon sx={{ fontSize: 48 }} />
            <Typography variant="h6" sx={{ padding: 2 }}>
              Specialities & Treatments{" "}
            </Typography>
            <Typography variant="body2" sx={{ padding: 2 }}>
              Experience the best-in-class medical treatments with over 30+
              specialities.
            </Typography>
            <Button
              variant="contained"
              sx={{
                marginTop: 15 ,
                backgroundColor: "white",
                color: "#13293d",
                padding:'10px',
                "&:hover": {
                  backgroundColor: "#A7AFB7",
                 
                },
              }}
            >
              know More
            </Button>
          </Grid>

          <Grid
            item
            xs={12}
            md={3}
            sx={{
              padding: 2,
              backgroundColor: "#13293d",
              color: "white",
              
            }}
          >
            <PersonAddIcon sx={{ fontSize: 48 }} />
            <Typography variant="h6" sx={{ padding: 2 }}>
              Find a Doctor{" "}
            </Typography>
            <Typography variant="body2" sx={{ padding: 4 }}>
              Trust the expert care of our doctors for your health and
              well-being.
            </Typography>
            <Button
              variant="contained"
              sx={{
                marginTop: 9 ,
                backgroundColor: "white",
                color: "#13293d",
                padding:'10px',
                "&:hover": {
                  backgroundColor: "#A7AFB7",
                 
                },
              }}
            >
              know More
            </Button>
          </Grid>

          <Grid
            item
            xs={12}
            md={3}
            sx={{
              padding: 2,
              backgroundColor: "#A7AFB7",
              color: "white",
             
            }}
          >
            <HealthAndSafetyIcon sx={{ fontSize: 48 }} />
            <Typography variant="h6" sx={{ padding: 2 }}>
              Health Checkup Packages{" "}
            </Typography>
            <Typography variant="body2" sx={{ padding: 2 }}>
              "An executive checkup a year, keeps your future hospital bill in
              control"
            </Typography>
            <Button
              variant="contained"
              sx={{
                marginTop: 15,
                backgroundColor: "white",
                color: "#13293d",
                padding:'10px',
                "&:hover": {
                  backgroundColor: "#A7AFB7",
                  
                }
              }}
            >
              Visit know
            </Button>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
