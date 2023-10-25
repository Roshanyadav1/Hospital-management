import { Inter } from 'next/font/google'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <h1>Hiiiiiiii</h1>
      {children}
      <h1>Hiiiiiiiii</h1>
      
      </body>
    </html>
  )
}
