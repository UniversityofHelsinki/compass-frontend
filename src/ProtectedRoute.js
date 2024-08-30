import React, { useEffect } from 'react';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ component: Component }) => {
    const { user, loading } = useAuth();

    useEffect(() => {
        if (!loading && !user) {
            window.location.replace('/Shibboleth.sso/Login');
        }
    }, [loading, user]);

    if (loading) {
        return <div>Loading...</div>; // or a loading spinner
    }

    return user ? <Component /> : null;
};

export default ProtectedRoute;
