"use client"
import { toast } from "react-toastify"

function Career() {
  return (
    <div onClick={()=>{
      toast.success("Career page")
    }}>
      <h1>Career page</h1>
    </div>
  )
}

export default Career
