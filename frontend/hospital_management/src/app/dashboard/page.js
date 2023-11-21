"use client"
import DataGridTable from "@/components/DataGridTable";
import { columns } from "@/helpers/columns";
import { useGetEmployeeQuery } from '@/services/Query';

function FetchData() {
  const {data : empData, isSuccess} = useGetEmployeeQuery()

  return (
    <div>
      <DataGridTable data={isSuccess ? empData?.data : []} col={columns} />
    </div>
  )
}

export default FetchData;
 
