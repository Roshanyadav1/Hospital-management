"use client"
import { toast } from "react-toastify"
import Dashboard from '@/Pages/Dashboard'
function Career() {
  return (
    <div onClick={()=>{
      toast.success("Employee page")
    }}>
     <Dashboard/>
    </div>
  )
}

export default Career
