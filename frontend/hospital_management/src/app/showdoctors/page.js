"use client"

// import React from 'react'
// import Doctor from '@/components/Doctor'
import DoctorCard from '@/Pages/DoctorsCard'
import SteperNav from'@/components/SteperNav'
import Footer from '@/components/Footer'
function DoctorPage() {
  return (
    <div>
      {/* <Doctor/> */}
      <SteperNav/>
      <DoctorCard/>
       <Footer/>
    </div>
  )
}

export default DoctorPage