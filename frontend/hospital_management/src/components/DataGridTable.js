"use client"
import { DataGrid } from '@mui/x-data-grid';



const customstyles=`
.MuiDataGrid-root .MuiDataGrid-row:nth-child(even) {
  background-color: #E6E8F0;
}
.MuiDataGrid-root .MuiDataGrid-row:nth-child(odd) {
  background-color: #f0f2fa;
}
  .header{
    background-color: #006494 !important;
    color: white;
    border-right: 3px solid #89949E !important; 
    border-bottom: 3px solid #89949E !important;
    font-size: 0.8rem;
    font-family: Verdana
  }
  .headerlast{
    background-color: #006494 !important;
    color: white;
    border-radius:'10px !important';
    border-bottom: 3px solid #89949E !important;
    font-size: 0.8rem;
    font-family: Verdana;
  }
  .column-line {
    border-right: 1px solid #89949E !important; // Adjust the color as needed
    padding-right: 8px; // Add padding to separate the text from the line
  }
  .MuiDataGrid-footerContainer.MuiDataGrid-withBorderColor {
    display: none;
  }
  .MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation24.MuiDialog-paper.MuiDialog-paperScrollPaper.MuiDialog-paperWidthSm.css-1t1j96h-MuiPaper-root-MuiDialog-paper {
    height: auto;
    border: 1px solid white;
    border-radius: 12px;
    box-shadow: box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  .css-1yosu3z-MuiTypography-root-MuiDialogTitle-root{
    font-size : 1.5rem !important
  }
  .Data{
    font-weight:bold
  }
  .No{
    background-color: rgba(19, 41, 61, 0.04) !important;
  }
  .css-1kyp2zt-MuiButtonBase-root-MuiButton-root:hover {
    color:white
  }
  .No:hover{
   color: black !important
  }
  .css-jv5jpm-MuiDataGrid-root .MuiDataGrid-columnSeparator{
    display: none !important;
  }
  .css-tdqsw7-MuiDataGrid-root .MuiDataGrid-iconSeparator{
    display: none !important;
  }
`

export default function DataGridTable(props) {
    const {data,columns} = props
    
  return (
    <>
        <style>{customstyles}</style>
        <DataGrid
          rows={data?.length > 0 ? data : []}
          columns={columns}
          loading={data?.length > 0 ? false : true}
          getRowId={(row) => row?.employee_id}
          getRowHeight={() => 'auto'}

          //only table scroll not the scrreen
          autoHeight={true}

          checkboxSelection={false}
          rowHeight={35}
          sx={{
            height: 392, 
            display:'flex',
            width:'100%',
          }}
          columnHeaderHeight={40}
          disableColumnMenu 
          />
    </>
   
  );
}


// insert the delete insert and view buttons in every row of the data in Actions column 
// fix the size of the table to 8 rows with the pagination in it and when the other page will be opened then the size of the table should renains the same and the left over data should be shown on the rows and the other rows should be displayed wheteher it is fillrf or not
// below the employee table heading provide one more heading that is 'Employees data is viewed here. You can view, delete & edit ' in h5 with proper allignment 