"use client"
import DataGridTable from "@/components/DataGridTable";
import { columns } from "@/helpers/columns";
import { useGetEmployeeQuery } from '@/services/Query';

function FetchData() {
  const {data : empData, isSuccess} = useGetEmployeeQuery()

  return (
    <div>
<<<<<<< HEAD
      <h1>Employee Table</h1>
       {/* <DataTable />  */}
=======
      <DataGridTable data={isSuccess ? empData?.data : []} col={columns} />
>>>>>>> cbab882103664dd27363b5a169897c67dc5c035e
    </div>
  )
}

export default FetchData;
<<<<<<< HEAD

=======
 
>>>>>>> cbab882103664dd27363b5a169897c67dc5c035e
