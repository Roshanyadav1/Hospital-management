"use client"
import { DataGrid } from '@mui/x-data-grid';
import { useEffect } from 'react';

export default function DataGridTable(props) {
    const {data, columns, map_by, pageInfo, pageState, setPageState, paginationModel, setPaginationModel} = props
    console.log('%c [ data ]-8', 'font-size:13px; background:pink; color:#bf2c9f;', data)
    console.log('%c [ pageInfo ]-8', 'font-size:13px; background:pink; color:#bf2c9f;', pageInfo)



     useEffect(() => {
if(paginationModel){
  setPageState({
    isLoading: pageState?.isLoading,
    data: pageState?.data,
    total: pageState?.total,
    page: paginationModel?.page,
    pageSize: paginationModel?.pageSize
  })
}
     }, [pageState?.data, pageState?.isLoading, pageState?.total, paginationModel, setPageState])
  return (
    <>
        <DataGrid
         rows={data}
         columns={columns}
         loading={data?.length > 0 ? false : true}
         getRowId={map_by}
         pageSizeOptions={[5, 10, 25]}

         localeText={{
           MuiTablePagination: {
             labelDisplayedRows: () =>
               `Showing page ${Math.ceil(pageInfo?.current_page_number)} of ${Math.ceil(
                 pageInfo?.total_pages
               )} pages`,
           },
         }}
         rowCount={pageInfo?.count + pageInfo?.page_size}
         paginationModel={paginationModel}

        //  rowCount={data?.length}
        //  paginationMode="server"
         
         pagination
          onPaginationModelChange={setPaginationModel}
          />
    </>
   
  );
}
