"use client"
import { useRouter } from 'next/navigation'
import AddIcon from '@mui/icons-material/Add';
import './container.css'
import { Fab, Tooltip } from '@mui/material';
 
function Dashboard() {
  const router = useRouter()
 
  return (
    <div className="img_container" >
      table here 
      <Tooltip title="Create Empoloyee" arrow placement="right">
      <Fab color="red" aria-label="add"  sx={{ 
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 1000,
      }}>
        <AddIcon onClick={''} />
      </Fab>
    </Tooltip>
    </div>
  )
}

export default Dashboard;