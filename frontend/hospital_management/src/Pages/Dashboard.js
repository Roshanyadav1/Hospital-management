'use client'
import { useState } from 'react'
import DataGridTable from './DataGridTable'
import { useGetEmployeeQuery } from '@/services/Query'
import { columns } from '@/data/ColumData'
import DataTable from './DataTable'
import { Button } from '@mui/material'

//////////////////
function Dashboard() {
   // const router = useRouter()

   const [pageState, setPageState] = useState({
      isLoding: false,
      data: [],
      total: 0,
      page: 1,
      pageSize: 10,
   })

   const { data: empData } = useGetEmployeeQuery(pageState, {
      refetchOnMountOrArgChange: true,
   })

   const nextPage = () => {
      setPageState(prev => ({ ...prev, page: pageState.page + 1 }))
   }
   const prevPage = () => {
      setPageState(prev => ({ ...prev, page: pageState.page - 1 }))
   }

   let isNextPage = empData?.data?.current_page_number <= empData?.data?.total_pages

   return (
      <>
         <DataGridTable data={empData?.data?.results || []} columns={columns} />
         <Button disabled={!isNextPage} onClick={nextPage}>Next page</Button>
         <Button onClick={prevPage}>previous page</Button>
      </>
   )
}

export default Dashboard
