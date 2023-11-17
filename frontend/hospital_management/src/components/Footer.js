
import React from "react";
import { Box, Typography, Button, Grid, Input } from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Image from "next/image";
import { colors } from '../styles/theme';
import Logo from '../assest/whiteSga.png';
const Footer = () => {
  return (
    <Box
      sx={{
        background: colors.primary,
        p: { xs: 4, md: 8, lg: 0 },
        pt: { lg: 7 },
        pb: 12,
        fontSize: { xs: '12px', md: '14px' },
        position: 'relative',
        left: 0,
        bottom: 0,
        width: '100%',
      }}
    >
      <Container  sx={{ margin: 'auto' }} maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
            <Box sx={{ marginTop: 1 }}>
              <Image width={160} height={50} src={Logo} />
            </Box>
            
          </Grid>
          <Grid item xs={12} sm={3}>
          <Typography variant="body1" color="white" sx={{ padding: 1, fontWeight: "bold" }}>
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
            <Box
                sx={{
                  mb: 2,
                  mt: 1,
                  color: colors.info,
                }}
              >
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
            </Box>
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
                  borderRadius: 5,
                  outline: "none",
                  border: "none",
                  margin: 1,
                  borderBottom: " 1px solid transparent",
                  "&:focus": {
                    borderBottom: "none",
                  }
                }}
              />
              <Button variant="contained" sx={{
                borderRadius: 5,
                backgroundColor: "#35CFF4",
                "&:hover": {
                  backgroundColor: "#35CFF4",
                }
              }}>Sigh Up</Button>
            </Typography>
          </Grid>
        </Grid>
           <Box>   
           <hr/>
           </Box>
        <Typography variant="body2" sx={{ padding: 2, display: "flex", justifyContent: "center",alignItems: "center",marginLeft:15,color:"white"}}>
          &copy; {new Date().getFullYear()} Your Website Name
        </Typography>
      </Container>
    </Box>
  );
};
export default Footer;
