import SteperNav from '@/components/SteperNav'
import FixedContainer from '@/components/container'
 


// for the patient page , the patient page will be the main page for the patient
function page({ pageProps }) {

  return (
    <div>
      <SteperNav />
      <FixedContainer />
    </div>
  )

}
export default page

