
"use client"
import React from 'react'
import  DoctorProfile from '../../../../Pages/Profile'
import { useParams } from 'next/navigation'
function page() {
  const {doc_id} = useParams()
  return (
    <div>
      <DoctorProfile id={doc_id} />
    </div>
  )
}

export default page