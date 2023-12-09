'use client'
import { useState } from 'react'
import { useLayoutEffect } from 'react'
import { useRouter } from 'next/navigation'

const withRoleRedirect = (WrappedComponent, allowedRoles) => {
   const WithRoleRedirect = (props) => {
      const [userRole, setUserRole] = useState('')
      const router = useRouter()

      useLayoutEffect(() => {
         // Check if user role is in the allowedRoles array
         const userRole = localStorage.getItem('user_role')

         if (!userRole || !allowedRoles.includes(userRole) || false) {
            setUserRole(userRole)
            router.push('/') // Change this to your default login page
         }
      }, [router])

      if (userRole && allowedRoles.includes(userRole)) {
         return <WrappedComponent {...props} />
      } else {
         return 'Checking user authorization...'
      }
   }

   return WithRoleRedirect
}

export default withRoleRedirect
