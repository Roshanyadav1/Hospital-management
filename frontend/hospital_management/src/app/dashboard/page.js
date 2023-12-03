"use client"
import DataGridTable from "@/components/DataGridTable";
import { columns } from "@/helpers/columns";
import { useGetEmployeeQuery } from '@/services/Query';
import Chart from '@/components/Chart'
function FetchData() {

  return (
    <div>
      {/* < DataGridTable data={isSuccess ? empData?.data : []} col={columns} /> */}
      <Chart />
    </div>
  )
}

export default FetchData;
 
