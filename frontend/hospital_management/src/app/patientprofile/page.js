


// import PatientProfile from './../../Pages/PatientProfile'
import dynamic from 'next/dynamic'

const PatientProfile = dynamic(() => import('@/pages/PatientProfile'), {
   ssr:false
})
function page() {
  return (
    <div>
      <PatientProfile/>
    </div>
  )
}

export default page
