"use client"
import { toast } from "react-toastify"
import Dashboard from '@/components/Dashboard'
function Career() {
  return (
    <div onClick={()=>{
      toast.success("Career page")
    }}>
     <Dashboard/>
    </div>
  )
}

export default Career
