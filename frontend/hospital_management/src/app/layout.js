'use client'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CustomProvider from '@/redux/CustomProvider'
import { Inter } from 'next/font/google'
import { themeOptions } from '@/styles/theme'
 import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import NextTopLoader from 'nextjs-toploader'
import SteperNav from '@/components/SteperNav'
import Footer from '@/components/Footer'
import { usePathname } from 'next/navigation'
import { Auth0Provider } from '@auth0/auth0-react'

const inter = Inter({ subsets: ['latin'] })
const theme = createTheme(themeOptions)
export default function RootLayout({ children }) {
   const path = usePathname()

   let isShow = ['/dashboard', '/dashboard/'].includes(path)

   return (
      <html lang='en'>
         <body className={inter.className}>
         
               <Auth0Provider
                  domain='dev-wk502078emf2n02u.us.auth0.com'
                  clientId='8DYRjBXQPhFEU32hGiiBTwBszzpIRRnf'
                  authorizationParams={{
                     redirect_uri: window.location.origin || 'http://localhost:3000',
                     audience: 'https://dev-wk502078emf2n02u.us.auth0.com/api/v2/',
                     scope: 'openid profile email offline_access read:current_user update:current_user_metadata',
                  }}
                  >  
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
                        <NextTopLoader />
                        {isShow ? null : <SteperNav />}
                        {children}
                        {isShow ? null : <Footer />}
                     </ThemeProvider>
                  </CustomProvider>
               </Auth0Provider>
          
         </body>
      </html>
   )
}
