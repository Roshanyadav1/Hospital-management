"use client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CustomProvider from "@/redux/CustomProvider";
import { Inter } from "next/font/google";
import { themeOptions } from "@/styles/theme";
import { UserProvider } from '@auth0/nextjs-auth0/client';
<<<<<<< HEAD
import FetchData from '@/app/page'
=======
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

>>>>>>> cbab882103664dd27363b5a169897c67dc5c035e
const inter = Inter({ subsets: ["latin"] });
const theme = createTheme(themeOptions);
export default function RootLayout({ children }) {
  return (
    <html lang="en">
         <UserProvider>
<<<<<<< HEAD
=======
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
>>>>>>> cbab882103664dd27363b5a169897c67dc5c035e
        <CustomProvider>
          <ThemeProvider theme={theme}>
            <body className={inter.className}>
              {children}
            </body>
          </ThemeProvider>
        </CustomProvider>
         </UserProvider>
<<<<<<< HEAD
         
        
=======
>>>>>>> cbab882103664dd27363b5a169897c67dc5c035e
     </html>
  );
}
