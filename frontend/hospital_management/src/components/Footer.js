
// import React from 'react'
// import fb from '../assest/fb.png';
// import insta from '../assest/instaa.png';
// import linkdn from '../assest/link.png';
// import twit from '../assest/twiter.png';
// import location from '../assest/location.png';
// import phone from '../assest/tele.png'
// import email from '../assest/Email.png'
// import './Footer.css';
// import Image from 'next/image';


// import Input from '@mui/joy/Input';
// import Box from '@mui/joy/Box';
// import Button from '@mui/joy/Button';

// function Footer() {
//   return (
//     <div className='footer'>
//       <div className='sb_footer section_padding'>
//         <div className='sb_footer-links'>
//           <div className='sb_footer-links_div'>
//             <h4>Social Media</h4>
//             <div className='socialmedia'>
//               <p><Image width="26" height="26" src={fb} alt="domr" /></p>
//               <p><Image width="26" height="26" src={insta} alt="domr" /></p>
//               <p><Image width="26" height="26" src={linkdn} alt="domr" /></p>
//               <p><Image width="26" height="26" src={twit} alt="domr" /></p>
//               </div>
//               <div className=' contact-detail-div'>
//                 <h4>Contact</h4>
//                 <div className='input-div'>
//                   <Input
//                     type="email"
//                     name="email" />
//                   <Image width="20" height="20" src={location} alt="domr" />
                   
//                   <Input
//                     type="email"
//                     name="email" />
//                   <Image width="20" height="20" src={phone} alt="domr" />
//                   <Input
//                     type="email"
//                     name="email" />
//                   <Image width="20" height="20" src={email} alt="domr" />
                  
//                 </div>
//               </div>
            
//           </div>

//           <div className='sb_footer-links_div'>
//             <h4>Resourese</h4>
//             <p><Input
//               variant="soft"
//               type="email"
//               name="email" /></p>
//             <p><Input
//               variant="soft"
//               type="email"
//               name="email" /></p>
//             <p><Input
//               variant="soft"
//               type="email"
//               name="email" /></p>
//             <p><Input
//               variant="soft"
//               type="email"
//               name="email" /></p>
//             <p><Input
//               variant="soft"
//               type="email"
//               name="email" /></p>
//           </div>

//           <div className='sb_footer-links_div'>
//             <h4>Partners</h4>
//             <p><Input
//               variant="soft"
//               type="email"
//               name="email" /></p>
//             <p><Input
//               variant="soft"
//               type="email"
//               name="email" /></p>
//             <p><Input
//               variant="soft"
//               type="email"
//               name="email" /></p>
//             <p><Input
//               variant="soft"
//               type="email"
//               name="email" /></p>
//             <p><Input
//               variant="soft"
//               type="email"
//               name="email" /></p>
//             <p><Input
//               variant="soft"
//               type="email"
//               name="email" /></p>

//           </div>

//           <div className='sb_footer-links_div'>
//             <h4>Company</h4>

//             <p><Input
//               variant="soft"
//               type="email"
//               name="email" /></p>
//             <p><Input
//               variant="soft"
//               type="email"
//               name="email" /></p>

//             <p><Input
//               variant="soft"
//               type="email"
//               name="email" /></p>
//             <p><Input
//               variant="soft"
//               type="email"
//               name="email" /></p>
//             <p><Input
//               variant="soft"
//               type="email"
//               name="email" /></p>
//           </div>

//           <div className='sb_footer-links_div'>
//             <h4 className='hh'>stay up to date with the latest from Hospital</h4>
//             <Input
//               variant="soft"
//               placeholder="Type in your email"
//               type="email"
//               name="email" />
//             <Box sx={{ display: 'flex', gap: 2, alignItems: 'start', flexWrap: 'wrap', margin: 2, marginLeft: 0 }}>
//               <Button size="md">Sighn up</Button>
//             </Box>
//           </div>
//         </div>

//         <hr />
//         <div className='sb_footer-below'>
//           <div className='sb_footer-copyright'>
//             <p>@2023 Hospital Mnagement</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Footer




