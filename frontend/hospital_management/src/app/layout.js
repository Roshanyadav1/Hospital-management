'use client'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CustomProvider from '@/redux/CustomProvider'
import { Inter } from 'next/font/google'
import { themeOptions } from '@/styles/theme'
import { UserProvider } from '@auth0/nextjs-auth0/client'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const inter = Inter({ subsets: ['latin'] })
const theme = createTheme(themeOptions)
export default function RootLayout({ children }) {
   return (
      <html lang='en'>
         <UserProvider>
            <ToastContainer
               position={'top-right'}
               close
               on
               click={true}
               pauseOnHover={false}
               pauseOnFocusLoss={false}
               autoClose={2000}
               draggable={true}
               closeButton={<p>Close</p>}
            />
            <CustomProvider>
               <ThemeProvider theme={theme}>
                  <body className={inter.className}>
                     {/* <SteperNav/> */}
                     {children}
                  </body>
               </ThemeProvider>
            </CustomProvider>
         </UserProvider>
      </html>
   )
}
