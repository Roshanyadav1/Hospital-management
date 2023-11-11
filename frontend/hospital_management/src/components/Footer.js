import React from "react";
import { Box, Typography, Button, Grid, Input } from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
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
      }}
    >
      <Container  sx={{ margin: 0 }} maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
            <Box sx={{ marginTop: 1 }}>
              <Image width={160} height={50} src={Logo} />
            </Box>
            
          </Grid>

          <Grid item xs={12} sm={3}>
            <Typography variant="body1" sx={{ padding: 1, fontWeight: "bold" }}>
              Social Media
            </Typography>

            <Typography variant="body2" color="white" sx={{
              padding: 1

            }}>
              Centre for Transplant
            </Typography>
            <Typography variant="body2" color="white" sx={{
              padding: 1

            }}>
              Critical Care Unit
            </Typography>
            <Typography variant="body2" color="white" sx={{
              padding: 1

            }}>
              Department of Cardiology
            </Typography>
            <Typography variant="body2" color="white" sx={{
              padding: 1

            }}>
              Department of Orthopedics
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
            <Typography variant="body1" color="white" sx={{ padding: 1, fontWeight: "bold" }}>
              Centres of Excellence
            </Typography>
            <Typography variant="body2" color="white" sx={{
              padding: 1


            }}>
              Centre for Neurosciences
            </Typography>
            <Typography variant="body2" color="white" sx={{
              padding: 1

            }}>
              Centre for Transplant
            </Typography>
            <Typography variant="body2" color="white" sx={{
              padding: 1

            }}>
              Critical Care Unit
            </Typography>
            <Typography variant="body2" color="white" sx={{
              padding: 1

            }}>
              Department of Cardiology
            </Typography>
            <Typography variant="body2" color="white" sx={{
              padding: 1

            }}>
              Department of Orthopedics
            </Typography>
            <Typography variant="body2" color="white" sx={{
              padding: 1

            }}>
              Gynaecology and Obstetrics
            </Typography>
            <Typography variant="body2" color="white" sx={{
              padding: 1

            }}>
              Pediatrics
            </Typography>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Typography variant="body1" color="white" sx={{ padding: 1, fontWeight: "bold" }}>
              Hospital Details
            </Typography>
            <Typography variant="body2" color="white" sx={{
              padding: 1

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
                borderRadius: 3,
                backgroundColor: "#35CFF4",
                "&:hover": {
                  backgroundColor: "#35CFF4",
                }
              }}>Sigh Up</Button>
            </Typography>
          </Grid>
        </Grid>
           <Box sx={{ marginLeft:15}} >   
           <hr/>
           </Box>
       
        <Typography variant="body2" sx={{ padding: 2, display: "flex", justifyContent: "center",alignItems: "center",marginLeft:15}}>
          &copy; {new Date().getFullYear()} Your Website Name
        </Typography>
      </Container>
    </Grid >
  );
};

export default Footer;
