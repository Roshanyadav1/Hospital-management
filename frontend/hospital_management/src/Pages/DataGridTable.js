'use client'
import { DataGrid } from '@mui/x-data-grid'

export default function DataGridTable(props) {
   const {
      data,
      columns,
      map_by,
      pageInfo,
      paginationModel,
      setPaginationModel,
      loadinData,
   } = props

   return (
      <>
         <DataGrid
            rows={data}
            columns={columns}
            loading={loadinData}
            getRowId={map_by}
            pageSizeOptions={[5, 10, 25]}
            localeText={{
               MuiTablePagination: {
                  labelDisplayedRows: () =>
                     `Showing page ${Math.ceil(
                        pageInfo?.current_page_number
                     )} of ${Math.ceil(pageInfo?.total_pages)} pages`,
               },
            }}
            rowCount={pageInfo?.count + pageInfo?.page_size}
            paginationModel={paginationModel}
            paginationMode='server'
            onPaginationModelChange={setPaginationModel}
         />
      </>
   )
}
