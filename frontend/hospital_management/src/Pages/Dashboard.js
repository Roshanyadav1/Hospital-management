'use client'
import { useEffect, useState } from 'react'
import DataGridTable from './DataGridTable'
import { useGetEmployeeQuery } from '@/services/Query'
import { columns } from '@/data/ColumData'

//////////////////
function Dashboard() {
   // const router = useRouter()
   const [pageState, setPageState] = useState({
      isLoading: false,
      data: [],
      total: 0,
      page: 1,
      pageSize: 10
    })
    const [paginationModel, setPaginationModel] = useState({
      page: 1,
      pageSize: 5,
     });
    

   const { data: empData } = useGetEmployeeQuery(pageState, {
      refetchOnMountOrArgChange: true,
   })
   useEffect(() => {
      if(empData?.data?.results?.length > 0){
         setPageState({
            isLoading: pageState?.isLoading,
            data: empData?.data?.results,
            total: pageState?.total,
            page: paginationModel?.page,
            pageSize: paginationModel?.pageSize
          })
      }

   }, [])

   return (
      <>
         <DataGridTable 
         data={empData?.data?.results?.length ? empData?.data?.results : []} 
         columns={columns} 
         map_by={row => row.employee_id} 
         pageInfo={empData?.data}
         pageState={pageState}
         setPageState={setPageState}
         paginationModel={paginationModel}
         setPaginationModel={setPaginationModel}
         />
      </>
   )
}

export default Dashboard
