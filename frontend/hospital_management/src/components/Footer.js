import React from "react";
import { Box, Typography, Button, Grid, Input } from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import './footer.css';
import Image from "next/image";
// import instaa from '../assest/instaa.png';
// import FB from '../assest/fb.png';
// import Twiter from '../assest/twiter.png';
import Logo from '../assest/whiteSga.png';
const Footer = () => {
  return (
    <Grid className="main-body"
      // component="footer"
      sx={{
        backgroundColor: "#13293D",
        color: "#fff",
        paddingTop: 2,
        textAlign: "center",
        // position: "absolute",
        // width: "100vw",
        // bottom:0,
        // left:0,
      }}
    >
      <Container sx={{margin:'0px'}} maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
            {/* <Typography variant="h6" sx={{border:"1px solid white"}} > */}

              <Image  width={160} height={50}  src={Logo}/>
            {/* </Typography> */}
             
            {/* <Typography variant="body2" color="white" sx={{ padding: 1 }}>
              We are XYZ company, dedicated to providing the best service to our
              customers.
            </Typography> */}
            {/* <Typography variant="body2" color="white" sx={{ padding: 1}}>
             Head- Nilesh Giri, Contact Number,+919691070767 | Roshan Yadav ,Keshav Vishvakarma
            </Typography> */}
          </Grid>

          <Grid item xs={12} sm={3}>
            <Typography variant="body1" sx={{ padding: 1 }}>
              Social Media
            </Typography>
            <Link href="https://www.facebook.com" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com" color="inherit">
              <Twitter />
            </Link>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Typography variant="body1" color="white" sx={{ padding: 1 }}>
              Centres of Excellence
            </Typography>
            <Typography variant="body2" color="white" sx={{ padding: 1 
                 
            
            }}>
              Centre for Neurosciences
            </Typography>
            <Typography variant="body2" color="white" sx={{ padding: 1 
                  
            }}>
              Centre for Transplant
            </Typography>
            <Typography variant="body2" color="white" sx={{ padding: 1 
                
            }}>
              Critical Care Unit
            </Typography>
            <Typography variant="body2" color="white" sx={{ padding: 1  
                   
            }}>
              Department of Cardiology
            </Typography>
            <Typography variant="body2" color="white" sx={{ padding: 1 
                   
            }}>
              Department of Orthopedics
            </Typography>
            <Typography variant="body2" color="white" sx={{ padding: 1 
                  
            }}>
              Gynaecology and Obstetrics
            </Typography>
            <Typography variant="body2" color="white" sx={{ padding: 1
                  
            }}>
              Pediatrics
            </Typography>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Typography variant="body1" color="white" sx={{ padding: 1 }}>
              Hospital Details
            </Typography>
            <Typography variant="body2" color="white" sx={{ padding: 1 
                    
            }}>
              Contact Us
            </Typography>
            <Typography variant="body2" color="white" sx={{ padding: 1 }}>
              <Input 
               varient="outline"
                type="text"
                placeholder="Enter your email"
                sx={{
                  padding: 2,
                  width: "100%",
                  backgroundColor: "white",
                  borderRadius: 3,
                  outline: "none",
                  border: "none",
                  height: 17,
                  margin: 1,
                  borderBottom: " ipx solid transparent",
                  "&:focus": {
                    borderBottom: "none",
                  }
                }}
              />
              <Button variant="contained" sx={{
                borderRadius: 3 ,
                backgroundColor: "#35CFF4",
                "&:hover": {
                  backgroundColor: "#35CFF4",
                } }}>Sigh Up</Button>
          </Typography>
        </Grid>
      </Grid>

      <hr />
      <Typography variant="body2" sx={{ padding: 2, display: "flex", justifyContent: "center" ,marginLeft:5 }}>
        &copy; {new Date().getFullYear()} Your Website Name
      </Typography>
    </Container>
    </Grid >
  );
};

export default Footer;
