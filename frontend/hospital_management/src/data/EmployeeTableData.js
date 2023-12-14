import { useState } from 'react'
import {
   Button,
   Dialog,
   DialogActions,
   DialogContent,
   DialogTitle,
   IconButton,
} from '@mui/material'
import { useChangeStatusMutation } from '@/services/Query'
import { Delete, Create, Visibility } from '@mui/icons-material'
import { useDeleteEmployeeMutation } from '@/services/Query'
import Switch from '@mui/material/Switch'


//using the react modal component from mui, insert the proper functionality in delete button such that when the delete button will be clicked the modal component will be opened and the name of the person from the selected row will be shown and in modal and in subheading 'Do you want to delete the data' message will be shown with two buttons at the right bottm corner of the modal component, the buttons will be yes & no

const GetStatusButton = (row) => {
   const [updateStatus] = useChangeStatusMutation()
   const [selectedRow, setSelectedRow] = useState(null)
   const [openModal, setOpenModal] = useState(false)
   
 
   const handleCloseModal = () => {
      setOpenModal(false)
   } 
 
      const ChangeStatus = async () => {
         try {
     
            // Assuming your API expects an employee ID for deletion
            let obj = {
               id :row?.params?.row?.employee_id ,
               pro :{
                  'employee_status' : !row?.params?.row?.employee_status 
               }
            }
            const result = await updateStatus(obj)
 
            // Log the result to the console
            console.log('Result of updateStatus mutation:', result)
                        handleCloseModal()
            // Perform any additional logic after successful deletion
         } catch (error) {
            // Handle error
            console.error('Error changing status:', error)
         }
         const result = await updateStatus(obj)

         // Log the result to the console
         console.log('Result of updateStatus mutation:', result)
         handleCloseModal()
         // Perform any additional logic after successful deletion
      } catch (error) {
         // Handle error
         console.error('Error changing status:', error)
      }
   }

   return (
      <div
         style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
         <Dialog open={openModal} onClose={handleCloseModal}>
            <DialogTitle
               style={{
                  border: '1px solid white',
                  borderRadius: '10px',
                  boxShadow: 'box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px',
                  fontWeight: 'bolder',
                  fontSize: '1rem',
               }}
            >
               Confirmation for Changing Status
            </DialogTitle>
            <DialogContent>
               <p>
                  Do you want to Change the Status for{' '}
                  <span className='Data'>{selectedRow?.employee_name}</span>
               </p>
            </DialogContent>
            <DialogActions>
               <Button onClick={handleCloseModal} color='primary' className='No'>
                  No
               </Button>
               <Button onClick={ChangeStatus} color='primary' className='Yes'>
                  Yes
               </Button>
            </DialogActions>
         </Dialog>

         <Switch
            checked={row?.params?.row?.employee_status}
            onClick={() => setOpenModal(true)}
            color='primary'
            size='small'
         />
      </div>
   )
}

