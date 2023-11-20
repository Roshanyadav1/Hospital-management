"use client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CustomProvider from "@/redux/CustomProvider";
import { Inter } from "next/font/google";
import { themeOptions } from "@/styles/theme";
import { UserProvider } from '@auth0/nextjs-auth0/client';
import FetchData from '@/app/page'
const inter = Inter({ subsets: ["latin"] });
const theme = createTheme(themeOptions);
export default function RootLayout({ children }) {
  return (
    <html lang="en">
         <UserProvider>
        <CustomProvider>
          <ThemeProvider theme={theme}>
            <body className={inter.className}>
              {children}
            </body>
          </ThemeProvider>
        </CustomProvider>
         </UserProvider>
         
        
     </html>
  );
}
