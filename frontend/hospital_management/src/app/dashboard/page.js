import DataTable from "@/components/DataTable";

// when admin login then the dashboard will be shown
function FetchData() {
  return (
    <div style={{
      margin: '5rem',
    }}>
      
      <h1>Employee Table</h1>
      <DataTable />
    </div>
  )

}

export default FetchData;
