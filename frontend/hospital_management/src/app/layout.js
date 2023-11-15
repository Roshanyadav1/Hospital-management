"use client"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CustomProvider from '@/redux/CustomProvider'
import { Inter } from 'next/font/google'
import { themeOptions } from '@/styles/theme';
import { Auth0Provider } from '@auth0/auth0-react';
// import Auth from '@/components/auth';
const inter = Inter({ subsets: ['latin'] })
export const theme = createTheme(themeOptions);
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Auth0Provider
        domain="dev-0fpjiyx3t0ykb3tl.us.auth0.com"
        clientId="WZMRCNBOLDzIr7CQ5Emk45oESMaxjMyg"
        authorizationParams={{
          redirect_uri: 'http://localhost:3000/'
        }}
      >
<<<<<<< HEAD
          <CustomProvider>
            <ThemeProvider theme={theme}>
              <body className={inter.className}>{children}
              {/* <Auth /> */}
              </body>
            </ThemeProvider>
          </CustomProvider>
=======

        <CustomProvider>
          <ThemeProvider theme={theme}>
            <body>
              {children}
            </body>
          </ThemeProvider>
        </CustomProvider>

>>>>>>> 7cf53a447bb1f86ae90357e117e2ccf964f0ffcc
      </Auth0Provider>
    </html >
  )
}

