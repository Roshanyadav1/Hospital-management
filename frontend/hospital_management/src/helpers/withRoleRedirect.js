// withRoleRedirect.js

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const withRoleRedirect = (WrappedComponent, allowedRoles) => {
  const WithRoleRedirect = (props) => {
    const router = useRouter();

    useEffect(() => {
      // Check if user role is in the allowedRoles array
      const userRole = localStorage.getItem('user_role');

      if (!userRole || !allowedRoles.includes(userRole)) {
        // Redirect to a default page if role is not found or not allowed
        router.push('/'); // Change this to your default login page
      }
    }, []);

    return <WrappedComponent {...props} />;
  };

  return WithRoleRedirect;
};

export default withRoleRedirect;