// import * as React from 'react';
// import AspectRatio from '@mui/joy/AspectRatio';
// import Box from '@mui/joy/Box';
// import IconButton from '@mui/joy/IconButton';
// import Card from '@mui/joy/Card';
// import CardContent from '@mui/joy/CardContent';
// import Divider from '@mui/joy/Divider';
// import Input from '@mui/joy/Input';
// import List from '@mui/joy/List';
// import ListSubheader from '@mui/joy/ListSubheader';
// import ListItem from '@mui/joy/ListItem';
// import ListItemButton from '@mui/joy/ListItemButton';
// import Typography from '@mui/joy/Typography';
// import Sheet from '@mui/joy/Sheet';
// import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import SendIcon from '@mui/icons-material/Send';
// import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded';

// export default function ColorInversionFooter() {
//   const [color, setColor] = React.useState('neutral');
//   return (
//     <Sheet
//       variant="solid"
//       color={color}
//       invertedColors
//       sx={{
//         ...(color !== 'neutral' && {
//           bgcolor: `${color}.800`,
//         }),
//         flexGrow: 1,
//         p: 2,
//         borderRadius: { xs: 0, sm: 'sm' },
//       }}
//     >
//       <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//         <IconButton
//           variant="soft"
//           size="sm"
//           onClick={() => {
//             const colors = ['primary', 'neutral', 'danger', 'success', 'warning'];

//             const nextColor = colors.indexOf(color);
//             setColor(colors[nextColor + 1] ?? colors[0]);
//           }}
//         >
//           <ColorLensRoundedIcon fontSize="small" />
//         </IconButton>
//         <Divider orientation="vertical" />
//         <IconButton variant="plain">
//           <FacebookRoundedIcon />
//         </IconButton>
//         <IconButton variant="plain">
//           <GitHubIcon />
//         </IconButton>
//         <Input
//           variant="soft"
//           placeholder="Type in your email"
//           type="email"
//           name="email"
//           endDecorator={
//             <IconButton variant="soft" aria-label="subscribe">
//               <SendIcon />
//             </IconButton>
//           }
//           sx={{ ml: 'auto', display: { xs: 'none', md: 'flex' } }}
//         />
//       </Box>
//       <Divider sx={{ my: 2 }} />
//       <Box
//         sx={{
//           display: 'flex',
//           flexDirection: { xs: 'column', md: 'row' },
//           alignItems: { md: 'flex-start' },
//           justifyContent: 'space-between',
//           flexWrap: 'wrap',
//           gap: 2,
//         }}
//       >
//         <Card
//           variant="soft"
//           size="sm"
//           sx={{
//             flexDirection: { xs: 'row', md: 'column' },
//             minWidth: { xs: '100%', md: 'auto' },
//             gap: 1,
//           }}
//         >
//           <AspectRatio
//             ratio="21/9"
//             minHeight={80}
//             sx={{ flexBasis: { xs: 200, md: 'initial' } }}
//           >
//             <img alt="" src="/static/blog/mui-product-comparison/ecosystem.png" />
//           </AspectRatio>
//           <CardContent>
//             <Typography level="body-sm">Intro to the MUI ecosystem</Typography>
//             <Typography level="body-xs">Blog post</Typography>
//           </CardContent>
//         </Card>
//         <List
//           size="sm"
//           orientation="horizontal"
//           wrap
//           sx={{ flexGrow: 0, '--ListItem-radius': '8px', '--ListItem-gap': '0px' }}
//         >
//           <ListItem nested sx={{ width: { xs: '50%', md: 140 } }}>
//             <ListSubheader sx={{ fontWeight: 'xl' }}>Sitemap</ListSubheader>
//             <List>
//               <ListItem>
//                 <ListItemButton>Services</ListItemButton>
//               </ListItem>
//               <ListItem>
//                 <ListItemButton>Blog</ListItemButton>
//               </ListItem>
//               <ListItem>
//                 <ListItemButton>About</ListItemButton>
//               </ListItem>
//             </List>
//           </ListItem>
//           <ListItem nested sx={{ width: { xs: '50%', md: 180 } }}>
//             <ListSubheader sx={{ fontWeight: 'xl' }}>Products</ListSubheader>
//             <List sx={{ '--ListItemDecorator-size': '32px' }}>
//               <ListItem>
//                 <ListItemButton>Joy UI</ListItemButton>
//               </ListItem>
//               <ListItem>
//                 <ListItemButton>Base UI</ListItemButton>
//               </ListItem>
//               <ListItem>
//                 <ListItemButton>Material UI</ListItemButton>
//               </ListItem>
//             </List>
//           </ListItem>
//         </List>
//       </Box>
//     </Sheet>
//   );
// }
























