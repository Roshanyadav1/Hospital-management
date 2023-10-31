"use client"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CustomProvider from '@/redux/CustomProvider'
import { Inter } from 'next/font/google'
import { themeOptions } from '@/styles/theme';


const inter = Inter({ subsets: ['latin'] })

export const theme = createTheme(themeOptions);

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <CustomProvider>
        <ThemeProvider theme={theme}>
          <body className={inter.className}>{children}</body>
        </ThemeProvider>
      </CustomProvider>
    </html>
  )
<<<<<<< HEAD:frontend/hospital_management/src/app/layout.jsx
}
=======
}

>>>>>>> d4aee6ad848ea92f6848f970def21f526f3bde4b:frontend/hospital_management/src/app/layout.js
