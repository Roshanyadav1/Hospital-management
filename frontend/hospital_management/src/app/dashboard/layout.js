import { Inter } from 'next/font/google'
import MiniDrawer from '@/components/sidebar'
// const inter = Inter({ subsets: ['latin'] })
// export default function Layout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   )
// }


import React from 'react'
function layout({children}) {
  return (
    <>
       <MiniDrawer/>
      <div>{children}</div>
    </>
  )
}
export default layout