import * as React from 'react';
import './Footer.css';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Divider from '@mui/joy/Divider';
import Input from '@mui/joy/Input';
import List from '@mui/joy/List';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import SendIcon from '@mui/icons-material/Send';
import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded';

export default function ColorInversionFooter() {
  const [color, setColor] = React.useState('neutral');
  return (
    <Sheet
      variant="solid"
      color={color}
      invertedColors

sx={{
  ...(color !== 'neutral' && {
    bgcolor: `${color}.800`,
  }),
  flexGrow: 1,
  p: 2,
  borderRadius: { xs: 0, sm: 'sm' },
}}
>
<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
<IconButton
          variant="soft"
          size="sm"
          onClick={() => {
            const colors = ['primary', 'neutral', 'danger', 'success', 'warning'];

            const nextColor = colors.indexOf(color);
            setColor(colors[nextColor + 1] ?? colors[0]);
          }}
        >
          <ColorLensRoundedIcon fontSize="small" />
        </IconButton>  


 <Divider orientation="vertical" />
 <IconButton variant="plain">
          <FacebookRoundedIcon />
        </IconButton> 
 <IconButton variant="plain">
          <GitHubIcon />
        </IconButton> 
<Input
          variant="soft"
          placeholder="Type in your email"
          type="email"
          name="email"
          endDecorator={
            <IconButton variant="soft" aria-label="subscribe">
              <SendIcon />
            </IconButton>
          }
          sx={{ ml: 'auto', display: { xs: 'none', md: 'flex' } }}
        /> 
 </Box>

      <Divider sx={{ my: 2 }} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { md: 'flex-center' },
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 2,
        }}
      >

        <List
          size="sm"
          orientation="horizontal"
          wrap
          sx={{ flexGrow: 0, '--ListItem-radius': '8px', '--ListItem-gap': '0px' }}
        >
          <ListItem nested sx={{ width: { xs: '10%', md: 140 } }}>
            <ListSubheader sx={{ fontWeight: 'xl' }}>About</ListSubheader>
            <List>
              <ListItem>
                <Input
                  variant="soft"

                />
              </ListItem>
              <ListItem>
                <Input
                  variant="soft"

                />
              </ListItem>
              <ListItem>
                <Input
                  variant="soft"

                />
              </ListItem>
              <ListItem>
                <Input
                  variant="soft"

                />
              </ListItem>
              <ListItem>
                <Input
                  variant="soft"

                />
              </ListItem>
            </List>
          </ListItem>

          <ListItem nested sx={{ width: { xs: '10%', md: 140 } }}>
            <ListSubheader sx={{ fontWeight: 'xl' }}>Sitemap</ListSubheader>
            <List>
              <ListItem>
                <Input
                  variant="soft"
                />
              </ListItem>
              <ListItem>
                <Input
                  variant="soft"

                />
              </ListItem>
              <ListItem>
                <Input
                  variant="soft"

                />
              </ListItem>
              <ListItem>
                <Input
                  variant="soft"

                />
              </ListItem>
              <ListItem>
                <Input
                  variant="soft"

                />
              </ListItem>
              <ListItem>
                <Input
                  variant="soft"

                />
              </ListItem>
              <ListItem>
                <Input
                  variant="soft"

                />
              </ListItem>
              <ListItem>
                <Input
                  variant="soft"

                />
              </ListItem>

            </List>
          </ListItem>

          <ListItem nested sx={{ width: { xs: '50%', md: 140 } }}>
            <ListSubheader sx={{ fontWeight: 'xl' }}>Legal</ListSubheader>
            <List>
              <ListItem>
                <Input
                  variant="soft"

                />
              </ListItem>
              <ListItem>
                <Input
                  variant="soft"

                />
              </ListItem>
              <ListItem>
                <Input
                  variant="soft"

                />
              </ListItem>
              <ListItem>
                <Input
                  variant="soft"

                />
              </ListItem>
              <ListItem>
                <Input
                  variant="soft"

                />
              </ListItem>
            </List>
          </ListItem>

        </List>

      </Box>

    </Sheet>
  );
}