const GetActionButton = (row) => {
   const [deleteEmployee] = useDeleteEmployeeMutation()
   const [selectedRow, setSelectedRow] = useState(null)
   const [openModal, setOpenModal] = useState(false)

   // console.log(row.params , "ok")
   const handleDelete = () => {
      setSelectedRow(row.params.row)
      setOpenModal(true)
   }
   // console.log('Delete :', selectedRow);

   const handleEdit = () => {
      // Handle edit logic here
      console.log('Edit:', row)
   }

   const handleView = () => {
      // Handle view logic here
      console.log('View:', row)
   }

   const handleCloseModal = () => {
      setOpenModal(false)
   }

   const handleConfirmDelete = () => {
      const DltEmployee = async () => {
         try {
            // Assuming your API expects an employee ID for deletion
            const result = await deleteEmployee(selectedRow.employee_id)
            alert('Employee Deleted Successfully')

            // Log the result to the console
            console.log('Result of deleteEmployee mutation:', result)

            // Perform any additional logic after successful deletion
         } catch (error) {
            // Handle error
            console.error('Error deleting employee:', error)
         }
      }

      // Perform delete logic here
      console.log('Deleting:', selectedRow)
      DltEmployee() // Call the delete function
      handleCloseModal()
   }

   return (
      <div
         style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
         <Dialog open={openModal} onClose={handleCloseModal}>
            <DialogTitle
               style={{
                  border: '1px solid white',
                  borderRadius: '10px',
                  boxShadow: 'box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px',
                  fontWeight: 'bolder',
                  fontSize: '1rem',
               }}
            >
               Delete Confirmation
            </DialogTitle>
            <DialogContent>
               <p>
                  Do you want to delete the data for{' '}
                  <span className='Data'>{selectedRow?.employee_name}</span>
               </p>
            </DialogContent>
            <DialogActions>
               <Button onClick={handleCloseModal} color='primary' className='No'>
                  No
               </Button>
               <Button onClick={handleConfirmDelete} color='primary' className='Yes'>
                  Yes
               </Button>
            </DialogActions>
         </Dialog>

         <IconButton onClick={handleDelete} color='error' size='small'>
            <Delete />
         </IconButton>
         {/* dont fill the color in the delete button just outlineit */}
         <IconButton onClick={handleEdit} color='primary' size='small'>
            <Create />
         </IconButton>
         <IconButton onClick={handleView} color='success' size='small'>
            <Visibility />
         </IconButton>
      </div>
   )
}

const handleSwitchChange = (id, Status) => {
   console.log('dfsdf', id, Status)
   alert('Yes you can do it')
}
export const columns = [
   {
      field: 'employee_name',
      headerName: 'Name',
      minWidth: 170,
      headerClassName: 'header',
      headerAlign: 'center',
      align: 'left',
      cellClassName: 'column-line',
      sortable: false,
      flex: 1,
   },
   {
      field: 'employee_email',
      headerName: 'Email',
      minWidth: 240,
      headerClassName: 'header',
      headerAlign: 'center',
      align: 'left',
      cellClassName: 'column-line',
      sortable: false,
      flex: 1,
   },
   {
      field: 'employee_number',
      headerName: 'Phone',
      minWidth: 170,
      headerClassName: 'header',
      headerAlign: 'center',
      align: 'left',
      cellClassName: 'column-line',
      sortable: false,
      flex: 1,
   },
   {
      field: 'employee_role',
      headerName: 'Role',
      minWidth: 80,
      maxWidth: 120,
      headerClassName: 'header',
      headerAlign: 'center',
      align: 'left',
      cellClassName: 'column-line',
      sortable: false,
      flex: 1,
   },
   // {
   //    field: 'employee_status',
   //    headerName: 'Status',
   //    minWidth: 120,
   //    headerClassName: 'header',
   //    headerAlign: 'center',
   //    align: 'center',
   //    cellClassName: 'column-line',
   //    sortable: false,
   //    flex: 1,
   //    renderCell: (params) => (
   //       <Switch
   //         checked={params.value}
   //         // Handle the change event to update the data
   //         onChange={(event) => {
   //           const newData = [...rows];
   //           newData[params.rowIndex].isActive = event.target.checked;
   //           // Update your state or data source with the new data
   //           // For example, you can use React useState hook
   //           // setRows(newData);
   //         }}
   //       />
   //     ),
   // },

   {
      field: 'Status',
      headerName: 'Status',
      headerClassName: 'header',
      cellClassName: 'column-line',
      headerAlign: 'center',
      flex: 1,
      sortable: false,
      renderCell: (params) => <GetStatusButton params={params} />,
   },
   {
      field: 'Actions',
      headerName: 'Actions',
      headerClassName: 'headerlast',
      cellClassName: 'column-linelast',
      headerAlign: 'center',
      flex: 1,
      sortable: false,
      renderCell: (params) => <GetActionButton params={params} />,
   },
]

// how can I find out the particular row's data from this table when i click on the delete button             
