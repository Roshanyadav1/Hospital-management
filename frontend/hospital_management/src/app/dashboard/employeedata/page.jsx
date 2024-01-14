'use client'
// import Dashboard from './../../../Pages/AddEmployeePage'
import { Container } from '@mui/material'
import dynamic from 'next/dynamic'

const Dashboard = dynamic(() => import('@/pages/AddEmployeePage'), {
   ssr:false
})
function Career() {
   return (
      <Container>
         <Dashboard/>
      </Container>
   )
}

export default Career
