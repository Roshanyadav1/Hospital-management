'use client'
import FixedContainer from '@/Pages/container'
import { Button, Grid } from '@mui/material'

import SwipeableTextMobileStepper from '@/Pages/Steper'
import DoctorCard from '@/Pages/DoctorsCard'
import DiseaseCards from '@/Pages/DiseaseCard'
import 'react-toastify/dist/ReactToastify.css'
import Cards from '@/Pages/Card'
import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react'

function page() {
   const { user, loginWithRedirect, isAuthenticated, getAccessTokenSilently } =
      useAuth0()

   useEffect(() => {
      const getUserMetadata = async () => {
         try {
            const accessToken = await getAccessTokenSilently({
               authorizationParams: {
                  audience: `https://dev-wk502078emf2n02u.us.auth0.com/api/v2/`,
                  scope: 'read:current_user update:current_user_metadata',
               },
            })
            isAuthenticated && localStorage.setItem('token', accessToken)
         } catch (error) {
            console.log(error)
         }
      }

      getUserMetadata()
   }, [user])

   return (
      <div>
         <SwipeableTextMobileStepper />
         <Grid container item padding={3}>
            <FixedContainer />
         </Grid>
         <Cards />
         <DiseaseCards />
         <DoctorCard />
      </div>
   )
}
export default page
