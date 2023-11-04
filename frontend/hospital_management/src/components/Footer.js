// components/Footer.js
import React from "react";
import { Box, Typography, TextField, Button, Grid } from "@mui/material";
// import instaa from '@/assest/instagram.png'

import instaa from  '../assest/instaa.png'
import FB from '@/assest/fb.png';
import Twiter from '../assest/twiter.png'
import linkdn from '@/assest/link.png'
import Image from "next/image";
const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#13293D",
        color: "#fff",
        padding: 2,
        textAlign: "center",
      }}
    >
     
      <Grid container>
        <Grid item sx={12} sm={4}> SGA APPLICATION
        <Box
              sx={{
                  mb: 2,
                  mt: 1,
                }}
              >
               <Image height={100} width={100} src={instaa} />
              
              </Box>
        </Grid>

        <Grid item sx={12} sm={4}> Social Media
        <input  type="text" placeholder="Enter your email"/>
        <input  type="text" placeholder="Enter your email"/>
        <input  type="text" placeholder="Enter your email"/>
        <input  type="text" placeholder="Enter your email"/>
        </Grid>
        
        <Grid item sx={12} sm={4}> Hospital Details</Grid>
      </Grid>




      <hr />
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Your Website Name
      </Typography>
    </Box>
  );
};

export default Footer;




