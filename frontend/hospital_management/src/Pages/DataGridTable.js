"use client"
import { DataGrid } from '@mui/x-data-grid';

export default function DataGridTable(props) {
    const {data, columns, map_by} = props
    
  return (
    <>
        <DataGrid
          rows={data?.length > 0 ? data : []}
          columns={columns}
          loading={data?.length > 0 ? false : true}
          getRowId={map_by}
          autoHeight={true}
          checkboxSelection={false}
          columnHeaderHeight={40}
          disableColumnMenu 
          />
    </>
   
  );
}
