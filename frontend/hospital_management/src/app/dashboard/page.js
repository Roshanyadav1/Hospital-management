"use client"
import DataGridTable from "@/Pages/DataGridTable";
import { columns } from "@/helpers/Columns";
import { useGetEmployeeQuery } from '@/services/Query';
import Chart from '@/Pages/Chart'
function FetchData() {

  return (
    <div>
      {/* < DataGridTable data={isSuccess ? empData?.data : []} col={columns} /> */}
      <Chart />
    </div>
  )
}

export default FetchData;
 