// import {
//   Box,
//   Divider,
//   Grid,
//   List,
//   ListItemIcon,
//   ListItemText,
// } from '@mui/material';
// import { Colors } from '../../styles/theme/Theme';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import MailRoundedIcon from '@mui/icons-material/MailRounded';
// import CallRoundedIcon from '@mui/icons-material/CallRounded';
// import FmdGoodRoundedIcon from '@mui/icons-material/FmdGoodRounded';
// import * as Yup from 'yup';
// import { FooterHeading, ListStyle } from '../../styles/footer/Footer';
// import { experimentalStyled as styled } from '@mui/material/styles';
// import logo from './../../assets/images/Logo_White.png';
// import { Form, Formik } from 'formik';
// import TextFieldWrapper from '../FormFields/InputBase';
// import ButtonWrapper from '../FormFields/Button';
// import T from '../../hooks/Translate';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';
// const Img = styled('img')({
//   margin: 'auto',
//   display: 'block',
//   width: 'auto',
//   height: 'auto',
//   maxWidth: '100%',
//   maxHeight: '100%',
// });
// const INITIAL_FORM_STATE = {
//   email: '',
// };
// const FORM_VALIDATION = Yup.object().shape({
//   email: Yup.string().email('Invalid email.').required(T('Required')),
// });
// export default function Footer() {
//   return (
//     <Box
//       sx={{
//         background: Colors.primary,
//         p: { xs: 4, md: 8, lg: 0 },
//         pt: { lg: 7 },
//         pb: 12,
//         fontSize: { xs: '12px', md: '14px' },
//         position: 'relative',
//         left: 0,
//         bottom: 0,
//         width: '100%',
//       }}
//     >
//       <Grid
//         container
//         spacing={2}
//         columns={{ xl: 12, lg: 12, md: 12, sm: 12 }}
//         justifyContent='center'
//       >
//         <Grid
//           container
//           spacing={0}
//           item
//           lg={3}
//           xs={3}
//           md={5}
//           sm={6}
//           justifyContent='center'
//           alignItems='center'
//         >
//           <Grid
//             item
//             container
//             direction='column'
//             spacing={0}
//             justifyContent='flex-start'
//             alignItems='flex-start'
//           >
//             <Grid item mb={1}>
//               <Img alt='logo' src={logo} />
//             </Grid>
//             <Grid item>
//               <FooterHeading variant='caption2'>
//                 {T('Social Media')}
//               </FooterHeading>
//               <Box
//                 sx={{
//                   mb: 2,
//                   mt: 1,
//                   color: Colors.info,
//                 }}
//               >
//                 <FacebookIcon sx={{ mr: 1 }} />
//                 <InstagramIcon sx={{ mr: 1 }} />
//                 <LinkedInIcon sx={{ mr: 1 }} />
//                 <TwitterIcon sx={{ mr: 1 }} />
//               </Box>
//             </Grid>
//             <Grid item>
//               <FooterHeading variant='caption2'>{T('Contact')} </FooterHeading>
//               <List sx={{ maxWidth: 250, width: '100%' }}>
//                 <ListStyle>
//                   <ListItemIcon sx={{ color: Colors.info }}>
//                     <FmdGoodRoundedIcon />
//                   </ListItemIcon>
//                   <ListItemText
//                     primary={T('Address')}
//                     sx={{ color: Colors.grey }}
//                   />
//                 </ListStyle>
//                 <ListStyle>
//                   <ListItemIcon sx={{ color: Colors.info }}>
//                     <MailRoundedIcon />
//                   </ListItemIcon>
//                   <ListItemText
//                     primary={T('Email')}
//                     sx={{ color: Colors.grey }}
//                   />
//                 </ListStyle>
//                 <ListStyle>
//                   <ListItemIcon sx={{ color: Colors.info }}>
//                     <CallRoundedIcon />
//                   </ListItemIcon>
//                   <ListItemText
//                     primary={T('Mob no')}
//                     sx={{ color: Colors.grey }}
//                   />
//                 </ListStyle>
//               </List>
//             </Grid>
//           </Grid>
//         </Grid>
//         <Grid
//           container
//           item
//           lg={2}
//           md={2}
//           xs={3}
//           sm={3}
//           justifyContent='center'
//         >
//           <Grid
//             item
//             container
//             direction='column'
//             spacing={0}
//             justifyContent='flex-start'
//             alignItems='flex-start'
//           >
//             <Grid item>
//               <FooterHeading variant='caption2'>{T('About Us')}</FooterHeading>
//               <List>
//                 {/* <Skeleton count={5} /> */}
//                 <ListStyle>
//                   <ListItemText sx={{ color: Colors.grey }}>
//                     {<Skeleton /> || T('About Us')}
//                   </ListItemText>
//                 </ListStyle>
//                 <ListStyle>
//                   <ListItemText sx={{ color: Colors.grey }}>
//                     {<Skeleton /> || T('About Us')}
//                   </ListItemText>
//                 </ListStyle>
//                 <ListStyle>
//                   <ListItemText sx={{ color: Colors.grey }}>
//                     {<Skeleton /> || T('About Us')}
//                   </ListItemText>
//                 </ListStyle>
//                 <ListStyle>
//                   <ListItemText sx={{ color: Colors.grey }}>
//                     {<Skeleton /> || T('About Us')}
//                   </ListItemText>
//                 </ListStyle>
//                 <ListStyle>
//                   <ListItemText sx={{ color: Colors.grey }}>
//                     {<Skeleton /> || T('About Us')}
//                   </ListItemText>
//                 </ListStyle>
//               </List>
//             </Grid>
//           </Grid>
//         </Grid>
//         <Grid
//           container
//           item
//           lg={2}
//           md={2}
//           xs={3}
//           sm={3}
//           justifyContent='center'
//         >
//           <Grid
//             item
//             container
//             direction='column'
//             spacing={0}
//             justifyContent='flex-start'
//             alignItems='flex-start'
//           >
//             <Grid item>
//               <FooterHeading variant='caption2'> {T('Sitemap')}</FooterHeading>
//               <List>
//                 <ListStyle>
//                   <ListItemText sx={{ color: Colors.grey }}>
//                     {<Skeleton /> || T('Sitemap')}
//                   </ListItemText>
//                 </ListStyle>
//                 <ListStyle>
//                   <ListItemText sx={{ color: Colors.grey }}>
//                     {<Skeleton /> || T('Sitemap')}
//                   </ListItemText>
//                 </ListStyle>
//                 <ListStyle>
//                   <ListItemText sx={{ color: Colors.grey }}>
//                     {<Skeleton /> || T('Sitemap')}
//                   </ListItemText>
//                 </ListStyle>
//                 <ListStyle>
//                   <ListItemText sx={{ color: Colors.grey }}>
//                     {<Skeleton /> || T('Sitemap')}
//                   </ListItemText>
//                 </ListStyle>
//                 <ListStyle>
//                   <ListItemText sx={{ color: Colors.grey }}>
//                     {<Skeleton /> || T('Sitemap')}
//                   </ListItemText>
//                 </ListStyle>
//                 <ListStyle>
//                   <ListItemText sx={{ color: Colors.grey }}>
//                     {<Skeleton /> || T('Sitemap')}
//                   </ListItemText>
//                 </ListStyle>
//                 <ListStyle>
//                   <ListItemText sx={{ color: Colors.grey }}>
//                     {<Skeleton /> || T('Sitemap')}
//                   </ListItemText>
//                 </ListStyle>
//               </List>
//             </Grid>
//           </Grid>
//         </Grid>
//         <Grid
//           container
//           item
//           lg={1}
//           md={2}
//           xs={2}
//           sm={6}
//           justifyContent='center'
//         >
//           <Grid
//             item
//             container
//             direction='column'
//             spacing={0}
//             justifyContent='flex-start'
//             alignItems='flex-start'
//           >
//             <Grid item>
//               <FooterHeading variant='caption2'>{T('Legal')}</FooterHeading>
//               <List>
//                 <ListStyle>
//                   <ListItemText sx={{ color: Colors.grey }}>
//                     {<Skeleton /> || T('Legal')}
//                   </ListItemText>
//                 </ListStyle>
//                 <ListStyle>
//                   <ListItemText sx={{ color: Colors.grey }}>
//                     {<Skeleton /> || T('Legal')}
//                   </ListItemText>
//                 </ListStyle>
//                 <ListStyle>
//                   <ListItemText sx={{ color: Colors.grey }}>
//                     {<Skeleton /> || T('Legal')}
//                   </ListItemText>
//                 </ListStyle>
//                 <ListStyle>
//                   <ListItemText sx={{ color: Colors.grey }}>
//                     {<Skeleton /> || T('Legal')}
//                   </ListItemText>
//                 </ListStyle>
//               </List>
//             </Grid>
//           </Grid>
//         </Grid>
//         <Grid container item lg={3} xs={3} md={12} sm={6}>
//           <Grid
//             item
//             container
//             direction='column'
//             spacing={2}
//             justifyContent='flex-start'
//             alignItems='flex-start'
//           >
//             <Grid item>
//               <FooterHeading variant='caption2'>
//                 <MailRoundedIcon
//                   sx={{
//                     color: Colors.info,
//                     marginRight: 1,
//                     verticalAlign: 'middle',
//                   }}
//                 />
//                 {T('Stay up to date with the latest from AdSprint')}
//               </FooterHeading>
//             </Grid>
//             <Grid item container spacing={0} direction='column'>
//               <Formik
//                 initialValues={{ ...INITIAL_FORM_STATE }}
//                 validationSchema={FORM_VALIDATION}
//                 onSubmit={(values) => {
//                   // console.log(values)
//                 }}
//               >
//                 <Form>
//                   <Grid item xs={12}>
//                     <TextFieldWrapper
//                       autoComplete='off'
//                       b_radius='15px'
//                       name='email'
//                       bg={Colors.grey}
//                       min_width='210px'
//                       placeholder={T('Enter Your Email address')}
//                     />
//                   </Grid>
//                   <Grid item xs={12} my={2}>
//                     <ButtonWrapper
//                       bg={Colors.info}
//                       text_color={Colors.primary}
//                       b_radius='15px'
//                       f_size='18px'
//                       width='110px'
//                     >
//                       {T('Sign Up')}
//                     </ButtonWrapper>
//                   </Grid>
//                 </Form>
//               </Formik>
//             </Grid>
//           </Grid>
//         </Grid>
//         <Grid container item lg={11} xs={11} md={12} sm={12}>
//           <Grid item container direction='column' spacing={2}>
//             <Grid container direction='column' justifyContent='center'>
//               <Divider
//                 variant='middle'
//                 sx={{ borderColor: Colors.light_grey }}
//               />
//             </Grid>
//           </Grid>
//           <Grid item xs={11} mb={3}>
//             <Grid
//               container
//               direction='column'
//               justifyContent='center'
//               alignItems='center'
//             >
//               <FooterHeading variant='caption2'>
//                 &copy;
//                 {T('2022 Copyright AdSprint')}.
//               </FooterHeading>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Grid>
//     </Box>
//   );
//  }

// import styled from '@emotion/styled';
// import { InputBase, ListItem, Typography } from '@mui/material';
// import { Colors } from '../theme/Theme';
// export const FooterHeading = styled(Typography)(() => ({
//   fontSize: '16px',
//   color: Colors.grey,
// }));
// export const ListStyle = styled(ListItem)(() => ({
//   padding: 0,
//   alignItems: 'start',
//   '.MuiListItemIcon-root': {
//     minWidth: '30px',
//     marginTop: '4px',
//   },
// }));
// export const EmailInput = styled(InputBase)(() => ({
//   '& .MuiInputBase-input': {
//     borderRadius: 15,
//     position: 'relative',
//     backgroundColor: Colors.grey,
//     border: 'none',
//     width: 'auto',
//     minWidth: '210px',
//     padding: '5px 12px',
//   },
// }));







