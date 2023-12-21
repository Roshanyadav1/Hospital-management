
"use client"
import  DoctorProfile from '../../../Pages/Profile'
import { useRouter } from 'next/navigation'
// import { useParams } from 'next/navigation'
function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router=useRouter()
  const {doc_id} = router.query()
  console.log(doc_id)
  return (
    <div>
      <DoctorProfile id={doc_id} />
    </div>
  )
}

export default page