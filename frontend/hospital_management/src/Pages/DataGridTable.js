"use client"
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import { useEffect } from 'react';

export default function DataGridTable(props) {
    const {data, columns, map_by, pageInfo, paginationModel, setPaginationModel} = props
    console.log('%c [ data ]-8', 'font-size:13px; background:pink; color:#bf2c9f;', data)
    console.log('%c [ pageCount ]-8', 'font-size:13px; background:pink; color:#bf2c9f;', pageInfo)


     console.log('%c [ paginationModel ]-69', 'font-size:13px; background:pink; color:#bf2c9f;', paginationModel)
 

    const [rowCountState, setRowCountState] = useState(
      pageInfo?.count || 0,
      );
      console.log('%c [ rowCountState ]-81', 'font-size:13px; background:pink; color:#bf2c9f;', rowCountState)
    useEffect(() => {
      setRowCountState((prevRowCountState) =>
      pageInfo?.count !== undefined
          ? pageInfo?.count
          : prevRowCountState,
      );
    }, [pageInfo?.count, setRowCountState]);
  return (
    <>
        <DataGrid
          rows={data?.length > 0 ? data : []}
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
          onPaginationModelChange={setPaginationModel}
          
          pagination
          />
    </>
   
  );
}
