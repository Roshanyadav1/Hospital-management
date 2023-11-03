import React from 'react'
import FetchData from '@/app/data/page'
import Link from 'next/link'
// import ResponsiveAppBar from '@/components/Navbar'
function page() {
  return (
    <div>
     <h1>Page component</h1>
     <Link href='/data'>Go To Fetching data page</Link>
    </div>
  )
}

export default page

