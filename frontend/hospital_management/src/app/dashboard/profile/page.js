

"use client"
import  DoctorProfile from '../../../Pages/Profile'
import { useParams } from 'next/navigation'
function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {doc_id} = useParams()
  return (
    <div>
      <DoctorProfile id={doc_id} />
    </div>
  )
}

export default page