import React, { useEffect } from 'react';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();
  console.log('user:', user);

    useEffect(() => {
        const loginPath = '/Shibboleth.sso/Login';
        if (!loading && !user && window.location.pathname !== loginPath) {
            window.location.replace(loginPath);
        }
    }, [loading, user]);

    if (loading) {
        return <div>Loading...</div>; // or a loading spinner
    }

    if (user) {
      return children;
    }

    return null;
};

export default ProtectedRoute;
