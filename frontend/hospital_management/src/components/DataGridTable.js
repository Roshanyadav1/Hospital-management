"use client"
import { DataGrid} from '@mui/x-data-grid';

 function DataGridTable({data , col}) {
  return (
    <div>
      <DataGrid
       rows={data} 
        columns={col}
        getRowId={(row) => row?.employee_id}
        disableColumnFilter={true}
        disableColumnMenu={true}
        checkboxSelection={false}
        hideFooterSelectedRowCount={true}
        hideFooterRowCount={true}
        hideFooterPagination={true}
        hideFooter={true}
        maxRows={10}
        />
    </div>
  );
}


export default DataGridTable