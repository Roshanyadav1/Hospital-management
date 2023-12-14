'use client'
import { useEffect, useState } from 'react'
import DataGridTable from './DataGridTable'
import { useGetEmployeeQuery } from '@/services/Query'
import { columns } from '@/data/ColumData'
import { Container } from '@mui/material'

//////////////////
function Dashboard() {
   // const router = useRouter()

   const [pageState, setPageState] = useState({
      isLoding: false,
      data: [],
      total: 0,
      page: 1,
      pageSize: 5,
   })

   const [paginationModel, setPaginationModel] = useState({
      page: 1,
      pageSize: 5,
   })

   const { data: empData, isFetching: loadinData } = useGetEmployeeQuery(pageState, {
      refetchOnMountOrArgChange: true,
   })

   useEffect(() => {
      if (paginationModel) {
         setPageState({
            isLoding: pageState?.isLoding,
            data: pageState?.data,
            total: empData?.data?.count,
            page: paginationModel?.page,
            pageSize: paginationModel?.pageSize,
         })
      }
   }, [empData?.data?.count, pageState?.data, pageState?.isLoding, paginationModel])

   return (
      <>
         <Container maxWidth='md'>
            <DataGridTable
               data={empData?.data?.results || []}
               loadinData={loadinData}
               columns={columns}
               setPageState={setPageState}
               map_by={(row) => row.employee_id}
               pageState={pageState}
               setPaginationModel={setPaginationModel}
               paginationModel={paginationModel}
               pageInfo={empData?.data}
            />
         </Container>
      </>
   )
}

export default Dashboard
