"use client"
// import { Transcribe, Translate } from '@mui/icons-material';
import { DataGrid } from '@mui/x-data-grid';

export default function Datagrid(props) {
const {data,columns} = props

  return (
    <div  >
      <DataGrid
        rows={data?.length > 0 ? data : []}
        columns={columns}
        // initialState={{
        //   pagination: {
        //     paginationModel: { page: 0, pageSize: 5 },
        //   },
        // }}
        getRowId={(row) => row?.employee_id}
        // pageSizeOptions={[5, 10]}
        checkboxSelection={false}
      />
    </div>
  );
}