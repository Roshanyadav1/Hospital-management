// import React from 'react'

// import DataTable from './../../Pages/DataTable'
import dynamic from 'next/dynamic'
const DataTable = dynamic(() => import('@/pages/DataTable'), {
   ssr:false
})
function page() {
   return (
      <div>
         <DataTable />
      </div>
   )
}

export default page
