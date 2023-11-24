"use client"
import { useRouter } from 'next/navigation'
import DataGridTable from './DataGridTable';
import { useGetEmployeeQuery } from '@/services/Query';
import { columns } from '@/data/ColumnData';
import DataTable from './DataTable';


function Dashboard() {
  const router = useRouter()
  const { data: empData } = useGetEmployeeQuery()

  return (
    < >
          <DataGridTable        
            data={empData?.data || []}
            columns={columns} />
    </>
  )
}

export default Dashboard;