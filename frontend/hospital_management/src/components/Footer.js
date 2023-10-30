
// import React from 'react'
// import fb from '../assest/fb.png';
// import inste from '../assest/instaa.png';
// import linkdn from '../assest/link.png';
// import twit from '../assest/twiter.png';
// import './Footer.css';
// import Image from 'next/image';
// function Footer() {
//   return (
//     <>
//       <div className='main-footer-div'>
//         <div className='first-div'>
//         <h5>Social Media</h5>
//           <div className='img-div'>
//           <p><Image width="26" height="26" src={fb} alt="domr" /></p>  
//           <p><Image width="26" height="26" src={inste} alt="domr" /></p>  
//           <p><Image width="26" height="26" src={linkdn} alt="domr" /></p>  
//           <p><Image width="26" height="26" src={twit} alt="domr" /></p> 
//           </div>
//         </div>
//       </div>

//     </>
//   )
// }

// export default Footer



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

    // sx={{
    //   ...(color !== 'neutral' && {
    //     bgcolor: `${color}.800`,
    //   }),
    //   flexGrow: 1,
    //   p: 2,
    //   borderRadius: { xs: 0, sm: 'sm' },
    // }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        {/* <IconButton
          variant="soft"
          size="sm"
          onClick={() => {
            const colors = ['primary', 'neutral', 'danger', 'success', 'warning'];

            const nextColor = colors.indexOf(color);
            setColor(colors[nextColor + 1] ?? colors[0]);
          }}
        >
          <ColorLensRoundedIcon fontSize="small" />
        </IconButton>  */}


        <Divider orientation="vertical" />
        {/* <IconButton variant="plain">
          <FacebookRoundedIcon />
        </IconButton> */}
        {/* <IconButton variant="plain">
          <GitHubIcon />
        </IconButton> */}
        {/* <Input
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
        /> */}
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