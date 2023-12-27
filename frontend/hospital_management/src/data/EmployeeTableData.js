import { useState } from 'react'
import {
   Button,
   Dialog,
   DialogActions,
   DialogContent,
   DialogTitle,
   Divider,
   Grid,
   IconButton,
   Switch,
} from '@mui/material'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import DialogContentText from '@mui/material/DialogContentText'
import CloseIcon from '@mui/icons-material/Close'
import { styled } from '@mui/material/styles'
import FORM_VALIDATION from '@/components/FormValidation/employeeValidation'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { useAddEmployeeMutation } from '@/services/Query'
import { useGetEmployeeDetailsQuery } from './../services/Query'
import { useGetEmployeeQuery } from '@/services/Query'
import { useChangeEmpDataMutation } from '@/services/Query'
import { useChangeStatusMutation } from '@/services/Query'
import { Delete, Create, Visibility, DisabledByDefault } from '@mui/icons-material'
import { useDeleteEmployeeMutation } from '@/services/Query'
import AddEmployee from '@/components/AddEmployee'
//using the react modal component from mui, insert the proper functionality in delete button such that when the delete button will be clicked the modal component will be opened and the name of the person from the selected row will be shown and in modal and in subheading 'Do you want to delete the data' message will be shown with two buttons at the right bottm corner of the modal component, the buttons will be yes & no
const style = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 700,
   height: 400,
   bgcolor: 'background.paper',
   border: '2px solid #000',
}
const VisuallyHiddenInput = styled('input')({
   clip: 'rect(0 0 0 0)',
   clipPath: 'inset(50%)',
   height: 1,
   overflow: 'hidden',
   position: 'absolute',
   bottom: 0,
   left: 0,
   whiteSpace: 'nowrap',
   width: 1,
})
const StyledPaper = styled(Paper)(({ theme }) => ({
   maxWidth: '650px',
   boxShadow: theme.shadows[3],
   backgroundColor: 'primary',
   borderRadius: '20px',
   padding: '2rem',
}))
//for the heading
const StyledTypography = styled(Typography)(() => ({
   fontWeight: 'bold',
   paddingBottom: '1rem',
   color: colors.primary,
}))
//for the whole form
const StyledFormWrapper = styled('div')({
   minHeight: '100vh',
   display: 'grid',
   placeItems: 'center',
   // padding: '2rem',
   '@media (max-width: 450px)': {
      padding: '0rem',
   },
})
const Empcategories = ['Part Time', 'Full Time']
const Role = ['Doctor', 'Manager']
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
            id: row?.params?.row?.employee_id,
            pro: {
               employee_status: !row?.params?.row?.employee_status,
            },
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
         <Dialog open={openModal} >
            <DialogTitle
               style={{
                  boxShadow: 'box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px',
                   }}
            >
              <Typography variant="h5"> Confirmation for changing status </Typography>
            </DialogTitle>
            <IconButton
               aria-label='close'
               onClick={handleCloseModal}
               sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
               }}
            >
               <CloseIcon />
            </IconButton>
            <Divider />
            
            <DialogContent >
               <p>
                  Do you want to Change the Status for{' '}
                  <span className='Data'>{row?.params?.row?.employee_name}</span> ?
               </p>
            </DialogContent>
            <Divider />
            <DialogActions >
               <Button onClick={handleCloseModal} color='primary'  sx={{ marginBottom:1}} >
                  No
               </Button>
               <Button onClick={ChangeStatus} color='primary' variant='contained' sx={{marginRight:1, marginBottom:1}}>
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
/////////////////////////////////////////////////////////////////////////
const GetActionButton = (row) => {
   const [deleteEmployee] = useDeleteEmployeeMutation()
   const [updateEmployee] = useChangeEmpDataMutation()
   const [id, setId] = useState()
   const [skip, setskip] = useState(true)
   const {
      data: viewEmployee,
      isLoading,
      isSuccess,
   } = useGetEmployeeDetailsQuery(id, { skip: skip })

   const [selectedRow, setSelectedRow] = useState(null)
   const [openModal, setOpenModal] = useState(false)
   const [openEditModal, setOpenEditModal] = useState(false)
   const [openViewModal, setOpenViewModal] = useState(false)

   const Img = styled('img')({
      margin: 'auto',
      display: 'block',
      maxWidth: '80%',
      maxHeight: '80%',
    });

   const INITIAL_FORM_STATE = {
      employee_name: row?.params?.row?.employee_name,
      employee_email: row?.params?.row?.employee_email,
      employee_number: row?.params?.row?.employee_number,
      employee_password: row?.params?.row?.employee_password, // not available
      employee_type: row?.params?.row?.employee_type,
      employee_role: row?.params?.row?.employee_role,
      employee_status: row?.params?.row?.employee_status,
      // created_by: 'admin',
      // updated_by: 'admin',
   }

   const [addemployee] = useAddEmployeeMutation() //for add employee form
   const handleRegister = async (values, { resetForm }) => {
      try {
         // Assuming your API expects an employee ID for deletion
         let obj = {
            id: row?.params?.row?.employee_id,
            pro: {
               employee_name: values.employee_name,
               employee_email: values.employee_email,
               employee_number: values.employee_number,
               employee_password: values.employee_password, // not available
               employee_type: values.employee_type,
               employee_role: values.employee_role,
               employee_status: values.employee_status,
            },
         }
         const result = await updateEmployee(obj)
         resetForm()
         console.log('Result of updateStatus mutation:', result)
         handleCloseModal()
      } catch (error) {
         // Handle error
         console.error('Error changing status:', error)
      }
   }
   // const {data: viewEmployee, isLoading} = useGetEmployeeDetailsQuery(selectedRow.employee_id , {skip: true})
   const [pageState, setPageState] = useState({
      isLoding: false,
      data: [],
      total: 0,
      page: 1,
      pageSize: 5,
   })

   const { data: empData, isFetching: loadinData } = useGetEmployeeQuery(pageState, {
      refetchOnMountOrArgChange: true,
   })
   const [open, setOpen] = useState(false)
   // console.log(row.params , "ok")
   const handleDelete = () => {
      setSelectedRow(row.params.row)
      setOpenModal(true)
   }
   // console.log('Delete :', selectedRow);
   const handleEdit = () => {
      // Handle edit logic here
      setSelectedRow(row.params.row)
      setOpenEditModal(true)
      console.log('Edit:', row)
   }
   const handleView = () => {
      // Handle view logic here
      // setSelectedRow(row.params.row)
      setOpenViewModal(true)
      setskip(false)
      ViewEmployee(row.params.row)
      // console.log('View:', row.params.row )
   }
   const handleCloseModal = () => {
      setOpenModal(false)
   }
   const handleCloseEditModal = () => {
      setOpenEditModal(false)
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
   const handleCloseViewModal = () => {
      setOpenViewModal(false)
   }
   const ViewEmployee = async (values) => {
      console.log('value', values)
      let obj = {
         id: row?.params?.row?.employee_id,
         pro: {
            employee_name: values.employee_name,
            employee_email: values.employee_email,
            employee_number: values.employee_number,
            employee_password: values.employee_password, // not available
            employee_type: values.employee_type,
            employee_role: values.employee_role,
            employee_status: values.employee_status,
         },
      }
      setId(obj.id)
      console.log(obj.pro.employee_email)
      // const { GetEmployeeDetails }  = useGetEmployeeDetailsQuery(obj.id, setskip((prev) => !prev))
   }

   return (
      <div
         style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
         <Dialog open={openModal}>
            <DialogTitle
               style={{
                  
                  boxShadow: 'box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px',
                  
               }}
            >
              <Typography variant="h5">Delete Confirmation</Typography> 
            </DialogTitle>
            <IconButton
               aria-label='close'
               onClick={handleCloseModal}
               sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
               }}
            >
               <CloseIcon />
            </IconButton>
            <Divider />
            <DialogContent>
               <p>
                  Do you want to delete the data for{' '}
                  <span className='Data'>{row?.params?.row?.employee_name}</span> ?
               </p>
            </DialogContent>
            <Divider />
            <DialogActions>
               <Button onClick={handleCloseModal} color='primary'  sx={{ marginBottom:1}}>
                  No
               </Button>
               <Button onClick={handleConfirmDelete} color='primary' variant='contained' sx={{marginRight:1, marginBottom:1}}>
                  Yes
               </Button>
            </DialogActions>
         </Dialog>
         <Dialog open={openEditModal} onClose={handleCloseEditModal} padding={3}>
            <DialogTitle> <Typography variant='h5'>Edit Employee</Typography> </DialogTitle>
            <Divider />
            <IconButton
               aria-label='close'
               onClick={handleCloseEditModal}
               sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
               }}
            >
               <CloseIcon />
            </IconButton>
            <Grid p={2}>
               <AddEmployee
                  initialState={INITIAL_FORM_STATE}
                  validationSchema={FORM_VALIDATION}
                  handleRegister={handleRegister}
                  disableEmail={true}
                  disablePass={true}
                  closeButton={
                     <Button
                        variant='contained'
                        color='primary'
                        onClick={handleCloseEditModal}
                        size='large'
                        sx={{
                           mr: 2,
                        }}
                     >
                        cancel
                     </Button>
                  }
               />
            </Grid>
         </Dialog>
         {/* view///////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
         <Dialog open={openViewModal} onClose={handleCloseViewModal} padding={3}>
            <DialogTitle><Typography variant='h5'> View Employee</Typography> </DialogTitle>
            <Divider />
            <DialogContent>
               {
                  isLoading && ("Loading...")
               }
               {
                  isSuccess && (<>
                     {/* // i have to add view the employee data in formate way  */}
                     <DialogContent>
                        <Grid container justifyContent='space-between'>
                        

                           <Grid item  >
                              <Typography variant='h6' color='primary' fontWeight='bold'>
                                 Name   : 
                              </Typography>
                              <Typography variant='h6' color='primary' fontWeight='bold'>
                                 Email  :
                              </Typography>
                              <Typography variant='h6' color='primary' fontWeight='bold'>
                                 Phone  :
                              </Typography>
                              <Typography variant='h6' color='primary' fontWeight='bold'>
                                 Role {" "}  : 
                              </Typography>
                              <Typography variant='h6' color='primary' fontWeight='bold'>
                                 Status :
                              </Typography>


                           </Grid>
                           <Grid item >
                              <Typography variant='h6' color='primary' fontWeight='bold'>
                                  {viewEmployee?.data?.employee_name}
                              </Typography>
                              <Typography variant='h6' color='primary' fontWeight='bold'>
                                  {viewEmployee?.data?.employee_email}
                              </Typography>
                              <Typography variant='h6' color='primary' fontWeight='bold'>
                                  {viewEmployee?.data?.employee_number}
                              </Typography>
                              <Typography variant='h6' color='primary' fontWeight='bold'>
                                  {viewEmployee?.data?.employee_role}
                              </Typography>
                              <Typography variant='h6' color='primary' fontWeight='bold'>
                                  {viewEmployee?.data?.employee_status ? "Active" : "Inactive"}
                              </Typography>

                           </Grid>
                        </Grid>
                     </DialogContent>

                  </>)
               }

            </DialogContent>
            <IconButton
               aria-label='close'
               onClick={handleCloseViewModal}
               sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
               }}
            >
               <CloseIcon />
            </IconButton>
         </Dialog>
         <IconButton onClick={handleDelete} color='primary' size='small'>
            <Delete />
         </IconButton>
         {/* dont fill the color in the delete button just outlineit */}
         <IconButton onClick={handleEdit} color='primary' size='small'>
            <Create />
         </IconButton>
         <IconButton onClick={handleView} color='primary' size='small'>
            <Visibility />
         </IconButton>
      </div>
   )
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
   {
      field: 'Status',
      headerName: 'Status',
      headerClassName: 'header',
      cellClassName: 'column-line',
      align: 'center',
      headerAlign: 'center',
      flex: 1,
      sortable: false,
      renderCell: (params) => <GetStatusButton params={params} />,
   },
   // { field: 'employee_status', headerName: 'Status', width: 120, headerClassName:'header',headerAlign: 'center', align: 'left', cellClassName: 'column-line', sortable: false },
   // { field: 'employee_type', headerName: 'Type', width: 120, headerClassName:'header',headerAlign: 'center', align: 'left', cellClassName: 'column-line', sortable: false },
   {
      field: 'Actions',
      headerName: 'Actions',
      headerClassName: 'headerlast',
      align: 'center',
      cellClassName: 'column-linelast',
      headerAlign: 'center',
      flex: 1,
      sortable: false,
      renderCell: (params) => <GetActionButton params={params} />,
   },
]
// how can I find out the particular row's data from this table when i click on the delete button
