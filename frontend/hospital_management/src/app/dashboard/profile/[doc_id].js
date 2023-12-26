
import DoctorProfile from '../../../Pages/Profile'
import { useRouter } from 'next/router'

function Page() {
  const router = useRouter()
  const { doc_id } = router.query
  


 

  return (
    <div>
    
        <DoctorProfile id={doc_id} />
    
    </div>
  )
}

export default Page
