"use client"
import Dashboard from "@/components/Dashboard";
// import DataGridTable from "@/components/DataGridTable";
// import { columns } from "@/helpers/columns";
// import { useGetEmployeeQuery } from '@/services/Query';
import { Container } from "@mui/system";

function FetchData() {
  // const {data : empData, isSuccess} = useGetEmployeeQuery()

  return (
    <div>
      <Container maxWidth="lg">
        {/* <DataGridTable data={isSuccess ? empData?.data : []} col={columns} /> */}
        <Dashboard />
      </Container>
    </div>
  )

}

export default FetchData;
 